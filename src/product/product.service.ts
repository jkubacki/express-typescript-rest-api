import ProductModel, { ProductInput } from "./product.model";

// eslint-disable-next-line import/prefer-default-export
export async function createProduct(input: ProductInput) {
  try {
    return await ProductModel.create(input);
  } catch (e: unknown) {
    throw e as Error;
  }
}
