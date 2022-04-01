//Implement the function noOfElements(x, y, z) which returns the number of elements in that array x, that are greater than or equal to the variable y and less than or equal to the variable z

function noOfElements(x, y, z){

    let count = 0
  
    for(let i = 0; i < x.length; i++){
        let current = x[i]
      if (current >= y && current <= z){
          count++
      }
    }
  
  
  
    return count;
  }
  
  console.log(noOfElements([2,3,0,1,7], 4, 8))
  
  test("count number less than x and greater than z", () => {
     let text = noOfElements([2,3,0,1,7], 4, 8);
  
     expect(text).toBe(1)
  })
  
  
  //Implement the function divisible(a) which returns the number of the elements in that array a that are divisible by 2 and greater than 15.
  
  function divisible(a) {
    let countS = 0
  
    for (let j = 0; j < a.length; j++){
      //a.map(x => x%2 === 0 && x > 15)
      let element = a[j]
      if(element % 2 === 0 && element > 15){
         countS++
      }
    }
    return countS;
  }
  
  console.log(divisible([2,3,12,18,42,24]))
  
  test("array is divisible", () => {
      let check = divisible([2,3,12,18,42,24]);
       expect(divisible).toBe(3)
  })
  
  
  //Implement the function isDivisbleByN(arr, n) which extracts all the values in the input array arr that are divisible by n into another array and returns the new array.
  
  function isDivisbleByN(arr, n) {
    let newArr = []
  
    for (let k = 0; k < arr.length; k++){
      let currElement = arr[k]
      if (currElement % n === 0){
  
        newArr.push(currElement)
    }
    }
  
   return newArr;
  }
  
  console.log(isDivisbleByN([1,3,5,6,3,6,7,4], 2))
  
  test("check result array matched", () => {
  
    let arrResult = isDivisbleByN([1,3,5,6,3,6,7,4], 2);
    expect(arrResult).toEqual([ 6, 6, 4 ])
  })
  