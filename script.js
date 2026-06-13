// Bank Soal Terintegrasi (5 Paket x 20 Soal Unik = 100 Soal Berbeda)
// Komposisi per paket: 10 Biologi, 8 Fisika, 1 Kimia, 1 Astronomi
const questionsData = {
    1: [
        // Paket 1: Biologi (1-10)
        { id: 1, category: "Biologi", q: "Bagian sel yang berfungsi sebagai tempat respirasi seluler untuk menghasilkan energi (ATP) adalah...", o: ["Lisosom", "Mitokondria", "Ribosom", "Badan Golgi"], a: 1 },
        { id: 2, category: "Biologi", q: "Karakteristik pembuluh darah vena yang membedakannya secara fungsional dari arteri adalah...", o: ["Dinding tebal dan elastis", "Membawa darah kaya oksigen", "Memiliki katup di sepanjang pembuluh", "Aliran darah meninggalkan jantung"], a: 2 },
        { id: 3, category: "Biologi", q: "Hubungan simbiosis antara tanaman leguminosa dengan bakteri Rhizobium menguntungkan karena bakteri...", o: ["Mengubah oksigen menjadi air", "Memfiksasi nitrogen bebas dari udara", "Menghasilkan hormon pertumbuhan", "Melindungi akar dari serangan jamur"], a: 1 },
        { id: 4, category: "Biologi", q: "Enzim ptialin yang disekresikan oleh kelenjar ludah bekerja optimal memecah amilum pada kondisi...", o: ["Sangat asam (pH < 2)", "Sangat basa (pH > 10)", "Netral cenderung lemah (pH sekitar 6.8)", "Suhu ekstrem di atas 60°C"], a: 2 },
        { id: 5, category: "Biologi", q: "Proses filtrasi darah pada nefron ginjal manusia terjadi di dalam bagian...", o: ["Glomerulus", "Tubulus Kontortus Proksimal", "Lengkung Henle", "Tubulus Kolektivus"], a: 0 },
        { id: 6, category: "Biologi", q: "Hormon tumbuhan yang berperan dominan dalam memicu pematangan buah adalah...", o: ["Auksin", "Sitokinin", "Giberelin", "Etilen"], a: 3 },
        { id: 7, category: "Biologi", q: "Pada ekosistem perairan, fenomena eutrofikasi akibat akumulasi pupuk fosfat dapat menyebabkan...", o: ["Penurunan populasi alga", "Peningkatan drastis kadar oksigen", "Ledakan pertumbuhan tanaman air dan penurunan cahaya", "Peningkatan keanekaragaman jenis ikan"], a: 2 },
        { id: 8, category: "Biologi", q: "Manakah dari organel berikut yang memiliki DNA sendiri di luar inti sel?", o: ["Badan Golgi dan Retikulum Endoplasma", "Kloroplas dan Mitokondria", "Lisosom dan Sentrosom", "Vakuola dan Ribosom"], a: 1 },
        { id: 9, category: "Biologi", q: "Penyakit anemia pernisiosa terjadi akibat tubuh mengalami malabsorpsi zat besi yang dipicu kekurangan...", o: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], a: 1 },
        { id: 10, category: "Biologi", q: "Tekanan darah sistol pada manusia menunjukkan kondisi di mana...", o: ["Otot bilik jantung berkontraksi dan darah dipompa keluar", "Otot serambi jantung berkontraksi mengisi bilik", "Seluruh bagian jantung mengalami relaksasi", "Darah dari vena kava masuk ke serambi kanan"], a: 0 },
        // Paket 1: Fisika (11-18)
        { id: 11, category: "Fisika", q: "Sebuah benda bergerak lurus berubah beraturan dari diam dengan percepatan tetap 3 m/s². Jarak yang ditempuh benda setelah 4 detik adalah...", o: ["6 meter", "12 meter", "24 meter", "48 meter"], a: 2 },
        { id: 12, category: "Fisika", q: "Beban bermassa 50 kg diangkat menggunakan katrol bergerak tunggal. Gaya minimal yang diperlukan (g = 10 m/s²) adalah...", o: ["125 N", "250 N", "500 N", "1000 N"], a: 1 },
        { id: 13, category: "Fisika", q: "Sepotong es bermassa 200 gram pada suhu 0°C dileburkan menjadi air pada suhu 0°C. Jika kalor lebur es 80 kal/g, kalor yang diperlukan adalah...", o: ["16.000 kalori", "8.000 kalori", "4.000 kalori", "200 kalori"], a: 0 },
        { id: 14, category: "Fisika", q: "Gelombang bunyi merambat di udara dengan cepat rambat 340 m/s. Jika frekuensi sumber bunyi 680 Hz, panjang gelombangnya adalah...", o: ["0.2 meter", "0.5 meter", "2.0 meter", "5.0 meter"], a: 1 },
        { id: 15, category: "Fisika", q: "Sebuah benda diletakkan 15 cm di depan cermin cekung yang memiliki jarak fokus 10 cm. Sifat bayangan yang terbentuk adalah...", o: ["Nyata, terbalik, diperkecil", "Nyata, terbalik, diperbesar", "Maya, tegak, diperbesar", "Maya, tegak, diperkecil"], a: 1 },
        { id: 16, category: "Fisika", q: "Empat buah hambatan yang masing-masing bernilai 4 Ohm dirangkai secara paralel. Hambatan pengganti total rangkaian adalah...", o: ["1 Ohm", "4 Ohm", "8 Ohm", "16 Ohm"], a: 0 },
        { id: 17, category: "Fisika", q: "Tekanan hidrostatis yang dialami seorang penyelam pada kedalaman 20 meter (massa jenis air = 1000 kg/m³, g = 10 m/s²) adalah...", o: ["20.000 Pa", "100.000 Pa", "200.000 Pa", "250.000 Pa"], a: 2 },
        { id: 18, category: "Fisika", q: "Sebuah balok ditarik dengan gaya 10 N ke kanan dan gaya gesek lantai adalah 2 N ke kiri. Jika massa balok 2 kg, percepatannya adalah...", o: ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²"], a: 1 },
        // Paket 1: Kimia (19)
        { id: 19, category: "Kimia", q: "Zat tunggal yang tidak dapat diuraikan lagi menjadi zat lain yang lebih sederhana melalui reaksi kimia biasa dinamakan...", o: ["Unsur", "Senyawa", "Koloid", "Campuran Homogen"], a: 0 },
        // Paket 1: Astronomi (20)
        { id: 20, category: "Astronomi", q: "Hukum Kepler Pertama menyatakan bahwa lintasan orbit planet mengelilingi matahari berbentuk...", o: ["Lingkaran sempurna", "Elips dengan matahari di salah satu titik fokus", "Parabola terbuka", "Hiperbola"], a: 1 }
    ],
    2: [
        // Paket 2: Biologi (1-10)
        { id: 1, category: "Biologi", q: "Fungsi utama jaringan xilem pada tumbuhan vaskular adalah mengangkut...", o: ["Hasil fotosintesis dari daun", "Air dan garam mineral dari akar", "Oksigen dari stomata", "Cadangan makanan ke buah"], a: 1 },
        { id: 2, category: "Biologi", q: "Penyakit anemia disebabkan karena kurangnya pengikatan oksigen yang berkaitan erat dengan defisiensi unsur...", o: ["Kalsium", "Zat Besi", "Magnesium", "Yodium"], a: 1 },
        { id: 3, category: "Biologi", q: "Organel sel tumbuhan yang mengandung pigmen klorofil untuk fotosintesis adalah...", o: ["Kloroplas", "Leukoplas", "Kromoplas", "Vakuola"], a: 0 },
        { id: 4, category: "Biologi", q: "Uji makanan menggunakan reagen Biuret menunjukkan warna ungu. Hal ini menandakan makanan mengandung...", o: ["Glukosa", "Amilum", "Protein", "Lemak"], a: 2 },
        { id: 5, category: "Biologi", q: "Sendi yang memungkinkan gerakan bebas ke segala arah pada tubuh manusia disebut...", o: ["Sendi Engsel", "Sendi Peluru", "Sendi Putar", "Sendi Pelana"], a: 1 },
        { id: 6, category: "Biologi", q: "Pernyataan yang tepat tentang pembelahan meiosis adalah...", o: ["Menghasilkan sel anakan diploid (2n)", "Terjadi pada sel tubuh/somatik", "Menghasilkan 4 sel anak haploid (n)", "Tidak terjadi pindah silang gen"], a: 2 },
        { id: 7, category: "Biologi", q: "Bagian otak manusia yang berfungsi sebagai pusat keseimbangan dan koordinasi gerakan motorik adalah...", o: ["Otak besar (Cerebrum)", "Otak kecil (Cerebellum)", "Sumsum lanjutan", "Talamus"], a: 1 },
        { id: 8, category: "Biologi", q: "Pernyataan yang benar mengenai mekanisme inspirasi pernapasan dada adalah...", o: ["Otot antar-tulang rusuk luar berkontraksi, rongga dada membesar, tekanan paru mengecil", "Otot diafragma berkontraksi menjadi datar, rongga dada mengecil", "Otot antar-tulang rusuk relaksasi, rongga dada membesar", "Otot dinding perut berkontraksi mendorong paru-paru"], a: 0 },
        { id: 9, category: "Biologi", q: "Tumbuhan insektivora seperti kantong semar menangkap serangga terutama untuk memenuhi kebutuhan unsur...", o: ["Karbon", "Hidrogen", "Oksigen", "Nitrogen"], a: 3 },
        { id: 10, category: "Biologi", q: "Sifat dominan-resesif pada persilangan monohibrid Mendel menghasilkan rasio fenotipe F2 sebesar...", o: ["1 : 2 : 1", "3 : 1", "9 : 3 : 3 : 1", "9 : 7"], a: 1 },
        // Paket 2: Fisika (11-18)
        { id: 11, category: "Fisika", q: "Jika daya sebuah lampu adalah 40 Watt dan dinyalakan selama 2 jam, energi listrik yang diserap lampu tersebut adalah...", o: ["80 Joule", "2.400 Joule", "144.000 Joule", "288.000 Joule"], a: 2 },
        { id: 12, category: "Fisika", q: "Sebuah mobil bermassa 1000 kg melaju dengan kecepatan 20 m/s. Energi kinetik mobil tersebut adalah...", o: ["10.000 J", "20.000 J", "200.000 J", "400.000 J"], a: 2 },
        { id: 13, category: "Fisika", q: "Alat optik loop menggunakan sebuah lensa positif. Agar menghasilkan bayangan maya dan diperbesar, benda harus diletakkan...", o: ["Di antara F dan 2F", "Tepat di titik fokus (F)", "Di antara lensa dan titik fokus (F)", "Lebih jauh dari 2F"], a: 2 },
        { id: 14, category: "Fisika", q: "Bimetal yang dipanaskan akan melengkung ke arah logam yang memiliki...", o: ["Koefisien muai panjang lebih besar", "Koefisien muai panjang lebih kecil", "Massa jenis lebih besar", "Titik lebur lebih tinggi"], a: 1 },
        { id: 15, category: "Fisika", q: "Suatu fluida mengalir pada pipa dengan luas penampang 10 cm² dengan kecepatan 2 m/s. Jika pipa menyempit menjadi 5 cm², kecepatannya menjadi...", o: ["1 m/s", "4 m/s", "8 m/s", "10 m/s"], a: 1 },
        { id: 16, category: "Fisika", q: "Menurut Hukum Newton III, gaya aksi dan reaksi bekerja pada...", o: ["Satu benda yang sama dan searah", "Dua benda berbeda dan berlawanan arah", "Satu benda dengan besar berbeda", "Fluida statis saja"], a: 1 },
        { id: 17, category: "Fisika", q: "Mistar, jangka sorong, dan mikrometer sekrup berturut-turut memiliki ketelitian...", o: ["1 mm; 0,1 mm; 0,01 mm", "0,5 mm; 0,05 mm; 0,005 mm", "1 cm; 0,1 cm; 0,01 cm", "0,1 mm; 0,01 mm; 0,001 mm"], a: 0 },
        { id: 18, category: "Fisika", q: "Sebuah gelombang memiliki periode 0,05 detik. Frekuensi gelombang tersebut adalah...", o: ["5 Hz", "10 Hz", "20 Hz", "50 Hz"], a: 2 },
        // Paket 2: Kimia (19)
        { id: 19, category: "Kimia", q: "Berikut ini yang merupakan contoh perubahan kimia yang disertai pembentukan gas dan perubahan warna adalah...", o: ["Lilin menyala mendidih", "Besi berkarat terpapar udara lembab", "Pita magnesium dibakar dalam oksigen", "Garam dilarutkan dalam air"], a: 2 },
        // Paket 2: Astronomi (20)
        { id: 20, category: "Astronomi", q: "Planet di tata surya yang dikenal memiliki efek rumah kaca paling ekstrem sehingga suhunya lebih panas dari Merkurius adalah...", o: ["Mars", "Venus", "Yupiter", "Saturnus"], a: 1 }
    ],
    3: [
        // Paket 3: Biologi (1-10)
        { id: 1, category: "Biologi", q: "Komponen sel darah manusia yang tidak memiliki inti sel (nukleus) ketika matang dan berfungsi mengikat Oksigen adalah...", o: ["Leukosit", "Eritrosit", "Trombosit", "Makrofag"], a: 1 },
        { id: 2, category: "Biologi", q: "Penyakit diabetes insipidus terjadi akibat tubuh kekurangan produksi hormon...", o: ["Insulin", "Adrenalin", "Antidiuretik (ADH)", "Tiroksin"], a: 2 },
        { id: 3, category: "Biologi", q: "Bagian bunga yang berfungsi menarik perhatian serangga penyerbuk melalui warna dan aromanya adalah...", o: ["Kelopak", "Mahkota", "Benang Sari", "Putik"], a: 1 },
        { id: 4, category: "Biologi", q: "Struktur pada daun tumbuhan yang berfungsi sebagai tempat utama terjadinya pertukaran gas adalah...", o: ["Stomata", "Trikoma", "Kutikula", "Xilem"], a: 0 },
        { id: 5, category: "Biologi", q: "Organ pencernaan manusia yang berfungsi menyerap sari-sari makanan hasil pencernaan adalah...", o: ["Lambung", "Usus Halus", "Usus Besar", "Esofagus"], a: 1 },
        { id: 6, category: "Biologi", q: "Vakuola kontraktil pada organisme uniseluler seperti Paramecium berfungsi untuk...", o: ["Pencernaan makanan", "Osmoregulasi (pengaturan air)", "Alat gerak", "Sintesis protein"], a: 1 },
        { id: 7, category: "Biologi", q: "Interaksi antar organisme di mana salah satu pihak untung dan pihak lain tidak dirugikan maupun diuntungkan disebut...", o: ["Mutualisme", "Parasitisme", "Komensalisme", "Predasi"], a: 2 },
        { id: 8, category: "Biologi", q: "Proses pemecahan glukosa menjadi asam piruvat tanpa menggunakan oksigen bebas disebut...", o: ["Glikolisis", "Siklus Krebs", "Transpor Elektron", "Dekarboksilasi Oksidatif"], a: 0 },
        { id: 9, category: "Biologi", q: "Hormon yang memicu sekresi sekunder dinding rahim (endometrium) untuk persiapan implantasi zigot adalah...", o: ["Estrogen", "Progesteron", "LH", "FSH"], a: 1 },
        { id: 10, category: "Biologi", q: "Bakteri nitrifikasi (seperti Nitrosomonas) memperoleh energi dari oksidasi senyawa anorganik. Jalur metabolisme ini disebut...", o: ["Fotoautotrof", "Kemoautotrof", "Heterotrof", "Saprofit"], a: 1 },
        // Paket 3: Fisika (11-18)
        { id: 11, category: "Fisika", q: "Sebuah balok bermassa 4 kg ditarik gaya sebesar 20 N di atas lantai licin. Percepatan balok tersebut adalah...", o: ["2 m/s²", "4 m/s²", "5 m/s²", "80 m/s²"], a: 2 },
        { id: 12, category: "Fisika", q: "Suhu badan seorang anak adalah 40°C. Jika diukur menggunakan termometer skala Fahrenheit, suhunya adalah...", o: ["72°F", "96°F", "104°F", "120°F"], a: 2 },
        { id: 13, category: "Fisika", q: "Sebuah kapal memancarkan bunyi ke dasar laut dan menerima pantulannya setelah 2 detik. Jika cepat rambat bunyi di air 1500 m/s, kedalaman laut adalah...", o: ["750 meter", "1500 meter", "3000 meter", "4500 meter"], a: 1 },
        { id: 14, category: "Fisika", q: "Seorang anak bermassa 50 kg menaiki tangga setinggi 4 meter dalam waktu 10 detik. Daya yang dikerjakan anak tersebut (g=10 m/s²) adalah...", o: ["20 Watt", "50 Watt", "200 Watt", "2000 Watt"], a: 2 },
        { id: 15, category: "Fisika", q: "Peristiwa pelangi terbentuk akibat cahaya matahari mengalami proses...", o: ["Pemantulan saja", "Pembiasan dan penguraian (dispersi)", "Interferensi gelombang", "Difraksi celah sempit"], a: 1 },
        { id: 16, category: "Fisika", q: "Dua buah muatan listrik positif saling didekatkan. Gaya Coulomb yang terjadi di antara kedua muatan tersebut bersifat...", o: ["Tolak-menolak", "Tarik-menarik", "Saling meniadakan", "Berputar searah jarum jam"], a: 0 },
        { id: 17, category: "Fisika", q: "Benda yang lintasannya berupa lingkaran dengan kelajuan tetap mengalami percepatan yang arahnya selalu menuju pusat lingkaran, yang disebut...", o: ["Percepatan Tangensial", "Percepatan Sudut", "Percepatan Sentripetal", "Percepatan Linier"], a: 2 },
        { id: 18, category: "Fisika", q: "Tekanan udara pada permukaan laut standar setara dengan...", o: ["1 atm atau 76 cmHg", "2 atm atau 100 cmHg", "0,5 atm atau 50 cmHg", "10 atm atau 760 cmHg"], a: 0 },
        // Paket 3: Kimia (19)
        { id: 19, category: "Kimia", q: "Indikator lakmus merah akan berubah warna menjadi biru jika diteteskan ke dalam larutan senyawa kimia...", o: ["Asam Klorida (HCl)", "Natrium Hidroksida (NaOH)", "Asam Cuka (CH3COOH)", "Air Suling Murni"], a: 1 },
        // Paket 3: Astronomi (20)
        { id: 20, category: "Astronomi", q: "Peristiwa di mana bulan berada di titik terjauh dari bumi dalam lintasan orbitnya dinamakan...", o: ["Perige", "Apoge", "Perihelion", "Aphelion"], a: 1 }
    ],
    4: [
        // Paket 4: Biologi (1-10)
        { id: 1, category: "Biologi", q: "Jaringan epitel pada hewan yang berfungsi khusus untuk mempermudah proses difusi gas atau filtrasi zat adalah epitel...", o: ["Pipih Selapis", "Silindris Selapis", "Kubus Berlapis", "Transisional"], a: 0 },
        { id: 2, category: "Biologi", q: "Organel sel hewan yang mengandung enzim hidrolitik untuk pencernaan intraseluler adalah...", o: ["Sentrosom", "Lisosom", "Peroksisom", "Mitokondria"], a: 1 },
        { id: 3, category: "Biologi", q: "Urutan jalannya impuls saraf pada gerak refleks yang benar adalah...", o: ["Reseptor - Saraf Motorik - Otak - Saraf Sensorik - Efektor", "Reseptor - Saraf Sensorik - Sumsum Tulang Belakang - Saraf Motorik - Efektor", "Reseptor - Otak - Saraf Sensorik - Efektor", "Efektor - Saraf Sensorik - Otak - Reseptor"], a: 1 },
        { id: 4, category: "Biologi", q: "Tumbuhan paku (Pteridophyta) berbeda dari tumbuhan lumut (Bryophyta) karena tumbuhan paku sudah memiliki...", o: ["Klorofil", "Spora", "Berkas Pembuluh (Xilem & Floem)", "Rizoid"], a: 2 },
        { id: 5, category: "Biologi", q: "Bagian jantung manusia yang berfungsi memompa darah kaya oksigen ke seluruh tubuh adalah...", o: ["Serambi Kanan", "Serambi Kiri", "Bilik Kanan", "Bilik Kiri"], a: 3 },
        { id: 6, category: "Biologi", q: "Sistem pengelompokan makhluk hidup menjadi 5 Kingdom diinisiasi oleh ilmuwan bernama...", o: ["Carolus Linnaeus", "Robert Whittaker", "Charles Darwin", "Gregor Mendel"], a: 1 },
        { id: 7, category: "Biologi", q: "Upaya pelestarian badak bercula satu di habitat aslinya (Ujung Kulon) merupakan contoh pelestarian...", o: ["Ex-situ", "In-situ", "Budidaya", "Suaka Margasatwa Buatan"], a: 1 },
        { id: 8, category: "Biologi", q: "Faktor luar yang memicu pembengkokan ujung batang tanaman ke arah datangnya cahaya matahari (fototropisme) melibatkan rusaknya hormon...", o: ["Giberelin di sisi gelap", "Auksin di sisi terang", "Sitokinin di ujung batang", "Asam absisat di stomata"], a: 1 },
        { id: 9, category: "Biologi", q: "Imunisasi buatan pasif diperoleh tubuh dengan cara menyuntikkan...", o: ["Vaksin (patogen dilemahkan)", "Serum mengandung antibodi siap pakai", "Toksoid bakteri", "Antibiotik spektrum luas"], a: 1 },
        { id: 10, category: "Biologi", q: "Komponen filamen penyusun otot rangka yang bergeser satu sama lain saat otot berkontraksi adalah...", o: ["Kolagen dan elastin", "Aktin dan miosin", "Keratin dan fibrin", "Hemoglobin dan mioglobin"], a: 1 },
        // Paket 4: Fisika (11-18)
        { id: 11, category: "Fisika", q: "Sebuah dongkrak hidrolik memiliki luas penampang kecil 5 cm² dan besar 50 cm². Jika penampang kecil ditekan dengan gaya 10 N, gaya angkat yang dihasilkan adalah...", o: ["50 N", "100 N", "200 N", "500 N"], a: 1 },
        { id: 12, category: "Fisika", q: "Alat yang digunakan untuk mengukur kekuatan arus listrik dalam suatu rangkaian tertutup dinamakan...", o: ["Voltmeter", "Amperemeter", "Ohmmeter", "Barometer"], a: 1 },
        { id: 13, category: "Fisika", q: "Energi tidak dapat diciptakan dan tidak dapat dimusnahkan, melainkan hanya dapat berubah bentuk. Pernyataan ini merupakan bunyi hukum...", o: ["Hukum Kekekalan Momentum", "Hukum Kekekalan Energi", "Hukum Newton I", "Hukum Bernoulli"], a: 1 },
        { id: 14, category: "Fisika", q: "Sebuah benda memiliki massa 6 kg di Bumi. Jika benda tersebut dibawa ke Bulan yang gravitasinya 1/6 bumi, maka massa benda di bulan adalah...", o: ["1 kg", "6 kg", "36 kg", "60 kg"], a: 1 },
        { id: 15, category: "Fisika", q: "Kaca yang digosok dengan kain sutra akan bermuatan listrik positif karena...", o: ["Proton berpindah dari sutra ke kaca", "Elektron berpindah dari kaca ke sutra", "Proton berpindah dari kaca ke sutra", "Elektron berpindah dari sutra ke kaca"], a: 1 },
        { id: 16, category: "Fisika", q: "Suatu getaran memiliki frekuensi 50 Hz. Periode dari getaran tersebut adalah...", o: ["0.02 detik", "0.2 detik", "2 detik", "50 detik"], a: 0 },
        { id: 17, category: "Fisika", q: "Pemanfaatan cermin cembung pada spion kendaraan bertujuan agar...", o: ["Bayangan menjadi nyata", "Daerah pandangan menjadi lebih luas", "Bayangan selalu diperbesar", "Bayangan terbalik"], a: 1 },
        { id: 18, category: "Fisika", q: "Sinar matahari sampai ke permukaan bumi melewati ruang hampa udara melalui metode perpindahan kalor...", o: ["Konduksi", "Konveksi", "Radiasi", "Evaporasi"], a: 2 },
        // Paket 4: Kimia (19)
        { id: 19, category: "Kimia", q: "Metode pemisahan campuran yang paling tepat digunakan untuk memperoleh air murni dari larutan garam air laut adalah...", o: ["Filtrasi", "Kromatografi", "Distilasi", "Sublimasi"], a: 2 },
        // Paket 4: Astronomi (20)
        { id: 20, category: "Astronomi", q: "Garis khayal yang membagi bumi menjadi dua belahan bagian utara dan bagian selatan dinamakan...", o: ["Garis Bujur Utama (Greenwich)", "Garis Khatulistiwa (Ekuator)", "Garis Balik Utara", "Garis Balik Selatan"], a: 1 }
    ],
    5: [
        // Paket 5: Biologi (1-10)
        { id: 1, category: "Biologi", q: "Proses penguapan air dari jaringan tumbuhan melalui stomata ke atmosfer dinamakan...", o: ["Evaporasi", "Transpirasi", "Gutasi", "Respirasi"], a: 1 },
        { id: 2, category: "Biologi", q: "Kelebihan hormon pertumbuhan (GH) pada masa anak-anak dapat menyebabkan pertumbuhan raksasa yang disebut...", o: ["Akromegali", "Gigantisme", "Kretinisme", "Kerdil"], a: 1 },
        { id: 3, category: "Biologi", q: "Organisme yang berperan menguraikan sisa makhluk hidup yang telah mati menjadi zat anorganik di ekosistem adalah...", o: ["Produsen", "Konsumen Primer", "Dekomposer", "Predator Atas"], a: 2 },
        { id: 4, category: "Biologi", q: "Kromosom yang menentukan jenis kelamin suatu organisme dinamakan...", o: ["Autosom", "Gonosom", "Alel", "Genotipe"], a: 1 },
        { id: 5, category: "Biologi", q: "Penyakit sel darah merah berbentuk bulan sabit akibat kelainan genetik disebut...", o: ["Leukemia", "Thalasemia", "Sickle Cell Anemia", "Hemofilia"], a: 2 },
        { id: 6, category: "Biologi", q: "Fungsi utama dari cairan empedu yang dihasilkan oleh hati manusia adalah...", o: ["Mencerna protein", "Mengemulsikan lemak", "Mengaktifkan pepsin", "Membunuh kuman"], a: 1 },
        { id: 7, category: "Biologi", q: "Bagian nefron ginjal yang berfungsi melakukan reabsorpsi zat yang masih berguna seperti glukosa adalah...", o: ["Glomerulus", "Tubulus Kontortus Proksimal", "Tubulus Kontortus Distal", "Lengkung Henle"], a: 1 },
        { id: 8, category: "Biologi", q: "Struktur pembuluh trakea pada serangga berfungsi mengantarkan gas oksigen secara langsung menuju ke...", o: ["Jantung pembuluh", "Insang dalam", "Sel-sel jaringan tubuh tubuh", "Paru-paru buku"], a: 2 },
        { id: 9, category: "Biologi", q: "Lapisan embrional triploblastik yang kelak akan berkembang membentuk jaringan sistem saraf dan kulit luar adalah...", o: ["Ektoderm", "Mesoderm", "Endoderm", "Eksoderm"], a: 0 },
        { id: 10, category: "Biologi", q: "Teknik perbanyakan tumbuhan secara vegetatif buatan dengan menumbuhkan jaringan sel di media steril laboratorium dinamakan...", o: ["Kultur Jaringan", "Hidroponik", "Mencangkok", "Simbiosis Terarah"], a: 0 },
        // Paket 5: Fisika (11-18)
        { id: 11, category: "Fisika", q: "Sebuah pesawat terbang bergerak dengan kecepatan konstan 250 m/s selama 10 detik. Jarak sejauh apakah yang telah ditempuhnya?", o: ["25 meter", "2500 meter", "5000 meter", "25000 meter"], a: 1 },
        { id: 12, category: "Fisika", q: "Alat yang bekerja berdasarkan prinsip tuas/pengungkit jenis pertama adalah...", o: ["Gunting", "Gerobak roda satu", "Pinset", "Pemotong kertas"], a: 0 },
        { id: 13, category: "Fisika", q: "Sebuah benda bermassa 2 kg berada pada ketinggian 10 meter dari tanah (g=10 m/s²). Energi potensial benda adalah...", o: ["20 Joule", "100 Joule", "200 Joule", "400 Joule"], a: 2 },
        { id: 14, category: "Fisika", q: "Perpindahan kalor yang disertai dengan perpindahan partikel-partikel zat perantaranya dinamakan...", o: ["Konduksi", "Konveksi", "Radiasi", "Sublimasi"], a: 1 },
        { id: 15, category: "Fisika", q: "Telinga manusia normal hanya mampu mendengarkan gelombang bunyi yang memiliki rentang frekuensi...", o: ["Kurang dari 20 Hz", "20 Hz hingga 20.000 Hz", "Lebih dari 20.000 Hz", "Di atas 50.000 Hz"], a: 1 },
        { id: 16, category: "Fisika", q: "Cacat mata hipermetropi (rabun dekat) dapat dibantu/dikoreksi menggunakan kacamata berlensa...", o: ["Cembung (Positif)", "Cekung (Negatif)", "Silindris", "Ganda (Bifokal)"], a: 0 },
        { id: 17, category: "Fisika", q: "Tiga buah hambatan sejenis bernilai 6 Ohm disusun secara seri. Nilai hambatan penggantinya adalah...", o: ["2 Ohm", "6 Ohm", "12 Ohm", "18 Ohm"], a: 3 },
        { id: 18, category: "Fisika", q: "Sebuah benda bergetar sebanyak 120 kali dalam waktu 1 menit. Frekuensi getaran tersebut adalah...", o: ["0.5 Hz", "2 Hz", "60 Hz", "120 Hz"], a: 1 },
        // Paket 5: Kimia (19)
        { id: 19, category: "Kimia", q: "Lambang unsur untuk Kalium, Kalsium, dan Tembaga secara berturut-turut adalah...", o: ["K, Ca, Cu", "Ka, Ca, Te", "P, Ca, Cu", "K, Cl, Fe"], a: 0 },
        // Paket 5: Astronomi (20)
        { id: 20, category: "Astronomi", q: "Komet memiliki ekor yang selalu terlihat menjauhi Matahari saat mengorbit. Hal ini disebabkan oleh tekanan dari...", o: ["Gaya gravitasi planet luar", "Angin matahari (solar wind) dan radiasi", "Medan magnet bumi", "Kelajuan komet itu sendiri"], a: 1 }
    ]
};

