# Photo Receipt by Lyven — Design Direction

Status: rancangan UI v1 untuk planning, belum implementasi.  
Tanggal: 7 Oktober 2026.  
Platform: landing page Next.js yang sudah disiapkan melalui Antigravity.  
Warna dasar wajib: `#FEF6EE`.  
Prioritas: clean, nyaman dilihat, punya karakter, dan optimal di mobile.

## 1. Tujuan website

Website memperkenalkan Photo Receipt sebagai produk Lyven, menampilkan hasil foto dan desain frame, serta membantu pengunjung memilih paket sewa. Pengunjung perlu memahami produk, kelengkapan alat, pengalaman penggunaan, dan harga tanpa membaca terlalu banyak.

Target awal: pemilik café, studio, penyelenggara event, wedding, pop-up, dan brand activation. Ini asumsi positioning untuk rancangan pertama, bukan daftar pelanggan yang sudah ada.

Konversi utama: memilih paket lalu menghubungi Lyven melalui WhatsApp. Istilah subscription pada MVP berarti paket sewa berdurasi tertentu; belum ada pembayaran atau perpanjangan otomatis.

## 2. Dasar keputusan dan referensi

### Keputusan dari user

- UI harus clean dan asik untuk dilihat.
- Referensi: [Ghia](https://drinkghia.com/) dan [Makmur Jaya Coffee](https://makmurjayacoffee.com/).
- Background utama `#FEF6EE`.
- Website berupa landing page dengan tampilan mobile wajib.
- Konten mencakup produk, galeri kreatif seperti mading, fitur, frame, tiga paket sewa, serta pilihan vertikal dan landscape.
- Perangkat berupa satu setup: tablet, printer, box, perlengkapan pendukung, dan stand.
- Harga boleh berupa data demo.

### Cara menggunakan referensi

Kedua URL ditinjau pada 7 Oktober 2026 melalui konten halaman yang tersedia. Ghia menampilkan kategori produk, bundle, dan subscription; Makmur Jaya menampilkan koleksi kopi serta navigasi berbasis gambar/ilustrasi. Rincian tampilan dan animasi perlu diperiksa lagi secara visual saat implementasi.

| Referensi | Inspirasi untuk Lyven |
| --- | --- |
| Ghia | Produk sebagai pusat cerita; koleksi yang mudah dijelajahi; paket dipresentasikan sebagai pilihan produk lifestyle. |
| Makmur Jaya Coffee | Suasana brand café; detail ilustratif kecil; pengalaman menjelajah yang punya karakter. |
| Photo Receipt sendiri | Kertas receipt, nomor urut, garis putus-putus, caption mono, dan galeri foto yang ditempel. |

Layout, warna aksen, font, dan interaksi di bawah adalah usulan orisinal untuk Lyven, bukan salinan atau pengukuran dari referensi. Jangan mengambil logo, foto, ilustrasi, atau copy milik kedua brand tersebut.

## 3. Konsep visual

**Warm, clean, playful.** Background hangat, tipografi jelas, foto besar, dan komposisi lega. Karakter playful muncul pada receipt, sedikit rotasi foto, tape kecil, serta caption yang terasa personal.

Bayangan halaman: seperti melihat brand café yang punya produk foto unik. Hero terasa rapi dan tenang; galeri menjadi bagian paling ekspresif; paket sewa dibaca seperti menu yang jelas.

Aturan visual:

- Satu fokus utama pada setiap section.
- Foto produk dan hasil print mendapat ruang lebih besar daripada dekorasi.
- Gunakan whitespace untuk memisahkan konten, dengan garis tipis bila perlu.
- Surface umumnya datar. Shadow hanya untuk foto/receipt yang perlu terasa sebagai benda fisik.
- Section galeri boleh lebih bebas; section harga dan informasi harus sangat rapi.
- Dekorasi tidak boleh menutupi headline, CTA, harga, atau wajah dalam foto.
- Hindari gradient dominan, glassmorphism, emoji dekoratif, terlalu banyak badge, dan setiap paragraf dibungkus card.
- Jangan mengubah bentuk perangkat Lyven dalam visual. Pakai foto produk asli ketika tersedia.

## 4. Sistem warna

Semua warna selain background merupakan usulan v1. Sesuaikan aksen dengan logo resmi jika aset brand sudah tersedia; pertahankan `#FEF6EE` sebagai dasar.

| Token | Nilai | Fungsi |
| --- | --- | --- |
| `background` | `#FEF6EE` | Background dominan halaman dan navbar. |
| `surface` | `#FFFDF9` | Kertas receipt, panel ringan, preview frame. |
| `foreground` | `#25231F` | Body, heading, dan ikon utama. |
| `muted` | `#665C54` | Caption dan teks sekunder yang tetap terbaca. |
| `accent` | `#6B2438` | CTA utama, link penting, heading terpilih. |
| `accent-hover` | `#521B2A` | Hover CTA utama. |
| `sage` | `#DCE6D5` | Panel lembut untuk product/setup. |
| `rose` | `#F0DDD8` | Detail tape atau aksen kecil di galeri. |
| `border` | `#D9C8B8` | Separator dekoratif dan garis tabel. |
| `control-border` | `#8A7566` | Outline kontrol yang perlu mudah dikenali. |

Pembagian kasar: 75% background/surface, 20% foto dan warna netral, 5% aksen. Gunakan maksimum satu background aksen besar pada satu rentang layar.

Teks normal harus mencapai rasio kontras minimum 4.5:1; teks besar dan batas kontrol penting minimum 3:1. Validasi pasangan warna pada implementasi. `border` dekoratif tidak menjadi satu-satunya penanda tombol atau pilihan aktif.

## 5. Tipografi

| Peran | Usulan font | Karakter |
| --- | --- | --- |
| Heading | Fraunces, weight 500–600 | Serif yang hangat dan ekspresif. |
| Body dan UI | Manrope, weight 400–600 | Bersih dan mudah dibaca. |
| Receipt/caption | Font monospace sistem | Menghubungkan UI dengan hasil thermal print. |

Font merupakan usulan, bukan identitas Lyven yang sudah ditetapkan. Batasi font eksternal pada dua keluarga. Jika tidak tersedia, gunakan fallback serif/sans-serif tanpa menunda layout.

| Elemen | Desktop | Mobile |
| --- | --- | --- |
| Hero heading | 72–88 px | 40–48 px |
| Section heading | 44–56 px | 30–36 px |
| Subheading | 24–28 px | 20–24 px |
| Body | 16–18 px | 16 px |
| Caption/label | 12–14 px | 12–14 px |

Heading line-height 1.05–1.15; body 1.5–1.7. Paragraf maksimal sekitar 55–65 karakter per baris. Gunakan uppercase hanya untuk label pendek, bukan paragraf. Harga gunakan angka tabular agar mudah dibandingkan.

## 6. Grid, spacing, dan komponen

- Lebar konten maksimal 1200 px, rata tengah.
- Desktop: grid 12 kolom, gutter 24 px, padding horizontal 40–64 px.
- Tablet: grid 8 kolom, padding 24–32 px.
- Mobile: grid 4 kolom, padding 20 px; pada 320 px boleh 16 px.
- Jarak antar-section: 96–120 px desktop, 56–72 px mobile.
- Spacing dasar: 4, 8, 12, 16, 24, 32, 48, 64, 96 px.
- Radius foto/panel: 8–16 px. Kertas receipt hampir siku, sekitar 2–4 px.
- Tombol primary: burgundy, teks `#FEF6EE`, radius pill, tinggi minimal 48 px.
- Tombol secondary: transparan, outline jelas, warna teks burgundy.
- Link tekstual: underline saat hover/focus; jangan hanya mengandalkan perubahan warna.
- Target sentuh minimal 44 × 44 px. Focus ring harus terlihat.
- Nomor section opsional: `#001`, `#002`, dan seterusnya, ukuran kecil dengan font mono.

## 7. Urutan landing page

Navbar → Hero → Product & Full Setup → How It Works → The Moments Wall → Frame Collection → Rental Menu → Custom Branding → FAQ → Final CTA & Footer.

Use cases cukup menjadi caption foto dan kalimat singkat di galeri. Portrait/landscape masuk di Product dan Rental Menu. Ini menjaga halaman tetap ringkas sambil mencakup kebutuhan utama.

### 7.1 Navbar

Desktop: logo Lyven di kiri; Produk, Galeri, Frame, Paket, FAQ di tengah/kanan; tombol **Tanya Sewa** di ujung kanan.

Mobile: logo, tombol kecil **Sewa**, dan menu hamburger. Menu membuka panel sederhana berisi anchor section. Setelah link dipilih, tutup panel dan pindahkan fokus secara tepat.

Navbar sticky dengan background `#FEF6EE`; setelah scroll, tambahkan border bawah tipis. Tinggi sekitar 80 px desktop dan 64 px mobile. Beri offset pada anchor agar heading tidak tertutup navbar.

### 7.2 Hero — produk langsung dikenali

**Headline:** “Momen kecil. Kenangan yang bisa dibawa pulang.”  
**Subcopy:** “Photo Receipt by Lyven mengubah pose favoritmu jadi foto bergaya receipt. Satu setup lengkap untuk café, event, dan ruang kreatifmu.”  
**CTA utama:** Lihat Paket Sewa → `#paket`.  
**CTA kedua:** Lihat Hasil Foto → `#galeri`.

Desktop: split layout sekitar 5 kolom copy dan 7 kolom visual. Produk besar di kanan, terlihat utuh termasuk stand. Dua receipt kecil boleh berada di sekitarnya; keduanya berada dalam area visual dan tidak menutupi copy. Beri label kecil “PHOTO RECEIPT / BY LYVEN”.

Mobile: headline → subcopy → CTA → gambar produk. Produk tetap terlihat di bagian awal halaman tanpa memaksa tinggi hero 100vh. Kedua CTA boleh bertumpuk pada layar sempit.

Background `#FEF6EE`. Hindari banner promo, autoplay video, atau carousel hero. Jika foto belum tersedia, gunakan placeholder dengan label “Foto produk menyusul”, bukan render mesin rekaan.

### 7.3 Product & Full Setup — satu setup lengkap

**Heading:** “Semua sudah dalam satu setup.”  
**Copy:** “Tablet, printer, box, perlengkapan pendukung, dan stand—siap menjadi sudut foto di tempatmu.”

Desktop: foto produk besar di kiri, daftar kelengkapan di kanan. Mobile: foto dahulu, lalu daftar ringkas dua kolom; turun menjadi satu kolom bila teks tidak muat.

Kelengkapan terkonfirmasi dari brief: tablet, printer, box, stand, dan perlengkapan pendukung. Kabel/adaptor, akses aplikasi, serta jatah kertas merupakan detail demo yang harus dikonfirmasi sebelum menjadi klaim paket final.

Tambahkan kontrol **Vertikal / Landscape** untuk mengganti visual perangkat. Tampilkan dua foto asli sesuai varian; jangan sekadar memutar foto yang sama. Jika aset varian belum ada, tampilkan placeholder terpisah.

Pada tahap desain, “vertikal/landscape” diasumsikan sebagai konfigurasi unit/layar. Orientasi hasil receipt/frame adalah atribut berbeda dan tidak otomatis berubah mengikuti perangkat. Konfirmasi definisi dengan pemilik produk sebelum coding detail varian.

Di bawah daftar alat, tampilkan tiga fitur demo: pilih frame, lihat preview, cetak receipt. Fitur lain seperti QR download, offline mode, analytics, atau unlimited print belum menjadi janji produk.

### 7.4 How It Works — alur singkat

**Heading:** “Pilih. Pose. Print.”

Empat langkah demo:

1. Pilih frame favorit.
2. Pose saat countdown.
3. Lihat hasil fotomu.
4. Cetak dan bawa pulang receipt.

Desktop: empat langkah sejajar dengan nomor mono dan ilustrasi kecil. Mobile: daftar vertikal atau dua kolom jika tetap terbaca. Urutan aktual aplikasi harus diverifikasi; teks mudah diganti tanpa mengubah layout.

### 7.5 The Moments Wall — signature galeri

**Heading:** “Momen mereka, jadi kenangan.”  
**Caption:** “Dari coffee dates sampai hari spesial.”

Desktop: kolase terkurasi 6–8 gambar dengan ukuran bervariasi. Gabungkan foto orang memegang receipt, close-up print, dan perangkat di venue. Maksimum rotasi ±4°. Pakai 2–3 tape kecil dan caption mono; cukup satu aksen tulisan tangan bila diperlukan.

Mobile: grid dua kolom untuk foto kecil dan satu gambar besar full-width. Maksimum rotasi ±2°. Layout tetap mengikuti aliran dokumen; hindari posisi absolut yang membuat gambar bertabrakan pada layar kecil.

Foto dapat dibuka di lightbox, dengan tombol tutup, navigasi keyboard, dan focus management. Tidak perlu drag-and-drop atau efek parallax untuk MVP.

Jika memakai foto stok/demo, tulis “Galeri demo — visual untuk ilustrasi”. Jangan mengklaim orang pada foto sebagai pelanggan Lyven. Saat foto asli tersedia, gunakan yang sudah diizinkan untuk publikasi.

### 7.6 Frame Collection — pilih gaya receipt

**Heading:** “Satu momen, banyak gaya.”  
**Copy:** “Pilih desain yang cocok dengan mood atau acaranya.”

Desktop: daftar nama frame di kiri, preview receipt besar di kanan. Mobile: preview di atas, selector di bawah yang dapat wrap menjadi dua baris atau lebih. Semua pilihan tetap dapat ditemukan tanpa hover.

Demo koleksi: 12 desain total—6 portrait, 4 landscape, dan 2 special/event. Angka ini belum merupakan inventaris produk yang terverifikasi. Untuk special/event, simpan orientasi masing-masing secara eksplisit.

Nama demo: Classic, Date Night, Film Strip, Love Note, Minimal, Café Notes, Friends, Wide Film, Group Shot, Weekend, Birthday, dan Wedding. Gunakan label orientasi terpisah dari nama.

Saat dipilih: preview berubah dengan fade pendek; nama dan status aktif terbaca jelas. Preview harus mewakili hasil thermal print: monokrom sebagai asumsi visual awal, sampai spesifikasi printer dikonfirmasi. Warna website tidak otomatis menjadi warna hasil cetak.

Tampilkan jumlah frame dekat heading. Tidak perlu menampilkan 12 preview besar sekaligus; satu preview dan selector sudah cukup.

### 7.7 Rental Menu — tiga paket yang mudah dibandingkan

**Heading:** “Bawa Lyven ke tempatmu.”  
**Copy:** “Pilih durasi sewa dan konfigurasi yang sesuai.”

Format: tiga baris menu editorial dengan separator tipis. Setiap baris memuat nomor, nama paket, durasi, total harga, isi paket, dan CTA **Tanya Paket**. Paket tengah boleh mendapat surface lembut dan label “Pilihan untuk café”, bukan klaim “paling laris” tanpa bukti.

Letakkan selector **Vertikal / Landscape** di atas menu. Pilihan mengubah harga ketiga paket dan ikut masuk ke pesan WhatsApp. Tidak ada varian yang dipilih diam-diam setelah pengunjung memilih paket.

#### Data harga demo

| Paket | Durasi | Total vertikal | Total landscape | Isi tambahan demo |
| --- | --- | --- | --- | --- |
| Starter | 1 bulan | Rp1.490.000 | Rp1.690.000 | 6 frame standar, support dasar. |
| Space | 5 bulan | Rp6.250.000 | Rp7.000.000 | 10 frame standar, 2 desain custom, maintenance. |
| Signature | 10 bulan | Rp10.900.000 | Rp12.400.000 | 12 frame standar, 4 desain custom, support prioritas. |

Semua paket berisi satu unit lengkap sesuai brief. Landscape diberi selisih harga hanya sebagai simulasi; belum merupakan tarif final Lyven. Harga adalah total untuk durasi yang tertulis, bukan tagihan bulanan otomatis.

Jika menampilkan rata-rata per bulan, beri label “setara …/bulan” sebagai angka sekunder, bukan harga utama. Hitung dari total ÷ durasi; jangan menulis angka manual yang bisa berbeda.

Label terlihat: **“Harga dan isi paket masih demo.”** Catatan di bawah menu: “Biaya pengiriman, deposit, pemasangan, pajak, dan jatah kertas akan dikonfirmasi bersama Lyven.” Jangan menganggap biaya tersebut sudah termasuk atau gratis.

Mobile: tiap baris menjadi blok vertikal berurutan—nama/durasi, harga total, kelengkapan, CTA. Hindari tabel harga yang harus digeser horizontal.

Template pesan: “Halo Lyven, saya tertarik paket [nama] untuk [durasi] bulan, konfigurasi [varian]. Apakah tersedia untuk [lokasi/rencana penggunaan]?” Harga demo tidak perlu dimasukkan sebagai penawaran resmi.

Nomor WhatsApp belum diberikan. Simpan kontak sebagai konfigurasi kosong sampai nomor resmi tersedia. Pada prototype, CTA dapat membuka dialog “Kontak Lyven akan ditambahkan”; jangan memakai nomor acak atau tombol mati.

### 7.8 Custom Branding

**Heading:** “Kasih sentuhan brand kamu.”  
**Copy demo:** “Tambahkan nama acara atau identitas brand pada desain receipt.”

Layout dua kolom: satu preview receipt berlogo fiktif yang jelas berlabel demo, dan tiga poin singkat—logo, nama acara, header/footer. Mobile bertumpuk. Tampilkan CTA **Diskusi Custom Frame**.

Detail QR, format logo, jumlah revisi, lead time, dan biaya tambahan belum diputuskan. Jangan menambahkan fitur custom yang belum dipastikan bisa dikerjakan.

### 7.9 FAQ

Accordion maksimal delapan pertanyaan, satu kolom dengan separator tipis:

1. Apa saja perangkat yang sudah termasuk?
2. Apa perbedaan konfigurasi vertikal dan landscape?
3. Berapa minimal durasi sewa?
4. Apakah kertas receipt sudah termasuk?
5. Apakah membutuhkan internet?
6. Bisa membuat frame khusus brand atau event?
7. Bagaimana pengiriman dan pemasangannya?
8. Bagaimana jika perangkat mengalami kendala?

Jawaban perangkat memakai brief user. Pertanyaan lain diisi copy demo yang ditandai atau “Detail ini akan dikonfirmasi bersama Lyven”; jangan mengarang kebijakan, SLA, kuota print, atau kemampuan offline.

Gunakan tombol nyata dengan `aria-expanded`; ikon plus/minus sekadar pendukung. Semua pertanyaan dapat dibuka dengan keyboard.

### 7.10 Final CTA & Footer

**Heading:** “Siap bikin sudut favorit baru?”  
**CTA:** Tanya Sewa Photo Receipt.

Background tetap `#FEF6EE`; beri ruang kosong yang lega. Di bawah CTA, footer dengan wordmark Lyven dan blok informasi kecil bergaya receipt: nama brand, link section, Instagram, kontak, serta “THANK YOU FOR MAKING MEMORIES”.

Efek receipt cukup garis dashed dan ujung kertas kecil; tidak perlu seluruh footer dibuat sebagai kertas panjang. Tanggal transaksi palsu, alamat, akun Instagram, atau kontak yang belum diketahui jangan ditampilkan seolah resmi.

Testimoni dan logo client tidak ditampilkan pada v1 sampai materi asli tersedia. Galeri demo sudah cukup untuk mengevaluasi desain.

## 8. Bahasa dan copy

Bahasa utama: Indonesia, singkat, hangat, dan mudah dimengerti. Nama Photo Receipt, Lyven, frame, dan landscape boleh tetap digunakan.

- CTA konsisten: Lihat Paket Sewa, Lihat Hasil Foto, Tanya Paket, Diskusi Custom Frame.
- Maksimum satu headline dan satu paragraf pendek per intro section.
- Harga selalu jelas dengan format rupiah Indonesia.
- Semua data simulasi harus berlabel demo di tempat pengguna menemukannya.
- Jangan mengklaim pelanggan, popularitas, jumlah event, atau kemampuan perangkat tanpa data.

## 9. Animasi dan interaksi

- Hover tombol/link 150–200 ms.
- Fade/reveal konten 250–400 ms, pergeseran maksimal 12–16 px.
- Preview frame crossfade sekitar 180 ms.
- Foto galeri dapat berubah rotasi/naik maksimal 2 px saat hover, tanpa mengubah layout.
- Navigasi anchor smooth scroll ketika pengguna tidak memilih reduced motion.
- Konten langsung terlihat tanpa animasi saat `prefers-reduced-motion` aktif.
- Tanpa scroll hijacking, custom cursor, looping receipt terbang, atau animasi berat pada semua section.
- Semua interaksi berfungsi pada sentuhan dan keyboard.

## 10. Aset yang diperlukan

| Aset | Kebutuhan awal | Pemakaian |
| --- | --- | --- |
| Logo Lyven | Versi utama dan monokrom | Navbar/footer. |
| Foto unit vertikal | Tampak depan termasuk stand | Hero/product. |
| Foto unit landscape | Tampak depan termasuk stand | Selector varian. |
| Detail produk | 2–3 foto tablet, printer, box | Setup dan informasi perangkat. |
| Hasil receipt | 6–12 preview jelas | Frame collection. |
| Foto penggunaan | 6–8 foto asli atau demo berlabel | Moments Wall. |
| Receipt custom | 1 contoh berlabel demo | Custom branding. |
| Kontak resmi | WhatsApp dan Instagram | CTA/footer. |

Gunakan foto dengan pencahayaan lembut dan tone hangat yang tidak mengubah warna perangkat. Foto portrait/landscape ditampilkan dengan rasio konsisten; produk pakai `contain`, lifestyle pakai `cover` dengan crop yang menjaga wajah dan receipt.

Optimalkan gambar ke WebP/AVIF jika cocok. Isi ukuran/aspect ratio sebelum gambar termuat agar layout tidak bergeser. Gambar hero diberi prioritas; gambar di bawah fold lazy load.

## 11. Arahan implementasi untuk Antigravity

Dokumen ini adalah pedoman desain; belum instruksi untuk memulai coding pada turn perencanaan ini.

Saat implementasi diotorisasi:

1. Periksa project Next.js yang sudah ada: router, versi, styling, font, dan aset. Ikuti struktur yang ditemukan, jangan membuat ulang project.
2. Gunakan design token terpusat untuk warna, font, spacing, dan radius. Terapkan base `#FEF6EE` pada body dan section utama.
3. Buat komponen section yang mudah diedit: Navbar, Hero, ProductSetup, HowItWorks, MomentsWall, FrameCollection, RentalMenu, CustomBranding, FAQ, dan Footer.
4. Simpan package, frame, galeri, dan kontak di konfigurasi/data terpisah dari markup.
5. Model paket memuat nama, durasi, harga tiap varian, daftar isi, dan `isDemo`. Model frame memuat nama, orientasi, kategori, preview, dan `isDemo`.
6. Hindari asumsi semua galeri adalah customer asli. Bedakan `demo` dan `customer` pada metadata aset.
7. Gunakan client component hanya untuk menu, selector, lightbox, dan accordion bila dibutuhkan. Pilih pendekatan styling yang sudah ada di repo.
8. MVP hanya landing page. Login, dashboard, payment gateway, dan recurring billing berada di luar scope awal.

Komponen dasar boleh memakai library yang sudah terpasang, tetapi tampilan akhirnya harus mengikuti dokumen ini. Jangan menambahkan dependency hanya untuk dekorasi yang dapat dibuat dengan CSS.

## 12. Kriteria review desain

- Produk dan CTA utama mudah dikenali di layar awal.
- Background utama tepat `#FEF6EE` dan warna aksen tidak mendominasi.
- Produk tetap terlihat utuh; stand tidak terpotong.
- Desktop mempunyai komposisi lega; mobile dibuat ulang sesuai hierarki, bukan sekadar diperkecil.
- Tidak ada horizontal overflow pada lebar 320, 375, 390, 768, 1024, dan 1440 px.
- Selector frame dan varian jelas serta dapat dipakai dengan keyboard/sentuhan.
- Harga menampilkan total, durasi, dan varian dengan konsisten.
- Galeri demo dan harga demo diberi label terlihat.
- Link anchor tidak tertutup navbar; lightbox dan menu dapat ditutup dengan Escape.
- Kontras, focus ring, alt text, dan reduced motion diperiksa.
- Tidak ada kontak palsu, testimoni palsu, klaim fitur belum terverifikasi, atau gambar customer yang disalahlabel.
- Seluruh CTA memiliki tujuan yang jelas atau fallback prototype yang informatif.

## 13. Detail yang masih perlu dikonfirmasi

Desain dapat dilanjutkan memakai data demo sambil menunggu logo, foto produk, nomor kontak, serta detail bisnis berikut:

- Arti vertikal/landscape: orientasi layar, unit fisik, output print, atau kombinasi.
- Model printer, jenis hasil cetak, lebar kertas, dan kemampuan warna.
- Jumlah frame asli dan desain yang tersedia untuk setiap orientasi.
- Harga final, jatah kertas, deposit, ongkir, instalasi, dan pajak.
- Kebijakan maintenance, dukungan, serta kebutuhan internet.
- Opsi dan batasan custom branding.

Perubahan pada detail tersebut cukup memperbarui konfigurasi dan copy. Arah visual utama tetap: background hangat, layout clean, produk besar, galeri mading yang terkurasi, serta pricing bergaya menu receipt.
