"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SnakeNamingStrategy", {
    enumerable: true,
    get: function() {
        return SnakeNamingStrategy;
    }
});
const _typeorm = require("typeorm");
const _StringUtils = require("typeorm/util/StringUtils");
let SnakeNamingStrategy = class SnakeNamingStrategy extends _typeorm.DefaultNamingStrategy {
    tableName(className, customName) {
        return customName ? customName : (0, _StringUtils.snakeCase)(className);
    }
    columnName(propertyName, customName, embeddedPrefixes) {
        return (0, _StringUtils.snakeCase)(embeddedPrefixes.concat('').join('_')) + (customName ? customName : (0, _StringUtils.snakeCase)(propertyName));
    }
    relationName(propertyName) {
        return (0, _StringUtils.snakeCase)(propertyName);
    }
    joinColumnName(relationName, referencedColumnName) {
        return (0, _StringUtils.snakeCase)(relationName + '_' + referencedColumnName);
    }
    joinTableName(firstTableName, secondTableName, firstPropertyName, secondPropertyName) {
        return (0, _StringUtils.snakeCase)(firstTableName + '_' + firstPropertyName.replace(/\./gi, '_') + '_' + secondTableName);
    }
    joinTableColumnName(tableName, propertyName, columnName) {
        return (0, _StringUtils.snakeCase)(tableName + '_' + (columnName ? columnName : propertyName));
    }
    classTableInheritanceParentColumnName(parentTableName, parentTableIdPropertyName) {
        return (0, _StringUtils.snakeCase)(parentTableName + '_' + parentTableIdPropertyName);
    }
    eagerJoinRelationAlias(alias, propertyPath) {
        return alias + '__' + propertyPath.replace('.', '_');
    }
};

//# sourceMappingURL=snake-naming.strategy.js.map