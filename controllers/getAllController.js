const { prisma } = require("../db/config");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await prisma.product.findMany();
    return res.status(200).json(allProducts);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ err: err.message });
  }
};

module.exports = getAllProducts;
