/* ==========================================
   LOGIKA INTERAKTIVITAS SLIDER PESAN
   ========================================== */

// Mengambil elemen-elemen penting dari DOM HTML
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dotsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;
const totalSlides = slides.length;

/**
 * 1. Fungsi untuk membuat indikator titik (dots) secara dinamis 
 *    berdasarkan jumlah slide yang tersedia.
 */
function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        
        // Menambahkan event click pada setiap dot agar bisa langsung lompat ke slide tertentu
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }
}

/**
 * 2. Fungsi untuk memperbarui tampilan slide aktif 
 *    serta mengubah status titik indikator.
 */
function updateSlider() {
    // Hapus kelas 'active' dari semua slide dan dot
    slides.forEach((slide) => slide.classList.remove('active'));
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot) => dot.classList.remove('active'));

    // Tambahkan kelas 'active' pada slide dan dot yang sedang dipilih
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // Mengubah teks tombol 'Selanjutnya' menjadi 'Selesai' jika sudah di slide terakhir
    if (currentSlide === totalSlides - 1) {
        nextBtn.textContent = 'Selesai ❤️';
    } else {
        nextBtn.textContent = 'Selanjutnya';
    }
}

/**
 * 3. Fungsi untuk berpindah slide (maju / mundur)
 * @param {number} direction - Nilai 1 untuk maju, -1 untuk mundur
 */
function changeSlide(direction) {
    currentSlide += direction;

    // Jika melewati slide terakhir atau pertama, lakukan perulangan (looping)
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Kembali ke slide pertama
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Lompat ke slide terakhir
    }

    updateSlider();
}

/**
 * 4. Fungsi untuk melompat langsung ke indeks slide tertentu
 * @param {number} index - Indeks tujuan slide
 */
function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Inisialisasi pembuatan titik indikator saat pertama kali halaman dimuat
createDots();
