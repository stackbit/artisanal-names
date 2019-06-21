const randy = require('randy');

let adjectives;
let nouns;

function loadWords() {
    adjectives = require('./words/adjectives.js');
    nouns = require('./words/nouns.js');
}

function generate() {
    if (!adjectives || !nouns) {
        loadWords();
    }

    return `${randy.choice(adjectives)}-${randy.choice(nouns)}`
}

module.exports = {
    generate
}