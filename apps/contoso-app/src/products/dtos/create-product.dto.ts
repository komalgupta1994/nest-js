import { IsBoolean, IsNotEmpty, IsNumber, Length, isNotEmpty } from "class-validator";

export class CreateProductDTO {
    id: string;

    @IsNotEmpty()
    @Length(3, 20)
    title: string;

    @Length(3, 150)
    desc: string;

    @IsNotEmpty({
        // Custom message
        message: 'Price is required'
    })
    @IsNumber()
    price: string;

    @IsBoolean()
    outOfStock: boolean;

    @IsNumber()
    quantity: number;
}