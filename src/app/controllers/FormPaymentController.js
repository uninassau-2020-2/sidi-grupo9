import * as Yup from 'yup';

import FormPayment from '../models/FormPayment';

class FormPaymentController {
    async index(req, res) {
        const formPayments = await FormPayment.findAll();

        return res.json({ formPayments });
    }

    async delete(req, res) {
        const formPayments = await FormPayment.findByPk(req.params.id);

        formPayments.id = null;
        formPayments.type_form_payment = null;
        formPayments.description_form_payment = null;

        await formPayments.save();

        return res.json({ formPayments });
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            description_form_payment: Yup.string().required(),
            type_form_payment: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const formPaymentExists = await FormPayment.findOne({
            where: { type_form_payment: req.body.type_form_payment },
        });

        if (formPaymentExists) {
            return res
                .status(401)
                .json({ error: 'Form Payment already exist.' });
        }

        const {
            id,
            description_form_payment,
            type_form_payment,
        } = await FormPayment.create(req.body);

        return res.json({
            id,
            description_form_payment,
            type_form_payment,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            description_form_payment: Yup.string().required(),
            type_form_payment: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const { type_form_payment } = req.body;

        const formPayment = await FormPayment.findByPk(req.body.id);

        if (type_form_payment !== formPayment.type_form_payment) {
            const providerExists = await FormPayment.findOne({
                where: { type_form_payment },
            });

            if (providerExists) {
                return res
                    .status(401)
                    .json({ error: 'Form Payment already exist.' });
            }
        }

        const { id, description_form_payment } = await formPayment.update(
            req.body
        );

        return res.json({
            id,
            description_form_payment,
            type_form_payment,
        });
    }
}

export default new FormPaymentController();
