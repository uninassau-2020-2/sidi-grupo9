import * as Yup from 'yup';

import UserProfile from '../models/UserProfile';

class UserProfileContoller {
    async store(req, res) {
        const schema = Yup.object().shape({
            user_profile: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const userProfileExists = await UserProfile.findOne({
            where: { user_profile: req.body.user_profile },
        });

        if (userProfileExists) {
            return res
                .status(401)
                .json({ error: 'User profile already exist.' });
        }

        const { id, user_profile } = await UserProfile.create(req.body);

        return res.json({
            id,
            user_profile,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            user_profile: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const { user_profile } = req.body;

        const userProfile = await UserProfile.findByPk(req.body.id);

        if (userProfile !== userProfile.user_profile) {
            const userProfileExists = await UserProfile.findOne({
                where: { user_profile },
            });

            if (userProfileExists) {
                return res
                    .status(401)
                    .json({ error: 'User profile already exist.' });
            }
        }

        const { id } = await userProfile.update(req.body);

        return res.json({
            id,
            user_profile,
        });
    }
}

export default new UserProfileContoller();
