function decompose(n: number): number[] | null {
  function decomposeHelper(
    remain: number,
    next: number,
    path: number[]
  ): number[] | null {
    if (remain === 0) {
      return path;
    }
    for (let i = next; i > 0; i--) {
      const square = i * i;
      if (remain - square >= 0) {
        const result = decomposeHelper(remain - square, i - 1, [i, ...path]);
        if (result) {
          return result;
        }
      }
    }
    return null;
  }

  return decomposeHelper(n * n, n - 1, []);
}

console.log(decompose(11));
console.log(decompose(50));
