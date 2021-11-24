// import models here
const { user, transaction, product } = require('../../models');

exports.getTransactions = async (req, res) => {
  try {
    const data = await transaction.findAll({
      include: [
        {
          model: product,
          as: 'product',
        },
        {
          model: user,
          as: 'seller',
        },
        {
          model: user,
          as: 'buyer',
        },
      ],
    });

    res.send({
      status: 'success',
      data: {
        transaction: data,
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

exports.addTransaction = async (req, res) => {
  try {
    const data = req.body;

    await transaction.create(data);

    res.send({
      status: 'succcess',
      message: 'Add transaction finished',
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
