'use strict';

module.exports.run = function (test, Heap) {
  test('should throw an exception given a non-existent node', function (t) {
    var heap = new Heap();
    t.throws(function () {
      heap.decreaseKey(undefined, 2);
    });
  });

  test('should throw an exception given a new key larger than the old key', function (t) {
    var heap = new Heap();
    t.throws(function () {
      var node = heap.insert(1, null);
      heap.decreaseKey(node, 2);
    });
  });

  test('should decrease the minimum node', function (t) {
    var heap = new Heap();
    var node1 = heap.insert(1, null);
    heap.insert(2, null);
    heap.decreaseKey(node1, -3);
    var key = heap.findMinimum().key;
    t.same(key, node1.key);
    t.is(key, -3);
  });

  test('should decrease and bubble up a non-minimum node', function (t) {
    var heap = new Heap();
    heap.insert(1, null);
    var node2 = heap.insert(2, null);
    heap.decreaseKey(node2, -3);
    var key = heap.findMinimum().key;
    t.same(key, node2.key);
    t.is(key, -3);
  });

  test('should decrease and bubble up a non-minimum node in a large heap', function (t) {
    var heap = new Heap();
    heap.insert(13, null);
    heap.insert(26, null);
    heap.insert(3, null);
    heap.insert(-6, null);
    var node5 = heap.insert(27, null);
    heap.insert(88, null);
    heap.insert(59, null);
    heap.insert(-10, null);
    heap.insert(16, null);
    heap.decreaseKey(node5, -11);
    t.same(heap.findMinimum().key, node5.key);
  });
};
