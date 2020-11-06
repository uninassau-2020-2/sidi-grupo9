import * as Yup from 'yup';

import Category from '../models/Category';

class CategoryController {
    async index(req, res) {
        if (req.params.id) {
            const catergories = await Category.findAll({
                where: { id: req.params.id },
            });

            return res.json({ catergories });
        }

        const catergories = await Category.findAll();

        return res.json({ catergories });
    }

    async delete(req, res) {
        const categories = await Category.findByPk(req.params.id);

        categories.id = null;
        categories.category_name = null;

        await categories.save();

        return res.json({ categories });
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            category_name: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const categoryExists = await Category.findOne({
            where: { category_name: req.body.category_name },
        });

        if (categoryExists) {
            return res.status(401).json({ error: 'Category already exist.' });
        }

        const { id, category_name } = await Category.create(req.body);

        return res.json({
            id,
            category_name,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            category_name: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const { category_name } = req.body;

        const catergory = await Category.findByPk(req.body.id);

        if (category_name !== catergory.category_name) {
            const catergoryExists = await Category.findOne({
                where: { category_name },
            });

            if (catergoryExists) {
                return res
                    .status(401)
                    .json({ error: 'Category already exist.' });
            }
        }

        const { id } = await catergory.update(req.body);

        return res.json({
            id,
            category_name,
        });
    }
}

export default new CategoryController();
