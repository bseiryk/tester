// function calc(n) {
//   if (n === 0 || n === 1) return n;
//   return calc(n - 2) + calc(n - 1);
// }

function log(n, timer) {
  setTimeout(() => {
    console.log("n", n);
  }, timer);
}

function calc(n) {
  const store = {};
  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      store[i] = i;
      log(i, i === 0 ? i : store[i - 1]);
    } else {
      const val = store[i - 1] + store[i - 2];
      store[i] = val;
      log(val, store[i - 1]);
    }
  }
}

calc(25);
