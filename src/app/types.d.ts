export type Order = {
    productId: number;
    observation: string;
    quantity: number;
}

export type Category = {
    id: string;
    name: string;
    desc: string;
    imageUrl: string;
}
  
export type Hamburger = {
    id: string;
    name: string;
    ingredients: string;
    price: number;
    categoryId: string;
    imageUrl: string;
    desc: string
}
  