import { GetChannelStreamSchedule, GetUsers, OAuthClientCredentialsFlow } from '../../Models/Twitch';

export interface ITwitchAPIService {
  /**
   * Gets all scheduled broadcasts or specific scheduled broadcasts from a channel’s stream schedule.
   * Scheduled broadcasts are defined as “stream segments” in the API.
   * @param broadcasterId User ID of the broadcaster who owns the channel streaming schedule.
   * @param first Maximum number of stream segments to return.
   *              Maximum: 25. Default: 20.
   * @param after Cursor for forward pagination: tells the server where to start fetching the next set of results in a multi-page response.
   *              The cursor value specified here is from the pagination response field of a prior query.
   * @param startTime A timestamp in RFC3339 format to start returning stream segments from. If not specified, the current date and time is used.
   * @param utcOffset A timezone offset for the requester specified in minutes.
   *                   This is recommended to ensure stream segments are returned for the correct week.
   *                   For example, a timezone that is +4 hours from GMT would be “240.” If not specified, “0” is used for GMT.
   */
  getChannelStreamSchedule(
    broadcasterId: string,
    first?: string,
    after?: string,
    startTime?: string,
    utcOffset?: string): Promise<GetChannelStreamSchedule | null>;

  /**
   * Gets information about one or more specified Twitch users.
   * Users are identified by optional user IDs and/or login name.
   * If neither a user ID nor a login name is specified, the user is looked up by Bearer token.
   * @param id User ID. Multiple user IDs can be specified. Limit: 100.
   * @param login User login name. Multiple login names can be specified. Limit: 100.
   */
  getUsers(
    id?: string,
    login?: string
  ): Promise<GetUsers | null>;

  /**
   * App access tokens are only for server-to-server API requests.
   * The grant request below requires the client secret to acquire an app access token;
   * this also should be done only as a server-to-server request, never in client code.
   * @param clientId client ID.
   * @param clientSecret client secret.
   * @param scope Space-separated list of scopes.
   * @see https://dev.twitch.tv/docs/authentication
   */
  getOauthClientCredentials(
    clientId: string,
    clientSecret: string,
    scope?: string
  ): Promise<OAuthClientCredentialsFlow>;
}
