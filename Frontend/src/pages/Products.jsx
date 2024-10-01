import React from 'react';
import './Products.css'; // Optional: Add custom styles if needed

const Products = () => {
    const products = [
        {
            id: 1,
            name: "Mountain Hiking Gear",
            description: "Complete set of durable hiking gear perfect for mountain adventures.",
            price: "₹ 12,565.65/ $ 150",
            image: "/images/essential-hiking-gear-featured-1536x1024.jpg"
        },
        {
            id: 2,
            name: "Whitewater Rafting Kit",
            description: "Essential kit for an exciting whitewater rafting experience.",
            price: "₹ 16,754.20/ $ 200",
            image: "/images/Safety-Kit.jpg"
        },
        {
            id: 3,
            name: "Travel Backpack",
            description: "Spacious and comfortable backpack designed for adventure travel.",
            price: "₹ 6,701.68/ $ 80",
            image: "/images/Travel backpacks.avif"
        },
        {
            id: 4,
            name: "Adventure Survival Kit",
            description: "A compact kit that includes everything you need for survival in the wild.",
            price: "₹ 8,377.10/ $ 100",
            image: "/images/Saftey-Kit-for-travelling-Australia-in-a-caravan-The-Blonde-Nomads.jpg"
        },
        {
          id: 5,
          name: "Camping Tent",
          description: "Lightweight and easy-to-set-up tent for your camping trips.",
          price: "₹ 10,052.52/ $ 120",
          image: "/images/tent.jpg"
      },
      {
          id: 6,
          name: "Insulated Water Bottle",
          description: "Keep your drinks cold or hot with our high-quality insulated water bottle.",
          price: "₹ 2,094.28/ $ 25",
          image: "/images/Best-Travel-Water-Bottles-986x657.jpg"
      },
      {
          id: 7,
          name: "Portable Camping Stove",
          description: "Cook meals on-the-go with this compact and efficient camping stove.",
          price: "₹ 5,863.97/ $ 70",
          image: "/images/OIP.jpg"
      },
      {
          id: 8,
          name: "Hiking Boots",
          description: "Durable and comfortable hiking boots designed for all terrains.",
          price: "₹ 11,727.94/ $ 140",
          image: "/images/boots-for-technical-mountain-trails-.avif"
      },
      {
          id: 9,
          name: "Action Camera",
          description: "Capture your adventures with our high-resolution action camera.",
          price: "₹ 25,131.30/ $ 300",
          image: "/images/03wteym7ina75zavvx95fwx-13_86273_tkw1.jpg"
      },
      {
          id: 10,
          name: "Travel First Aid Kit",
          description: "Comprehensive first aid kit to ensure safety on your adventures.",
          price: "₹ 2,931.99/ $ 35",
          image: "/images/First-aid-for-collage-with-logo.jpg"
      },
    ];

    return (
        <div className="products-container">
            <h1>Adventure Awaits Products</h1>
            <p>Discover the best gear and accessories to enhance your adventures.</p>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="product-price">{product.price}</p>
                        <button className="buy-now-btn">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
