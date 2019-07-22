module.exports = function(sequelize, DataTypes){
    var UserFav = sequelize.define("UserFav", {
        userID: {
            type: DataTypes.INTEGER
        },
        locationID: {
            type: DataTypes.INTEGER
        }
    })
    return UserFav
}