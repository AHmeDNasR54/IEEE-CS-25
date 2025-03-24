function sevenBoom(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        while (num != 0) {
            if (num % 10 == 7) return "Boom!";
            num = Math.floor(num / 10); 
        }
    }
    return "there is no 7 in the array";
}
