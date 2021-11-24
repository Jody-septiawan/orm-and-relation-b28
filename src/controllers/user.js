// import model here
const { user } = require('../../models');

exports.addUsers = async (req, res) => {
  try {
    const data = req.body;

    const response = await user.create(data);

    res.send({
      status: 'success',
      message: 'Add user finished',
      data: {
        user: {
          id: response.id,
          email: response.email,
          name: response.name,
        },
      },
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
