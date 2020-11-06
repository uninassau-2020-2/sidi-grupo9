module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'sistemas_distribuidos',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
