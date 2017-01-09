var string = process.argv;
var newString = "";
for (var i = 2; i<string.length; i++) {
  for (var j = string[i].length-1; j>=0; j--) {
    newString += string[i][j];
  }
  newString += "\n";
}
console.log(newString);