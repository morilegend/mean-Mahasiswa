const mongoose = require ("mongoose");
const History = mongoose.model("History");



// READ
const index = (req,res,next) => {
    History.find({}, {__v: 0})
    .then((historys) => {
        const responseMessage = {
            code: 200,
            message: "Berhasil Mendapatkan Data",
            data: historys
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
    const HistoryData = req.body;
    const history = new History(HistoryData);
  
    history
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
    console.log(history);   
  };

module.exports = {insert,index
}