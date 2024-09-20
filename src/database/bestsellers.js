// bestSellerProducts.js
import { v4 as uuidv4 } from 'uuid';

export const bestSellerProducts = [
    { id: uuidv4(), name: "Green Sofa", price: 25.00, imageSrc: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&auto=format&fit=crop&q=60", category:'best-seller' },
    { id: uuidv4(), name: "Standing Chair", price: 12.00, imageSrc: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&auto=format&fit=crop&q=60", category:'best-seller' },
    { id: uuidv4(), name: "3 Loafer", price: 19.00, imageSrc: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&auto=format&fit=crop&q=60", category:'best-seller' },
    { id: uuidv4(), name: "The Gray Seat", price: 30.00, imageSrc: "https://images.unsplash.com/photo-1491926626787-62db157af940?w=800&h=800&auto=format&fit=crop&q=60", category:'best-seller' },
];
