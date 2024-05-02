"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertAdminUser1676288551076 = void 0;
const lodash_1 = require("lodash");
const action_1 = require("../../../common/constant/action");
const common_1 = require("../../../common");
const user_1 = require("../../../common/constant/user");
const orm_config_1 = require("../../../orm-config");
class InsertAdminUser1676288551076 {
    async up(queryRunner) {
        try {
            await queryRunner.startTransaction();
            console.log("Create new admin user details -->");
            if ((0, lodash_1.values)(common_1.allRoles).length) {
                const roleEntities = await queryRunner.manager.create(orm_config_1.Role, (0, lodash_1.values)(common_1.allRoles));
                await queryRunner.manager.save(roleEntities);
            }
            if (action_1.allActions.length) {
                const actionEntities = await queryRunner.manager.create(orm_config_1.Action, action_1.allActions);
                await queryRunner.manager.save(actionEntities);
            }
            if (user_1.users.length) {
                const userEntities = await queryRunner.manager.create(orm_config_1.User, user_1.users);
                await queryRunner.manager.save(userEntities);
            }
            await queryRunner.commitTransaction();
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
        }
    }
    async down(queryRunner) {
    }
}
exports.InsertAdminUser1676288551076 = InsertAdminUser1676288551076;
//# sourceMappingURL=1676288551076-InsertAdminUser.js.map