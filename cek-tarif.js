document.addEventListener('DOMContentLoaded', function() {
    // Handle tab switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Di sini bisa ditambahkan logika untuk menampilkan konten tab yang sesuai
        });
    });

    // Handle report button
    const reportBtn = document.querySelector('.report-btn');
    if (reportBtn) {
        reportBtn.addEventListener('click', function() {
            // Implementasi fungsi report
            alert('Report feature will be implemented soon');
        });
    }

    // Handle chat widget
    const chatWidget = document.querySelector('.chat-widget');
    if (chatWidget) {
        chatWidget.addEventListener('click', function() {
            // Implementasi fungsi chat
            alert('Chat feature will be implemented soon');
        });
    }

    const cekTarifForm = document.getElementById('cekTarifForm');
    const detailInfo = document.getElementById('detailInfo');
    const cariTarifBtn = document.getElementById('cariTarifBtn');
    const pengirimInput = document.getElementById('pengirim');
    const penerimaInput = document.getElementById('penerima');
    const beratInput = document.getElementById('berat');

    // Data dummy untuk simulasi
    const validData = {
        pengirim: "Adrian Delmano Febrian",
        penerima: "Dzakwadhi Falah",
        berat: "3",
        detail: {
            alamatPengirim: "JNE Pedurangan, Semarang",
            alamatPenerima: "JNE Bojong, Pekalongan",
            barang: "Aksesoris Laptop",
            asuransi: "Ada",
            biayaAsuransi: "+3.000,00",
            layanan: "Ekspress CTC17",
            totalBiaya: "Rp. 18.000,00"
        }
    };

    cariTarifBtn.addEventListener('click', function() {
        // Validasi input
        if (validateInput()) {
            // Cek apakah data sesuai dengan data dummy
            if (isValidData()) {
                showDetailInfo();
            } else {
                alert('Data tidak ditemukan. Silakan cek kembali input Anda.');
            }
        }
    });

    function validateInput() {
        if (!pengirimInput.value || !penerimaInput.value || !beratInput.value) {
            alert('Semua field harus diisi');
            return false;
        }
        return true;
    }

    function isValidData() {
        return (
            pengirimInput.value.toLowerCase() === validData.pengirim.toLowerCase() &&
            penerimaInput.value.toLowerCase() === validData.penerima.toLowerCase() &&
            beratInput.value === validData.berat
        );
    }

    function showDetailInfo() {
        // Animasi fade out form
        cekTarifForm.classList.add('fade-out');
        
        setTimeout(() => {
            cekTarifForm.style.display = 'none';
            detailInfo.style.display = 'block';
            // Update content di detail info
            updateDetailInfo();
            // Animasi fade in detail
            detailInfo.classList.add('fade-in');
        }, 300);
    }

    function updateDetailInfo() {
        // Update semua informasi di detail info dengan data valid
        document.querySelector('.sender-name').textContent = validData.pengirim;
        document.querySelector('.sender-address').textContent = validData.detail.alamatPengirim;
        // ... update informasi lainnya ...
    }

    // Handle tombol kembali
    const backButton = document.querySelector('.back-btn');
    if (backButton) {
        backButton.addEventListener('click', function() {
            detailInfo.classList.add('fade-out');
            setTimeout(() => {
                detailInfo.style.display = 'none';
                cekTarifForm.style.display = 'block';
                cekTarifForm.classList.add('fade-in');
                // Reset form
                pengirimInput.value = '';
                penerimaInput.value = '';
                beratInput.value = '';
            }, 300);
        });
    }
}); 