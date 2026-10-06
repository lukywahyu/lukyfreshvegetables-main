// data.js

const products = [
    {
        name: "Bayam Segar",
        price: "Rp 3.000 / ikat",
        description: "Bayam hijau berkualitas tinggi, kaya zat besi dan vitamin.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740289/bayam_ecnms3.png",
        category: "daun",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Bayam%20Segar"
    },
    {
        name: "Kangkung",
        price: "Rp 3.000 / ikat",
        description: "Kangkung segar, cocok untuk tumisan dan lalapan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740188/kangkung_xur9ic.png",
        category: "daun",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Kangkung"
    },
    {
        name: "Sawi Hijau (Caisim)",
        price: "Rp 7.000 / kg",
        description: "Sawi hijau segar dan renyah, favorit untuk tumisan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740298/caisin_sa1yg3.png",
        category: "daun",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Sawi%20Hijau"
    },
    {
        name: "Sawi Putih",
        price: "Rp 7.000 / kg",
        description: "Sawi putih segar, cocok untuk tumis atau sup.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740226/sawi_gngiu8.png",
        category: "daun",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Sawi%20Putih"
    },
    {
        name: "Selada",
        price: "Rp 7.000 / kg",
        description: "Selada segar dan renyah, ideal untuk salad atau lalapan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740227/selada_gnfxkt.png",
        category: "daun",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Selada"
    },
    {
        name: "Daun Singkong",
        price: "Rp 3.000 / ikat",
        description: "Daun singkong segar, cocok untuk gulai atau tumisan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740189/daunsingkong_fqo8yb.png",
        category: "daun",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Daun%20Singkong"
    },
    {
        name: "Daun Katuk",
        price: "Rp 5.000 / ikat",
        description: "Daun katuk segar, terkenal untuk melancarkan ASI.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740183/daunkatuk_xocbox.png",
        category: "daun",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Daun%20Katuk"
    },
    {
        name: "Kale",
        price: "Rp 30.000 / kg",
        description: "Kale kaya serat, vitamin A, C, dan antioksidan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740184/kale_vohnnf.png",
        category: "daun",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Kale"
    },
    {
        name: "Pakcoy",
        price: "Rp 8.000 / kg",
        description: "Pakcoy segar, enak untuk kuah atau tumisan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740194/pakcoy_vxxlmy.png",
        category: "daun",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Pakcoy"
    },
    {
        name: "Tomat",
        price: "Rp 15.000 / kg",
        description: "Tomat merah segar, cocok untuk jus atau masakan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740252/tomat_kizjx6.png",
        category: "buah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Tomat"
    },
    {
        name: "Terong Ungu",
        price: "Rp 8.000 / kg",
        description: "Terong ungu segar, lezat untuk balado dan lalapan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740252/terong_lsvg0y.png",
        category: "buah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Terong"
    },
    {
        name: "Mentimun",
        price: "Rp 8.000 / kg",
        description: "Mentimun segar, cocok untuk lalapan dan acar.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740194/mentimun_krrrkt.png",
        category: "buah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Mentimun"
    },
    {
        name: "Labu Siam",
        price: "Rp 2.500 / buah",
        description: "Labu siam segar, cocok untuk sayur lodeh dan tumis.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740189/labusiam_dpy4tb.png",
        category: "buah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Labu%20Siam"
    },
    {
        name: "Pare",
        price: "Rp 15.000 / kg",
        description: "Pare segar, lezat diolah menjadi tumisan atau lalapan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740194/paria_yj67hh.png",
        category: "buah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Pare"
    },
    {
        name: "Jagung Manis",
        price: "Rp 12.000 / kg",
        description: "Jagung manis segar, enak direbus atau dibakar.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740188/jagung_k7lkcy.png",
        category: "buah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Jagung%20Manis"
    },
    {
        name: "Kacang Panjang",
        price: "Rp 12.000 / kg",
        description: "Kacang panjang segar, cocok untuk tumis atau lalapan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740190/kacangpanjang_yarwzz.png",
        category: "buah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Kacang%20Panjang"
    },
    {
        name: "Buncis",
        price: "Rp 16.000 / kg",
        description: "Buncis segar, renyah dan bergizi tinggi.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740298/buncis_ty8eqx.png",
        category: "buah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Buncis"
    },
    {
        name: "Zucchini",
        price: "Rp 10.000 / kg",
        description: "Zucchini segar, pilihan sehat untuk tumisan dan sup.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740278/zuccini_vl1nya.png",
        category: "buah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Zucchini"
    },
    {
        name: "Tomat Ceri",
        price: "Rp 16.000 / 500 gr",
        description: "Tomat ceri manis, cocok untuk camilan atau topping salad.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740252/tomatceri_r66j8y.png",
        category: "buah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Tomat%20Ceri"
    },
    {
        name: "Cabai Merah Besar",
        price: "Rp 20.000 / 200 gr",
        description: "Cabai merah segar untuk sambal dan masakan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740297/cabemerah_uvldfo.png",
        category: "rempah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Cabai%20Merah"
    },
    {
        name: "Cabai Rawit",
        price: "Rp 15.000 / 250 gr",
        description: "Cabai rawit super pedas, menambah selera makan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740297/cabairawit_olzw0s.png",
        category: "rempah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Cabai%20Rawit"
    },
    {
        name: "Cabai Hijau",
        price: "Rp 18.000 / kg",
        description: "Cabai hijau segar, cocok untuk balado dan tumisan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740297/cabaihijau_lriihf.png",
        category: "rempah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Cabai%20Hijau"
    },
    {
        name: "Bawang Merah",
        price: "Rp 25.000 / 500 gr",
        description: "Bawang merah segar, harum dan manis alami.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740280/bawangmerah_kmv6oj.png",
        category: "rempah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Bawang%20Merah"
    },
    {
        name: "Bawang Putih",
        price: "Rp 22.000 / 500 gr",
        description: "Bawang putih segar, wajib untuk setiap masakan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740288/bawangputih_abgdv3.png",
        category: "rempah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Bawang%20Putih"
    },
    {
        name: "Jahe",
        price: "Rp 14.000 / 500 gr",
        description: "Jahe segar, aromatik, cocok untuk minuman dan masakan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740190/jahe_dmhhah.png",
        category: "rempah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Jahe"
    },
    {
        name: "Kunyit",
        price: "Rp 25.000 / kg",
        description: "Kunyit segar, memberikan warna dan aroma khas pada masakan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740189/kunyit_kb3fid.png",
        category: "rempah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Kunyit"
    },
    {
        name: "Lengkuas (Laos)",
        price: "Rp 9.000 / 500 gr",
        description: "Lengkuas segar, rempah penting untuk bumbu masakan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740194/lengkuas_npw7k2.png",
        category: "rempah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Lengkuas"
    },
    {
        name: "Serai (Sereh)",
        price: "Rp 15.000 / kg",
        description: "Serai segar, memberikan aroma harum pada masakan dan minuman.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740233/sereh_jwa50m.png",
        category: "rempah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Serai"
    },
    {
        name: "Daun Bawang",
        price: "Rp 15.000 / kg",
        description: "Daun bawang segar, cocok sebagai taburan atau campuran masakan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740280/bawangdaun_glhhfy.png",
        category: "rempah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Daun%20Bawang"
    },
    {
        name: "Seledri",
        price: "Rp 15.000 / kg",
        description: "Seledri segar, memberikan aroma sedap pada sup.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740229/seledri_u9gigw.png",
        category: "rempah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Seledri"
    },
    {
        name: "Kemangi",
        price: "Rp 3.000 / ikat",
        description: "Kemangi segar, cocok untuk lalapan atau pepes ikan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740188/kemangi_ku2c8r.png",
        category: "rempah",
        waLink: "https://wa.me/6285129981180?text=Pesan%20Kemangi"
    }
];


