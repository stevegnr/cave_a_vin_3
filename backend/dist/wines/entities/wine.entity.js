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
exports.Wine = void 0;
const eager_import_0 = require("../../enums/wine");
const eager_import_1 = require("../../countries/entities/country.entity");
const graphql_1 = require("@nestjs/graphql");
const country_entity_1 = require("../../countries/entities/country.entity");
const wine_1 = require("../../enums/wine");
const typeorm_1 = require("typeorm");
let Wine = class Wine {
    static _GRAPHQL_METADATA_FACTORY() {
        return { name: { type: () => String }, appellation: { type: () => String }, domain: { type: () => String }, region: { type: () => String }, year: { type: () => Number }, color: { type: () => require("../../enums/wine").WineColorEnum }, price: { type: () => Number }, biologic: { type: () => Boolean }, bestAfter: { type: () => Number }, bestBefore: { type: () => Number }, quantity: { type: () => Number }, country: { nullable: true, type: () => require("../../countries/entities/country.entity").Country }, deletedAt: { nullable: true, type: () => Date } };
    }
};
exports.Wine = Wine;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], Wine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wine.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wine.prototype, "appellation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wine.prototype, "domain", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wine.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Wine.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wine.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Wine.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Wine.prototype, "biologic", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Wine.prototype, "bestAfter", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Wine.prototype, "bestBefore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Wine.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.Country, (country) => country.wines),
    __metadata("design:type", country_entity_1.Country)
], Wine.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    (0, graphql_1.Field)(() => Date, { description: 'Date de création' }),
    __metadata("design:type", Date)
], Wine.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    (0, graphql_1.Field)(() => Date, { description: 'Date de mise à jour' }),
    __metadata("design:type", Date)
], Wine.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Wine.prototype, "deletedAt", void 0);
exports.Wine = Wine = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Wine);
//# sourceMappingURL=wine.entity.js.map