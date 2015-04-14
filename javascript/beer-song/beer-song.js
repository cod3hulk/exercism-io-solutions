function BeerSong() {}

BeerSong.prototype.verse = function(n) {
    if(n === 0) {
        return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
    }
    if(n === 1) {
        return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
    }
    if(n === 2) {
        return "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";
    }

    return n + " bottles of beer on the wall, " + n + " bottles of beer.\nTake one down and pass it around, " + (n-1) + " bottles of beer on the wall.\n";
}

BeerSong.prototype.sing = function(start, end) {
    var end = end || 0;
    var song = "";

    for(var i = start; i > end; i--) {
        song += this.verse(i) + '\n';
    }

    song += this.verse(i);

    return song;
}

module.exports = new BeerSong();
