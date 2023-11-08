import faker from 'faker';
import Product from '../models/products.models.js';

const generateMockProducts = async (req, res) => {
    try {
        const products = [];
        for (let i = 0; i < 100; i++) {
            const productData = {
                title: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: parseFloat(faker.commerce.price()),
                stock: faker.datatype.number({ min: 10, max: 100 }),
                category: faker.commerce.department(),
                status: true,
                code: faker.random.alphaNumeric(10),
                thumbnails: [faker.image.imageUrl()]
            };
            
            products.push(productData);
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default generateMockProducts;