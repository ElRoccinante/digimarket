import HomeSection from "@/components/Home/HomeSection";
import LoaderPage from "@/components/Home/LoaderPage";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<LoaderPage />}>
        <HomeSection />
      </Suspense>
    </main>
  );
}