const recipes = [
    {
        name: "Tumis Brokoli Saus Tiram",
        description: "Resep cepat dan praktis untuk hidangan sehat keluarga. Cocok disajikan dengan nasi hangat.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740258/tumisbrokoli_xkqxx1.png",
        link: "resep-tumis-brokoli.html"
    },
    {
        name: "Sayur Asem Segar",
        description: "Sup tradisional khas Indonesia dengan rasa asam segar, cocok disantap siang hari.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740236/sayurasem_ayybuj.png",
        link: "resep-sayur-asem.html"
    },
    {
        name: "Capcay Goreng",
        description: "Tumis sayuran aneka warna dengan bumbu sederhana, lezat dan bergizi.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740319/capcay_r7spbn.png",
        link: "resep-capcay.html"
    },
    {
        name: "Sup Bayam Jagung",
        description: "Perpaduan bayam segar dan manisnya jagung, ringan dan sehat untuk keluarga.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740293/bayamjagung_nysyb2.png",
        link: "resep-sup-bayam-jagung.html"
    },
    {
        name: "Oseng Kacang Panjang Teri",
        description: "Hidangan rumahan sederhana dengan rasa gurih dan pedas, bikin nambah nasi.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740215/osengkacangpanjang_ap7jns.png",
        link: "resep-oseng-kacang-panjang.html"
    },
    {
        name: "Perkedel Kentang",
        description: "Cemilan atau lauk favorit keluarga, lembut di dalam dan renyah di luar.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740235/perkedel_bbridh.png",
        link: "resep-perkedel-kentang.html"
    }
];


const testimonials = [
    {
        name: "Siti Aisyah, Bandung",
        text: "Sayur dari LukyFresh benar-benar segar! Pengiriman cepat, harganya juga terjangkau. Selalu jadi langganan.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740232/sitiasiyah_qqqtdt.png"
    },
    {
        name: "Budi Santoso, Lembang",
        text: "Selalu puas belanja di sini. Sayurnya bersih dan kualitasnya terjamin. Cocok buat yang mau hidup sehat.",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740297/budi_ptt2me.png"
    },
    {
        name: "Rina Lestari, Bandung",
        text: "Pelayanan ramah dan responsif. Pengiriman sesuai jadwal. Sangat direkomendasikan!",
        image: "https://res.cloudinary.com/dhcydygfx/image/upload/v1755740233/susi_cck9u9.png"
    }
];