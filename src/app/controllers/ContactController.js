import * as Yup from 'yup';

import Contact from '../models/Contact';

class ContactContoller {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            phone_number: Yup.string().required(),
            place: Yup.string().required(),
            number: Yup.string().required(),
            district: Yup.string().required(),
            city: Yup.string().required(),
            state: Yup.string().required(),
            postal_code: Yup.string().required(),
            complement: Yup.string().required(),
            provider_id: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const {
            id,
            email,
            phone_number,
            place,
            number,
            district,
            city,
            state,
            postal_code,
            complement,
            provider_id,
        } = await Contact.create(req.body);

        return res.json({
            id,
            email,
            phone_number,
            place,
            number,
            district,
            city,
            state,
            postal_code,
            complement,
            provider_id,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            phone_number: Yup.string().required(),
            place: Yup.string().required(),
            number: Yup.string().required(),
            district: Yup.string().required(),
            city: Yup.string().required(),
            state: Yup.string().required(),
            postal_code: Yup.string().required(),
            complement: Yup.string().required(),
            provider_id: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const contact = await Contact.findByPk(req.body.id);

        const {
            id,
            email,
            phone_number,
            place,
            number,
            district,
            city,
            state,
            postal_code,
            complement,
            provider_id,
        } = await contact.update(req.body);

        return res.json({
            id,
            email,
            phone_number,
            place,
            number,
            district,
            city,
            state,
            postal_code,
            complement,
            provider_id,
        });
    }
}

export default new ContactContoller();
