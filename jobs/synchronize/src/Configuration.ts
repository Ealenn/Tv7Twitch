import { singleton } from 'tsyringe';

export interface IConfiguration {
  Name: string;
  Url: string;
  Debug: boolean;
  Twitch: ITwitchConfiguration;
}

export interface ITwitchConfiguration {
  ClientId: string;
  ClientSecret: string;
}

@singleton()
export class Configuration implements IConfiguration
{
  public Name: string;
  public Url: string;
  public Debug: boolean;
  public Twitch: ITwitchConfiguration;

  constructor()
  {
    this.Name = 'Tv7Twitch';
    this.Url = 'https://github.com/Ealenn/Tv7Twitch';
    this.Debug = true;
    this.Twitch = {
      ClientId: process.env.twitchClientId || '',
      ClientSecret: process.env.twitchClientSecret || ''
    }
  }
}
