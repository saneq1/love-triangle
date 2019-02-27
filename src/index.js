/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 // your implementation
 
 let count = 0;  
 for (let i = 0; i<preferences.length; i++) { 
     let firstItem = preferences[i] - 1;
     let secondItem = preferences[firstItem] - 1;
     let thirdItem = preferences[secondItem] - 1;
      if (thirdItem == secondItem) continue;
     if (thirdItem == i) {
         count++;
     }
  }
  return count / 3;

};
