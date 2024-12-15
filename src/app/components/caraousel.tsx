import Image from "next/image";
import women from "@/images/shop-hero-1-product-slide-1 (1).jpg";

export default function Carausel() {
  return (
    <div className="relative w-full h-[716px] mt-[136px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={women}
          alt="Women"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute flex flex-col justify-center left-[50px] top-[50px] lg:left-[100px] lg:top-[100px] gap-[35px] z-10 px-[20px] lg:px-[40px]">
        <h5 className="font-Montserrat font-semibold text-[16px] leading-[24px] text-white">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat font-semibold text-[32px] lg:text-[58px] leading-[40px] lg:leading-[80px] text-white max-w-[90%] lg:max-w-[600px]">
          NEW COLLECTION
        </h1>
        <h4 className="font-Montserrat font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-white max-w-[90%] lg:max-w-[500px]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="w-[180px] lg:w-[221px] h-[50px] lg:h-[62px] rounded-[5px] bg-[#2DC071] text-white text-[18px] lg:text-[24px] font-Montserrat leading-[32px] flex justify-center items-center hover:bg-[#1a9f56] transition duration-300 ease-in-out">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
