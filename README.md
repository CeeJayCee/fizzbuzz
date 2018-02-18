# fizzbuzz
A test project, using FizzBuzz, to learn Node, Travis, NPM, etc.

[![Build Status](https://travis-ci.org/CeeJayCee/fizzbuzz.svg?branch=master)](https://travis-ci.org/CeeJayCee/fizzbuzz)
[![Coverage Status](https://coveralls.io/repos/github/CeeJayCee/fizzbuzz/badge.svg?branch=master)](https://coveralls.io/github/CeeJayCee/fizzbuzz?branch=master)
[![npm version](https://badge.fury.io/js/fizzbuzz-array.svg)](https://badge.fury.io/js/fizzbuzz-array)

## What does it do?

This implementation of [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) will return an array of *n* strings, where the strings obey the follow rules:
* if the number is divisible by 3, return fizz
* if the number is divisible by 5, return buzz
* if the number is divisible by 7, return bazz
* else return the number

If the current number matches multiple rules, it will concatenate the results together.

So, for example, calling `fizzbuzz(10)` will return the following

    ['1', '2', 'fizz', '4', 'buzz', 'fizz', 'bazz', '8', 'fizz', 'buzz']
    
## Usage

First install the package:

    npm install --save fizzbuzz-array
      
Then require the package:
  
    const fizzbuzz = require('fizzbuzz-array');
  
Then use it like so:

    let results = fizzbuzz(10);
    console.log(results);
    
Which will generate the following output:

    [ '1', '2', 'fizz', '4', 'buzz', 'fizz', 'bazz', '8', 'fizz', 'buzz' ]

## Testing

Testing is provided by the [Jest library](https://facebook.github.io/jest/).
To run the tests:

    npm test
    
## Code Coverage

Code coverage is provided by the Jest library and published using [Coveralls](https://coveralls.io/github/CeeJayCee/fizzbuzz?branch=master).

## Building

The project is automatically built and tested using [Travis-CI](https://travis-ci.org/CeeJayCee/fizzbuzz).
