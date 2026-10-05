# Website PT Dunia Kreasi Digital

Website company profile dibuat dengan [Astro](https://astro.build) (hasil akhirnya halaman statis, cepat, dan ramah SEO). Siap di-deploy ke Vercel.

Halaman: Beranda (`/`), Layanan (`/layanan`), Proyek (`/proyek`), Kontak (`/kontak`), dan halaman 404.

## Menjalankan di komputer

Butuh Node.js versi 20 atau lebih baru.

```bash
npm install
npm run dev       # buka http://localhost:4321
npm run build     # hasil build ada di folder dist/
npm run preview   # mencoba hasil build
```

## Deploy ke Vercel

1. Unggah proyek ini ke repositori GitHub (atau GitLab/Bitbucket).
2. Di Vercel, pilih **Add New > Project**, lalu impor repositorinya.
3. Vercel mengenali Astro otomatis. Biarkan pengaturan bawaan (Build Command `npm run build`, Output Directory `dist`), lalu klik **Deploy**.
4. Untuk memakai domain sendiri: **Project > Settings > Domains**, lalu ikuti petunjuk DNS dari Vercel.
5. Setelah domain aktif, buka `astro.config.mjs` dan `public/robots.txt`, lalu pastikan alamat `https://duniakreasidigital.com` sudah sesuai dengan domain yang dipakai. Alamat ini dipakai untuk sitemap, canonical, dan gambar saat tautan dibagikan.

Alternatif: dengan Vercel CLI, jalankan `npx vercel` dari folder proyek.

## Mengubah isi

Hampir semua teks ada di folder `src/data/`, jadi tidak perlu menyentuh komponen:

| File | Isinya |
|---|---|
| `src/data/site.ts` | nama, tagline, email, alamat, angka statistik, menu |
| `src/data/content.ts` | visi/misi, nilai, layanan, keunggulan, proses kerja, teknologi, model kerja sama |
| `src/data/projects.ts` | empat proyek selain ORADO dan studi kasus ORADO |
| `src/pages/*.astro` | teks dan susunan tiap halaman |
| `src/styles/global.css` | warna (di bagian `:root`), ukuran huruf, dan tata letak |

Gambar ada di `src/assets/` dan otomatis dioptimalkan saat build. Logo ada di `src/assets/logo.png`. Ikon tab dan gambar pratinjau tautan ada di `public/` (`favicon.png`, `apple-touch-icon.png`, `og-image.png`).

## Yang perlu diganti sebelum rilis

- **Nama dan tampilan proyek** di `src/data/projects.ts` (Sinergi ERP, Sinergi Mobile, Nusa Brain Arena, Reservasi Resto) masih contoh. Ganti dengan nama dan screenshot proyek yang sebenarnya.
- **Perjalanan perusahaan** (tahun 2022, 2023, 2025, 2026) di `src/data/content.ts` masih perkiraan. Sesuaikan dengan sejarah yang sebenarnya.
- **Ilustrasi hero** di beranda (`src/components/HeroVisual.astro`) berisi contoh kode dan data klasemen. Ganti isinya bila ingin.
- **Daftar teknologi** di `src/data/content.ts`: hapus yang tidak dipakai tim (misalnya Google Cloud atau Azure).
- **Testimoni** sengaja tidak dimasukkan. Tambahkan bila sudah ada kutipan asli dari klien.
- **Nomor WhatsApp dan jam kerja** belum ada. Tambahkan di `src/data/site.ts` dan `src/pages/kontak.astro` bila diperlukan.

## Formulir kontak

Secara bawaan, tombol "Kirim lewat email" membuka aplikasi email pengunjung dengan pesan yang sudah terisi.

Agar pesan terkirim langsung tanpa membuka aplikasi email, pakai layanan formulir (misalnya [Formspree](https://formspree.io)):

1. Buat formulir di layanan tersebut dan salin alamat endpoint-nya.
2. Di Vercel: **Settings > Environment Variables**, tambahkan `PUBLIC_FORM_ENDPOINT` dengan alamat endpoint itu, lalu deploy ulang.
3. Untuk mencoba di komputer, salin `.env.example` menjadi `.env` dan isi nilainya.

Bila variabel ini terisi, formulir mengirim data lewat JSON dan menampilkan pesan sukses atau gagal di halaman. Kolom tersembunyi `website` dipakai sebagai jebakan bot sederhana.

## Struktur proyek

```
src/
  assets/       gambar (dioptimalkan otomatis)
  components/   Header, Footer, kartu, diagram proses, dll.
  data/         isi website (teks dan daftar)
  layouts/      BaseLayout (head, SEO, header, footer)
  pages/        index, layanan, proyek, kontak, 404
  styles/       global.css
public/         favicon, gambar OG, robots.txt
vercel.json     header keamanan dan cache
```
