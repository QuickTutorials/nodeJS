# work as an script: chmod +x filename.js
#!/usr/bin/env node

var Lazy=require("lazy");
new Lazy(process.stdin).lines.forEach(
          function(line) { 
    		try{
			var l=JSON.parse(line);
			console.log(JSON.stringify(l,null,4));
    		}catch(error){}
          }
);
process.stdin.resume();
