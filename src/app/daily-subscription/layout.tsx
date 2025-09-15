import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";

export const metadata: Metadata = pageMetadata.dailySubscription;

export default function DailySubscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
