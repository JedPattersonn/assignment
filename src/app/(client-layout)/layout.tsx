import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer/Footer";

export default function ClientFacingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <main style={{ flex: "1 0 auto" }}>{children}</main>
      <Footer />
    </div>
  );
}
