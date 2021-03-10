"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class FakeMailProvider {
  async parse() {
    return 'Mail content';
  }

}

var _default = FakeMailProvider;
exports.default = _default;