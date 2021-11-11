import 'reflect-metadata';
import { container } from 'tsyringe';
import { Configuration } from './Configuration';
import Program from './Program';
import { ExitService, LoggerService } from './Services';
import { ExportService } from './Services/ExportService';
import { FileService } from './Services/FileService';
import { TwitchAPIService } from './Services/TwitchAPIService';

(async() =>
{
  /**
   * DI
   */
  container
    // Services
    .register('ILoggerService', { useClass: LoggerService })
    .register('IExitService', { useClass: ExitService })
    .register('ITwitchAPIService', { useClass: TwitchAPIService })
    .register('IExportService', { useClass: ExportService })
    .register('IFileService', { useClass: FileService })
    // Configuration
    .register('IConfiguration', { useClass: Configuration });

  /**
   * Main Program
   */
  const program: Program = container.resolve(Program);
  await program.Run();
})();
