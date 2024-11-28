const { prisma } = require("../db/config");

const createProduct = async (req, res) => {
  try {
    const { name, stock, price } = req.body;
    if (!name || !stock || !price) {
      return res.status(400).json({
        error: "All fields required",
      });
    }
    const createdProduct = await prisma.product.create({
      data: {
        name,
        stock,
        price: parseFloat(price)
      },
    });
    return res.status(201).json({ ...createdProduct,
        price: parseFloat(createdProduct.price)});
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

module.exports = createProduct;
