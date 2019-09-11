//108. Convert Sorted Array to Binary Search Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length==0){
        return null;
    } else {
        var m = Math.floor(nums.length/2);
        var mid = nums[ m ];
        var node = new TreeNode(mid);
        node.left = sortedArrayToBST(nums.slice(0,m));
        node.right = sortedArrayToBST(nums.slice(m+1));
        return node;
    }
};
