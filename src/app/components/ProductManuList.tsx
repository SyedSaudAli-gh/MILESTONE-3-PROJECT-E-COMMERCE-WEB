"use client";

import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { Product } from "@/types/Product";
import { MdOutlineShoppingBag } from "react-icons/md";

const ProductManuList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  // const router = useRouter();

  // Fetch products from API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();

    // Load saved cart from local storage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Add to cart function
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // Checkout handler
  const goToCheckout = () => {
    setIsCheckout(true);
  };

  // Clear cart handler
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative text-center p-10">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/productMamu.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.2,
        }}
      ></div>
      {/* Header */}
      <h1 className="font-extrabold text-4xl mb-4 font-serif underline z-10 relative">
        The Best Quality
      </h1>
      <h1 className="text-3xl z-10 relative">Order Now...!</h1>

      {/* Product Cards */}
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} onAddToCart={addToCart} />
        ))}
      </section>
      <div className="max-w-6xl mx-auto mt-8">
        <button
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out transform"
          onClick={toggleCart}
        >
          {showCart ? (
            <>
              <MdOutlineShoppingBag className="inline-block text-2xl mr-2" />
              Close Cart
            </>
          ) : (
            <>
              <MdOutlineShoppingBag className="inline-block text-2xl mr-2" />
              Open Cart ({cart.length} items)
            </>
          )}
        </button>
        {showCart && (
          <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4 text-blue-500">
              Your Cart Items Includes:
            </h2>
            {cart.length > 0 ? (
              <div>
                <ul>
                  {cart.map((product, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center mb-6 transform transition-all duration-300 ease-in-out hover:scale-105"
                    >
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-20 h-40 sm:w-24 inline-block transition-transform duration-300 ease-in-out text-black"
                      />
                      <span className="ml-4 text-lg font-medium text-slate-400">
                        {product.name} - {product.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center items-center mt-6 text-black">
                  <span className="font-semibold text-xl">
                    Total: $
                    {cart.reduce((total, product) => total + product.price, 0)}
                  </span>
                  <div>
                    <button
                      onClick={goToCheckout}
                      className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                    >
                      Proceed to Checkout
                    </button>

                    <button
                      onClick={clearCart}
                      className="bg-red-600 py-3 ml-4 px-8 rounded-lg text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <h2 className="text-2xl text-red-500 font-semibold">
                Your Cart is Empty
              </h2>
            )}
          </div>
        )}

        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-4xl font-bold text-blue-400 mb-4">
                Checkout
              </h2>
              <p className="text-red-500 text-lg">
                Please confirm Your order before process
              </p>
              <div className="mt-4 ">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>{product.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mt-4 font-semibold text-xl">
                  <span>Total:</span>
                  <span>
                    ${cart.reduce((total, product) => total + product.price, 0)}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex justify-between ">
                <button
                  className="bg-slate-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-slate-600 transition duration-300 ease-in-out"
                  onClick={() => setIsCheckout(false)}
                >
                  close
                </button>
                <button onClick={() => alert("order Place....!")}>
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManuList;
