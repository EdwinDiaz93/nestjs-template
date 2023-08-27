import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resource } from '../models';

@Injectable()
export class HelpersService {

    constructor(private readonly configService: ConfigService) { }

    async getOffset(page: number, limit: number) {
        const offset: number = (page - 1) * limit;
        return offset;
    }

    async generatePaginationObject<T>(page: number, limit: number, totalRows: number, collectionName: Resource, collection: T) {

        const totalPages = Math.ceil(totalRows / limit);

        const firstPageUrl = `${this.configService.get('HOST_API')}/${collectionName}?page=1`

        const lastPageUrl = (page === totalPages) ? null : `${this.configService.get('HOST_API')}/${collectionName}?page=${totalPages}`

        const nextPageUrl = (page === totalPages) ? null : `${this.configService.get('HOST_API')}/${collectionName}?page=${page + 1}`

        const prevPageUrl = (page === 1) ? null : `${this.configService.get('HOST_API')}/${collectionName}?page=${page - 1}`

        return {
            rows: collection,
            firstPage: 1,
            currentPage: page,
            lastPage: totalPages,
            firstPageUrl,
            lastPageUrl,
            nextPageUrl,
            prevPageUrl,
        };
    }

}
