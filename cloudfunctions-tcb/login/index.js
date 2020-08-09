'use strict';
//链接数据库
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//console.log('event : ', event)
	const collection = db.collection('user');
	/* 
	 //添加
	let res = await collection.add({
	  name: "超坑士兵"
	})
	//删除 根据名称
	let res = await collection.where({
	  name: "超坑士兵"
	}).remove()
	//update 只能更新存在的记录
	let res = await collection.doc('abd27dd45f2f96ca004e10fd5b3663e4').update({
	  name: "李富贵"
	});
	//set此方法会覆写已有字段 如果不存在则创建,如果更新的数组中没有数据库的字段，数据库的字段会被删除
	let res = await collection.doc('abd27dd45f2f96ca004e10fd5b3663e4').set({
		 name: "超坑士兵",  
	  type: "操作员"
	});
	//查询数据
	//只能根据id查询
	const res = await collection.doc('abd27dd45f2f96ca004e10fd5b3663e4').get()
	//通过where条件查询
	const res = await collection.where({
		name:"超坑士兵"
	}).get()
	*/	
	console.log(JSON.stringify(res)); 
	//返回数据给客户端
	return {
		code:200,
		msg:"登录成功"
	}
};
