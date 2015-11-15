'use strict';

module.exports.run = function (test, Heap) {
  test('should delete the head of the heap', function (t) {
    var heap = new Heap();
    var node1 = heap.insert(1, null);
    var node2 = heap.insert(2, null);
    heap.delete(node1);
    t.is(heap.extractMinimum(), node2);
    t.true(heap.isEmpty());
    t.end();
  });

  test('should delete nodes in a heap with multiple elements', function (t) {
    var heap = new Heap();
    var node3 = heap.insert(13, null);
    var node4 = heap.insert(26, null);
    var node2 = heap.insert(3, null);
    var node1 = heap.insert(-6, null);
    var node5 = heap.insert(27, null);
    t.is(heap.size(), 5);
    t.is(heap.extractMinimum(), node1);
    t.is(heap.extractMinimum(), node2);
    t.is(heap.extractMinimum(), node3);
    t.is(heap.extractMinimum(), node4);
    t.is(heap.extractMinimum(), node5);
    t.true(heap.isEmpty());
    t.end();
  });
};
