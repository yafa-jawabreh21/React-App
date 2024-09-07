import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom';

function Home() {
    const productCards = [{
        name: "Wireless Headphones",
        price: 99.99,
        description:
          "High-quality wireless headphones with noise-cancellation feature and long-lasting battery life.",
        imageUrl:
          "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww",
      },
      {
        name: "Smart Watch",
        price: 199.99,
        description:
          "Advanced smart watch with heart rate monitor, GPS, and customizable watch faces.",
        imageUrl: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
      },
      {
        name: "Bluetooth Speaker",
        price: 49.99,
        description:
          "Portable Bluetooth speaker with powerful sound and water-resistant design.",
        imageUrl:
          "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Laptop Stand",
        price: 29.99,
        description:
          "Ergonomic laptop stand with adjustable height and sturdy construction.",
        imageUrl: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
      },
      {
        name: "USB-C Hub",
        price: 39.99,
        description:
          "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader for versatile connectivity.",
        imageUrl:
          "https://media.istockphoto.com/id/184841045/photo/memory-stick.webp?b=1&s=170667a&w=0&k=20&c=2Nau1PzmF6ss9shD0GVte30zUTsmREXTnQ1vdCKRuww=",
      },]

      const [cart, setCart] = useState(
        () => JSON.parse(localStorage.getItem("cart")) || []
      );
    const navigate = useNavigate()

    useEffect (()=>{
        const user = localStorage.getItem("user")
        if (! user)
            navigate("/login");
    },[]);


    const addToCart = (product) =>{
        setCart([...cart,product]);
    }

    useEffect (()=>{
        localStorage.setItem("cart" , JSON.stringify(cart));
    },[cart]);

  return (
    <div className='bg-[#111827] mih-screen h-full pt-20 flex items-center justify-center gap-5 flex-wrap py-8 mt-10'> 
    
    {productCards.map((prod,ind)=>{
        return <Card product={prod} key={prod.name} addToCart={addToCart}/>
    })}
    </div>
  );
};

export default Home;
