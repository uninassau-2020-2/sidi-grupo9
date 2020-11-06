import * as Yup from 'yup';

import ProductOrder from '../models/ProductOrder';

class ProductOrderContoller {
    async store(req, res) {
        const schema = Yup.object().shape({
            amount_product: Yup.string().required(),
            partial_value: Yup.string().required(),
            order_id: Yup.number().required(),
            product_id: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const {
            id,
            amount_product,
            partial_value,
            order_id,
            product_id,
        } = await ProductOrder.create(req.body);

        return res.json({
            id,
            amount_product,
            partial_value,
            order_id,
            product_id,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            amount_product: Yup.string().required(),
            partial_value: Yup.string().required(),
            order_id: Yup.number().required(),
            product_id: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const { id } = req.body;

        const productOrder = await ProductOrder.findByPk(req.body.id);

        if (id !== productOrder.id) {
            const productOrderExists = await ProductOrder.findOne({
                where: { id },
            });

            if (productOrderExists) {
                return res
                    .status(401)
                    .json({ error: 'Product Order already exist.' });
            }
        }

        const {
            amount_product,
            partial_value,
            order_id,
            product_id,
        } = await productOrder.update(req.body);

        return res.json({
            id,
            amount_product,
            partial_value,
            order_id,
            product_id,
        });
    }
}

export default new ProductOrderContoller();
