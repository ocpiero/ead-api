const Redis = require('../services/redis.service').get();

const set = (key, value, seconds) => (
  Redis.set(key, value, 'EX', seconds)
);

const getRedis = (key) => Redis.get(key);

const exists = key => Redis.exists(key);

const del = key => Redis.del(key);

module.exports = {
  set,
  exists,
  del,
  getRedis,
};
