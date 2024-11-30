const { prisma } = require("../db/config");

const fullUpdate = async (req, res) => {
  try {
    const details = req.body;
    const { id } = req.params;
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: details
    });
    return res.status(200).json({...updatedProduct, price: parseFloat(updatedProduct.price)});
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ err: err.message });
  }
};

module.exports = fullUpdate;
