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
    type: String,
  },
  status: {
    type: String,
    enum: ['Update', 'Delete' , 'Insert'],
    required: false,
  },
});

mongoose.model('History', historySchema);
