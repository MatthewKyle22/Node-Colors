module.exports = {
  luminosity: function(r,g,b){
    r = r * 0.2126;
    g = g * 0.7152;
    b = b * 0.0722;
    return r + g + b;
  }
};