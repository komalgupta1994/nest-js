import { Neo4jService } from "@dbc-tech/nest-neo4j";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository {
    constructor(private readonly neo4jService: Neo4jService) {  
    }

    async addNode(query, params) {
        return await this.neo4jService.write(query, params);
    }

    async updateNode() {

    }

    async deleteNode() {

    }

    async getNodes(query) {
        return await this.neo4jService.read(query);
    }
}