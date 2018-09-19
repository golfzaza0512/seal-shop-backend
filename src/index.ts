import { Server, ResponseToolkit, Request } from "hapi";
import { ProductPlugin } from "./product";
const server = new Server({
    port : "5000"
});
// แบบที่ 1
// server.register(new ProductPlugin(),{routes:{prefix:"/product"} })
// .then(() =>{
//     server.start().then(
//         () => { console.log("Server Start");},
//         (err) => { console.log("Server error" + err);}
//     );
// });

// แบบที่ 2
async function init(){
        await server.register(new ProductPlugin(), { routes: {prefix: "/product"}});
        await server.start();
        console.log("Server Start!!");
    
}
try{
    init();
} catch(err) {
    console.log("Server error" + err);
}


server.route([
    // { 
    //     path : "/product/{productId}",//ขอ product number ?
    //     method : "GET",
    //     handler : (request: Request, h: ResponseToolkit) => {
            
            
    //         return request.params["productId"]; //return product id
    //     }
    // },
    { 
        path : "/",
        method : "GET",
        handler : (request: Request, h: ResponseToolkit) => {
            return "<a href='/product'>Product</a>"

        }
    },
    // { 
    //     path : "/product",
    //     method : "GET",
    //     handler : (request: Request, h: ResponseToolkit) => {

    //         return request.query; //return product id
    //     }
    // },
])

// server.start().then(
//     () => {console.log("Server Start");},
//     (err) => { console.log("Server error" + err); });