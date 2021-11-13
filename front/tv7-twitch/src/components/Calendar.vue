<template>
  <div class="calendar">
    <FullCalendar :options="this.calendarOptions" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import allLocales from '@fullcalendar/core/locales-all';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { useStore } from '@/store';
import { CalendarEvent } from '@/libs/CalendarEvent';

@Options({
  components: {
    FullCalendar,
  }
})
export default class Calendar extends Vue {
  private calendarOptions = {
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
    events: this.eventsState
  };

  get eventsState(): CalendarEvent[] {
    const store = useStore();
    return store.state.events;
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
