## js-heap-tests [![NPM version](https://img.shields.io/npm/v/@tyriar/heap-tests.svg?style=flat)](https://www.npmjs.org/package/@tyriar/heap-tests)

[![Build Status](http://img.shields.io/travis/GrowingWithTheWeb/js-heap-tests.svg?style=flat)](http://travis-ci.org/GrowingWithTheWeb/js-heap-tests)

A set of JavaScript heap data structure tests.

### Install

```bash
npm install --save-dev @tyriar/heap-tests
```

### Usage

```js
import test from 'ava';
import Heap from '../';
import testHelper from '@tyriar/heap-tests/insert-tests';

testHelper.run(test, Heap);
```

### See also

- [js-data-structures](https://github.com/GrowingWithTheWeb/js-data-structures)
- [js-binary-heap](https://github.com/GrowingWithTheWeb/js-binary-heap)
- [js-binomial-heap](https://github.com/GrowingWithTheWeb/js-binomial-heap)
- [js-fibonacci-heap](https://github.com/GrowingWithTheWeb/js-fibonacci-heap)
