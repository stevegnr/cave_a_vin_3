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
exports.WinesService = void 0;
const common_1 = require("@nestjs/common");
const wine_entity_1 = require("./entities/wine.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entity_1 = require("../utils/entity");
let WinesService = class WinesService {
    constructor(winesRepository) {
        this.winesRepository = winesRepository;
    }
    create(createWineInput) {
        const wine = this.winesRepository.create(createWineInput);
        return this.winesRepository.save(wine);
    }
    findAll() {
        return this.winesRepository.find();
    }
    findOne(id) {
        return (0, entity_1.checkIfEntityExists)(this.winesRepository, id);
    }
    async update(id, updateWineInput) {
        await (0, entity_1.checkIfEntityExists)(this.winesRepository, id);
        await this.winesRepository.update(id, updateWineInput);
        const updatedWine = await this.winesRepository.findOneBy({ id });
        return this.winesRepository.save(updatedWine);
    }
    async remove(id) {
        const wine = await (0, entity_1.checkIfEntityExists)(this.winesRepository, id);
        this.winesRepository.softDelete(id);
        return wine;
    }
};
exports.WinesService = WinesService;
exports.WinesService = WinesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wine_entity_1.Wine)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WinesService);
//# sourceMappingURL=wines.service.js.map