//引入公共模块
const {myFun} = require("utils_yang");

const db = uniCloud.database()

let dbJQL;
module.exports = {
	_before: function () { // 通用预处理器   
	    
	      //变量 全局可用     //函数
          this.params = this.getParams()
		  this.startTime =Date.now()
		  
		  //使用jql语法
		  dbJQL = uniCloud.databaseForJQL({
		  	clientInfo:this.getClientInfo()
		  })
		  dbJQL.setUser({ 
		  	uid: '647ea7f628064a22b1b9e97c', 
		  	role: ['admin']
		  })
	},
	async get(){
		let res = await dbJQL.collection("yang_news").where(`article_status == ${1}`)
		.field("avatar.path as path,article_status").get()
		let result = {
			code:myFun(),
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
			throw error //抛出错误
		}
		result.timeCost =Date.now() - this.startTime
		return result
	}
}
