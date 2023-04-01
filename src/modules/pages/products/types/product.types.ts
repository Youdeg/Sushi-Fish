export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  deliveryPrice: number;
  weight: number;
};

export type ProductTypes = {
  type: string;
  products: Product[];
}[];

export type ProductsBodyType = {
  id: number[];
}[];
