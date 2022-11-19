// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.
var searchRange = function(nums, target) {
  var left = 0, right = nums.length-1 , firstIndex = -1; //r-5
  while(left <= right){
      let mid = left + Math.floor((right-left)/2)//2//4//3
      if(nums[mid] == target){//7==8 8==8t
          firstIndex = mid //4//3
          right = mid - 1 //3//2
      } else if (nums[mid] > target) {//7>8
          right = mid - 1
      } else {
          left = mid + 1 //3
      }
  }
  var left = 0, right = nums.length-1, lastIndex = -1; //r-5
   while(left <= right){ //
      let mid = left + Math.floor((right-left)/2) //2//4//5
      if(nums[mid] == target){ //8==8
          lastIndex = mid //4
          left = mid + 1 //5
      } else if (nums[mid] > target) { //7>8
          right = mid - 1 //4
      } else {
          left = mid + 1 //3
      }
  }
   return [firstIndex,lastIndex]
};