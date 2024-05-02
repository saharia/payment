"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "defaultColumns", {
    enumerable: true,
    get: function() {
        return defaultColumns;
    }
});
const defaultColumns = [
    {
        name: "is_published",
        type: "boolean",
        isNullable: false,
        default: false
    },
    {
        name: "is_active",
        type: "boolean",
        isNullable: false,
        default: true
    },
    {
        name: "created_at",
        type: "timestamp",
        isNullable: false,
        default: "now()"
    },
    {
        name: "updated_at",
        type: "timestamp",
        isNullable: false,
        default: "now()"
    },
    {
        name: "deleted_at",
        type: "timestamp",
        isNullable: true
    }
];

//# sourceMappingURL=default-column.migration.js.map