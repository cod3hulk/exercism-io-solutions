/**
 * Computes the hamming distance for two strands
 *
 * @parameter {string} s1 - first strand
 * @parameter {string} s2 - second strand
 * @returns {numeric} hamming distance of the two strands
 * @throws {Error} when s1 and s2 are of different length
 */
function compute(s1, s2) {
    if(s1.length !== s2.length) {
        throw new Error('DNA strands must be of equal length.');
    }

    return s1.split('').reduce(function(result, currentChar, index) {
        return result + (currentChar !== s2[index]);
    }, 0);
}

module.exports.compute = compute; 
