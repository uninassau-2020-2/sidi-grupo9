import Sequelize, { Model } from 'sequelize';

class ProductOrder extends Model {
    static init(sequelize) {
        super.init(
            {
                amount_product: Sequelize.STRING,
                partial_value: Sequelize.STRING,
                order_id: Sequelize.INTEGER,
                product_id: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Order, {
            foreignKey: 'order_id',
            as: 'orders',
        });
        this.belongsTo(models.Product, {
            foreignKey: 'products_id',
            as: 'products',
        });
    }
}

export default ProductOrder;
