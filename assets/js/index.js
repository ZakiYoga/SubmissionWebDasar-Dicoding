const navbar = document.querySelector('.header-navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Ubah angka 50 sesuai dengan posisi scroll yang Anda inginkan
        navbar.style.backgroundColor = 'rgba(20, 108, 148, 0.9)'; // Ganti warna latar belakang navbar saat digulir
    } else {
        navbar.style.backgroundColor = 'transparent'; // Buat navbar transparan saat di atas
    }
});
