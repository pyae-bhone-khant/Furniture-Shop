// app/(main)/layout.tsx
import Navbar from "@/components/component/Navbar";
import Footer from "@/components/component/Footer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  // const token = (await cookies()).get('accessToken')
  // if (!token) {
  //   redirect('/Auth/login')
  // }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}