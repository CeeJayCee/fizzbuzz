const fizzbuzz = require('../fizzbuzz');

/*-------------------------------------------------------------------------
  Test invalid / valid inputs
*/
test('strings are invalid input', () => {
    expect(fizzbuzz('hello world')).toBe(null);
});

test('functions are invalid input', () => {
    expect(fizzbuzz(function() {return 1;})).toBe(null);
});

test('no parameter is invalid input', () => {
    expect(fizzbuzz()).toBe(null);
});

test('number is a valid input', () => {
    expect(fizzbuzz(3)).not.toBe(null);
});

/*-------------------------------------------------------------------------
    Test edge cases
*/
test('0 should return empty array', () => {
    expect(fizzbuzz(0)).toEqual([]);
});

test('negative numbers should return empty array', () => {
    expect(fizzbuzz(-0)).toEqual([]);
    expect(fizzbuzz(-1)).toEqual([]);
    expect(fizzbuzz(-100)).toEqual([]);
});

/*-------------------------------------------------------------------------
    Happy paths
*/
test('1 should return 1 result correctly', () => {
    expect(fizzbuzz(1)).toEqual(['1']);
});

test('10 should return 10 results correctly', () => {
    let expected_result = [
        '1',
        '2',
        'fizz',
        '4',
        'buzz',
        'fizz',
        'bazz',
        '8',
        'fizz',
        'buzz'
    ];
    expect(fizzbuzz(10)).toEqual(expected_result);
});

test('21 should return 21 results correctly', () => {
    let expected_result = [
        '1',
        '2',
        'fizz',
        '4',
        'buzz',
        'fizz',
        'bazz',
        '8',
        'fizz',
        'buzz',
        '11',
        'fizz',
        '13',
        'bazz',
        'fizzbuzz',
        '16',
        '17',
        'fizz',
        '19',
        'buzz',
        'fizzbazz'
    ];
    expect(fizzbuzz(21)).toEqual(expected_result);
});

test('numbers divisible by 3, 5 and 7 should output fizzbuzzbazz', () => {
    let result = fizzbuzz(105); // get 105 results
    expect(result[104]).toEqual('fizzbuzzbazz'); // but check array position 104, because we index from 0
});