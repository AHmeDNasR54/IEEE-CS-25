function minMax(arr) {
	let min=arr[0],max=arr[0];
	for(let i =0;i<arr.length;i++)
		{
			if(arr[i]>max)
				max=arr[i];
			if(arr[i]<min)
				min=arr[i];
		}
	let arr2=[min,max]
	return arr2;
}