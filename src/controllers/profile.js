const { profile, user } = require('../../models');

exports.getProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await profile.findOne({
      where: {
        idUser: id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'idUser'],
      },
      include: {
        model: user,
        as: 'user',
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'password'],
        },
      },
    });

    res.send({
      status: 'success',
      data: {
        profile: data,
      },
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: 'failed',
      message: 'Server error',
    });
  }
};
