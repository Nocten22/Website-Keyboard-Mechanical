export const products = [
  {
    id: 1,
    name: "Aurora 75%",
    price: 1899000,
    rating: 4.8,
    switches: "Gateron Pro Yellow",
    layout: "75%",
    description: "Suara creamy, hot-swappable, dan casing aluminium premium.",
    colors: ["Midnight", "Frost", "Sunset"],
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Nebula TKL",
    price: 2299000,
    rating: 4.9,
    switches: "Kailh Box White",
    layout: "TKL",
    description:
      "Kencang untuk gaming, stabilizer lubed, pencahayaan RGB halus.",
    colors: ["Onyx", "Arctic"],
    image:
      "https://www.alpheriorkeys.com/cdn/shop/products/Nebula-TKL_1024x1024.png?v=1613079169",
  },
  {
    id: 3,
    name: "Lumen 65%",
    price: 1599000,
    rating: 4.7,
    switches: "Akko CS Lavender",
    layout: "65%",
    description:
      "Ringkas untuk produktivitas, gasket mount, dan knob aluminium.",
    colors: ["Aurora", "Graphite", "Ivory"],
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Pulse 60%",
    price: 1399000,
    rating: 4.6,
    switches: "Cherry MX Red",
    layout: "60%",
    description: "Minimalis, super portable, dan dapat dipersonalisasi penuh.",
    colors: ["Carbon", "Berry"],
    image:
      "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&w=900&q=80",
  },
];

export const perks = [
  {
    id: 1,
    title: "Gratis Pengiriman",
    detail: "Untuk pembelian di atas Rp 1.500.000",
    icon: "🚚",
  },
  {
    id: 2,
    title: "Garansi 2 Tahun",
    detail: "Perlindungan penuh untuk hardware",
    icon: "🛡️",
  },
  {
    id: 3,
    title: "Custom Build",
    detail: "Konsultasi build eksklusif",
    icon: "🛠️",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Ragil",
    text: "Typing feel-nya luar biasa! Spacebar-nya creamy banget.",
    location: "Bandung",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    name: "Kevin",
    text: "Packaging aman dan cepat. Keyboard langsung siap dipakai.",
    location: "Jakarta",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Hana",
    text: "CS responsif banget, bantu pilih switch yang cocok.",
    location: "Surabaya",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
  },
];

export const formatPrice = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};
