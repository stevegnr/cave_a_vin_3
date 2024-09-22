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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const wines_service_1 = require("./wines.service");
const wine_entity_1 = require("./entities/wine.entity");
const create_wine_input_1 = require("./dto/create-wine.input");
const update_wine_input_1 = require("./dto/update-wine.input");
let WinesResolver = class WinesResolver {
    constructor(winesService) {
        this.winesService = winesService;
    }
    createWine(createWineInput) {
        return this.winesService.create(createWineInput);
    }
    findAll() {
        return this.winesService.findAll();
    }
    findOne(id) {
        return this.winesService.findOne(id);
    }
    updateWine(updateWineInput) {
        return this.winesService.update(updateWineInput.id, updateWineInput);
    }
    removeWine(id) {
        return this.winesService.remove(id);
    }
};
exports.WinesResolver = WinesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => wine_entity_1.Wine),
    __param(0, (0, graphql_1.Args)('createWineInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wine_input_1.CreateWineInput]),
    __metadata("design:returntype", void 0)
], WinesResolver.prototype, "createWine", null);
__decorate([
    (0, graphql_1.Query)(() => [wine_entity_1.Wine], { name: 'wines' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WinesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => wine_entity_1.Wine, { name: 'wine' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WinesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => wine_entity_1.Wine),
    __param(0, (0, graphql_1.Args)('updateWineInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_wine_input_1.UpdateWineInput]),
    __metadata("design:returntype", void 0)
], WinesResolver.prototype, "updateWine", null);
__decorate([
    (0, graphql_1.Mutation)(() => wine_entity_1.Wine),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WinesResolver.prototype, "removeWine", null);
exports.WinesResolver = WinesResolver = __decorate([
    (0, graphql_1.Resolver)(() => wine_entity_1.Wine),
    __metadata("design:paramtypes", [wines_service_1.WinesService])
], WinesResolver);
//# sourceMappingURL=wines.resolver.js.map