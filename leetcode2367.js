// Example 1:

//nums = [0,1,4,6,7,10], diff = 3
// Output: 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 
var arithmeticTriplets = function(nums, diff) {
  // let count=0
  //   for(i=0; i<nums.length; i++){
  //       for(j=i+1; j<nums.length; j++){
  //           for(k=j+1; k<nums.length; k++){
  //           // console.log(Math.abs(nums[j]-nums[i]))
  //           if(nums[j]-nums[i]==diff && nums[k] - nums[j] == diff){
  //               count++
  //           }
  //       }
  //       }
  //   }
  //   return count;
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums.includes(nums[i] + diff) && nums.includes(nums[i] + (diff*2))){
             count++
        }
    }
    return count
};
let nums = [0,1,4,6,7,10], diff = 3
console.log(arithmeticTriplets(nums,diff))