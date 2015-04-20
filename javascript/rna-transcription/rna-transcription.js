module.exports = function toRna(strand) {
    var DNAToRNA = {
        'C': 'G',
        'G': 'C',
        'T': 'A',
        'A': 'U'
    }

    return Array.prototype.map.call(strand, function(nucleotide) {
        return DNAToRNA[nucleotide];
    }).join('');
};
