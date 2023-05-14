import { Module } from "@nestjs/common";
import { ProductController } from "./products.controller";
import { ProductService } from "./products.service";
import { ProductRepository } from "./products.repository";

@Module({
    imports: [],
    controllers: [ProductController],
    providers: [ProductService, ProductRepository]
})

export class ProductModule {}