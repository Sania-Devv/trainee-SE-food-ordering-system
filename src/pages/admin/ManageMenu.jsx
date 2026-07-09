import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { HiOutlineCollection, HiOutlinePlus, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

const ManageMenu = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // TODO: backend integration -> dispatch(fetchMenu()) from menuSlice on mount (useEffect)
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Big Mac Combo", category: "Burgers", price: "£8.50", available: true },
    { id: 2, name: "Chicken McNuggets (9pc)", category: "Sides", price: "£5.20", available: true },
    { id: 3, name: "Cheesy Fries", category: "Sides", price: "£3.80", available: false },
    { id: 4, name: "Vanilla Milkshake", category: "Drinks", price: "£3.00", available: true },
  ]);

  const handleDelete = (id) => {
    // TODO: backend integration -> dispatch(deleteItem(id))
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleAvailability = (id) => {
    // TODO: backend integration -> dispatch(updateItem({ id, available: !current }))
    setMenuItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, available: !item.available } : item))
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FC8A06]">
            <HiOutlineCollection className="w-5 h-5 text-white" />
          </div>
          <h1 className={`text-xl sm:text-2xl font-extrabold ${isDark ? "text-white" : "text-gray-900"}`}>
            Manage Menu
          </h1>
        </div>

        <button
          onClick={() => alert("TODO: open Add Item form/modal, dispatch(addItem(payload))")}
          className="flex items-center gap-2 bg-[#FC8A06] hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors duration-200"
        >
          <HiOutlinePlus className="w-4 h-4" />
          Add Item
        </button>
      </div>

      <div
        className={`rounded-2xl p-4 sm:p-6 shadow-sm transition-colors duration-300 ${
          isDark ? "bg-[#0b1020] border border-white/10" : "bg-white"
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm min-w-[560px]">
            <thead>
              <tr className={`text-left border-b ${isDark ? "border-white/10 text-gray-400" : "border-gray-200 text-gray-500"}`}>
                <th className="pb-3 font-medium">Item Name</th>
                <th className="pb-3 font-medium">Category</th>
                <th className="pb-3 font-medium">Price</th>
                <th className="pb-3 font-medium">Available</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item) => (
                <tr key={item.id} className={`border-b last:border-0 ${isDark ? "border-white/5" : "border-gray-100"}`}>
                  <td className={`py-3 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{item.name}</td>
                  <td className={`py-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>{item.category}</td>
                  <td className={`py-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>{item.price}</td>
                  <td className="py-3">
                    <button
                      onClick={() => handleToggleAvailability(item.id)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                        item.available ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {item.available ? "Available" : "Unavailable"}
                    </button>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => alert(`TODO: open Edit form for ${item.name}, dispatch(updateItem(...))`)}
                        className={`p-2 rounded-full transition-colors duration-200 ${
                          isDark ? "hover:bg-white/10 text-gray-300" : "hover:bg-gray-100 text-gray-600"
                        }`}
                      >
                        <HiOutlinePencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 rounded-full hover:bg-red-50 text-red-500 transition-colors duration-200"
                      >
                        <HiOutlineTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMenu;