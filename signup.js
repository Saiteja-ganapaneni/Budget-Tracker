document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

        if (!email || !username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    
    alert('Account created successfully!');
    
    
    window.location.href = 'login.html';  
});
