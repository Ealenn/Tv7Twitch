import { ExportChannel } from '../../Models/Export/Channel';

export interface IExportService {
  getChannelList(filePath: string): Promise<string[]>;
  exportChannel(name: string): Promise<ExportChannel | null>;
}
