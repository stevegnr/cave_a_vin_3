"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfEntityExists = checkIfEntityExists;
const common_1 = require("@nestjs/common");
async function checkIfEntityExists(repository, id, options) {
    const entity = await repository.findOne({
        where: { id },
        relations: options?.relations,
    });
    if (!entity) {
        throw new common_1.NotFoundException(`${repository.metadata.name} ${id} not found`);
    }
    return entity;
}
//# sourceMappingURL=entity.js.map