import { injectable, inject } from 'tsyringe';
import { IConfiguration } from './Configuration';
import { ILoggerService } from './Services/Abstractions';
import { IExportService } from './Services/Abstractions/IExportService';
import { IFileService } from './Services/Abstractions/IFileService';

@injectable()
export default class Program
{
  private _configuration: IConfiguration;
  private _loggerService: ILoggerService;
  private _exportService: IExportService;
  private _fileService: IFileService;

  constructor(
    @inject('IConfiguration') configuration: IConfiguration,
    @inject('ILoggerService') loggerService: ILoggerService,
    @inject('IExportService') exportService: IExportService,
    @inject('IFileService') fileService: IFileService)
  {
    this._configuration = configuration;
    this._loggerService = loggerService;
    this._exportService = exportService;
    this._fileService = fileService;
  }

  public async Run() : Promise<void>
  {
    await this.Landing();
    const manifest = {
      files: new Array<string>()
    };
    const channels = await this._exportService.getChannelList('../../channels.txt');
    for (const channel of channels)
    {
      const result = await this._exportService.exportChannel(channel);
      if (result !== null)
      {
        const fileName = `${result.channel.id}.json`;
        await this._fileService.save(result, `./data/${fileName}`);
        manifest.files.push(fileName);
      }
    }
    await this._fileService.save(manifest, './data/manifest.json');
  }

  protected async Landing(): Promise<Program>
  {
    this._loggerService.Information(this._configuration.Url);
    this._loggerService.Information(`Debug: ${this._configuration.Debug}`);
    return this;
  }
}
