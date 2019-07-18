// creating our survey model
// set it to export because our index.js file is expecting an 
// export of a model
module.exports = function(sequelize, DataTypes){
    var Task = sequelize.define("Vacation", {
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
        }
    });

    return Task
}
