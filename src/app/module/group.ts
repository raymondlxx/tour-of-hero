
export class Group{
	id:string;
	name:string;
	createTime:number;
	updateTime:number;
	constructor(id:string,name:string){
		this.id = id;
		this.name = name;
		this.createTime = new Date().getTime();
		this.updateTime = new Date().getTime();
	}

	getCreateTime():Date{
		return new Date(this.createTime);
	}
}