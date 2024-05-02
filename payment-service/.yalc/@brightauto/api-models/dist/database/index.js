"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DatabaseModule: function() {
        return _databasemodule.DatabaseModule;
    },
    SnakeNamingStrategy: function() {
        return _snakenamingstrategy.SnakeNamingStrategy;
    }
});
const _databasemodule = require("./database.module");
const _snakenamingstrategy = require("./snake-naming.strategy");

//# sourceMappingURL=index.js.map