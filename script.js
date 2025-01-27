//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("ip").value;
  const outputDiv = document.getElementById("output");

  // Validate the input
  const number = parseFloat(input);
  if (isNaN(number)) {
    outputDiv.textContent = "Please enter a valid number.";
    return;
  }

  // Helper function to create a promise with a delay
  const delayedPromise = (value, delay) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(value), delay);
    });

  // Start the promise chain
  delayedPromise(number, 2000)
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayedPromise(result * 2, 1000);
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayedPromise(result - 3, 1000);
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayedPromise(result / 2, 1000);
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayedPromise(result + 10, 1000);
    })
    .then((finalResult) => {
      outputDiv.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      // Handle any errors in the promise chain
      outputDiv.textContent = `An error occurred: ${error}`;
    });
});
