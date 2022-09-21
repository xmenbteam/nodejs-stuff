function foreverPending() {
  return new Promise((_resolve, _reject) => {
    console.log("Woops");
    return _resolve("Hey dummy");
  });
}
await foreverPending(); // (A)
