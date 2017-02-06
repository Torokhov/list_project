function LinkedList(arr) {
  this.getHead = function() {
    this.rest = null;
    return this;
  }
  
  this.getRest = function() {
    var rest = this.rest;
    this.rest = null;
    return rest;
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