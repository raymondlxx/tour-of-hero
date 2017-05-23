"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Group = (function () {
    function Group(id, name) {
        this.id = id;
        this.name = name;
        this.createTime = new Date().getTime();
        this.updateTime = new Date().getTime();
    }
    Group.prototype.getCreateTime = function () {
        return new Date(this.createTime);
    };
    return Group;
}());
exports.Group = Group;
