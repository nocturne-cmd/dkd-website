import erp from '../assets/sinergi-erp.jpg';
import mobile from '../assets/sinergi-mobile.jpg';
import game from '../assets/nusa-brain-arena.jpg';
import resto from '../assets/reservasi-resto.jpg';

// Catatan: nama dan tampilan keempat proyek ini masih contoh (placeholder).
// Ganti dengan nama dan gambar proyek yang sebenarnya.
export const proyekLain = [
  { image: erp, alt: 'Tampilan dashboard Sinergi ERP', title: 'Sinergi ERP', tag: 'Software ERP', text: 'Keuangan, stok, dan operasional dalam satu sistem terpadu.' },
  { image: mobile, alt: 'Tampilan aplikasi mobile Sinergi Mobile', title: 'Sinergi Mobile', tag: 'Aplikasi mobile ERP', text: 'Pendamping ERP untuk tim lapangan: data tersinkron real-time.' },
  { image: game, alt: 'Tampilan game Nusa Brain Arena', title: 'Nusa Brain Arena', tag: 'Game berbasis AI', text: 'Game strategi dengan lawan AI yang adaptif terhadap gaya bermain.' },
  { image: resto, alt: 'Tampilan aplikasi web Reservasi Resto', title: 'Reservasi Resto', tag: 'Web application', text: 'Antrian dan reservasi meja restoran berbasis web, tanpa menunggu di tempat.' },
];

// Studi kasus ORADO. Tantangan dan solusi ditulis ringkas berdasarkan deskripsi proyek;
// sesuaikan dengan detail yang sebenarnya (dan tambahkan angka hasil bila ada data nyata).
export const studiKasusOrado = {
  title: 'Studi kasus: membuka arena yang setara untuk atlet domino Indonesia',
  klien:
    'ORADO (Federasi Olahraga Domino Nasional), organisasi domino pertama di Indonesia yang diakui secara resmi dan kini menjadi anggota resmi KONI Pusat. Bidang: olahraga dan komunitas.',
  tantangan:
    'Atlet tersebar di seluruh nusantara, sementara akses ke kompetisi resmi, pendataan atlet, dan peringkat belum terpusat dan setara.',
  solusi:
    'Platform web (Vue.js dan Nuxt) untuk registrasi atlet, pengelolaan turnamen, dan klasemen nasional, dilengkapi game buatan Cocos Creator. Seluruhnya berjalan di AWS.',
  teknologi: ['Vue.js', 'Nuxt', 'Cocos Creator', 'AWS'],
  hasil: [
    { title: 'Satu platform', text: 'untuk atlet dari Sabang sampai Merauke' },
    { title: 'Data terpusat', text: 'atlet, turnamen, dan peringkat dalam satu sistem' },
    { title: 'Peluang setara', text: 'akses kompetisi yang adil bagi atlet daerah' },
  ],
};
