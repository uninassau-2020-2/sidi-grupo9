import Sequelize, { Model } from 'sequelize';

class Order extends Model {
    static init(sequelize) {
        super.init(
            {
                order_price: Sequelize.STRING,
                order_date: Sequelize.DATE,
                status: Sequelize.STRING,
                user_id: Sequelize.INTEGER,
                provider_id: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'users',
        });
        this.belongsTo(models.Provider, {
            foreignKey: 'provider_id',
            as: 'providers',
        });
    }
}

export default Order;
