import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";

function BottomCart() {
  const { deal, loading } = useSelector((state) => state.deal);

  if (loading || !deal) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t shadow-xl px-5 py-4 z-50">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-sm text-gray-500">
            Total Price
          </p>

          <h2 className="text-2xl font-bold text-[#FC8A06]">
            £{deal.combo_price}
          </h2>
        </div>

        <button className="bg-[#FC8A06] text-white px-6 py-3 rounded-xl flex items-center gap-3 font-semibold hover:bg-[#e97c00] transition">

          <HiShoppingCart className="text-xl" />

          Add To Cart

        </button>

      </div>

    </div>
  );
}

export default BottomCart;