

function threeSum(arr, target) {
// write your code here
	// arr.sort((a, b) => a-b);
	// let close;
	// let n = arr.length;
	// let diff = Number.MAX_VALUE;
	// for(let i = 0; i<n-2; i++){
	// 	let temp = arr[i] + twosum(arr, n, i+1, target-arr[i]);
	// 	if(Math.abs(temp) < diff){
	// 		close = temp;
	// 	}
	// }
	// return close;
	if (nums.length < 3) {
    return null; // Not enough elements to form a sum of three integers
  }

  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
