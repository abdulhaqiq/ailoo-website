import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";

export const metadata: Metadata = pageMetadata.contactUs;

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
