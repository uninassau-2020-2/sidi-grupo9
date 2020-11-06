import Sequelize, { Model } from 'sequelize';

class Provider extends Model {
    static init(sequelize) {
        super.init(
            {
                fantasy_name: Sequelize.STRING,
                cnpj_cpf: Sequelize.STRING,
                active: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Provider;
