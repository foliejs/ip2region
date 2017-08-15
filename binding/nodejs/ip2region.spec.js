'use strict';

const ip = require('./ip2region');
const expect = require('expect');
const query = ip.create('../../data/ip2region.db');

expect(query.btreeSearchSync('120.24.78.68')).toMatchSnapshot();
expect(query.btreeSearchSync('10.10.10.10')).toMatchSnapshot();

// it('should query', () => {
//   expect(query.btreeSearchSync('120.24.78.68')).toMatchSnapshot();
//   expect(query.btreeSearchSync('10.10.10.10')).toMatchSnapshot();
// });
//
// it('binarySearch', () => {
//   expect(query.binarySearchSync('120.24.78.68')).toMatchSnapshot();
//   expect(query.binarySearchSync('10.10.10.10')).toMatchSnapshot();
// });
