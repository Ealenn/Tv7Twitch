import 'reflect-metadata';
import { container } from 'tsyringe';
import { Configuration } from './Configuration';
import Program from './Program';
import { ExitService, LoggerService } from './Services';

(async() =>
{
  /**
   * DI
   */
  container
    // Services
    .register('ILoggerService', { useClass: LoggerService })
    .register('IExitService', { useClass: ExitService })
    // Configuration
    .register('IConfiguration', { useClass: Configuration });

  /**
   * Main Program
   */
  const program: Program = container.resolve(Program);
  await program.Run();
})();
