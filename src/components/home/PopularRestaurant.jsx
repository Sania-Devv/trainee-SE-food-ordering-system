import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../../redux/slices/restaurantSlice";
import RestaurantCard from "./RestaurantCard";

function PopularRestaurants() {
  const dispatch = useDispatch();

  const { restaurants, loading, error } = useSelector(
    (state) => state.restaurants,
  );

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);
 if (error) {
  return (
    <h2 className="text-center text-red-500 py-5">
      {error}
    </h2>
  );
}
const sortedRestaurants = [...restaurants].sort((a, b) => a.id - b.id);
  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-5 sm:py-6 overflow-hidden">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-5 sm:mb-6">
        Popular Restaurants
      </h2>

      {/* Mobile & Tablet */}
      <div className="lg:hidden overflow-x-auto overflow-y-hidden pb-2 px-1">
        <div className="flex gap-1 sm:gap-2 md:gap-3 w-max">
          {sortedRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="flex-shrink-0 w-[125px] sm:w-[145px] md:w-[180px]"
            >
              <RestaurantCard
                image={
                  restaurant.image
                    ? `http://127.0.0.1:8000${restaurant.image}`
                    : "https://via.placeholder.com/150"
                }
                title={restaurant.name}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-6 gap-4">
        {sortedRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            image={
              restaurant.image
                ? `http://127.0.0.1:8000${restaurant.image}`
                : "https://via.placeholder.com/150"
            }
            title={restaurant.name}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularRestaurants;
