import { Neo4jService } from "@dbc-tech/nest-neo4j";
import { Injectable } from "@nestjs/common";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { ProductRepository } from "./products.repository";

@Injectable()

export class ProductService {
    constructor(private readonly productRepo: ProductRepository) {  
    }

    async addProduct(data: CreateProductDTO) {
        const id = Date.now().toString();
        const query = `Create (p: Product
            {
                id: $id,
                title: $title,
                description: $desc,
                price: $price,
                quantity: $quantity,
                outOfStock: $outOfStock
            }) Return p`;
        const input = {id, ...data};
        await this.productRepo.addNode(query, input);
        return id;
    }

    async getAllProducts() {
        const query = `Match (p:Product) return p`;

        const results = await this.productRepo.getNodes(query);
        return results.records.map(result => result.get('p').properties);
    }
}