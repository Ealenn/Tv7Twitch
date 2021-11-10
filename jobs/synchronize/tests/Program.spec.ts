import 'reflect-metadata';
import 'jasmine';
import { Mock, It, Times } from 'moq.ts';
import { IConfiguration } from '../src/Configuration';
import Program from '../src/Program';
import { ILoggerService, IExitService } from '../src/Services/Abstractions';

class TestProgram extends Program
{
  public LandingStatus = false;

  protected override async Landing(): Promise<Program>
  {
    this.LandingStatus = true;
    return this;
  }
}

describe('Program', function()
{
  let ExitServiceMock : Mock<IExitService>;
  let ConfigurationMock : Mock<IConfiguration>;
  let LoggerServiceMock : Mock<ILoggerService>;

  beforeEach(() =>
  {
    ExitServiceMock = new Mock<IExitService>();
    ConfigurationMock = new Mock<IConfiguration>();
    LoggerServiceMock = new Mock<ILoggerService>();
  });

  it('Run', async function()
  {
    // A
    // A
    const program = new TestProgram(
      ExitServiceMock.object(),
      ConfigurationMock.object(),
      LoggerServiceMock.object()
    );
    await program.Run();

    // A
    expect(program.LandingStatus).toBeTruthy();
  });

  it('Landing', async function()
  {
    // A
    LoggerServiceMock.setup(x => x.Information(It.IsAny<any>())).returns();
    ConfigurationMock.setup(x => x.Url).returns('TesT');
    ConfigurationMock.setup(x => x.Debug).returns(false);

    // A
    const program = new Program(
      ExitServiceMock.object(),
      ConfigurationMock.object(),
      LoggerServiceMock.object()
    );
    await program['Landing']();

    // A
    LoggerServiceMock.verify(x => x.Information('TesT'), Times.Once());
    LoggerServiceMock.verify(x => x.Information('Debug: false'), Times.Once());
  });
});
