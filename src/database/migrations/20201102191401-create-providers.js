module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('providers', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            fantasy_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cnpj_cpf: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            active: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('providers');
    },
};
