import { NotFoundException } from '@nestjs/common';
import {
  Repository,
  FindOptionsRelations,
  FindOptionsRelationByString,
} from 'typeorm';

/**
 * Vérifie si une entité avec l'identifiant donné existe dans le repository et charge les relations spécifiées.
 *
 * @template T Le type de l'entité à vérifier.
 * @param {Repository<T>} repository Le repository contenant les entités.
 * @param {number} id L'identifiant de l'entité à vérifier.
 * @param {Object} [options] Options supplémentaires pour la requête.
 * @param {string[]} [options.relations] Un tableau de relations à charger en même temps que l'entité.
 * @returns {Promise<T>} Une promesse qui résout l'entité trouvée ou rejette une exception si l'entité n'est pas trouvée.
 * @throws {NotFoundException} Lance une exception si l'entité avec l'identifiant spécifié n'est pas trouvée.
 *
 * @example
 * ```
 * import { checkIfEntityExists } from './path/to/utility';
 * import { User } from './entities/user.entity';
 * import { Repository } from 'typeorm';
 *
 * async function findUser(userRepository: Repository<User>, userId: number): Promise<User> {
 *   return checkIfEntityExists(userRepository, userId, { relations: ['profile', 'roles'] });
 * }
 * ```
 */
export async function checkIfEntityExists<T>(
  repository: Repository<T>,
  id: number,
  options?: {
    relations?: FindOptionsRelations<any> | FindOptionsRelationByString;
  },
): Promise<T> {
  const entity: T = await repository.findOne({
    where: { id } as any,
    relations: options?.relations,
  });
  if (!entity) {
    throw new NotFoundException(`${repository.metadata.name} ${id} not found`);
  }
  return entity;
}
