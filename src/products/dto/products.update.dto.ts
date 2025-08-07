import { PartialType } from "@nestjs/mapped-types";
import { ProductCreateDTO } from "./products.create.dto";

//productUpdateDTO hereda de ProductCreateDTO con extends
export class ProductUpdateDTO extends PartialType(ProductCreateDTO) {
    id: number;

}


