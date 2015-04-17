function DNA(strand) {
    this.strand = strand || "";
    this.validate(this.strand);
}

DNA.prototype.validate = function(strand) {
    if(!/^[ATCG]*$/.test(strand)) {
        throw "Invalid strand";
    }
}

DNA.prototype.histogram = function() {
    var histogram = {A: 0, T: 0, C: 0, G: 0}
    for(var nucleotide in histogram) {
        histogram[nucleotide] = this.count(nucleotide);
    }
    return histogram;
}

DNA.prototype.count= function(nucleotide) {
    var result = 0;
    for(var i = 0; i < this.strand.length; i++) {
        if(this.strand[i] === nucleotide) {
            result++;
        }
    }
    return result;
}

module.exports = function(strand) {
    return new DNA(strand);
}
