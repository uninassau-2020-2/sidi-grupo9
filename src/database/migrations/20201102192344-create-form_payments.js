module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('form_payments', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            description_form_payment: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            type_form_payment: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
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
        await queryInterface.dropTable('form_payments');
    },
};
