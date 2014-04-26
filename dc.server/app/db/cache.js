/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

function RedisCache(config) {
  this.config = config;
  this.client = null; // explicit
}

RedisCache.prototype.open = function(options, cbErr) {
  options = options || {};
  var config = this.config;

  this.client = require("redis").createClient(
    config.db.redis_port,
    config.db.redis_host);

  config.db.redis_secret && this.client.auth(config.db.redis_secret);

  cbErr && this.client.on("error", cbErr);
};

RedisCache.prototype.close = function() {
  this.client && this.client.quit();
};

RedisCache.prototype.put = function(key, value, callback) {
  this.client.set(key, value, callback);
};

RedisCache.prototype.get = function(key, callback) {
  this.client.get(key, function(err, value) {
    if (value == null) {
      callback({notFound: true}, null);
      return;
    }
    callback(err, value);
  });
};

RedisCache.prototype.delete = function(key, callback) {
  this.client.del(key, callback);
};

/**
 * Exports
 */
module.exports = function(config) {

    return {

      create: function(options) {
        options = options || {
          type: 'redis'
        };

        if (options.type === 'redis') {
          return new RedisCache(config);
        }

        throw 'Unsupported cache type ' + options.type;
      }

    };
};
