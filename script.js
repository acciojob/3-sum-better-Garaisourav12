function threeSum(arr, target) {
// write your code here
	arr.sort((a, b) => a-b);
	let close;
	for(let i = 0; i<arr.length-2; i++){
		let temp = arr[i] + twosum(arr, i+1, target-arr[i]);
		if(Math.abs(temp) < diff){
			close = temp;
		}
	}
	return temp;
}

module.exports = threeSum;
