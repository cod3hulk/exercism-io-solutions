module.exports = function toRna(strand) {
    var DNAToRNA = {
        'C': 'G',
        'G': 'C',
        'T': 'A',
        'A': 'U'
    }

    return strand.split('').map(function(nucleotide) {
        return DNAToRNA[nucleotide];
    }).join('');
};
