import express from 'express'
import routerProduct from './product.router.js'
import routerCategory from './category.router.js'
import routerAuth from './auth.router.js'
import routerCart from './cart.router.js'
import routerOrder from './order.router.js'
import routerComment from './comment.router.js'
import routerContent from './content.router.js'
import routerContact from './contact.router.js'
const router = express.Router()

const arrayRouter = [
    {path:'/product', route:routerProduct},
    {path:'/category', route: routerCategory},
    {path:'/auth', route: routerAuth},
    {path: '/cart', route: routerCart},
    {path: '/order', route: routerOrder},
    { path: "/comment", route: routerComment },
    { path: "/content", route: routerContent },
    {path: "/contact", route: routerContact}
]
arrayRouter.forEach((route)=>{
    router.use(route.path, route.route)
})

export default router