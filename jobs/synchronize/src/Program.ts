import { injectable, inject } from 'tsyringe';
import { IConfiguration } from './Configuration';
import { IExitService, ILoggerService } from './Services/Abstractions';

@injectable()
export default class Program
{
  private _exitService: IExitService;
  private _configuration: IConfiguration;
  private _loggerService: ILoggerService;

  constructor(
    @inject('IExitService') exitService: IExitService,
    @inject('IConfiguration') configuration: IConfiguration,
    @inject('ILoggerService') loggerService: ILoggerService)
  {
    this._exitService = exitService;
    this._configuration = configuration;
    this._loggerService = loggerService;
  }

  public async Run() : Promise<void>
  {
    await this.Landing();
  }

  protected async Landing(): Promise<Program>
  {
    this._loggerService.Information(this._configuration.Url);
    this._loggerService.Information(`Debug: ${this._configuration.Debug}`);
    return this;
  }
}
