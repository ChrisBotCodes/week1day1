function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i <= range[1]; i++) {
    var output = "";

    if (i % multiples[0] === 0) {
      output += words[0];
    }
    if (i % multiples[1] === 0) {
      output += words[1];
    }
    console.log(output === "" ? i : output);
  }
}
loopyLighthouse([55,205],[3,7],["Three","Seven"]);