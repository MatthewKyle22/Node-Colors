var isLight = function() {
    var r = process.argv[2] * 0.2126;
    var g = process.argv[3] * 0.7152;
    var b = process.argv[4] * 0.0722;
    var luminosity = r + g + b;
    
    if (luminosity >= 155) {
        return 'light';
    } else {
        return 'dark';
    }
};
console.log(isLight());
