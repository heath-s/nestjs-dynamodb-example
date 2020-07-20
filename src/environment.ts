const ENV = process.env;
const IS_PRODUCTION = ENV.NODE_ENV === 'production';

export default {
  ENV,
  IS_PRODUCTION,
  NODE_ENV: ENV.NODE_ENV,
  PORT: ENV.PORT || 3000,
  DYNAMO_DB_TABLE_NAME_PREFIX: IS_PRODUCTION ? ENV.DYNAMO_DB_TABLE_NAME_PREFIX : 'DYNAMO_DB_TABLE_NAME_PREFIX'
}