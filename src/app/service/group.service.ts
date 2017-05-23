import { Group } from '../module/group';

export class GroupService {
	getGroups(): Group[] {

		var groups = new Array<Group>();
		groups.push(new Group("1","配置中心"));
		groups.push(new Group("2","刷库"));
		groups.push(new Group("3","发布CRML"));
		groups.push(new Group("4","发布CRMS"));
		groups.push(new Group("5","切流量"));

		return groups;
	}


}