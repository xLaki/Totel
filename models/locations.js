// creating our survey model
// set it to export because our index.js file is expecting an 
// export of a model
module.exports = function(sequelize, DataTypes){
    var Locations = sequelize.define("Locations", {
        country: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        city: {
            type: DataTypes.STRING
        },
        climate: {
            type: DataTypes.STRING
        },
        population: {
            type: DataTypes.INTEGER
        },
        culture: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        cost: {
            type: DataTypes.STRING
        },
        language: {
            type: DataTypes.STRING
        },
        continent: {
            type: DataTypes.STRING
        },
        activity1: {
            type: DataTypes.STRING
        },
        activity2:{
            type: DataTypes.STRING
        },
        activity3:{
            type: DataTypes.STRING
        },
        resturants:{ 
            type: DataTypes.STRING
        }
    });

    return Locations
}
