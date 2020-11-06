import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                cod_product: Sequelize.STRING,
                name: Sequelize.STRING,
                price: Sequelize.STRING,
                active: Sequelize.BOOLEAN,
                category_id: Sequelize.INTEGER,
                provider_id: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'categories',
        });
        this.belongsTo(models.Provider, {
            foreignKey: 'provider_id',
            as: 'providers',
        });
    }
}

export default Product;
