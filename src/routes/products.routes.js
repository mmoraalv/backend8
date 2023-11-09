import { Router } from "express";
import { getProducts, getProduct, postProduct, putProduct, deleteProduct } from "../controllers/product.controller.js";
import { passportError, authorization } from "../utils/messageErrors.js";

import CustomError from '../services/errors/customError.js';
import EErrors from '../services/errors/enums.js';
import { generateProductErrorInfo } from "../services/errors/info.js";

const productRouter = Router()

productRouter.get('/', getProducts)
productRouter.get('/:id', getProduct)
productRouter.post('/', (req, res, next) => {
    const { title, description, price, stock, code, category } = req.body;
    try {
        if (!title || !description || !price || !stock || !code || !category) {
            CustomError.createError({
                name: "Product creation error",
                cause: generateProductErrorInfo({ title, description, price, stock, code, category }),
                message: "One or more properties were incomplete or not valid.",
                code: EErrors.INVALID_PRODUCT_ERROR
            })
        }
        next();
    } catch (error) {
        next(error);
    }
}, passportError('jwt'), authorization(['admin']), postProduct);
productRouter.put('/:id', passportError('jwt'), authorization('Admin'), putProduct)
productRouter.delete('/:id', passportError('jwt'), authorization('Admin'), deleteProduct)

export default productRouter