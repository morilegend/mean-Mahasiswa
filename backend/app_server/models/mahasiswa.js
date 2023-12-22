let mongoose = require("mongoose");
const historySchema = require('./history');

let schemaMahasiswa = new mongoose.Schema({
    npm: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    notelp: {
        type: Number,
        required: true
    },
    alamat: {
        type: String,
        required: false
    },
    usia: {
        type: String,
        required: true
    },
    jurusan: {
        type: String,
        required: true
    },

});

mongoose.model('Mahasiswa', schemaMahasiswa);
