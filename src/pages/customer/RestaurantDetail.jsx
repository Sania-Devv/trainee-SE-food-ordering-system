import RestaurantBanner from "../../components/restaurant/RestaurantBanner";
import RestaurantInfoSection from "../../components/restaurant/RestaurantInfoSection";
import LocationMap from "../../components/restaurant/LocationMap";

const RestaurantDetail = () => (
  <div className="restaurant-detail-page px-4 sm:px-6 md:px-10 py-6">
    <RestaurantBanner
      name="McDonald's East London"
      rating={3.4}
      reviews={1360}
      minOrder={12}
      deliveryTime="20-25 Minutes"
      openUntil="3:00 AM"
    />
    <RestaurantInfoSection />
    <LocationMap />
  </div>
);

export default RestaurantDetail;