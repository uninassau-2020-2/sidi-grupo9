module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('product_orders', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            amount_product: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            partial_value: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            order_id: {
                type: Sequelize.INTEGER,
                references: { model: 'orders', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
            },
            product_id: {
                type: Sequelize.INTEGER,
                references: { model: 'products', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
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
        await queryInterface.dropTable('product_orders');
    },
};
