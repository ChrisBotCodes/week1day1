var pig = process.argv;
latin = "";
for (var i = 2; i<pig.length; i++) {
  latin += pig[i].slice(1,pig[i].length) + pig[i][0] +"ay ";
}
latin = latin.slice(0,latin.length-1);
console.log(latin);