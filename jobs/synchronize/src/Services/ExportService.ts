import { ExportChannel } from 'tv7-twitch-shared';
import { IExportService } from './Abstractions/IExportService';
import * as fs from 'fs';
import { inject, injectable } from 'tsyringe';
import { ILoggerService } from './Abstractions';
import { ITwitchAPIService } from './Abstractions/ITwitchAPIService';

@injectable()
export class ExportService implements IExportService
{
  private _loggerService: ILoggerService;
  private _twitchAPIService: ITwitchAPIService;

  constructor(
    @inject('ILoggerService') loggerService: ILoggerService,
    @inject('ITwitchAPIService') twitchAPIService: ITwitchAPIService
  )
  {
    this._loggerService = loggerService;
    this._twitchAPIService = twitchAPIService;
  }

  async getChannelList(filePath: string): Promise<string[]>
  {
    return fs
      .readFileSync(filePath, 'utf8')
      .split(/\r?\n/)
      .map((value: string) => value.trim().replace(/\s/g, ''))
      .filter((value: string) => value !== null && value.length > 0);
  }

  async exportChannel(name: string): Promise<ExportChannel | null>
  {
    this._loggerService.Debug(`Download ${name} channel...`);
    const channel = await this._twitchAPIService.getUsers(undefined, name);
    if (!channel || channel.data === null || channel.data === null || channel.data === undefined || channel.data.length === 0)
    {
      this._loggerService.Debug(`${name} channel not found.`);
      return null;
    }

    const broadcasterId = channel.data[0].id;
    const schedulers = await this._twitchAPIService.getChannelStreamSchedule(broadcasterId);

    if (!schedulers || !schedulers.data || !schedulers.data.segments)
    {
      this._loggerService.Debug(`${name} channel schedulers not found.`);
      return null;
    }

    const exportChannel: ExportChannel = {
      channel: channel.data[0],
      schedulers: schedulers.data.segments
    };
    return exportChannel;
  }
}
