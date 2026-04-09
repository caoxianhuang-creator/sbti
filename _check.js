var fs = require('fs');
var vm = require('vm');
var html = fs.readFileSync('D:/longxia/sbti-test/index.html', 'utf8');
var scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
var script = scriptMatch[1];
try {
  new vm.Script(script, { filename: 'test.js' });
  console.log('JS COMPILE: OK');
} catch(e) {
  console.log('ERROR:', e.message);
}
