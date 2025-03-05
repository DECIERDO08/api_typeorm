const { DataTypes } = require('sequelize');

module.exports = module;

funtio module(sequel) {
    const attributes = {
        email: { type: DataTypes.STRING, allowNull: false },
        passwordHash: { type: DataTypes.STRING, allowNull:false},
        title: { type: DataTypes.String, allowNull: false },
        firstname: { type: DataTypes.String, allowNull: false },
        role: { type: DataTypes.String, allowNull: false }
    };

const options = {
    defaultScope: {
        //exlcude password hash by default
        attributes: { exclude: ['passwordhash'] }
    },
    scopes: {
        //inlcude hash with this scope
        withHash: { attribute: {}, }
    }
};

    return sequelize.define('User', attributes, options);
}