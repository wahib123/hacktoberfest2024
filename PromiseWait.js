function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

// Usage example:
wait(3).then(() => {
  console.log("Resolved after 3 seconds");
});
