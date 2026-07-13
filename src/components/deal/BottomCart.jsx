import { HiShoppingCart } from "react-icons/hi";

function BottomCart() {
  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t shadow-xl px-5 py-4 z-50">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm text-gray-500">
            Total Price
          </p>

          <h2 className="text-2xl font-bold text-[#FC8A06]">
            £70.00
          </h2>

        </div>

        <button className="bg-[#FC8A06] text-white px-6 py-3 rounded-xl flex items-center gap-3 font-semibold">

          <HiShoppingCart className="text-xl" />

          Add To Cart

        </button>

      </div>

    </div>
  );
}

export default BottomCart;