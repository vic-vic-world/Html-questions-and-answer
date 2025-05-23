
    function factorial(n) {
      if (n < 0) return undefined;
      if (n === 0 || n === 1) return 1;

      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }

    function calculateFactorial() {
      const input = document.getElementById('numberInput').value;
      const number = parseInt(input);

      const resultDiv = document.getElementById('result');

      if (isNaN(number) || number < 0) {
        resultDiv.textContent = "Please enter a valid non-negative integer.";
        return;
      }

      const fact = factorial(number);
      resultDiv.textContent = `${number}! = ${fact}`;
    }
