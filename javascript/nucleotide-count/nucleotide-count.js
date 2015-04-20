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
    this.strand.split('').forEach(function(nucleotide) {
        histogram[nucleotide]++;
    });
    return histogram;
}

DNA.prototype.count= function(nucleotide) {
    return this.histogram()[nucleotide];
}

module.exports = function(strand) {
    return new DNA(strand);
}
