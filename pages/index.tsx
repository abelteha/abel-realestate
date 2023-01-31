import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute h-[100%] w-[100%] top-0 bg-black/20" />
      <Image
        src="/home1.jpeg"
        alt="house-image"
        width={1000}
        height={400}
        className="w-[100%] h-[450px] object-cover"
      />
    </div>
  );
}
