import { Router } from "express";
import productRouter from "./products.routes.js";
import userRouter from "./users.routes.js";
import cartRouter from "./carts.routes.js";
import sessionRouter from "./sessions.routes.js";
import messageRouter from './messages.routes.js';
import ticketRouter from './tickets.routes.js';
import mockingRouter from "./mocking.routes.js";

const router = Router()

router.use('/api/product', productRouter)
router.use('/api/user', userRouter)
router.use('/api/carts', cartRouter)
router.use('/api/sessions', sessionRouter)
router.use('/api/messages', messageRouter);
router.use('/api/tickets', ticketRouter);
router.use('/mockingproducts', mockingRouter);

export default router