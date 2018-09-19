import { PluginBase, Server, PluginNameVersion, ResponseToolkit,Request } from "hapi";
import { ProductManager } from "./product_manager";
import { Product } from "./product";
import * as Joi from "joi";

//create plugin of product
export class ProductPlugin {
    name = "product";
    version = "1";

    register (server: Server, options: object){
        const productManager = new ProductManager([
            new Product("1","เสื้อ",299),
            new Product("2","รองเท้า",499),
            new Product("3","กระเป๋า",299)
        ]);       
        // this.server = server;
        this.registerRount(server, productManager);
    }
    registerRount(server : Server, productManager : ProductManager ) {
        server.route([    
            {
                path : "/",
                method : "GET",
                handler : (request : Request, h : ResponseToolkit) =>{
                    return productManager.getAll(); //ขอ product ทุกตัว 
                    
                }
            },
            {
                path : "/{productId}",
                method : "GET",
                handler : (request : Request, h : ResponseToolkit) =>{
                    
                    const product = productManager.get(request.params["productId"]);
                    return product || "พังงงงง!!!!!!!"
                },
                options: {//เพื่อให้รับแต่ number ใช้ npm i joi  && npm i @types/joi
                    validate:{
                        params: {
                            productId: Joi.number().min(1).max(3)
                        }
                    }
                }
            
            }
        ])
    }
} 