document.addEventListener('DOMContentLoaded', function() {
    // Cek status login
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentUser = localStorage.getItem('currentUser');
    
    const beforeLogin = document.getElementById('beforeLogin');
    const afterLogin = document.getElementById('afterLogin');
    const userEmail = document.getElementById('userEmail');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (isLoggedIn === 'true' && currentUser) {
        // Tampilkan UI untuk user yang sudah login
        beforeLogin.style.display = 'none';
        afterLogin.style.display = 'flex';
        userEmail.textContent = currentUser;
    } else {
        // Tampilkan UI untuk user yang belum login
        beforeLogin.style.display = 'flex';
        afterLogin.style.display = 'none';
    }

    // Handle logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    }

    // Tambahkan event listener untuk dropdown mobile jika diperlukan
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const menu = this.nextElementSibling;
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Tambahkan event listener untuk service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('span').textContent;
            if (serviceName === 'Cek Tarif') {
                window.location.href = 'cek-tarif.html';
            }
            // Tambahkan logika untuk layanan lain jika diperlukan
        });
    });
}); 

