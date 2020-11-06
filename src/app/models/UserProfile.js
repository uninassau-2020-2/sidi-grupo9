import Sequelize, { Model } from 'sequelize';

class UserProfile extends Model {
    static init(sequelize) {
        super.init(
            {
                user_profile: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default UserProfile;
