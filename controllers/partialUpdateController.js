const { prisma } = require("../db/config");

const partialUpdate = async (req, res) => {
  try {
    const details = req.body;
    const {id} = req.params;
    let fetchedProduct = await prisma.product.findUnique({where : {id: parseInt(id)}})
    if(!fetchedProduct){
        return res.status(404).json({message: "Product doesn't exist with specified id"})
    }
    const updatedProduct = await prisma.product.update({
        where : {id: parseInt(id)},
      data: {
        ...details
      },
    });
    return res.status(200).json(updatedProduct);
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

module.exports = partialUpdate;
