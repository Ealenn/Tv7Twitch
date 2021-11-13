import { CalendarEvent } from '@/libs/CalendarEvent';
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import axios from 'axios';
import { ExportChannel } from 'tv7-twitch-shared';

const Axios = axios.create({
  timeout: 2000,
  baseURL: process.env.BASE_URL ?? 'http://localhost:8080'
});

export interface State {
  loading: boolean;
  events: CalendarEvent[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    loading: true,
    events: []
  },
  mutations: {
    addEvent: (state, event): void => {
      state.events.push(event);
    },
    resetEvents: (state): void => {
      state.events = [];
    },
    setLoading: (state, loading: boolean) => {
      state.loading = loading;
    }
  },
  actions: {
    refreshEvents: async (context): Promise<void> => {
      context.commit('setLoading', true);
      context.commit('resetEvents');
      const manifestResponse = await Axios.get('/data/manifest.json');
      const manifest = manifestResponse.data;

      for (const file of manifest.files) {
        const fileResponse = await Axios.get(`/data/${file}`);
        const channel: ExportChannel = fileResponse.data;

        for (const stream of channel.schedulers) {
          const event: CalendarEvent = {
            id: stream.id,
            groupId: channel.channel.id,
            start: new Date(stream.start_time),
            end: stream.end_time && stream.end_time.length > 0 ? new Date(stream.end_time) : undefined,
            title: `${channel.channel.display_name}: ${stream.title}`
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
