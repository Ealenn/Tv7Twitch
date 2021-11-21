import { CalendarEvent } from '@/libs/CalendarEvent';
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import axios from 'axios';
import { Channel, ExportChannel } from 'tv7-twitch-shared';

/* eslint-disable @typescript-eslint/no-var-requires */
const VueConfig = require('@/../vue.config.js');
const Axios = axios.create({
  timeout: 2000,
  baseURL: VueConfig.publicPath
});

export interface State {
  loading: boolean;
  events: CalendarEvent[];
  channels: Channel[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    loading: true,
    events: [],
    channels: []
  },
  mutations: {
    addEvent: (state, event): void => {
      state.events.push(event);
    },
    addChannel: (state, channel): void => {
      state.channels.push(channel);
    },
    purge: (state): void => {
      state.events = [];
      state.channels = [];
    },
    setLoading: (state, loading: boolean) => {
      state.loading = loading;
    }
  },
  actions: {
    refreshEvents: async (context): Promise<void> => {
      context.commit('setLoading', true);
      context.commit('purge');
      const manifestResponse = await Axios.get('/data/manifest.json');
      const manifest = manifestResponse.data;

      for (const file of manifest.files) {
        const fileResponse = await Axios.get(`/data/${file}`);
        const channel: ExportChannel = fileResponse.data;
        context.commit('addChannel', channel.channel);

        for (const stream of channel.schedulers) {
          const event: CalendarEvent = {
            id: stream.id,
            groupId: channel.channel.id,
            start: new Date(stream.start_time),
            end: stream.end_time && stream.end_time.length > 0 ? new Date(stream.end_time) : undefined,
            title: `${channel.channel.display_name}${stream.category?.name ? ' (' + stream.category.name + ')' : ''}: ${stream.title}`,
            classNames: [channel.channel.login],
            extendedProps: {
              channel: channel.channel,
              stream
            }
          }
          context.commit('addEvent', event);
        }
      }
      context.commit('setLoading', false);
    }
  },
  modules: {
  }
});

export function useStore(): Store<State> {
  return baseUseStore(key)
}
