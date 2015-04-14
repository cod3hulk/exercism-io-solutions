module.exports = function(input) {
    var words = input.split(/\s/);
    var countedWords = {}
    for(var i = 0; i < words.length; i++) {
        var word = words[i];
        var count = countedWords[word];
        if(count != undefined) {
            countedWords[word] += 1;
        } else {
            countedWords[word] = 1;
        }
    }
    return countedWords;
}

