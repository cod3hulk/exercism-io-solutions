function Matcher(anagram) {
    this.anagram = anagram;
}

Matcher.prototype.isAnagram = function(word) {
    return this.anagram.toLowerCase() !== word.toLowerCase() 
        && this.anagram.toLowerCase().split('').sort().join() === word.toLowerCase().split('').sort().join();
}

Matcher.prototype.matches = function() {
    var words = normalizeArgs(arguments);
    var that = this;
    return words.filter(function(word) { return that.isAnagram(word); });
}

function normalizeArgs(args) {
    if (args[0] instanceof Array) {
        return args[0];
    } else {
        return Array.prototype.slice.call(args);
    }
}

module.exports = function(anagram) {
    return new Matcher(anagram);
}
