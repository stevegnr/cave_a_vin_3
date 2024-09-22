import { Repository, FindOptionsRelations, FindOptionsRelationByString } from 'typeorm';
export declare function checkIfEntityExists<T>(repository: Repository<T>, id: number, options?: {
    relations?: FindOptionsRelations<any> | FindOptionsRelationByString;
}): Promise<T>;
