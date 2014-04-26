/*
 * Copyright (C) 2014 Vexelon.NET Services
 * http://vexelon.net
 */
"use strict";

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


function RedisCache(config) {
  this.config = config;
  this.client = null; // explicit
}

RedisCache.prototype.open = function(options, cbErr) {
  options = options || {};
  var config = this.config;

  this.client = require("redis").createClient(
    config.cache.redis.port,
    config.cache.redis.host);

  config.cache.redis.secret && this.client.auth(config.cache.redis.secret);

  this.prefix = config.cache.redis.prefix;

  cbErr && this.client.on("error", cbErr);
};

RedisCache.prototype.close = function() {
  this.client && this.client.quit();
};

RedisCache.prototype.put = function(key, value, callback) {
  var _key = this.prefix ? this.prefix + key : key;
  this.client.set(_key, value, callback);
};

RedisCache.prototype.get = function(key, callback) {
  var _key = this.prefix ? this.prefix + key : key;
  this.client.get(_key, function(err, value) {
    if (value == null) {
      callback({notFound: true}, null);
      return;
    }
    callback(err, value);
  });
};

RedisCache.prototype.delete = function(key, callback) {
  var _key = this.prefix ? this.prefix + key : key;
  this.client.del(_key, callback);
};
