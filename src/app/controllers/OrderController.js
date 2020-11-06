import * as Yup from 'yup';

import Order from '../models/Order';

class OrderContoller {
    async index(req, res) {
        if (req.params.id) {
            const orders = await Order.findAll({
                where: { id: req.params.id },
            });

            return res.json({ orders });
        }

        const orders = await Order.findAll();

        return res.json({ orders });
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            order_price: Yup.string().required(),
            order_date: Yup.date().required(),
            status: Yup.string().required(),
            user_id: Yup.number().required(),
            provider_id: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const {
            id,
            order_price,
            order_date,
            status,
            user_id,
            provider_id,
        } = await Order.create(req.body);

        return res.json({
            id,
            order_price,
            order_date,
            status,
            user_id,
            provider_id,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            order_price: Yup.string().required(),
            order_date: Yup.date().required(),
            status: Yup.string().required(),
            user_id: Yup.number().required(),
            provider_id: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const { id } = req.body;

        const order = await Order.findByPk(req.body.id);

        if (id !== order.id) {
            const orderExists = await Order.findOne({
                where: { id },
            });

            if (orderExists) {
                return res.status(401).json({ error: 'Order already exist.' });
            }
        }

        const {
            order_price,
            order_date,
            status,
            user_id,
            provider_id,
        } = await order.update(req.body);

        return res.json({
            id,
            order_price,
            order_date,
            status,
            user_id,
            provider_id,
        });
    }
}

export default new OrderContoller();
