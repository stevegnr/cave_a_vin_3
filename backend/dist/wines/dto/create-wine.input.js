"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWineInput = void 0;
const eager_import_0 = require("../../enums/wine");
const graphql_1 = require("@nestjs/graphql");
let CreateWineInput = class CreateWineInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { name: { type: () => String }, appellation: { type: () => String }, domain: { type: () => String }, region: { type: () => String }, year: { type: () => Number }, color: { type: () => require("../../enums/wine").WineColorEnum }, price: { type: () => Number }, biologic: { type: () => Boolean }, bestAfter: { type: () => Number }, bestBefore: { type: () => Number }, quantity: { type: () => Number }, countryId: { type: () => Number } };
    }
};
exports.CreateWineInput = CreateWineInput;
exports.CreateWineInput = CreateWineInput = __decorate([
    (0, graphql_1.InputType)()
], CreateWineInput);
//# sourceMappingURL=create-wine.input.js.map