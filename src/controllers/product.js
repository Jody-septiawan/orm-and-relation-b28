// import models here
const { product, user } = require('../../models');

exports.getProducts = async (req, res) => {
  try {
    const data = await product.findAll({
      include: {
        model: user,
        as: 'user',
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'password'],
        },
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'idUser'],
      },
    });

    res.send({
      status: 'success',
      data: {
        product: data,
      },
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
    const data = req.body;

    const response = await product.create(data);

    res.send({
      status: 'success',
      data: {
        product: {
          id: response.id,
          name: response.name,
          desc: response.desc,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
