function checkPassword() {
    const input = document.getElementById('password').value;
    const error = document.getElementById('error-message');
  
    if (input === 'admin123') {
      window.location.href = 'admin.html';
    } else if (input === 'user123') {
      window.location.href = 'user.html';
    } else {
      error.textContent = 'Incorrect password. Try again.';
    }
  }
  