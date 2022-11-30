"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// index.ts
var _npmlog = require('npmlog'); var _npmlog2 = _interopRequireDefault(_npmlog);
_npmlog2.default.heading = "js-cli";
_npmlog2.default.addLevel("success", 2e3, { fg: "green", bold: true });
console.log("utils changed!");


exports.log = _npmlog2.default;
