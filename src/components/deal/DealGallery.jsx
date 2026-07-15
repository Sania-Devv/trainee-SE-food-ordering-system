import { useSelector } from "react-redux";

function DealGallery() {
  const { deal: dealDetail } = useSelector((state) => state.deal);

  const image = dealDetail?.image
    ? `http://127.0.0.1:8000${dealDetail.image}`
    : null;

  return (
    <div className="relative overflow-hidden rounded-3xl h-[300px] sm:h-[380px] lg:h-[460px]">
      <img
        src={image}
        alt={dealDetail?.name}
        className="w-full h-full object-contain"
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