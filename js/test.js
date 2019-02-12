// This method of getting X unique numbers from Y set is recommended, because it has a stable execution time
function createArray35() {
    // create a [1 .... 48] array
    var candidates = Array.from({
      length: 48
    }).map((el, index) => index + 1);
  
    var array35 = [];
    for (var i = 0; i < 35; i++) {
      // remove 1 random number from candidates
      const positionToRemove = Math.floor(Math.random() * candidates.length);
      const randomNum = candidates.splice(
        positionToRemove,
        1
      )[0];
  
      array35.push(randomNum);
    }
    return array35
  }
  
  function multipleArray(total_number) {
    var arrayOfArrays = Array.from({
      length: total_number
    }).map(el => createArray35());
  
    return arrayOfArrays;
  }
  
  function countDuplicates(arrayOfArrays) {
    // Create an array of length 48 where each element is 0;
    var counters = Array.from({
      length: 48
    }).map(el => 0);
  
    // Each time a number appear, increase its corresponding counter by 1
    for (var array of arrayOfArrays) {
      for (var number of array) {
        counters[number - 1] = counters[number - 1] + 1;
      }
    }
  
    for (var i = 0; i < counters.length; i++) {
      console.log(`Number ${i+1} is repeated ${counters[i]} times;`);
    }
  }
  
  var total_arrays = 1000;
  var arrayOfArrays = multipleArray(total_arrays);
  
  console.log(arrayOfArrays);
  
  countDuplicates(arrayOfArrays);