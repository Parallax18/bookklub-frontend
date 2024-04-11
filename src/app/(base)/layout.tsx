"use client";
import BottomNav from "@/components/layout/BottomNav";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <BottomNav />
    </>
  );
}
