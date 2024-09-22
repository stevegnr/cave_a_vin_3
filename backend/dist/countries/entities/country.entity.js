"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const eager_import_0 = require("../../wines/entities/wine.entity");
const graphql_1 = require("@nestjs/graphql");
const wine_entity_1 = require("../../wines/entities/wine.entity");
const typeorm_1 = require("typeorm");
let Country = class Country {
    static _GRAPHQL_METADATA_FACTORY() {
        return { name: { type: () => String }, flag: { type: () => String }, wines: { nullable: true, type: () => [require("../../wines/entities/wine.entity").Wine] }, deletedAt: { nullable: true, type: () => Date } };
    }
};
exports.Country = Country;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], Country.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Country.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Country.prototype, "flag", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => wine_entity_1.Wine, (wine) => wine.country),
    __metadata("design:type", Array)
], Country.prototype, "wines", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    (0, graphql_1.Field)(() => Date, { description: 'Date de création' }),
    __metadata("design:type", Date)
], Country.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    (0, graphql_1.Field)(() => Date, { description: 'Date de mise à jour' }),
    __metadata("design:type", Date)
], Country.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Country.prototype, "deletedAt", void 0);
exports.Country = Country = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Country);
//# sourceMappingURL=country.entity.js.map