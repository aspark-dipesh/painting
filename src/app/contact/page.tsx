import { ContactUs } from "@/components/home/ContactUs";
import { IBio } from "@/interface";
import { Suspense } from "react";

export default function Contact() {
  return (
    <Suspense>
      <ContactUs />
    </Suspense>
  );
}
