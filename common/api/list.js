import $http from '../http.js'
export const get_label_list = (data)=>{
	return $http({
		url:"get_label_list",
		data
	})
}