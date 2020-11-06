import * as Yup from 'yup';

import Product from '../models/Product';

class ProductContoller {
    async index(req, res) {
        if (req.params.id) {
            const products = await Product.findAll({
                where: { id: req.params.id },
            });

            return res.json({ products });
        }

        const products = await Product.findAll();

        return res.json({ products });
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            cod_product: Yup.string().required(),
            name: Yup.string().required(),
            price: Yup.string().required(),
            category_id: Yup.number().required(),
            provider_id: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const productExists = await Product.findOne({
            where: { name: req.body.name },
        });

        if (productExists) {
            return res.status(401).json({ error: 'Product already exist.' });
        }

        const {
            id,
            cod_product,
            name,
            price,
            category_id,
            provider_id,
        } = await Product.create(req.body);

        return res.json({
            id,
            cod_product,
            name,
            price,
            category_id,
            provider_id,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            cod_product: Yup.string().required(),
            name: Yup.string().required(),
            price: Yup.string().required(),
            category_id: Yup.number().required(),
            provider_id: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const { name } = req.body;

        const product = await Product.findByPk(req.body.id);

        if (name !== product.name) {
            const productExists = await Product.findOne({
                where: { name },
            });

            if (productExists) {
                return res
                    .status(401)
                    .json({ error: 'Product already exist.' });
            }
        }

        const {
            id,
            cod_product,
            price,
            category_id,
            provider_id,
        } = await product.update(req.body);

        return res.json({
            id,
            cod_product,
            name,
            price,
            category_id,
            provider_id,
        });
    }
}

export default new ProductContoller();
