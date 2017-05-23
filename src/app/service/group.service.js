"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var group_1 = require("../module/group");
var GroupService = (function () {
    function GroupService() {
    }
    GroupService.prototype.getGroups = function () {
        var groups = new Array();
        groups.push(new group_1.Group("1", "配置中心"));
        groups.push(new group_1.Group("2", "刷库"));
        groups.push(new group_1.Group("3", "发布CRML"));
        groups.push(new group_1.Group("4", "发布CRMS"));
        groups.push(new group_1.Group("5", "切流量"));
        return groups;
    };
    return GroupService;
}());
exports.GroupService = GroupService;
