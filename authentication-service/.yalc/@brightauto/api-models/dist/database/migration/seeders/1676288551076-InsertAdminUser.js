"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InsertAdminUser1676288551076", {
    enumerable: true,
    get: function() {
        return InsertAdminUser1676288551076;
    }
});
const _lodash = require("lodash");
const _action = require("../../../common/constant/action");
const _common = require("../../../common");
const _user = require("../../../common/constant/user");
const _ormconfig = require("../../../orm-config");
let InsertAdminUser1676288551076 = class InsertAdminUser1676288551076 {
    async up(queryRunner) {
        try {
            // lets now open a new transaction:
            await queryRunner.startTransaction();
            console.log("Create new admin user details -->");
            /* Create roles */ if ((0, _lodash.values)(_common.allRoles).length) {
                const roleEntities = await queryRunner.manager.create(_ormconfig.Role, (0, _lodash.values)(_common.allRoles));
                await queryRunner.manager.save(roleEntities);
            }
            /* Create list of actions with corresponding roles */ if (_action.allActions.length) {
                const actionEntities = await queryRunner.manager.create(_ormconfig.Action, _action.allActions);
                await queryRunner.manager.save(actionEntities);
            }
            /* Create Superadmin, Admin, client user */ if (_user.users.length) {
                const userEntities = await queryRunner.manager.create(_ormconfig.User, _user.users);
                await queryRunner.manager.save(userEntities);
            }
            // commit transaction now:
            await queryRunner.commitTransaction();
        } catch (error) {
            // since we have errors let's rollback changes we made
            await queryRunner.rollbackTransaction();
            throw error;
        } finally{
        // you need to release query runner which is manually created:
        // await queryRunner.release();
        }
    }
    async down(queryRunner) {}
};

//# sourceMappingURL=1676288551076-InsertAdminUser.js.map