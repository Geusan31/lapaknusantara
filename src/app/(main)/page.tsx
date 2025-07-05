// import CollectionBanner from "@/components/features/CollectionBanner";
import FeaturedOutfit from "@/components/features/FeaturedOutfit";
import InteractiveBanner from "@/components/features/InteractiveBanner";
import PopularCategories from "@/components/features/PopularCategories";
import PopularProducts from "@/components/features/PopularProducts";

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col gap-10 p-8">
            <InteractiveBanner />
            <PopularProducts />
            <PopularCategories />
            <FeaturedOutfit />
            {/* <CollectionBanner /> */}
        </main>
    );
}