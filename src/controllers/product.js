// import necessary model here
const { product, user, category, productCategory } = require('../../models');

exports.getProducts = async (req, res) => {
  try {
    const data = await product.findAll({
      include: [
        {
          model: user,
          as: 'user',
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password'],
          },
        },
        {
          model: category,
          as: 'categories',
          through: {
            model: productCategory,
            as: 'bridge',
          },
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'idUser'],
      },
    });

    res.send({
      status: 'success...',
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    // code here
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
