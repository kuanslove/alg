// 27 Remove Element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(var i=0, res=0; i<nums.length; i++){
        if(nums[i] != val ){
            nums[res] = nums[i];
            res++;
        }
    }
    return res
};

// 26. Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(var i=0, res = 0; i<nums.length; i++){
        if(nums[i] != nums[res]){
            res++;
            nums[res] = nums[i];
        }
    }
    return res+1;
};

// 80. Remove Duplicates from Sorted Array II
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(var res=0, fast=0; fast<nums.length; fast++){
        
    }
};

// 189. Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var N = k % nums.length;
    var mov = nums.slice(nums.length-N);
    for(var i = nums.length-N-1; i>=0; i--){
        nums[i+N] = nums[i]; 
    }
    for(var i=0; i<N; i++){
        nums[i] = mov[i];
    }
};