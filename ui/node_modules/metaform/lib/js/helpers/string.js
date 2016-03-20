module.exports = {

  readable: function (str) {
    var output = '';
    var len = str.length;
    var char;

    for (var i = 0; i < len; i++) {
      char = str.charAt(i);
      if (i == 0) {
        output += char.toUpperCase();
      }
      else if (char == '-' || char == '_') {
        output += ' ';
      }
      // a number will return true to both
      else if (char !== char.toLowerCase() && char === char.toUpperCase()) {
        if (str.charAt(i - 1) !== ' ') {
          output += ' ';
        }
        output += char;
      }
      else {
        output += char;
      }
    }

    return output;
  },

  dasherize: function (str) {
    var output = '';
    var len = str.length;
    var char;

    for (var i = 0; i < len; i++) {
      char = str.charAt(i);
      if (i == 0) {
        output += char;
      }
      else if (char == '_') {
        output += '-';
      }
      else if (char !== char.toLowerCase() && char === char.toUpperCase()) {
        if (str.charAt(i - 1) != '-') {
          output += '-';
        }
        output += char;
      }
      else {
        output += char;
      }
    }

    return output.toLowerCase();
  },

  truncate: function (str, size) {
    var s = size || 240;
    if (str == null || str.length < s) return str;
    var t = str.replace(/^\s+|\s+$/gm, ''); // trim
    t = t.substring(0, s).split(' ').slice(0, -1).join(' ');
    // replace new lines with a single space
    t = t.replace(/\n+/g, ' ');
    // removes the set of 32 ASCII special characters at the end of words, e.g. ! " # $
    t = t.replace(/[!-\/:-@\[-`{-~]$/, '');
    return t;
  }
};