// State Management Aplikasi
let currentPaket = null;
let currentQuestionIndex = 0;
let userAnswers = {}; 
let raguState = {}; 
let timerInterval = null;
let totalSeconds = 3600; // 60 menit = 3600 detik

function startSimulation(paketNumber) {
    currentPaket = paketNumber;
    currentQuestionIndex = 0;
    userAnswers = {};
    raguState = {};
    totalSeconds = 3600;

    document.getElementById("home-screen").classList.remove("active");
    document.getElementById("result-screen").classList.remove("active");
    document.getElementById("quiz-screen").classList.add("active");

    document.getElementById("current-paket-title").innerText = "Simulasi OSN IPA - Paket " + paketNumber;

    renderNumberNav();
    loadQuestion();
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Waktu pengerjaan telah habis!");
            calculateResults();
        } else {
            totalSeconds--;
            let mins = Math.floor(totalSeconds / 60);
            let secs = totalSeconds % 60;
            document.getElementById("timer").innerText = 
                (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
        }
    }, 1000);
}

function renderNumberNav() {
    const grid = document.getElementById("number-nav-grid");
    grid.innerHTML = "";
    const questions = questionsData[currentPaket];

    questions.forEach((q, idx) => {
        const box = document.createElement("div");
        box.classList.add("num-box");
        box.innerText = idx + 1;
        
        if (idx === currentQuestionIndex) {
            box.classList.add("active");
        } else if (raguState[idx]) {
            box.classList.add("ragu");
        } else if (userAnswers[idx] !== undefined) {
            box.classList.add("filled");
        }

        box.onclick = () => {
            currentQuestionIndex = idx;
            loadQuestion();
            renderNumberNav();
        };
        grid.appendChild(box);
    });
}

