import { Product } from "./product";

export class ProductManager {

    constructor(private products: Product[]) {
        // this.products = [
        //     new Product("1","เสื้อ",299),
        //     new Product("2","รองเท้า",499),
        //     new Product("3","กระเป๋า",299)
        // ];
    }

    getAll(): Product[] {
        return this.products;
    }

    get(id: string) : Product{
        return this.products.find((product) => {
            return product.id == id;
        });
    }

}




// () => { }  คือ function ที่ไม่มีชื่อ 