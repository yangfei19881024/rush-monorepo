"use strict";Object.defineProperty(exports, "__esModule", {value: true});// index.ts
var _utils = require('@y/utils');
var core = () => {
  console.log("core change");
  console.log("core change again!!!");
  _utils.log.info("test", "Hello world!");
};
core();
var core_default = core;


exports.default = core_default;
