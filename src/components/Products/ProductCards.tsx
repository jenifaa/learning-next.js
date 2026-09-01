import { IProduct } from "@/src/type";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

function ProductCards({ product }: { product: IProduct }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.product_name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur">
          {product.category}
        </span>

        {/* Wishlist Button */}
        <button
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition hover:bg-red-500 hover:text-white"
          aria-label="Add to wishlist"
        >
          <Heart size={18} />
        </button>
      </div>

      {/* Product Information */}
      <div className="p-5">
        <p className="mb-2 text-sm font-medium text-gray-500">
          {product.brand}
        </p>

        <h2 className="mb-3 line-clamp-1 text-xl font-bold text-gray-800">
          {product.product_name}
        </h2>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}

          <span className="ml-2 text-sm text-gray-500">(4.8)</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-700 active:scale-95">
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
