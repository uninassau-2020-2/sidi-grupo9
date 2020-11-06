import Sequelize, { Model } from 'sequelize';

class FormPayment extends Model {
    static init(sequelize) {
        super.init(
            {
                type_form_payment: Sequelize.STRING,
                description_form_payment: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default FormPayment;
