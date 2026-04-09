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
  var m = e.stack.match(/test\.js:(\d+)/);
  if (m) {
    var errLine = parseInt(m[1]) - 1;
    var lines = script.split('\n');
    for(var i = Math.max(0, errLine-3); i < Math.min(lines.length, errLine+4); i++) {
      console.log((i+1) + ': ' + lines[i].substring(0,150));
    }
  }
}
