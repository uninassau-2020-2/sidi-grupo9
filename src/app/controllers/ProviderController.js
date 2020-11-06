import * as Yup from 'yup';

import Provider from '../models/Provider';

class ProviderContoller {
    async store(req, res) {
        const schema = Yup.object().shape({
            fantasy_name: Yup.string().required(),
            cnpj_cpf: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const providerExists = await Provider.findOne({
            where: { cnpj_cpf: req.body.cnpj_cpf },
        });

        if (providerExists) {
            return res.status(401).json({ error: 'Provider already exist.' });
        }

        const { id, fantasy_name, cnpj_cpf } = await Provider.create(req.body);

        return res.json({
            id,
            fantasy_name,
            cnpj_cpf,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            fantasy_name: Yup.string(),
            cnpj_cpf: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const { cnpj_cpf } = req.body;

        const product = await Provider.findByPk(req.body.id);

        if (cnpj_cpf !== product.cnpj_cpf) {
            const providerExists = await Provider.findOne({
                where: { cnpj_cpf },
            });

            if (providerExists) {
                return res
                    .status(401)
                    .json({ error: 'Provider already exist.' });
            }
        }

        const { id, fantasy_name } = await product.update(req.body);

        return res.json({
            id,
            fantasy_name,
            cnpj_cpf,
        });
    }
}

export default new ProviderContoller();
