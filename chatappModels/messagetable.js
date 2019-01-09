models.User.findAll({
    where:{
        id: 1
    },
    include: [{
        model: models.User,
        as: 'userFriend',
        through: {
            attributes: ['id', 'invitStatus'],
        },
        include: [{
            model: models.Message
        }],
    }]
});