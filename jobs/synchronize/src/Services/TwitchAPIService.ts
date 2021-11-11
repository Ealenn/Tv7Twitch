import { ITwitchAPIService } from './Abstractions/ITwitchAPIService';
import Axios, { AxiosInstance } from 'axios';
import { IConfiguration } from '../Configuration';
import { inject, injectable } from 'tsyringe';
import { ILoggerService } from './Abstractions';
import { GetChannelStreamSchedule, GetUsers, OAuthClientCredentialsFlow } from '../Models/Twitch';

@injectable()
export class TwitchAPIService implements ITwitchAPIService
{
  private _configuration: IConfiguration;
  private _loggerService: ILoggerService;
  private _token: OAuthClientCredentialsFlow;
  private _tokenDate: Date;

  constructor(
    @inject('IConfiguration') configuration: IConfiguration,
    @inject('ILoggerService') loggerService: ILoggerService
  )
  {
    this._configuration = configuration;
    this._loggerService = loggerService;
  }

  private async checkAndRefreshToken(): Promise<void>
  {
    await new Promise(resolve => setTimeout(resolve, 3000)); // A rate limit of 30 requests per minute

    const now = new Date();
    const expiresToken = new Date(this._tokenDate);
    if (this._token)
    {
      expiresToken.setSeconds(expiresToken.getSeconds() + this._token.expires_in - 600);
    }
    this._loggerService.Debug(`Check Twitch Token ${now} - ${expiresToken}`);

    if (!this._token || !this._tokenDate || expiresToken <= now)
    {
      this._loggerService.Debug(`Refresh Twitch Token ${expiresToken}`);
      this._tokenDate = now;
      this._token = await this.getOauthClientCredentials(
        this._configuration.Twitch.ClientId,
        this._configuration.Twitch.ClientSecret
      );
    }
  }

  private getAxios(): AxiosInstance
  {
    const headers: any = {
      'client-id': this._configuration.Twitch.ClientId
    };
    if (this._token)
    {
      headers.Authorization = `Bearer ${this._token.access_token}`;
    }

    const instance = Axios.create({
      timeout: 2000,
      headers
    });
    return instance;
  }

  /**
   * @inheritdoc
   */
  async getUsers(id?: string, login?: string): Promise<GetUsers | null>
  {
    await this.checkAndRefreshToken();
    let url = 'https://api.twitch.tv/helix/users';
    if (id)
    {
      url += `?id=${id}`;
    }
    if (login)
    {
      url += `${ id ? '&' : '?' }login=${login}`;
    }

    try
    {
      const result = await this.getAxios().get<GetUsers>(url);
      return result.data;
    }
    catch (error: any)
    {
      this._loggerService.Error(error.toString());
      return null;
    }
  }

  /**
   * @inheritdoc
   */
  async getChannelStreamSchedule(broadcasterId: string, first?: string, after?: string, startTime?: string, utcOffset?: string): Promise<GetChannelStreamSchedule | null>
  {
    await this.checkAndRefreshToken();
    let url = `https://api.twitch.tv/helix/schedule?broadcaster_id=${broadcasterId}`;
    if (first)
    {
      url += `&start_time=${first}`;
    }
    if (after)
    {
      url += `&after=${after}`;
    }
    if (startTime)
    {
      url += `&start_time=${startTime}`;
    }
    if (utcOffset)
    {
      url += `&utc_offset=${utcOffset}`;
    }

    try
    {
      const result = await this.getAxios().get<GetChannelStreamSchedule>(url);
      return result.data;
    }
    catch (error: any)
    {
      this._loggerService.Error(error.toString());
      return null;
    }
  }

  /**
   * @inheritdoc
   */
  async getOauthClientCredentials(clientId: string, clientSecret: string, scope?: string): Promise<OAuthClientCredentialsFlow>
  {
    let url = `https://id.twitch.tv/oauth2/token??client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
    if (scope)
    {
      url += `&scope=${scope}`;
    }

    const result = await this.getAxios().post<OAuthClientCredentialsFlow>(url);
    this._loggerService.Debug(`Get Twitch Credentials: ${result.status} ${result.statusText}`);
    return result.data;
  }
}
