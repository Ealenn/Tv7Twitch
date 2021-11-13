/**
 * @see https://fullcalendar.io/docs/event-object
 */
export interface CalendarEvent {
  /**
   * A unique identifier of an event.
   */
  id?: string | undefined;

  /**
   * Events that share a groupId will be dragged and resized together automatically.
   */
  groupId?: string;

  /**
   * Date object that obeys the current timeZone. When an event begins.
   */
  start: Date;

  /**
   * Date object that obeys the current timeZone. When an event ends. It could be null if an end wasn’t specified.
   * Note: This value is exclusive. For example, an event with the end of 2018-09-03 will appear to span through 2018-09-02 but end before the start of 2018-09-03.
   * See how events are are parsed from a plain object for further details.
   * @see https://fullcalendar.io/docs/event-parsing
   */
  end?: Date | undefined;

  /**
   * The text that will appear on an event.
   */
  title: string;

  /**
   * The eventBackgroundColor override for this specific event.
   * @see https://fullcalendar.io/docs/eventBackgroundColor
   */
  backgroundColor?: string | undefined;
}
