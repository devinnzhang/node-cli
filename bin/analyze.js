//var fs = Promise.promisifyAll(require('fs-extra'));
var fs = require('fs-extra');
var babel = require("babel-core");
var esprima = require('esprima');
var estraverse = require('estraverse');


var isRequire = function(node){
	return node.type == 'VariableDeclarator' && node.init && node.init.type=='ArrowFunctionExpression' && node.init.body && node.init.body.callee && node.init.body.callee.name == 'require';
}

var isLctRouter = function(node){
	return node.type == 'VariableDeclarator' && node.id.name == 'lctRouter';
}
/**
 * 菜单 components 路径分析
 * @param {path} 路径 
 */
var  analyze = async function (path){
	let filePaths = [];
	let routes = [];
	let components = {};
	//console.log('path=', path);
	let file = await fs.readFileSync(path).toString();

	let xxx = babel.transform(file, {
		presets: [
			"es2015",
      		"stage-2"
		],
		comments: false
      });

	fs.writeFile('../file.txt', xxx.code, function(){

	});
	console.log('xxx', xxx.ast)
	//console.log('files=', file);
	//let ast = esprima.parseScript(file);

	//let reg = /components\/pages_lct/gi;

	return;

	estraverse.traverse(ast, {
		enter: function(node){
			if(isRequire(node)){
				components[node.id.name] = node.init.body.arguments[0].elements[0].value;
			}

			if(isLctRouter(node)){
				let init = node.init;
				let children = [];
				init.type == 'ObjectExpression' && init.properties && init.properties.forEach((item)=>{
					if(item.key.name == 'children'){
						children = item.value;
					}
				});
				children.elements && children.elements.forEach((item)=>{
					item.properties && item.properties.forEach((obj)=>{
						if(obj.key.name == 'component'){
							if(routes.indexOf(obj.value.name) == -1){
								routes.push(obj.value.name);
							}
						}
					});
				});
			}
		}
	});

	routes.forEach((route)=>{
		if(components[route]){
			filePaths.push(components[route]);
		}
	});

	console.log(routes.length, filePaths);

	return filePaths;
	//console.log('tokens=', tokens);
}



module.exports = {
	analyze: analyze
};