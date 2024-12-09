// Implementing map
Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
  
  // Implementing reduce
  Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
  
  // Implementing filter
  Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
  
  // Implementing flatMap
  Array.prototype.myFlatMap = function (callback) {
    return this.myMap(callback).flat();
  };
  
  // Test the functions
  const numbers = [1, 2, 3, 4, 5];
  
  // Test myMap
  console.log('myMap:', numbers.myMap((num) => num * 2));
  
  // Test myReduce
  console.log('myReduce:', numbers.myReduce((acc, num) => acc + num, 0));
  
  // Test myFilter
  console.log('myFilter:', numbers.myFilter((num) => num > 2));
  
  // Test myFlatMap
  const nested = [[1, 2], [3, 4], [5]];
  console.log('myFlatMap:', nested.myFlatMap((arr) => arr.map((x) => x * 2)));
  