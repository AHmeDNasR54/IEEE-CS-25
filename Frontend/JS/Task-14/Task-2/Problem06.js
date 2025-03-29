function consecutiveSum(n) {
    if (n < 3) return false;
  
    return (n & (n - 1)) !== 0;
  }