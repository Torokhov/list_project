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
    assert.deepEqual(list1.value, list2.value);
    assert.deepEqual(list1.rest.value, list2.rest.value);
    assert.deepEqual(list1.rest.rest.value, list2.rest.rest.value);
  });
  
  it("Возвращает голову списка", function() {
    var list1 = new LinkedList([1, 2, 3]);
    assert.equal(list1.getHead().value, 1);
  });
  
  it("Возвращает хвост списка", function() {
    var list1 = new LinkedList([1, 2, 3]);
    assert.equal(list1.getRest().value, 2);
  });
  
  it("Возвращает массив из списка", function() {
    var list1 = new LinkedList([1, 2, 3]);
    assert.deepEqual(list1.toArray(), [1, 2, 3]);
  });
  
  it("Добавляет элемент в голову списка", function() {
    var list1 = new LinkedList([1, 2, 3]);
    var list2 = list1.prepend(0);
    assert.equal(list2.value, 0);
  })
  
  it("Поиск элемента по порядковому номеру", function() {
    var list1 = new LinkedList([1, 2, 3]);
    assert.equal(list1.getElem(1), 2);
    assert.equal(list1.getElem(-1), undefined);
    assert.equal(list1.getElem(4), undefined);
  });
}); 
