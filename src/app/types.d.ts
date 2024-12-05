export type Category = {
    id: string;
    name: string;
    description: string;
    pathImage: string;
}
  
export type Hamburger = {
    id: string;
    name: string;
    baseDescription: string;
    fullDescription: string;
    pathImage: string;
    price: number;
}

export type Order = {
    userId: string;
    observation: string;
    quantity: number;
    productId: number;
}
  