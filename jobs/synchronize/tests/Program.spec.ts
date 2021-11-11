import 'reflect-metadata';
import 'jasmine';
import { Mock, It } from 'moq.ts';
import { IConfiguration } from '../src/Configuration';
import Program from '../src/Program';
import { ILoggerService } from '../src/Services/Abstractions';
import { IExportService } from '../src/Services/Abstractions/IExportService';
import { IFileService } from '../src/Services/Abstractions/IFileService';

describe('Program', function()
{
  let configurationMock: Mock<IConfiguration>;
  let loggerServiceMock: Mock<ILoggerService>;
  let exportServiceMock: Mock<IExportService>;
  let fileServiceMock: Mock<IFileService>;

  beforeEach(() =>
  {
    configurationMock = new Mock<IConfiguration>();
    loggerServiceMock = new Mock<ILoggerService>();
    exportServiceMock = new Mock<IExportService>();
    fileServiceMock = new Mock<IFileService>();
  });

  it('Run', async function()
  {
    // A
    loggerServiceMock.setup(x => x.Information(It.IsAny<any>())).returns();
    configurationMock.setup(x => x.Url).returns('TesT');
    configurationMock.setup(x => x.Debug).returns(false);

    // A
    const program = new Program(
      configurationMock.object(),
      loggerServiceMock.object(),
      exportServiceMock.object(),
      fileServiceMock.object()
    );

    // A
    expect(program).toBeDefined();
  });
});
