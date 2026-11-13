# RuMio English kunlik trener
Rus Trener'ining ingliz tili nusxasi (bir xil dvigatel: darslar, testlar, takrorlash, jonlar).

Fayllar: index.html, data.js (+ tayyor bo'lsa p0.bin ... ovoz paketlari). GitHub Pages'ga yuklang.
Linklar (d = kun raqami):
  Dars:        .../d=1
  Test:        .../?d=1&m=test&l=<dars_id>   (bot l= ni o'zi qo'shadi)
  Takrorlash:  .../?m=review

Tarjima qo'shish: en_<birinchi_jumla_raqami>.txt faylga ingliz jumlalarni yozing (rus tartibida), so'ng `python3 qur.py` — data.js yangilanadi.
Ovoz: `pip install edge-tts`, keyin `python audio_yarat.py` va `python audio_paket.py`.
