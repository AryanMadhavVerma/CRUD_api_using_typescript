"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
var mongoose_1 = require("mongoose");
var roleSchema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        unique: true,
    },
    description: {
        type: mongoose_1.Schema.Types.String,
        default: null,
    }
}, {
    collection: 'roles',
    timestamps: true,
});
var Role = mongoose_1.default.model('Role', roleSchema);
exports.Role = Role;
