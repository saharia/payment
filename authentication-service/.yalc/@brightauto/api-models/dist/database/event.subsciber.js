"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EntityAllSubscriber", {
    enumerable: true,
    get: function() {
        return EntityAllSubscriber;
    }
});
const _typeorm = require("typeorm");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let EntityAllSubscriber = class EntityAllSubscriber {
    /* listenTo() {
    return Organization;
  } */ beforeInsert(event) {
    // console.log(`BEFORE USER INSERTED: `, event.entity);
    }
    constructor(dataSource){
        dataSource.subscribers.push(this);
    }
};
EntityAllSubscriber = _ts_decorate([
    (0, _typeorm.EventSubscriber)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm.DataSource === "undefined" ? Object : _typeorm.DataSource
    ])
], EntityAllSubscriber);

//# sourceMappingURL=event.subsciber.js.map