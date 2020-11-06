import Sequelize, { Model } from 'sequelize';

class Contact extends Model {
    static init(sequelize) {
        super.init(
            {
                email: Sequelize.STRING,
                phone_number: Sequelize.STRING,
                place: Sequelize.STRING,
                number: Sequelize.STRING,
                district: Sequelize.STRING,
                city: Sequelize.STRING,
                state: Sequelize.STRING,
                postal_code: Sequelize.STRING,
                complement: Sequelize.STRING,
                provider_id: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Provider, {
            foreignKey: 'provider_id',
            as: 'providers',
        });
    }
}

export default Contact;
