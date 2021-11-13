import { Channel, SegmentsEntity } from '../Twitch';

export interface ExportChannel {
  channel: Channel,
  schedulers: SegmentsEntity[]
}
