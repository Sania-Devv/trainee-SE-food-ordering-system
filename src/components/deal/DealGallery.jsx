import { useSelector } from "react-redux";

function DealGallery() {
  const { dealDetail } = useSelector((state) => state.deal);

  const image = dealDetail?.image
    ? `http://127.0.0.1:8000${dealDetail.image}`
    : "https://via.placeholder.com/800x500?text=Deal+Image";

  return (
    <div className="relative overflow-hidden rounded-3xl">
      <img
        src={image}
        alt={dealDetail?.name}
        className="w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover"
      />

      {dealDetail?.is_featured && (
        <div className="absolute top-4 left-4 bg-[#FC8A06] text-white px-4 py-2 rounded-xl text-sm font-semibold">
          Featured Deal
        </div>
      )}
    </div>
  );
}

export default DealGallery;