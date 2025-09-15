import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";

export const metadata: Metadata = pageMetadata.privacyPolicy;

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