function loadQuestion() {
    const questions = questionsData[currentPaket];
    const currentQuestion = questions[currentQuestionIndex];

    document.getElementById("question-counter").innerText = `Soal ${currentQuestionIndex + 1} dari ${questions.length}`;
    document.getElementById("question-category").innerText = currentQuestion.category;
    document.getElementById("question-text").innerText = currentQuestion.q;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    const prefixes = ["A", "B", "C", "D"];
    currentQuestion.o.forEach((optionText, idx) => {
        const item = document.createElement("div");
        item.classList.add("option-item");
        if (userAnswers[currentQuestionIndex] === idx) {
            item.classList.add("selected");
        }

        item.onclick = () => { selectOption(idx); };
        item.innerHTML = `
            <div class="option-prefix">${prefixes[idx]}</div>
            <div class="option-content">${optionText}</div>
        `;
        optionsContainer.appendChild(item);
    });

    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById("btn-next").classList.add("hidden");
        document.getElementById("btn-finish").classList.remove("hidden");
    } else {
        document.getElementById("btn-next").classList.remove("hidden");
        document.getElementById("btn-finish").classList.add("hidden");
    }

    const btnRagu = document.getElementById("btn-flag");
    if (raguState[currentQuestionIndex]) {
        btnRagu.classList.add("active-ragu");
    } else {
        btnRagu.classList.remove("active-ragu");
    }
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    renderNumberNav();
    loadQuestion();
}

