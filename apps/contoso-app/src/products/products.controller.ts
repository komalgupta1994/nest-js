import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService) {}

    @Post('/add')
    async addProduct(@Body() body: CreateProductDTO) {
       return await this.productService.addProduct(body);
    }

    @Get('/getProducts')
    async getAllProducts() {
        return await this.productService.getAllProducts();
    }
}
