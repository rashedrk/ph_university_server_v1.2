import config from "../config";
import { USER_ROLE } from "../modules/User/user.constant";
import { User } from "../modules/User/user.model";

const superUser = {
    id: '0001',
    email: 'super@admin.com',
    password: config.super_admin_password,
    needsPasswordChange: false,
    role: USER_ROLE.superAdmin,
    status: 'in-progress',
    isDeleted: false,
}

const seedSuperAdmin = async () => {
    const isSuperAdminExist = await User.findOne({ role: USER_ROLE.superAdmin });

    if (!isSuperAdminExist) {
        await User.create(superUser);
    }
}

export default seedSuperAdmin;