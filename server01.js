// Import modul yang dibutuhkan 
const http = require("http");

// Variabel untuk host (lokasi server) dan port
const host = "localhost";
const port = 10000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Ini Backed Server Node.js");
};

//Membuat sevuah server dan menjalankan server dengan fungsi listen()
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Base URL Server: http://${host}:${port}`);
});
