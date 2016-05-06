'use strict';

module.exports.run = function (test, Heap) {
  test('should set the heap\'s size to 0', function (t) {
    var heap = new Heap();
    heap.insert(1, null);
    heap.insert(2, null);
    heap.insert(3, null);
    heap.clear();
    t.is(heap.size(), 0);
  });

  test('should set the heap\'s minimum node to undefined', function (t) {
    var heap = new Heap();
    heap.insert(1, null);
    heap.insert(2, null);
    heap.insert(3, null);
    heap.clear();
    t.is(heap.findMinimum(), undefined);
  });
};
