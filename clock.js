
    let countdownInterval;

    function startCountdown() {
      clearInterval(countdownInterval); // Clear any existing timer

      const input = document.getElementById('secondsInput').value;
      let timeLeft = parseInt(input);

      const display = document.getElementById('timerDisplay');

      if (isNaN(timeLeft) || timeLeft <= 0) {
        display.textContent = "Please enter a positive number of seconds.";
        return;
      }

      display.textContent = formatTime(timeLeft);

      countdownInterval = setInterval(() => {
        timeLeft--;
        display.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
          clearInterval(countdownInterval);
          alert("Time's up!");
          display.textContent = "Time's up!";
        }
      }, 1000);
    }

    // Helper function to format seconds as MM:SS
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }