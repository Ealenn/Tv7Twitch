import { singleton } from 'tsyringe';

export interface IConfiguration {
  Name: string;
  Url: string;
  Debug: boolean;
}

@singleton()
export class Configuration implements IConfiguration
{
  public Name: string;
  public Url: string;
  public Debug: boolean;

  constructor()
  {
    this.Name = 'Tv7Twitch';
    this.Url = 'https://github.com/Ealenn/Tv7Twitch';
    this.Debug = false;
  }
}
