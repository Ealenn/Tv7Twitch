<template>
  <div class="calendar">
    <FullCalendar :options="this.calendarOptions" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar, { CalendarOptions, EventContentArg } from '@fullcalendar/vue3';
import allLocales from '@fullcalendar/core/locales-all';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { useStore } from '@/store';
import { CalendarEvent } from '@/libs/CalendarEvent';
import { Channel } from 'tv7-twitch-shared';
import { escape } from 'html-escaper';

@Options({
  components: {
    FullCalendar,
  }
})
export default class Calendar extends Vue {
  private calendarOptions: CalendarOptions = {
    plugins: [ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ],
    initialView: 'dayGridMonth',
    locales: allLocales,
    locale: 'fr',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    nowIndicator: true,
    navLinks: true,
    events: this.eventsState,
    eventContent: this.eventContent
  };

  public eventContent({ timeText, event }: EventContentArg): any {
    timeText = timeText.replace(' h', ':00');

    const image = `<img src="${event.extendedProps.channel.profile_image_url}" style="width: 20px;height: 20px;border-radius: 50%;" />`;
    const title = `${timeText} - ${event.extendedProps.channel.display_name} ${
      event.extendedProps.stream.category?.name ? ' (' + event.extendedProps.stream.category.name + ')' : ''
    }`;
    const content = escape(event.extendedProps.stream.title);

    return {
      html: `
        <span style="overflow: hidden;display:block;">
          <div>
            ${image} <b>${title}</b> ${content}
          </div>
        </span>`
    };
  }

  get eventsState(): CalendarEvent[] {
    const store = useStore();
    return store.state.events;
  }

  get channelsState(): Channel[] {
    const store = useStore();
    return store.state.channels;
  }

  get isLoadingState(): boolean {
    const store = useStore();
    return store.state.loading;
  }
}
</script>

<style lang="less">
.fc-toolbar-title {
  text-transform: capitalize;
}
</style>
