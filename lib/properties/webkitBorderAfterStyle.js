'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-border-after-style', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-border-after-style');
    },
    enumerable: true
};