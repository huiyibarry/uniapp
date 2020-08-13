const get_label_list = (data)=>{
	return new Promise((resolve,reject)=>{
			uniCloud.callFunction({
				name:"get_label_list",
				data:data
			}).then(res=>{
				if(res.result.code === 200){
					resolve(res.result)
				}else{
					reject(res.result)
				}
			}).catch(err=>{
				reject(err)
			})
	})
}

export default {
	get_label_list
}