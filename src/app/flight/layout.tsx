import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";

export const metadata: Metadata = pageMetadata.flight;

export default function FlightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
