import { Server, ResponseToolkit, Request } from "hapi";
import { ProductPlugin } from "./product";
// import { Product } from "./product/product";
import { plugin } from "hapi-auth-basic";
// import { validate, options } from "joi";
// import { request } from "https";
const server = new Server({
    port : "5000",
    routes: {
        cors: {
            origin: ["*"]
        }
    }
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
        await server.register(plugin);
        server.auth.strategy('simple','basic', { validate }); // naem , screem , {option screem}
        server.route([
            { 
                path : "/",
                method : "GET",
                handler : (request: Request, h: ResponseToolkit) => {
                    console.dir(request.auth.credentials)
                    // console.log(request.auth.credentials)
                    return "<a href='/product'>Product</a>"
                    // return "Hello"
        
                },
                options: {
                    auth : 'simple'
                }
            },
            
           
        ])

        await server.register(new ProductPlugin(), { routes: {prefix: "/product"}});
        await server.start();
        console.log("Server Start!!");
}

const validate = async (request, username, password) => {
    let isValid = false;
    let credentials = {};
    if (username == "admin" && password == "1234"){
        isValid = true;
        credentials = { userId: "u123", name: "Gun Witawas"}
    }
    return { isValid, credentials};
}



try{
    init();
} catch(err) {
    console.log("Server error" + err);
}

// server.route([
//     // { 
//     //     path : "/product/{productId}",//ขอ product number ?
//     //     method : "GET",
//     //     handler : (request: Request, h: ResponseToolkit) => {
        
//     //         return request.params["productId"]; //return product id
//     //     }
//     // },
//     { 
//         path : "/",
//         method : "GET",
//         handler : (request: Request, h: ResponseToolkit) => {
//             return "<a href='/product'>Product</a>"

//         }
//     },
//     // { 
//     //     path : "/product",
//     //     method : "GET",
//     //     handler : (request: Request, h: ResponseToolkit) => {

//     //         return request.query; //return product id
//     //     }
//     // },
// ])

// // server.start().then(
// //     () => {console.log("Server Start");},
// //     (err) => { console.log("Server error" + err); });