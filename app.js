//testNodeJS
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

var url

ping();

function ping(){
	if(!process.argv[2]){
		console.log('missing url parameter, to execute the app: node app *URL*');
	}else{
		xhr.open('GET', process.argv[2], false);
		xhr.send(null);

		if(!(xhr.status == 200)){
			console.log('error: ' + xhr.status);
		}else{
			console.log('ok!');
		}
	}
}