import { ExportChannel } from 'tv7-twitch-shared';

export interface IExportService {
  getChannelList(filePath: string): Promise<string[]>;
  exportChannel(name: string): Promise<ExportChannel | null>;
}
