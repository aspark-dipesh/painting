import CartContext from "@/store/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, useContext, useState } from "react";
import { toast } from "sonner";
import CheckoutForm from "./CheckoutForm";

export default function Checkout() {
  return (
    <Suspense>
      <CheckoutForm />
    </Suspense>
  );
}
