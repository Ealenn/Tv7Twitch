import { IConfiguration } from '../Configuration';
import { ILoggerService } from './Abstractions';
import { injectable, inject } from 'tsyringe';

/* istanbul ignore file */
@injectable()
export class LoggerService implements ILoggerService
{
  private _configuration: IConfiguration;

  constructor(
    @inject('IConfiguration') configuration: IConfiguration
  )
  {
    this._configuration = configuration;
  }

  Information(...write: any[]): void
  {
    write.forEach((text) =>
    {
      console.log(text);
    });
  }

  Debug(...write: any[]): void
  {
    if (this._configuration.Debug == true)
    {
      write.forEach((text) =>
      {
        console.log('[DEBUG]', text);
      });
    }
  }

  Error(...write: any[]): void
  {
    write.forEach((text) =>
    {
      console.log('[ERROR]', text);
    });
  }
}
