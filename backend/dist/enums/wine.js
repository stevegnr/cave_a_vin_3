"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WineColorEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var WineColorEnum;
(function (WineColorEnum) {
    WineColorEnum["red"] = "red";
    WineColorEnum["white"] = "white";
    WineColorEnum["pink"] = "pink";
    WineColorEnum["sparkling"] = "sparkling";
})(WineColorEnum || (exports.WineColorEnum = WineColorEnum = {}));
(0, graphql_1.registerEnumType)(WineColorEnum, { name: 'WineColorEnum' });
//# sourceMappingURL=wine.js.map