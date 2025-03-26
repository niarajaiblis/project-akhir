// Referensi elemen DOM
document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('loginSection');
    const signupSection = document.getElementById('signupSection');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');

    // Default: Tampilkan login, sembunyikan signup
    if (loginSection && signupSection) {
        signupSection.style.display = 'none';
        
        // Switch ke form signup
        switchToSignup.addEventListener('click', function() {
            loginSection.style.display = 'none';
            signupSection.style.display = 'block';
        });

        // Switch ke form login
        switchToLogin.addEventListener('click', function() {
            signupSection.style.display = 'none';
            loginSection.style.display = 'block';
        });

        // Handle signup form submission
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Validasi password
            if (password !== confirmPassword) {
                alert('Password tidak cocok!');
                return;
            }

            // Simpan data user ke localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // Cek apakah email sudah terdaftar
            if (users.find(user => user.email === email)) {
                alert('Email sudah terdaftar, silakan gunakan email lain!');
                return;
            }

            // Tambahkan user baru
            users.push({ email, password });
            localStorage.setItem('users', JSON.stringify(users));
            
            alert('Pendaftaran berhasil! Silakan login.');
            
            // Arahkan ke halaman login
            signupSection.style.display = 'none';
            loginSection.style.display = 'block';
            
            // Reset form
            signupForm.reset();
        });

        // Handle login form submission
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Ambil data user dari localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // Cek kredensial login
            const user = users.find(user => user.email === email && user.password === password);
            
            if (user) {
                // Login berhasil
                alert('Login berhasil! Selamat datang!');
                
                // Simpan status login
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', email);
                
                // Arahkan ke landing page
                window.location.href = 'landing.html';
            } else {
                // Login gagal
                alert('Email atau password salah!');
            }
        });
    }

    // Cek jika user sudah login
    window.addEventListener('load', function() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        
        if (isLoggedIn === 'true' && window.location.pathname.includes('index.html')) {
            // Jika sudah login dan berada di halaman index, arahkan ke landing
            window.location.href = 'landing.html';
        } else if (!isLoggedIn && window.location.pathname.includes('landing.html')) {
            // Jika belum login dan mencoba akses landing, arahkan ke index
            window.location.href = 'index.html';
        }
    });
}); 