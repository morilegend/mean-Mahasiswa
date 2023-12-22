const mongoose = require ("mongoose");
const Mahasiswa = mongoose.model("Mahasiswa");

// READ
  const index = (req,res,next) => {
      Mahasiswa.find({}, {__v: 0})
      .then((mahasiswas) => {
          const responseMessage = {
              code: 200,
              message: "Berhasil Mendapatkan Data",
              data: mahasiswas
          };
          res.status(200).json(responseMessage);
      })
      
      .catch((e) => {
          const responseMessage = {
              code: 400,
              message: "Gagal Mendapatkan Data"
          };
          res.status(400).json(responseMessage);
      })
  };

//POST (Create)
  const insert = (req, res, next) => {
      const mahasiswaData = req.body;
      const mahasiswa = new Mahasiswa(mahasiswaData);
    
      mahasiswa
        .save()
        .then((result) => {
          const responseMessage = {
            code: 200,
            message: "Berhasil Mendapatkan Data",
            data: result,
          };
          res.status(200).json(responseMessage); 
        })
        
        .catch((e) => {
          const responseMessage = {
            code: 400,
            message: "Gagal Mendapatkan Data",
            error: e.message,
          };
          res.status(400).json(responseMessage);
        });
      console.log(mahasiswa);   
    };
  
// UPDATE
const update = (req, res, next) => {
  const mahasiswaId = req.params.id;
  const updatedMahasiswaData = req.body;

  Mahasiswa.findByIdAndUpdate(
    mahasiswaId,
    updatedMahasiswaData,
    { new: true }
  )
    .then((updatedMahasiswa) => {
      const responseMessage = {
        code: 200,
        message: "Berhasil Memperbarui Data",
        data: updatedMahasiswa,
      };
      res.status(200).json(responseMessage);
    })
    .catch((e) => {
      const responseMessage = {
        code: 400,
        message: "Gagal Memperbarui Data",
        error: e.message,
      };
      res.status(400).json(responseMessage);
    });
};

// DELETE
  const remove = (req, res, next) => {
    const mahasiswaId = req.params.id;

    Mahasiswa.findByIdAndRemove(mahasiswaId)
      .then(() => {
        const responseMessage = {
          code: 200,
          message: "Berhasil Menghapus Data",
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
          code: 400,
          message: "Gagal Menghapus Data",
          error: e.message,
        };
        res.status(400).json(responseMessage);
      });
  };

module.exports = {
    index,insert,update,remove
}