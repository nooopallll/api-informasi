const express = require('express');
const app = express();


app.get('/api/kesehatan-mental', (req, res) => {
  const data = {
    judul: "Tentang Kesehatan Mental",
    tanggal_diperbarui: "11 November 2021",
    isi: "Kesehatan mental yang baik adalah kondisi ketika batin kita berada dalam keadaan tentram dan tenang, sehingga memungkinkan kita untuk menikmati kehidupan sehari-hari dan menghargai orang lain di sekitar. Seseorang yang bermental sehat dapat menggunakan kemampuan atau potensi dirinya secara maksimal dalam menghadapi tantangan hidup, serta menjalin hubungan positif dengan orang lain. Sebaliknya, orang yang kesehatan mentalnya terganggu akan mengalami gangguan suasana hati, kemampuan berpikir, serta kendali emosi yang pada akhirnya bisa mengarah pada perilaku buruk. Penyakit mental dapat menyebabkan masalah dalam kehidupan sehari-hari, tidak hanya dapat merusak interaksi atau hubungan dengan orang lain, namun juga dapat menurunkan prestasi di sekolah dan produktivitas kerja. Oleh sebab itu, sudah saatnya kita menjalankan pola hidup sehat."
  };
  res.json(data);
});

app.get('/api/ciri-ciri', (req, res) => {
  const data = {
    judul: "Ciri-ciri Gejala Stres, Kecemasan, dan Depresi",
    tanggal_diperbarui: "8 Desember 2024",
    isi: {
      stres: "Gejala stres meliputi perasaan tegang, mudah marah, sulit berkonsentrasi, pola tidur yang terganggu, dan merasa kewalahan. Seseorang yang mengalami stres juga dapat memiliki tanda fisik seperti sakit kepala, sakit perut, atau detak jantung yang tidak teratur.",
      kecemasan: "Gejala kecemasan meliputi perasaan khawatir berlebihan, rasa gelisah, ketakutan yang tidak terkendali, jantung berdebar-debar, berkeringat, dan sulit tidur. Dalam jangka panjang, kecemasan yang tidak ditangani dapat memengaruhi kemampuan seseorang dalam menjalani aktivitas sehari-hari.",
      depresi: "Gejala depresi meliputi perasaan sedih yang mendalam, kehilangan minat atau kesenangan dalam aktivitas yang biasanya dinikmati, energi yang rendah, merasa tidak berharga, gangguan tidur, serta adanya pikiran tentang kematian atau bunuh diri."
    },
    solusi: {
      stres: "Untuk mengatasi stres, penting untuk mengenali penyebabnya dan mencari cara untuk mengelolanya. Luangkan waktu untuk relaksasi dengan teknik seperti meditasi, yoga, atau pernapasan dalam. Hindari kebiasaan buruk seperti merokok atau minum alkohol, dan usahakan untuk menjaga pola makan yang sehat serta tidur yang cukup. Jika stres terasa sulit untuk dikelola, berbicaralah dengan teman, keluarga, atau seorang profesional seperti psikolog.",
      kecemasan: "Untuk mengatasi kecemasan, cobalah teknik seperti mindfulness atau meditasi untuk membantu menenangkan pikiran. Latih pernapasan dalam untuk mengurangi gejala fisik seperti jantung berdebar. Hindari kafein yang dapat memperburuk kecemasan dan buatlah jadwal harian yang teratur. Jika kecemasan terus berlanjut, pertimbangkan untuk berkonsultasi dengan seorang profesional untuk terapi kognitif atau, jika diperlukan, pengobatan.",
      depresi: "Depresi membutuhkan pendekatan yang lebih intensif. Langkah awal adalah berbicara dengan seseorang yang dipercaya atau seorang profesional untuk membagikan apa yang dirasakan. Tetapkan tujuan kecil yang realistis untuk dicapai setiap hari dan libatkan diri dalam aktivitas yang menyenangkan meskipun sulit. Olahraga ringan dapat membantu meningkatkan suasana hati. Jangan ragu untuk mencari bantuan medis, termasuk terapi atau pengobatan, jika gejala tidak kunjung membaik."
    }
  };
  res.json(data);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
