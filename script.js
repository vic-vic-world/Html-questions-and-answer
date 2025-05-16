
    function calculateArea() {
      const width = document.getElementById('width').value;
      const height = document.getElementById('height').value;

      if (width && height) {
        const area = width * height;
        document.getElementById('result').innerText = `Area: ${area}`;
      } else {
        document.getElementById('result').innerText = 'Please enter both width and height.';
      }
    }
