const mongoose = require('mongoose');

let historySchema = new mongoose.Schema({
  npm: {
    type: String,
    required: false,
  },
  nama: {
    type: String,
    required: false,
  },
  tanggal: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Update', 'Delete'],
    required: false,
  },
});

mongoose.model('History', historySchema);
