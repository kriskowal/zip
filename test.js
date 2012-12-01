var ZIP = require("./zip");
var FS = require("fs");

console.log("-------------------");
console.log("READ from Buffer");

var data = FS.readFileSync("zip.zip")
var reader = ZIP.Reader(data);
console.log(reader.toObject('utf-8'));

reader.forEach(function (entry) {
    console.log(entry.getName(), entry.lastModified());
});

console.log("-------------------");
console.log("READ from file descriptor");

FS.open("zip.zip", "r", "0666", function(err, fd) {
  var reader = ZIP.Reader(fd);
	console.log(reader.toObject('utf-8'));
});

