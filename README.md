# My Recipe Test

## Result

![screenshot](https://shorturl.at/BC3sR)

## Deskripsi

Proyek ini adalah website resep yang memungkinkan pengguna untuk menjelajahi berbagai resep kuliner. Website ini dibangun menggunakan React dan mencakup berbagai komponen seperti navigasi, kartu resep, dan footer. Proyek ini juga dilengkapi dengan pengujian unit untuk memastikan kualitas dan keandalan kode.

## Pengujian

Terdapat 4 file yang perlu diuji:

- `App.jsx`
- `components/Card.jsx`
- `components/Footer.jsx`
- `components/NavBar.jsx`

Tidak perlu melakukan testing terhadap semua element dan attribute yang ada, kamu cukup lakukan testing terhadap element yang memiliki data-testid. Antara lain : 

1. `image-banner`
2. `img-recipe-n` (n merupakan value el.id dari props pada Card)
3. `title-recipe-n`
4. `rating-recipe-n`
5. `link-recipe-n`
6. `footer-text`
7. `link-facebook`
8. `link-x`
9. `link-instagram`
10. `my-recipe`
11. `form-search`

### Cara Pengujian

- Untuk elemen gambar, atribut `src` dan `alt` diuji.
- Untuk elemen teks (h1-h6, p, span), isi dalam HTML diuji menggunakan `.toBe`.
- Untuk elemen tautan, atribut `href` diuji.

### Contoh Pengujian Card

Pengujian pada komponen Card menggunakan data hardcode sebagai props untuk memastikan fungsi dan tampilan komponen.

Jika tugas ini mudah diselesaikan, cobalah eksplorasi mengenai fungsi mock.

## Cara Menjalankan

Untuk menjalankan proyek ini, ikuti langkah-langkah berikut:

1. **Clone Repository**:
   ```bash
   git clone https://github.com/rizal-fahmi/assignment-6
   cd assignment-6
	 ```

2. **Install Dependencies**:
	 ```bash
	 npm install
	 ```
	
3. **Run App**:
	 ```bash
	 npm run start
	 ```

4. **Run Test**:
	 ```bash
	 npm test
	 ```