import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";

export const metadata: Metadata = pageMetadata.blog;

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
