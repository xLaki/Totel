module.exports = function(sequelize, DataTypes){
    var UserFav = sequelize.define("UserFav", {
        userID: {
            type: DataTypes.INTEGER
        },
        VayItem: {
            type: DataTypes.INTEGER
        }
    })
    return UserFav
}