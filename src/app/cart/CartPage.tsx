"use client";
import CartContext from "@/store/CartContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useContext } from "react";

const CartPage = () => {
  const { cart, decreaseQuantity, increaseQuantity, removeFromCart } =
    useContext(CartContext);

  const total = cart.reduce((a, b) => a + parseInt(b.price) * b.quantity, 0);
  if (cart.length < 1) {
    return (
      <>
        <section className="rounded-3xl shadow-2xl max-w-lg mx-auto mt-10">
          <div className="p-8 text-center sm:p-12">
            <h2 className="mt-6 text-3xl font-bold">
              Sorry your cart is empty ! Don&apos;t worry we have awesome
              collections for you.
            </h2>

            <Link
              className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
              href="/collection"
            >
              Shop Now
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cart.map((product) => (
                <li className="flex items-center gap-4" key={product.id}>
                  <div className="shrink-0">
                    <Image
                      src={product.featured_image}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="h-36 w-36 rounded object-cover object-center"
                    />
                    <p className="text-md font-bold text-[#333]">
                      {product.title}
                    </p>
                  </div>

                  <div></div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <form>
                      <label htmlFor="Line1Qty" className="sr-only">
                        Quantity{" "}
                      </label>

                      <div className="flex divide-x border w-max">
                        <button
                          disabled={product.quantity === 1}
                          type="button"
                          onClick={() => decreaseQuantity(product)}
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
                          {product.quantity}
                        </button>
                        <button
                          type="button"
                          onClick={() => increaseQuantity(product)}
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
                    </form>

                    <button
                      type="button"
                      onClick={() => removeFromCart(product)}
                      className="text-gray-600 transition hover:text-red-600"
                    >
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>
                      {total.toLocaleString("en", {
                        currency: "USD",
                        style: "currency",
                        localeMatcher: "lookup",
                      })}
                    </dd>
                  </div>
                  {/* 
                  <div className="flex justify-between">
                    <dt>VAT</dt>
                    <dd>£25</dd>
                  </div> */}

                  <div className="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-0</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>
                      {total.toLocaleString("en", {
                        currency: "USD",
                        style: "currency",
                        localeMatcher: "lookup",
                      })}
                    </dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  {/* <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>

                    <p className="whitespace-nowrap text-xs">
                      2 Discounts Applied
                    </p>
                  </span> */}
                </div>

                <div className="flex justify-end">
                  <Link
                    href="checkout"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
