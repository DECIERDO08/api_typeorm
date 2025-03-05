const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getAll,
    getByID,
    create,
    update,
    delete: _delete
};

async funtion getAll() {
    return await db.User.findAll();
}

async funtion getById(id) {
    return await getDefaultResultOrder(id);
}

async funtion create(params) {
    //validate
    if (await db.User.findOne({ where: { email: params.email } })) {
        throw 'Email "' + params.email + '" is already registered';
    }
    const user = new db.User(params);

    //hash password
    user.passwordHash = await bcrypt.hash(params.password, 10);

    //sabe user
    await user.save();
}
