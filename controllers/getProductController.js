const { prisma } = require("../db/config");

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let fetchedProduct = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });
    if (!fetchedProduct) {
      return res
        .status(404)
        .json({ message: "Product doesn't exist with specified id" });
    }
    return res.status(200).json({...fetchedProduct});
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

module.exports = getProduct;
