//..
// Import modul yang dibutuhkan 
const http = require("http");

// Variabel untuk host (lokasi server) dan port
const host = "localhost";
const port = 10001;
// Variabel yang meyimpan data JSON

var json_payload = {
    "nisn" : "99901",
    "nama_siswa" : "Kevin Supratman",
    "alamat" : "Bintaro"


}

//Fungsi untuk menangani reques yang masuk
const requestListener = function (req, res){
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(json_payload));
};

//Membuat sevuah server dan menjalankan server dengan fungsi listen()
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Base URL Server: http://${host}:${port}`);
});

//...
//Membuat sevuah server dan menjalankan server dengan fungsi listen()
const server2 = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Base URL Server: http://${host}:${port}`);
});

//...