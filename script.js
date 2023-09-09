function twosum(arr, n, j, target){
	let l = j;
	let r = n-1;
	let diff = Number.MAX_VALUE;
	while(l<r){
		let sum = arr[l] + arr[r];
		if(sum==target) return sum;
		if(sum<target){
			if(Math.abs(sum-target)<diff){
				diff = Math.abs(sum-target);
				temp = sum;
				l++;
			}
		}
		else{
			if(Math.abs(sum-target)<diff){
				diff = Math.abs(sum-target);
				temp = sum;
				r++;
			}
		}
	}
	return sum;
}

function threeSum(arr, target) {
// write your code here
	arr.sort((a, b) => a-b);
	let close;
	let n = arr.length;
	let diff = Number.MAX_VALUE;
	for(let i = 0; i<n-2; i++){
		let temp = arr[i] + twosum(arr, n, i+1, target-arr[i]);
		if(Math.abs(temp) < diff){
			close = temp;
		}
	}
	return temp;
}

module.exports = threeSum;
