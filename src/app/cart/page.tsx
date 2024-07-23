import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="font-[sans-serif]">
      <div className=" p-6 lg:max-w-7xl max-w-2xl mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 p-10 bg-white overflow-x-auto">
          <div className="flex border-b pb-4">
            <h2 className="text-2xl font-extrabold text-[#333] flex-1">
              Shopping Cart
            </h2>
            <h3 className="text-xl font-extrabold text-[#333]">3 Items</h3>
          </div>
          <div>
            <table className="mt-6 w-full border-collapse divide-y">
              <thead className="whitespace-nowrap text-left">
                <tr>
                  <th className="text-base text-[#333] p-4">Description</th>
                  <th className="text-base text-[#333] p-4">Quantity</th>
                  <th className="text-base text-[#333] p-4">Price</th>
                </tr>
              </thead>
              <tbody className="whitespace-nowrap divide-y">
                <tr>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-6 w-max">
                      <div className="h-36 w-36 shrink-0">
                        <img
                          src="./media/images/image1.jpg"
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <p className="text-md font-bold text-[#333]">
                          Ephemeral Horizont
                        </p>
                        <button
                          type="button"
                          className="mt-4 font-semibold text-red-400 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex divide-x border w-max">
                      <button
                        type="button"
                        className="bg-gray-100 px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 124 124"
                        >
                          <path
                            d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md"
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="bg-gray-800 text-white px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 42 42"
                        >
                          <path
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <h4 className="text-md font-bold text-[#333]">$18.5</h4>
                  </td>
                </tr>
                <tr>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-6 w-max">
                      <div className="h-36 w-36 shrink-0">
                        <img
                          src="./media/images/image2.jpg"
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <p className="text-md font-bold text-[#333]">
                          Whispers of Time
                        </p>
                        <button
                          type="button"
                          className="mt-4 font-semibold text-red-400 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex divide-x border w-max">
                      <button
                        type="button"
                        className="bg-gray-100 px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 124 124"
                        >
                          <path
                            d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md"
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="bg-gray-800 text-white px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 42 42"
                        >
                          <path
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <h4 className="text-md font-bold text-[#333]">$18</h4>
                  </td>
                </tr>
                <tr>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-6 w-max">
                      <div className="h-36 w-36 shrink-0">
                        <img
                          src="./media/images/image5.jpg"
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <p className="text-md font-bold text-[#333]">
                          Ephemeral Horizon
                        </p>
                        <button
                          type="button"
                          className="mt-4 font-semibold text-red-400 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex divide-x border w-max">
                      <button
                        type="button"
                        className="bg-gray-100 px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 124 124"
                        >
                          <path
                            d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md"
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="bg-gray-800 text-white px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 42 42"
                        >
                          <path
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <h4 className="text-md font-bold text-[#333]">$15.5</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-50 p-10">
          <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">
            Order Summary
          </h3>
          <ul className="text-[#333] divide-y mt-6">
            <li className="flex flex-wrap gap-4 text-md py-4">
              Subtotal <span className="ml-auto font-bold">$37.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-md py-4">
              Shipping <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-md py-4">
              Tax <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
              Total <span className="ml-auto">$45.00</span>
            </li>
          </ul>
          <Link
            type="button"
            href={"/checkout"}
            className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Check out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