function toggleRagu() {
    raguState[currentQuestionIndex] = !raguState[currentQuestionIndex];
    renderNumberNav();
    loadQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < questionsData[currentPaket].length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        renderNumberNav();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        renderNumberNav();
    }
}

function confirmFinish() {
    let unanswered = 0;
    const total = questionsData[currentPaket].length;
    for (let i = 0; i < total; i++) {
        if (userAnswers[i] === undefined) unanswered++;
    }

    let confirmMsg = "Apakah Anda yakin ingin mengakhiri simulasi ujian ini?";
    if (unanswered > 0) {
        confirmMsg += `\n(Peringatan: Masih ada ${unanswered} soal yang belum Anda jawab).`;
    }

    if (confirm(confirmMsg)) {
        clearInterval(timerInterval);
        calculateResults();
    }
}

function calculateResults() {
    const questions = questionsData[currentPaket];
    let correctTotal = 0;
    let wrongTotal = 0;
    let emptyTotal = 0;

    // Menampung kategori dinamis (Biologi, Fisika, Kimia, Astronomi)
    let stats = {};

    questions.forEach((q, idx) => {
        let category = q.category;
        
        if (!stats[category]) {
            stats[category] = { correct: 0, total: 0 };
        }
        stats[category].total++;

        if (userAnswers[idx] === undefined) {
            emptyTotal++;
        } else if (userAnswers[idx] === q.a) {
            correctTotal++;
            stats[category].correct++;
        } else {
            wrongTotal++;
        }
    });

    let finalScore = Math.round((correctTotal / questions.length) * 100);
    document.getElementById("final-score").innerText = finalScore;
    document.getElementById("total-correct").innerText = correctTotal;
    document.getElementById("total-wrong").innerText = wrongTotal;
    document.getElementById("total-empty").innerText = emptyTotal;

    // Reset display baris statis agar aman jika ada kategori yang tidak terisi penuh
    const categoriesToCheck = ["Biologi", "Fisika", "Kimia", "Astronomi"];
    categoriesToCheck.forEach(cat => {
        let idPrefix = cat.toLowerCase();
        let catCorrect = stats[cat] ? stats[cat].correct : 0;
        let catTotal = stats[cat] ? stats[cat].total : 0;
        let pct = catTotal > 0 ? Math.round((catCorrect / catTotal) * 100) : 0;

        let elPct = document.getElementById(`${idPrefix}-pct`);
        let elBar = document.getElementById(`${idPrefix}-bar`);
        let elDetail = document.getElementById(`${idPrefix}-detail`);

        if (elPct) elPct.innerText = pct + "%";
        if (elBar) elBar.style.width = pct + "%";
        if (elDetail) elDetail.innerText = `Benar ${catCorrect} dari ${catTotal} soal`;
    });

    document.getElementById("quiz-screen").classList.remove("active");
    document.getElementById("result-screen").classList.add("active");
}

function backToHome() {
    document.getElementById("result-screen").classList.remove("active");
    document.getElementById("home-screen").classList.add("active");
}
