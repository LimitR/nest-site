export class ProductModel {
    _id: string;
    image: string;
    title: string;
    price: number;
    oldPrice: number;
    credit: number;
    calculRating: number;
    description: string;
    advantages: string;
    disAdvantages: string;
    categories: string[];
    tags: string;
    charateristics: {
        [key: string]: string
    };
}
