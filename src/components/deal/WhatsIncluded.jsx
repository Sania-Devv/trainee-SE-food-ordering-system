import pizza from "../../assets/images/deal1.png";

const items = [
  {
    id: 1,
    name: "Cheese Pizza",
    quantity: 2,
    price: "£24.99",
    image: pizza,
  },
  {
    id: 2,
    name: "BBQ Chicken Pizza",
    quantity: 1,
    price: "£29.99",
    image: pizza,
  },
  {
    id: 3,
    name: "French Fries",
    quantity: 2,
    price: "£7.99",
    image: pizza,
  },
  {
    id: 4,
    name: "Soft Drink",
    quantity: 2,
    price: "£4.99",
    image: pizza,
  },
];

function WhatsIncluded() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      <h2 className="text-2xl font-bold text-[#03081F] mb-6">
        What's Included
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {items.map((item) => (

          <div
            key={item.id}
            className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300 cursor-pointer bg-white"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-44 object-cover"
            />

            <div className="p-4">

              <h3 className="font-bold text-lg">
                {item.name}
              </h3>

              <p className="text-gray-500 mt-2">
                Quantity : {item.quantity}
              </p>

              <p className="text-[#FC8A06] text-lg font-bold mt-3">
                {item.price}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default WhatsIncluded;