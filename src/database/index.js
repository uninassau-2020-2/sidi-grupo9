import Sequelize from 'sequelize';

import User from '../app/models/User';
import Product from '../app/models/Product';
import UserProfile from '../app/models/UserProfile';
import Provider from '../app/models/Provider';
import Contact from '../app/models/Contact';
import FormPayment from '../app/models/FormPayment';
import Order from '../app/models/Order';
import ProductOrder from '../app/models/ProductOrder';

import databaseConfig from '../config/database';

const models = [
    User,
    Product,
    UserProfile,
    Provider,
    Contact,
    FormPayment,
    Order,
    ProductOrder,
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map((model) => model.init(this.connection));
    }
}

export default new Database();
