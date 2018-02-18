'use strict'

module.exports = function(n) {
    if (typeof n !== 'number') {
        return null;
    }

    let all_texts_to_return = [];

    for (let i = 1; i <= n; i++) {   
        let this_text = '';

        if (i % 3 === 0) {
            this_text += 'fizz';
        }

        if (i % 5 === 0) {
            this_text += 'buzz';
        }

        if (i % 7 === 0) {
            this_text += 'bazz';
        }

        if (this_text.length === 0) {
            this_text += i;
        }
        
        all_texts_to_return.push(this_text);
    }

    return all_texts_to_return;
};