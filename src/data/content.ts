import type { IconName } from './icons';

export const misi = [
  'Membangun solusi software yang tepat guna dan mudah diadopsi.',
  'Menghadirkan inovasi berbasis AI yang praktis, bukan sekadar tren.',
  'Menjaga kualitas, keamanan, dan transparansi di setiap tahap proyek.',
  'Menumbuhkan talenta teknologi lokal yang berdaya saing.',
];

export const nilai: { icon: IconName; title: string; text: string }[] = [
  { icon: 'users', title: 'Kolaborasi', text: 'Klien adalah bagian dari tim. Kami bekerja bersama, bukan sekadar menerima brief.' },
  { icon: 'shield', title: 'Kualitas', text: 'Kode rapi, pengujian berlapis, dan hasil yang siap dipakai sejak hari pertama.' },
  { icon: 'eye', title: 'Transparansi', text: 'Progres, biaya, dan risiko disampaikan terbuka, tanpa kejutan di belakang.' },
  { icon: 'sparkle', title: 'Inovasi', text: 'Teknologi baru kami pakai bila menyelesaikan masalah nyata.' },
];

export const layanan: { icon: IconName; title: string; text: string }[] = [
  { icon: 'web', title: 'Web Application', text: 'Portal, dashboard, dan platform web yang cepat, aman, dan siap bertumbuh bersama bisnis Anda.' },
  { icon: 'mobile', title: 'Mobile App', text: 'Aplikasi iOS, Android, dan cross-platform dengan pengalaman pengguna yang mulus.' },
  { icon: 'grid', title: 'Enterprise & ERP', text: 'Satukan keuangan, stok, SDM, dan operasional dalam satu sistem yang saling terhubung.' },
  { icon: 'game', title: 'Game & AI', text: 'Game interaktif dan fitur cerdas berbasis AI yang meningkatkan keterlibatan pengguna.' },
  { icon: 'pen', title: 'UI/UX Design', text: 'Antarmuka yang mudah dipakai, dirancang dan diuji bersama pengguna nyata.' },
  { icon: 'cloud', title: 'Cloud & DevOps', text: 'Infrastruktur andal dengan deployment otomatis dan pemantauan berkelanjutan.' },
  { icon: 'link', title: 'Integrasi API & Sistem', text: 'Hubungkan aplikasi, pembayaran, dan data tanpa input ganda yang memakan waktu.' },
  { icon: 'shield', title: 'QA, Maintenance & Support', text: 'Pengujian menyeluruh sebelum rilis, dan dukungan purna jual setelahnya.' },
];

export const keunggulan = [
  { title: 'Tim berpengalaman lintas industri', text: 'Pengalaman membangun platform olahraga, sistem ERP, aplikasi mobile, dan game memberi kami sudut pandang yang luas.' },
  { title: 'Kualitas dan keamanan terjaga', text: 'Kode selalu ditinjau dan diuji berlapis, dengan keamanan aplikasi dipertimbangkan sejak tahap desain.' },
  { title: 'Harga dan komunikasi transparan', text: 'Estimasi biaya rinci, laporan progres berkala, dan demo di setiap akhir sprint.' },
  { title: 'Garansi dan dukungan purna jual', text: 'Perbaikan bug selama masa garansi serta layanan maintenance setelah produk berjalan.' },
  { title: 'Kemampuan AI yang praktis', text: 'Kami menerapkan AI pada kasus yang terbukti memberi nilai, dari game hingga otomasi proses.' },
  { title: 'Mitra jangka panjang', text: 'Kami terlibat dari ide hingga evolusi produk, bukan berhenti saat serah terima.' },
];

export const proses = [
  { title: 'Discovery & Analisis', text: 'Menggali tujuan bisnis, pengguna, dan masalah yang ingin diselesaikan.' },
  { title: 'Perencanaan & Estimasi', text: 'Menyusun lingkup, jadwal, dan anggaran yang realistis.' },
  { title: 'UI/UX Design', text: 'Wireframe dan prototipe interaktif untuk divalidasi sebelum coding.' },
  { title: 'Development', text: 'Pengembangan per sprint dengan demo dan umpan balik rutin.' },
  { title: 'Testing & QA', text: 'Uji fungsi, performa, dan keamanan sebelum rilis.' },
  { title: 'Deployment', text: 'Peluncuran terencana dengan pendampingan tim Anda.' },
  { title: 'Maintenance & Support', text: 'Pemantauan, perbaikan, dan pengembangan fitur lanjutan.' },
];

// Catatan: sesuaikan daftar ini dengan teknologi yang benar-benar dipakai tim
// (mis. hapus Google Cloud / Azure bila tidak dipakai).
export const teknologi = [
  { group: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'Nuxt', 'Flutter', 'React Native'] },
  { group: 'Backend', items: ['Node.js', 'Laravel', 'Go', 'Python', 'Java'] },
  { group: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'CI/CD'] },
  { group: 'Game & AI', items: ['Unity', 'Cocos Creator', 'TensorFlow', 'LLM API', 'Computer Vision'] },
  { group: 'Desain & Kolaborasi', items: ['Figma', 'Git', 'Jira', 'Slack'] },
];

export const model = [
  { title: 'Fixed Price', text: 'Lingkup, jadwal, dan biaya disepakati di awal.', points: ['Ideal untuk proyek dengan kebutuhan jelas', 'Anggaran pasti dan mudah direncanakan', 'Pembayaran bertahap sesuai progres pekerjaan'] },
  { title: 'Time & Material', text: 'Biaya mengikuti waktu dan sumber daya yang dipakai.', points: ['Ideal untuk kebutuhan yang terus berkembang', 'Prioritas bisa diubah tiap sprint', 'Biaya dilaporkan terbuka'] },
  { title: 'Dedicated Team', text: 'Tim khusus yang bekerja penuh untuk produk Anda.', points: ['Ideal untuk produk jangka panjang', 'Tim terintegrasi dengan alur kerja Anda', 'Skala tim dapat disesuaikan'] },
  { title: 'Maintenance Retainer', text: 'Dukungan berkala setelah produk berjalan.', points: ['Ideal untuk menjaga stabilitas sistem', 'Perbaikan bug dan pembaruan rutin', 'Respons cepat sesuai kesepakatan layanan (SLA)'] },
];

export const layananForm = ['Web Application', 'Mobile App', 'Enterprise & ERP', 'Game & AI', 'UI/UX Design', 'Lainnya'];
