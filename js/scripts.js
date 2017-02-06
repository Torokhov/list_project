function LinkedList(arr) {
  this.prepend = function(a) {
    var newList = new LinkedList([a]);
    newList.rest = this;
    return newList;
  }
  
  this.getHead = function() {
    this.rest = null;
    return this;
  }
  
  this.getRest = function() {
    var rest = this.rest;
    this.rest = null;
    return rest;
  }
  
  this.getElem = function(n) {
    if (n < 0) {
      return undefined;
    }
    
    function iter(i, list) {
      if (!list.rest) {
        return undefined;
      }
      
      if (i === n) {
        return list.value;
      }
      
      list = list.getRest();
      i++;
      
      return iter(i, list);
    }
    
    return iter(0, this);
  }
  
  this.toArray = function() {
    function iter(list, arr) {
      if (!list.rest) {
        arr.push(list.value);
        return arr;
      }
      
      arr.push(list.value);
      list = list.getRest();
      
      return iter(list, arr);
    }
    
    return iter(this, []);
  }
  
  if (arr.length === 1) {
    this.value = arr.shift();
    this.rest = null;
    return this;
  }
  
  this.value = arr.shift();
  this.rest = new LinkedList(arr);
  return this;
}
