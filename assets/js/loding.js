function showLoading() {
    var loading = document.querySelector('.loading');
    loading.style.display = 'flex'; // Menampilkan loading
    // Menghitung waktu muat gambar
    var img = new Image();
    var startTime = performance.now();
    img.onload = function () {
        var endTime = performance.now();
        var loadTime = endTime - startTime;
        // Menyesuaikan waktu loading berdasarkan kecepatan jaringan
        setTimeout(function () {
            loading.style.display = 'none'; // Menyembunyikan loading
        }, loadTime); // Menyesuaikan waktu loading dengan waktu muat gambar
    };
    img.src = 'assets/img/logo.png'; // Ganti dengan gambar atau sumber daya lain di halaman Anda
}

// Menampilkan loading saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    showLoading();
});