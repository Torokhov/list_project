describe("LinkedList", function() {
  it("Создает объект Linked List", function() {
    var list1 = new LinkedList([1, 2, 3]);
    var list2 = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }
    };
    assert.deepEqual(list1, list2);
  });
}); 