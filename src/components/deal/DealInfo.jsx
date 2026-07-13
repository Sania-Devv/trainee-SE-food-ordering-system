import { useSelector } from "react-redux";
import {
  HiStar,
  HiClock,
  HiHeart,
  HiShoppingCart,
  HiLocationMarker,
} from "react-icons/hi";
function DealInfo() {
  const { dealDetail, loading } = useSelector((state) => state.deal);

  if (loading || !dealDetail) {
    return <p>Loading...</p>;
  }

  const restaurant =
    dealDetail.items?.[0]?.menu_item?.restaurant;

  const category =
    dealDetail.items?.[0]?.menu_item?.category;
  return (
    <div className="flex flex-col h-full">

      {/* Restaurant */}
      <div className="flex items-center gap-2 mb-3">
        <HiLocationMarker className="text-[#FC8A06] text-xl" />
        <span className="text-[#FC8A06] font-semibold text-sm">
        {restaurant?.name || "Restaurant"}
      </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl lg:text-4xl font-bold text-[#03081F] leading-tight">
        Pizza Night Deal
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-4">
        <HiStar className="text-yellow-400 text-xl" />
        <HiStar className="text-yellow-400 text-xl" />
        <HiStar className="text-yellow-400 text-xl" />
        <HiStar className="text-yellow-400 text-xl" />
        <HiStar className="text-yellow-400 text-xl" />

        <span className="ml-2 text-gray-500">
          (4.9 • 320 Reviews)
        </span>
      </div>

      {/* Description */}
      <p className="mt-5 text-gray-600 leading-7">
{dealDetail.description || "No Description Available"}
      </p>

      {/* Price */}
      <div className="flex items-center gap-4 mt-8">
        <span className="text-4xl font-bold text-[#FC8A06]">
        £{dealDetail.combo_price}
        </span>

        {/* <span className="line-through text-gray-400 text-xl">
          £120
        </span> */}
{/* £{(Number(dealDetail.combo_price) + 40).toFixed(2)} */}
        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Save 42%
        </span>
      </div>

      {/* Delivery */}
      <div className="mt-8 flex items-center gap-3 bg-gray-100 rounded-2xl p-4">
        <HiClock className="text-[#FC8A06] text-3xl" />

        <div>
          <h3 className="font-semibold">
            Delivery Time
          </h3>

          <p className="text-gray-500">
            20 - 30 Minutes
          </p>
        </div>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-4 mt-8">

        <button className="w-11 h-11 rounded-full border text-2xl">
          -
        </button>

        <span className="text-xl font-semibold">
          1
        </span>

        <button className="w-11 h-11 rounded-full border text-2xl">
          +
        </button>

      </div>

      {/* Buttons */}

      <div className="flex flex-col sm:flex-row gap-4 mt-8">

        <button className="flex-1 bg-[#FC8A06] hover:bg-[#e97800] text-white rounded-xl py-4 font-semibold flex justify-center items-center gap-3 transition">

          <HiShoppingCart className="text-2xl" />

          Add To Cart

        </button>

        <button className="border rounded-xl px-6 py-4 hover:bg-gray-100 transition">

          <HiHeart className="text-2xl" />

        </button>

      </div>

      {/* Extra */}

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="border rounded-xl p-4">
          <p className="text-gray-500 text-sm">
            Category
          </p>

          <h3 className="font-semibold mt-1">
          {category?.name || "N/A"}
          </h3>
        </div>

        <div className="border rounded-xl p-4">
         <h3
  className={`font-semibold mt-1 ${
    dealDetail.is_active
      ? "text-green-600"
      : "text-red-600"
  }`}
>
  {dealDetail.is_active ? "Available" : "Unavailable"}
</h3>

          <h3 className="text-green-600 font-semibold mt-1">
            In Stock
          </h3>
        </div>

      </div>

    </div>
  );
}

export default DealInfo;