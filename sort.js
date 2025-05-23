
    function sortNumbers() {
      const input = document.getElementById('numberInput').value;
      if (!input.trim()) {
        document.getElementById('result').textContent = "Please enter some numbers.";
        return;
      }

      // Split input by comma, trim spaces, convert to numbers
      let numbers = input.split(',')
                         .map(num => num.trim())
                         .filter(num => num !== '')
                         .map(Number);

      // Check if all are valid numbers
      if (numbers.some(isNaN)) {
        document.getElementById('result').textContent = "Please enter valid numbers only.";
        return;
      }

      // Sort ascending
      numbers.sort((a, b) => a - b);

      document.getElementById('result').textContent = `Sorted numbers: ${numbers.join(', ')}`;
    }

