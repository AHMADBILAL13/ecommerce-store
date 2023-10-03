import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { productType } from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, productType],
};
