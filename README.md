## js-heap-tests [![NPM version](https://img.shields.io/npm/v/@tyriar/heap-tests.svg?style=flat)](https://www.npmjs.org/package/@tyriar/heap-tests)

[![Build Status](http://img.shields.io/travis/gwtw/js-heap-tests.svg?style=flat)](http://travis-ci.org/gwtw/js-heap-tests)

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

- [js-data-structures](https://github.com/gwtw/js-data-structures)
- [js-binary-heap](https://github.com/gwtw/js-binary-heap)
- [js-binomial-heap](https://github.com/gwtw/js-binomial-heap)
- [js-fibonacci-heap](https://github.com/gwtw/js-fibonacci-heap)
