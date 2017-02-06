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
  
  if (arr.length === 1) {
    this.value = arr.shift();
    this.rest = null;
    return this;
  }
  
  this.value = arr.shift();
  this.rest = new LinkedList(arr);
  return this;
}