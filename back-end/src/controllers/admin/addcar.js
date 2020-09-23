const Newcar = require("../../models/car");

const slugify = require("slugify");

exports.AddCar = (req, res) => {
  res.status(200).json({ file: req.files, body: req.body });

  let carImg = "";
  let specdtl = "";
  const Specification = [];

  req.files.map((file) => {
    if (file.fieldname === "carimage") {
      carImg = file.filename;
    } else if (file.fieldname === "spec") {
      Specification.push({ icon: file.filename, specname: "" });
    } else {
      specdtl = file.filename;
    }
  });

  const new_car = new Newcar({
    CarName: req.body.name,
    slug: slugify(req.body.name),
    CarImg: carImg,
    Specification: Specification,
    specdtl: specdtl,
  });


console.log(new_car)



  new_car.save((error, data) => {

    if (error) {
      return res.json({
        message: "samething may be wrong",
        error: error,
      });
    }

     return res.json({ message: "New Car Added", data });
     
  })

};
