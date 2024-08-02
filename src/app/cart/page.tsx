import { Suspense } from "react";
import CartPage from "./CartPage";

export default function Cart() {
  return (
    <Suspense>
      <CartPage />
    </Suspense>
  );
}
