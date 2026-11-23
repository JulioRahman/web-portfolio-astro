import type { Locale } from "../paraglide/runtime";

import panintiImage1 from "../assets/project-paninti-1.png";
import panintiImage2 from "../assets/project-paninti-2.png";
import parentingHubImage1 from "../assets/project-parenting-hub-1.png";
import parentingHubImage2 from "../assets/project-parenting-hub-2.png";
import kocequImage2 from "../assets/project-kocequ-2.png";

const projects = [
  {
    name: "Paninti App",
    priorityImage: true,
    techStack:
      "Kotlin, Android Jetpack, MVVM, Firebase, Google Maps, Material Design 2".split(
        ", ",
      ),
    images: [
      {
        src: panintiImage1,
        alt: {
          en: "Paninti App product listing screen",
          id: "Tampilan daftar produk Paninti App",
        },
      },
      {
        src: panintiImage2,
        alt: {
          en: "Paninti App shopping flow screen",
          id: "Tampilan alur belanja Paninti App",
        },
      },
    ],
    copy: {
      en: {
        description:
          "Paninti is an online shopping platform offering a variety of products for mothers, children, and lifestyle needs. As my third major project at Paninti, I joined the team to refactor and develop new features for this long-running app, which had been managed by multiple developers since 2020.",
        descriptionExpandedRawHTMLString: `<p>Key Contributions:</p><ul><li>Implemented redesign and extensive refactoring</li><li>Developed new features: presale, affiliates, and fulfillment</li><li>Upgraded to modern tech stack</li><li>Utilized Airbnb/Epoxy library for efficient UI rendering</li><li>Implemented Kotlin Coroutines for improved asynchronous programming</li></ul><p>This project provided valuable experience in addressing real-life development challenges and modernizing a complex, established application.</p>`,
      },
      id: {
        description:
          "Paninti adalah platform belanja online yang menawarkan beragam produk untuk kebutuhan ibu, anak, dan gaya hidup. Sebagai proyek besar ketiga saya di Paninti, saya bergabung dengan tim untuk melakukan refactor dan mengembangkan fitur baru pada aplikasi yang sudah lama berjalan ini, yang telah dikelola oleh banyak developer sejak 2020.",
        descriptionExpandedRawHTMLString: `<p>Kontribusi utama:</p><ul><li>Mengimplementasikan redesign dan refactoring menyeluruh</li><li>Mengembangkan fitur baru: presale, afiliasi, dan fulfillment</li><li>Memperbarui ke tech stack modern</li><li>Menggunakan library Airbnb/Epoxy untuk rendering UI yang efisien</li><li>Mengimplementasikan Kotlin Coroutines untuk pemrograman asinkron yang lebih baik</li></ul><p>Proyek ini memberi saya pengalaman berharga dalam menghadapi tantangan pengembangan nyata dan memodernisasi aplikasi yang kompleks dan sudah mapan.</p>`,
      },
    },
  },
  {
    name: "Parenting Hub",
    techStack:
      "Kotlin, Android Jetpack, MVVM, Firebase, Material Design 2".split(", "),
    images: [
      {
        src: parentingHubImage1,
        alt: {
          en: "Parenting Hub article feed screen",
          id: "Tampilan feed artikel Parenting Hub",
        },
      },
      {
        src: parentingHubImage2,
        alt: {
          en: "Parenting Hub community screen",
          id: "Tampilan komunitas Parenting Hub",
        },
      },
    ],
    copy: {
      en: {
        description:
          "Parenting Hub is a social media and community platform for parents to share articles and experiences about parenting. This was my first project upon joining Paninti. I inherited an existing, unreleased app plagued with bugs and frequent force closes. After careful consideration, our team decided to completely rewrite the Android application.",
        descriptionExpandedRawHTMLString: `<p>Key Contributions:</p><ul><li>Participated in the complete rewrite of the Android application</li><li>Reimplemented all features from scratch</li><li>Focused on stability and performance optimization</li><li>Achieved zero force closes, significantly improving user experience</li><li>Prepared the app for successful release on the Play Store</li></ul><p>This project showcased my ability to tackle complex, existing codebases, make critical decisions for project improvement, and deliver a stable, user-friendly application from a problematic starting point.</p>`,
      },
      id: {
        description:
          "Parenting Hub adalah platform media sosial dan komunitas bagi orang tua untuk berbagi artikel dan pengalaman seputar parenting. Ini adalah proyek pertama saya setelah bergabung dengan Paninti. Saya mewarisi aplikasi yang belum dirilis, penuh bug, dan sering force close. Setelah pertimbangan matang, tim kami memutuskan untuk menulis ulang aplikasi Android secara menyeluruh.",
        descriptionExpandedRawHTMLString: `<p>Kontribusi utama:</p><ul><li>Berpartisipasi dalam penulisan ulang aplikasi Android secara menyeluruh</li><li>Mengimplementasikan ulang seluruh fitur dari awal</li><li>Berfokus pada stabilitas dan optimasi performa</li><li>Mencapai nol force close sehingga pengalaman pengguna meningkat signifikan</li><li>Menyiapkan aplikasi hingga berhasil dirilis di Play Store</li></ul><p>Proyek ini menunjukkan kemampuan saya menangani codebase lama yang kompleks, mengambil keputusan penting untuk perbaikan proyek, dan menghadirkan aplikasi yang stabil serta ramah pengguna dari titik awal yang bermasalah.</p>`,
      },
    },
  },
  {
    name: "Kocequ",
    techStack: "Java, Kotlin, XML, MVP, Spring Boot".split(", "),
    images: [
      {
        src: kocequImage2,
        alt: {
          en: "Kocequ fintech app screen",
          id: "Tampilan aplikasi fintech Kocequ",
        },
      },
    ],
    copy: {
      en: {
        description:
          "Kocequ is a digital transaction app for cooperative members and MSME communities. As an Android Developer at Praweda Ciptakarsa Informatika (Soedarpo Informatika) from January to August 2022, I developed the existing production app, implementing a homepage redesign, a merchant product catalog, and new registration flows. All these features were released before my time at the company ended.",
        descriptionExpandedRawHTMLString: `<p>January–August 2022 · Key contributions:</p><ul><li>Maintained an existing Java codebase and wrote new features in Kotlin while retaining the MVP architecture.</li><li>Contributed registration support APIs using Java Spring Boot.</li><li>Implemented a merchant catalog for displaying products, without checkout.</li><li>Resolved UI bugs and crashes, including compatibility issues on Android KitKat.</li><li>Collaborated with a backend developer and the testing team; UI/UX design and Play Store publishing were handled by others.</li></ul>`,
      },
      id: {
        description:
          "Kocequ adalah aplikasi transaksi digital untuk anggota koperasi dan komunitas UMKM. Sebagai Android Developer di Praweda Ciptakarsa Informatika (Soedarpo Informatika) pada Januari–Agustus 2022, saya mengembangkan aplikasi yang sudah beroperasi: mengimplementasikan redesign homepage, katalog produk merchant, serta alur registrasi baru. Seluruh fitur tersebut telah dirilis sebelum masa kerja saya berakhir.",
        descriptionExpandedRawHTMLString: `<p>Januari–Agustus 2022 · Kontribusi utama:</p><ul><li>Melanjutkan codebase Java dan menulis fitur baru menggunakan Kotlin dengan tetap mempertahankan arsitektur MVP.</li><li>Membantu pengembangan API pendukung registrasi menggunakan Java Spring Boot.</li><li>Mengimplementasikan katalog merchant untuk menampilkan produk, tanpa checkout.</li><li>Menangani bug tampilan dan crash, termasuk masalah kompatibilitas pada Android KitKat.</li><li>Bekerja bersama developer backend dan tim pengujian; desain UI/UX dan publikasi ke Play Store ditangani oleh rekan lain.</li></ul>`,
      },
    },
  },
];

export function getProjects(locale: Locale) {
  return projects.map(({ copy, images, ...project }) => ({
    ...project,
    ...copy[locale],
    images: images.map(({ src, alt }) => ({ src, alt: alt[locale] })),
  }));
}
