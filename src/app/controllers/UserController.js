import * as Yup from 'yup';

import User from '../models/User';

class UserController {
    async index(req, res) {
        if (req.params.id) {
            const users = await User.findAll({
                where: { id: req.params.id },
            });

            return res.json({ users });
        }

        const users = await User.findAll();

        return res.json({ users });
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            user_profile_id: Yup.number(),
            password: Yup.string().required().min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const userExists = await User.findOne({
            where: { email: req.body.email },
        });

        if (userExists) {
            return res.status(401).json({ error: 'User already exist.' });
        }

        const { id, name, email, active, user_profile_id } = await User.create(
            req.body
        );

        return res.json({
            id,
            name,
            email,
            active,
            user_profile_id,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            id: Yup.number(),
            name: Yup.string(),
            email: Yup.string().email(),
            // user_profile_id: Yup.number(),
            // oldPassword: Yup.string().min(6),
            // password: Yup.string()
            //     .min(6)
            //     .when('oldPassword', (oldPassword, field) =>
            //         oldPassword ? field.required() : field
            //     ),
            // confirmPassword: Yup.string().when('password', (password, field) =>
            //     password ? field.required().oneOf([Yup.ref('password')]) : field
            // ),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const { email, oldPassword } = req.body;

        const user = await User.findByPk(req.userId);

        if (email !== user.email) {
            const userExists = await User.findOne({
                where: { email },
            });

            if (userExists) {
                return res.status(400).json({ error: 'User already exist.' });
            }
        }

        // if (oldPassword && !(await user.checkPassword(oldPassword))) {
        //     return res.status(401).json({ error: 'Password does not match.' });
        // }

        const { id, name, active, user_profile_id } = await user.update(
            req.body
        );

        return res.json({
            id,
            name,
            email,
            active,
            user_profile_id,
        });
    }
}

export default new UserController();
