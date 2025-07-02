# Lapak Nusantara - Frontend

![Lapak Nusantara Banner](https://via.placeholder.com/1280x640.png?text=Lapak+Nusantara+-+Frontend)
Repositori ini berisi kode untuk sisi **frontend** dari platform marketplace **Lapak Nusantara**. Dibangun dengan [Next.js](https://nextjs.org/) untuk menyajikan antarmuka pengguna (UI) yang modern, cepat, dan interaktif.

## 🔗 Repositori Terkait

* **Backend (API):** [Lapak Nusantara - Backend](https://github.com/your-username/lapak-nusantara-backend) *(<- Ganti dengan link repo backend Anda)*

## 🖥️ Tampilan (Screenshots)

![Screenshot App](https://via.placeholder.com/800x500.png?text=Tampilan+Homepage)

## 🚀 Stack Teknologi

* **Framework:** [**Next.js**](https://nextjs.org/)
* **Bahasa:** TypeScript
* **Styling:** [**Tailwind CSS**](https://tailwindcss.com/)
* **Manajemen State:** Zustand / Redux Toolkit
* **Pemanggilan API:** SWR / React Query
* **Manajemen Form:** React Hook Form

## ✨ Fitur Utama

* Autentikasi Pengguna (Login & Registrasi)
* Pencarian Produk dengan Filter Lanjutan
* Halaman Detail Produk
* Keranjang Belanja
* Proses Checkout & Pembayaran
* Dashboard Pengguna (Profil, Riwayat Pesanan)

## ⚙️ Instalasi & Menjalankan Proyek

Pastikan Anda sudah menjalankan server backend terlebih dahulu sebelum menjalankan frontend.

### 1. Prasyarat

* Node.js (v18 atau lebih baru)
* NPM / Yarn

### 2. Langkah Instalasi

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/your-username/lapak-nusantara-frontend.git](https://github.com/your-username/lapak-nusantara-frontend.git)
    cd lapak-nusantara-frontend
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Salin dan atur file environment:**
    ```bash
    cp .env.local.example .env.local
    ```
    Buka file `.env.local` dan atur variabel `NEXT_PUBLIC_API_URL` agar menunjuk ke alamat server backend Anda.
    ```env
    NEXT_PUBLIC_API_URL=[http://127.0.0.1:8000](http://127.0.0.1:8000)
    ```

4.  **Jalankan server development:**
    ```bash
    npm run dev
    # atau
    yarn dev
    ```

5.  Buka browser dan akses [http://localhost:3000](http://localhost:3000).

## 🤝 Kontribusi

Kontribusi sangat kami harapkan! Silakan fork repositori ini, buat branch baru, dan ajukan _Pull Request_.

## 📄 Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](LICENSE).

---

Created by Geusan Edurais Aria Daffa