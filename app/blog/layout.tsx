import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Surya Cipta Estetika GRC",
  description: "Temukan artikel terbaru seputar GRC dan arsitektur di blog kami",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 