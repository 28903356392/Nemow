const db = uniCloud.database()
module.exports = {
	_before: function () { // 通用预处理器   
	      //变量 全局可用     //函数
          this.params = this.getParams()
		  this.startTime =Date.now()
	},
	async get(){
		let res = await db.collection("yang_news").get()
		let result = {
			code:200,
			msg:"ok",
			data:res.data
		}
		return result
	},
	async add(){
		
	},
	async updata(){
		
	},
	async remove(){
		
	},
	_after(error,result){
		if(error){
			throw err //抛出错误
		}
		result.timeCost =Date.now() - this.startTime
		return result
	}
}
