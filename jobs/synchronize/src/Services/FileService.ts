import { IFileService } from './Abstractions/IFileService';
import * as fs from 'fs';
import { inject, injectable } from 'tsyringe';
import { ILoggerService } from './Abstractions';

@injectable()
export class FileService implements IFileService
{
  private _loggerService: ILoggerService;

  constructor(
    @inject('ILoggerService') loggerService: ILoggerService)
  {
    this._loggerService = loggerService;
  }

  async save(obj: any, path: string): Promise<void>
  {
    this._loggerService.Debug(`Save file ${path}`);
    fs.writeFileSync(path, JSON.stringify(obj, null, 2), {
      encoding: 'utf8'
    });
  }
}
