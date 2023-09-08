const microcommander = require('./MicroCommander.js');
const mc = new microcommander('config.json', 'my-service', 5500, false);

let test_json = {
	"logs": [
		{
			"name": "mylog",
			"level": 50,
			"category": "Logs"
		}
	],
};

mc.defineJson('test', ()=> {return test_json}, 'Test JSON');

mc.defineAction('test', () => {
	console.log('test');
	test_json = {
		"foo": "bar"
	};
}, '');

mc.listen();