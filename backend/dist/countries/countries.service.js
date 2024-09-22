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
exports.CountriesService = void 0;
const common_1 = require("@nestjs/common");
const country_entity_1 = require("./entities/country.entity");
const typeorm_1 = require("@nestjs/typeorm");
const entity_1 = require("../utils/entity");
const typeorm_2 = require("typeorm");
let CountriesService = class CountriesService {
    constructor(countriesRepository) {
        this.countriesRepository = countriesRepository;
    }
    create(createCountryInput) {
        const country = this.countriesRepository.create(createCountryInput);
        return this.countriesRepository.save(country);
    }
    findAll() {
        return this.countriesRepository.find();
    }
    findOne(id) {
        return (0, entity_1.checkIfEntityExists)(this.countriesRepository, id);
    }
    async update(id, updateCountryInput) {
        await (0, entity_1.checkIfEntityExists)(this.countriesRepository, id);
        await this.countriesRepository.update(id, updateCountryInput);
        const updatedCountry = await this.countriesRepository.findOneBy({
            id,
        });
        return this.countriesRepository.save(updatedCountry);
    }
    async remove(id) {
        const country = await (0, entity_1.checkIfEntityExists)(this.countriesRepository, id);
        this.countriesRepository.softDelete(id);
        return country;
    }
};
exports.CountriesService = CountriesService;
exports.CountriesService = CountriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(country_entity_1.Country)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CountriesService);
//# sourceMappingURL=countries.service.js.map