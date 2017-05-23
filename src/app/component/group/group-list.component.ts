import { Component, OnInit } from '@angular/core';
import { Group } from '../../module/group';
import { GroupService } from '../../service/group.service';

@Component({
	selector: 'group-list',
	templateUrl: 'app/uitemplate/group/group-list.component.html',
	styleUrls: [''],
	providers: [GroupService]
})
export class GroupListComponent implements OnInit {
	groups: Group[];

	constructor(private groupService:GroupService){}

	ngOnInit(): void {
		this.groups = this.groupService.getGroups();
	}
}