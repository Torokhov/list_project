function LinkedList(arr) {
  if (arr.length === 1) {
    this.value = arr.shift();
    this.rest = null;
    return this;
  }
  
  this.value = arr.shift();
  this.rest = new LinkedList(arr);
  return this;
}