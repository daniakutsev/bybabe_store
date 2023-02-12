export interface IEnv {
  apiKey: string,
  production: boolean,
  FbFbUrl:string
}

export interface FbAuthResponse {
  idToken: string,
  expiresIn: string
}
