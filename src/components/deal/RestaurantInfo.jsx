import {
  HiLocationMarker,
  HiPhone,
  HiClock,
  HiStar,
} from "react-icons/hi";

function RestaurantInfo() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      <h2 className="text-2xl font-bold text-[#03081F] mb-6">
        Restaurant Information
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left Side */}
        <div>

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-full bg-[#FC8A06] flex items-center justify-center text-white text-3xl font-bold">
              BK
            </div>

            <div>

              <h3 className="text-2xl font-bold">
                Burger King
              </h3>

              <div className="flex items-center mt-1">

                <HiStar className="text-yellow-400" />
                <HiStar className="text-yellow-400" />
                <HiStar className="text-yellow-400" />
                <HiStar className="text-yellow-400" />
                <HiStar className="text-yellow-400" />

                <span className="ml-2 text-gray-500">
                  4.9 (320 Reviews)
                </span>

              </div>

            </div>

          </div>

          <p className="mt-6 text-gray-600 leading-7">
            Burger King is known for its flame grilled burgers,
            fresh ingredients and premium quality meals served
            with quick delivery.
          </p>

        </div>

        {/* Right Side */}

        <div className="space-y-5">

          <div className="flex gap-4">

            <HiLocationMarker className="text-[#FC8A06] text-3xl mt-1" />

            <div>

              <h4 className="font-semibold">
                Address
              </h4>

              <p className="text-gray-500">
                221B Baker Street, London, United Kingdom
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <HiPhone className="text-[#FC8A06] text-3xl mt-1" />

            <div>

              <h4 className="font-semibold">
                Contact
              </h4>

              <p className="text-gray-500">
                +44 123 456 789
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <HiClock className="text-[#FC8A06] text-3xl mt-1" />

            <div>

              <h4 className="font-semibold">
                Opening Hours
              </h4>

              <p className="text-gray-500">
                Monday - Sunday
              </p>

              <p className="text-gray-500">
                10:00 AM - 11:00 PM
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RestaurantInfo;