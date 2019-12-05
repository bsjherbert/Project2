module.exports = function(sequalize, DataTypes) {
    const Exercise = sequalize.define("Exercise", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sets: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weights: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comments: DataTypes.STRING
    });

    return Exercise;

};