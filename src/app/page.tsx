import Hero from "@/app/Sections/Hero"
import Promotions from "./Sections/Promotions"
import Features from "./Sections/Features"
import NewsLetter from "./Sections/NewsLetter"
import ProductSection from "./Sections/ProductSection"

export default function Home() {
  return (
    <>
      <Hero />
      <Promotions />
      <ProductSection />
      <Features />
      <NewsLetter />
    </>
  )
}
