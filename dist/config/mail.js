"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      name: 'Senhor Biscoito',
      email: 'jean.miranda@senhorbiscoito.com'
    }
  }
};
exports.default = _default;