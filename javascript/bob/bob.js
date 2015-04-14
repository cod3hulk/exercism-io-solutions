var Bob = function() {};

Bob.prototype.hey = function(input) {
    if (isShouting(input)) {
        return 'Whoa, chill out!';
    } else if (isQuestion(input)) {
        return 'Sure.';
    } else if (isSilent(input)) {
        return 'Fine. Be that way!';
    } else {
        return 'Whatever.';
    }
};

function isShouting(input) {
    return input.toUpperCase() === input && input.toLowerCase() !== input.toUpperCase();
}

function isQuestion(input) {
    return input.charAt(input.length-1) === '?';
}

function isSilent(input) {
    return input.trim().length === 0;
}

module.exports = Bob;
