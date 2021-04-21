/*
@author: Oscar Alderete - me@oscaralderete.com
@website: http://oscaralderete.com
@generator: NetBeans IDE v11.3
*/
var app={
	baseUrl: '',
	submit(){
		var params={
			//class: 'Test\\Pdf\\Pdf',
			class: 'Calc',
			method: 'calcMethod',
			data: {
				constructor_params: $('#myForm').serializeJSON()
			}
		};
		this.http(params,function(response){
			$('#response').html('Result is: '+response.msg);
		});
	},
	http(params, callback){
		var self=this;
		fetch(self.baseUrl,{
			method: 'POST',
			body: JSON.stringify(params),
			headers:{
				'Content-Type':	'application/json'
			}
		})
		.then(res=>res.json())
		.then((response)=>{
			if(response.result==='OK' && typeof callback === 'function'){
				callback(response);
			}
			else{
				alert(response.msg);
			}
		})
		.catch(error=>console.error('Error: ',error));
	}
};