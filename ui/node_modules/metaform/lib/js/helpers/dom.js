module.exports = {

  classNames: function () {
    var ret = '';
    var n = arguments.length;
    var a;
    for (var i = 0; i < n; i++) {
      a = arguments[i];
      if (a) {
        ret += (ret.length ? ' ' + a : a);
      }
    }
    return ret;
  },

  /**
   * Uses canvas.measureText to compute and return the width, in pixels,
   * of the text in the given font.
   *
   * @param {String} text The text to be rendered.
   * @param {String} font The CSS font descriptor. (e.g. "bold 14px verdana")
   */
  computeTextWidth: function (text, font) {
    var canvas = this.computeTextWidth.canvas || (this.computeTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext('2d');
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
  },

  computeMaxTextWidth: function (textItems, font) {
    var maxWidth = 0;
    var text, width;
    for (var i = 0, n = textItems.length; i < n; i++) {
      text = textItems[i];
      width = this.computeTextWidth(text, font);
      if (width > maxWidth) {
        maxWidth = width;
      }
    }
    return maxWidth;
  }
};