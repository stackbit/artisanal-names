
let adjectives;
let nouns;

function loadWords() {
    adjectives = require('./words/adjectives.js');
    nouns = require('./words/nouns.js');
}

function randInt(max) {
    return Math.floor(Math.random() * max);
}

function choice(arr) {
    return arr[randInt(arr.length)];
}

function generate() {
    if (!adjectives || !nouns) {
        loadWords();
    }

    return `${choice(adjectives)}-${choice(nouns)}`
}

module.exports = {
    generate
}