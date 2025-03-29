function isOmnipresent(arr, val) {
	return arr.reduce((acc, subArr) => acc && subArr.includes(val), true);

}