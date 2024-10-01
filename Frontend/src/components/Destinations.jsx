import React from 'react';
import './Destinations.css'; // Ensure to style the destinations page

const destinationsData = [
    { name: "Agra", description: "Home to the magnificent Taj Mahal, a symbol of love.", imageUrl: "/images/img-3.jpg" },
    { name: "Ajmer", description: "Famous for the Ajmer Sharif Dargah, a pilgrimage site.", imageUrl: "/images/destinations/pexels-axp-photography-500641970-16738847.jpg" },
    { name: "Andaman Islands", description: "Discover pristine beaches and vibrant marine life.", imageUrl: "/images/destinations/pexels-nextvoyage-1481096.jpg" },
    { name: "Aurangabad", description: "Known for the Ajanta and Ellora caves, a UNESCO World Heritage site.", imageUrl: "/images/destinations/pexels-setu-r8-9224489.jpg" },
    { name: "Bangalore", description: "The Silicon Valley of India, known for its tech industry.", imageUrl: "/images/destinations/pexels-vivek-chugh-157138-739987.jpg" },
    { name: "Varanasi", description: "One of the oldest living cities in the world, famous for its ghats.", imageUrl: "/images/img-2.jpg" },
    { name: "Jaipur", description: "The Pink City, known for its palaces and forts.", imageUrl: "/images/destinations/pexels-sbsoneji-3581369.jpg" },
    { name: "Jaisalmer", description: "The Golden City, known for its desert landscapes and forts.", imageUrl: "/images/destinations/pexels-lonely-boy-215594492-16250657.jpg" },
    { name: "Jodhpur", description: "The Blue City, famous for the Mehrangarh Fort.", imageUrl: "/images/destinations/pexels-apertureofindia-17226891.jpg" },
    { name: "Kerala", description: "Explore the serene backwaters and lush landscapes.", imageUrl: "/images/destinations/pexels-aneesh-s-1798935-3370598.jpg" },
    { name: "Leh-Ladakh", description: "Stunning landscapes, adventure, and cultural experiences.", imageUrl: "/images/destinations/pexels-thenexcanpictures-1581200.jpg" },
    { name: "Mysore", description: "Famous for the Mysore Palace and vibrant Dasara festival.", imageUrl: "/images/destinations/pexels-nandhukumar-20796004.jpg" },
    { name: "Manali", description: "A popular hill station known for adventure sports.", imageUrl: "/images/destinations/pexels-saif71-7086906.jpg" },
    { name: "Darjeeling", description: "Known for its tea gardens and stunning views of the Kanchenjunga.", imageUrl: "/images/destinations/pexels-harsh-27379093.jpg" },
    { name: "Rajasthan", description: "Explore the royal heritage, deserts, and culture of Rajasthan.", imageUrl: "/images/destinations/pexels-nikhlesh-tyagi-1610382-8157910.jpg" },
    { name: "Rishikesh", description: "The Yoga Capital of the World, known for its spiritual ambiance.", imageUrl: "/images/destinations/pexels-tanmoy-pal-3640736-14064751.jpg" },
    { name: "Shimla", description: "The capital of Himachal Pradesh, famous for its colonial architecture.", imageUrl: "/images/destinations/pexels-sanket-barik-2808574-7846473.jpg" },
    { name: "Udaipur", description: "The City of Lakes, known for its palaces and romantic ambiance.", imageUrl: "/images/destinations/pexels-digitalbuggu-176880.jpg" },
    { name: "Kolkata", description: "The cultural capital of India, known for its art and literature.", imageUrl: "/images/destinations/pexels-rahulp9800-2846217.jpg" },
    { name: "Goa", description: "Famous for its beaches, nightlife, and water sports.", imageUrl: "/images/destinations/pexels-cottonbro-4429324.jpg" },
    { name: "Agra", description: "Home to the iconic Taj Mahal, a UNESCO World Heritage Site.", imageUrl: "/images/destinations/pexels-ayyappan-ram-3012382-4566666.jpg" },  
    { name: "Khajuraho", description: "Famous for its stunning temples with intricate erotic sculptures.", imageUrl: "/images/destinations/istockphoto-1195731546-1024x1024.jpg" },
    { name: "Hampi", description: "A UNESCO World Heritage Site, known for its ancient temples and ruins.", imageUrl: "/images/destinations/pexels-roman-saienko-1867764487-28656056.jpg" },
    { name: "Pondicherry", description: "A former French colony known for its beaches and architecture.", imageUrl: "/images/destinations/pexels-imshafeek-18447449.jpg" },
    { name: "Dharamshala", description: "Home to the Dalai Lama and known for its Tibetan culture.", imageUrl: "/images/destinations/pexels-mohamed-regaieg-1193224322-27462660.jpg" },
    { name: "Coorg", description: "Famous for its coffee plantations and scenic landscapes.", imageUrl: "/images/destinations/istockphoto-480589576-1024x1024.jpg" },
    { name: "Kumarakom", description: "A picturesque backwater destination in Kerala.", imageUrl: "/images/destinations/istockphoto-184849913-1024x1024.jpg" },
    { name: "Nashik", description: "Famous for its vineyards and the Kumbh Mela.", imageUrl: "/images/destinations/istockphoto-1187325727-1024x1024.jpg" },
    { name: "Ajanta", description: "Famous for its rock-cut Buddhist cave monuments.", imageUrl: "/images/destinations/istockphoto-470583942-1024x1024.jpg" },
    { name: "Mahabalipuram", description: "Known for its rock-cut temples and shore temples.", imageUrl: "/images/destinations/pexels-bala-4536127.jpg" },
    { name: "Bodh Gaya", description: "A UNESCO World Heritage Site, known as the place of Buddha's enlightenment.", imageUrl: "/images/destinations/istockphoto-1129899392-1024x1024.jpg" },
];

const Destinations = () => {
    return (
        <div className="destinations-container">
            <h1>Our Destinations</h1>
            <div className="destinations-grid">
                {destinationsData.map((destination, index) => (
                    <div className="destination-card" key={index}>
                        <img src={destination.imageUrl} alt={destination.name} />
                        <h2>{destination.name}</h2>
                        <p>{destination.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destinations;
