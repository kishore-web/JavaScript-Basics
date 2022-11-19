// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1 //6
  while (left <= right){ 
      let mid = left + Math.floor((right-left)/2) //3//5//4
      if(nums[mid] == target){//0==0
          return mid //4
      }
      //traverse through left part of array 
      else if (nums[left] <= nums[mid]){ // 4<=7 //0<=1
          if (nums[left] <= target && nums[mid] >= target) { //4<=0//0<=0 1>=0
              right = mid - 1 //4
          } else { 
              left = mid + 1 //4
          }
          // other part of array
      } else {
            if (nums[right] >= target && nums[mid] <= target) {
              left = mid + 1
          } else {
              right = mid - 1
          }
      }
  }
  return -1
};