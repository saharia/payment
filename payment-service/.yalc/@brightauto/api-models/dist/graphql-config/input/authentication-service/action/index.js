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
    CreateActionInput: function() {
        return _createactioninput.CreateActionInput;
    },
    FindActionByNameInput: function() {
        return _findactionbynameinput.FindActionByNameInput;
    },
    FindActionInput: function() {
        return _findactioninput.FindActionInput;
    },
    RemoveActionInput: function() {
        return _removeactioninput.RemoveActionInput;
    },
    UpdateActionInput: function() {
        return _updateactioninput.UpdateActionInput;
    }
});
const _createactioninput = require("./create-action.input");
const _findactionbynameinput = require("./find-action-by-name.input");
const _findactioninput = require("./find-action.input");
const _removeactioninput = require("./remove-action.input");
const _updateactioninput = require("./update-action.input");

//# sourceMappingURL=index.js.map