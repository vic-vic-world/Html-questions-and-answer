function isPrime(number) {
      if (number <= 1) return false;
      if (number === 2) return true;
      if (number % 2 === 0) return false;

      for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) return false;
      }
      return true;
    }

    function checkPrime() {
      const input = document.getElementById("numberInput").value;
      const number = parseInt(input);

      const resultDiv = document.getElementById("result");

      if (isNaN(number)) {
        resultDiv.textContent = "Please enter a valid number.";
      } else {
        const isPrimeResult = isPrime(number);
        resultDiv.textContent = isPrimeResult 
          ? `${number} is a prime number.` 
          : `${number} is not a prime number.`;
      }
    }