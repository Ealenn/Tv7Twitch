import 'reflect-metadata';
import 'jasmine';
import { Configuration } from '../src/Configuration';

describe('Configuration', function()
{
  it('Getters', async function()
  {
    // A
    // A
    const configuration = new Configuration();

    // A
    expect(configuration.Name).toBe('Tv7Twitch');
    expect(configuration.Url).toBe('https://github.com/Ealenn/Tv7Twitch');
    expect(configuration.Debug).toBe(true);
  });
});
