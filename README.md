Pertanyaan
1. Pada setiap fungsi di Appointment.js, parameter pertama pasti memiliki prefix
“${cors}” yang merefer pada variable cors. Mengapa hal tersebut perlu dilakukan?
Apa yang terjadi jika prefix tersebut dihilangkan?

Jawaban:
Pada dasarnya sebuah browser hanya mengizinkan web application melakukan pemanggilan API dari resource origin yang sama atas alasan keamanan, misalnya web application yg memanggil API dari http://domain-a.com tidak bisa memanggil API dari http://api.domain-b.com/data.json 

Agar browser mengizinkan pemanggilan API dari resource origin berbeda, diperlukan cors. Jika cors dihilangkan akan muncul error access to fetch pada url API di block oleh CORS policy

2. Pada fungsi handleFormSubmit(e) di UpdatePasien.jsx terdapat klausa:
Apa yang dilakukan pada code tersebut? Jika klausa tersebut diganti dengan
“dataJson[key] = val”, apa yang terjadi dengan isi variable dataJson?
