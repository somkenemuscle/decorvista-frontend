import { v4 as uuidv4 } from 'uuid';

// This is the furniture category but keeping the 'hair' category as requested
export const hairCareProducts = [
    { id: uuidv4(), name: "Modern Sofa", price: 500.00, imageSrc: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&auto=format&fit=crop&q=60", category: 'hair' },
    { id: uuidv4(), name: "Wooden Coffee Table", price: 200.00, imageSrc: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?w=800&h=800&auto=format&fit=crop&q=60", category: 'hair' },
    { id: uuidv4(), name: "Leather Armchair", price: 350.00, imageSrc: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&auto=format&fit=crop&q=60", category: 'hair' },
    { id: uuidv4(), name: "Bedroom Wardrobe", price: 800.00, imageSrc: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&auto=format&fit=crop&q=60", category: 'hair' },
    { id: uuidv4(), name: "Dining Table Set", price: 750.00, imageSrc: "https://images.unsplash.com/photo-1491926626787-62db157af940?w=800&h=800&auto=format&fit=crop&q=60", category: 'hair' },
    { id: uuidv4(), name: "Bookshelf", price: 180.00, imageSrc: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&auto=format&fit=crop&q=60", category: 'hair' }
];
