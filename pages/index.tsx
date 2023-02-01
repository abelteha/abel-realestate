import Search from "@/components/search";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute h-[100%] w-[100%] top-0 bg-darkLike/40 flex flex-col justify-center items-center gap-10">
        <h1 className="hero-h1">The place where you find the right house</h1>
        <Search />
      </div>
      <Image
        src="/home1.jpeg"
        alt="house-image"
        width={1000}
        height={400}
        className="w-[100%] sm:h-[450px] h-[350px] object-cover"
      />
    </div>
  );
}
