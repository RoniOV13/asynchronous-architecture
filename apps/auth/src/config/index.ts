import { config } from 'dotenv';

try {
  config({
    path: `${process.cwd()}/.env`,
    encoding: 'utf-8',
    debug: true,
  });
} catch (error) {
  console.log(`no .env file in project directory`);
}

const CLIENT_URL: string = process.env.CLIENT_URL ??  `http://localhost:3001`;
const OAUTH2_CLIENT_PROVIDER_OIDC_ISSUER = process.env.OAUTH2_CLIENT_PROVIDER_OIDC_ISSUER
const OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_ID = process.env.OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_ID
const OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_SECRET = process.env.OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_SECRET
const OAUTH2_CLIENT_REGISTRATION_LOGIN_SCOPE = process.env.OAUTH2_CLIENT_REGISTRATION_LOGIN_SCOPE
const OAUTH2_CLIENT_REGISTRATION_LOGIN_REDIRECT_URI = process.env.OAUTH2_CLIENT_REGISTRATION_LOGIN_REDIRECT_URI
const OAUTH2_CLIENT_REGISTRATION_LOGIN_POST_LOGOUT_REDIRECT_URI = process.env.OAUTH2_CLIENT_REGISTRATION_LOGIN_POST_LOGOUT_REDIRECT_URI
const SESSION_SECRET = process.env.SESSION_SECRET
const MONGO_URL: string = process.env.MONGO_URL;


export default {
  MONGO_URL,
  CLIENT_URL,
  OAUTH2_CLIENT_PROVIDER_OIDC_ISSUER,
  OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_ID,
  OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_SECRET,
  OAUTH2_CLIENT_REGISTRATION_LOGIN_SCOPE,
  OAUTH2_CLIENT_REGISTRATION_LOGIN_REDIRECT_URI,
  OAUTH2_CLIENT_REGISTRATION_LOGIN_POST_LOGOUT_REDIRECT_URI,
  SESSION_SECRET,
};
