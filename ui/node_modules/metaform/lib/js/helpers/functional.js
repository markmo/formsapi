module.exports = {

  mapObject: function (fn, obj) {
    var ret = [];
    if (this.isEmpty(obj)) return ret;
    Object.keys(obj).map(function (key) {
      ret.push(fn(key, obj[key]));
    });
    return ret;
  },

  isEmpty: function (obj) {
    if (obj == null) return true;
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
  }
};