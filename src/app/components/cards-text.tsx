import Image from "next/image";
import colours from "@/images/product-colors.png";

export default function CardText() {
  return (
    <div className="w-[239px] h-auto py-[20px] px-[20px] flex flex-col items-center justify-center gap-[15px] bg-white shadow-lg rounded-lg">
      {/* Title */}
      <h5 className="w-full font-Montserrat font-bold text-[18px] leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>

      {/* Subtitle */}
      <p className="w-full font-Montserrat font-medium text-[14px] leading-[20px] text-center text-[#737373]">
        English Department
      </p>

      {/* Pricing */}
      <div className="w-full flex justify-center items-center gap-[10px]">
        <h5 className="font-Montserrat font-medium text-[16px] leading-[24px] text-[#BDBDBD] line-through">
          $18.99
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
          $8.99
        </h5>
      </div>

      {/* Colors */}
      <div className="w-full flex justify-center">
        <Image src={colours} alt="Available colors" width={82} height={16} />
      </div>
    </div>
  );
}
