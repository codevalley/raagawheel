import type { Metadata } from "next";
import KatapayadiPage from "./KatapayadiClient";

export const metadata: Metadata = {
  title: "Katapayadi",
  description: "How melakarta names encode their numbers via katapayadi sankhya.",
};

export default function Page() {
  return <KatapayadiPage />;
}
