export class Product {
    id: string;
    title: string;
    price: number;
    category: string;
    imageUrl: string;
    detail: string;

constructor(id, title:string, price:number,category: string,imageUrl: string,detail: string    ){
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.imageUrl = imageUrl;
    this.detail = detail;
}

}