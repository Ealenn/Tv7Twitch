export interface OAuthClientCredentialsFlow {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  scope?: string[] | null;
  token_type: string;
}
