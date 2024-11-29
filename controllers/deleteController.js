const { prisma } = require("../db/config");

const deleteProduct = async (req, res) => {
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
    let deletedProduct = await prisma.product.delete({
      where: { id: parseInt(id) },
    });
    return res.status(200).json({
      message: "Product is deleted",
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ err: err.message });
  }
};
module.exports = deleteProduct;
