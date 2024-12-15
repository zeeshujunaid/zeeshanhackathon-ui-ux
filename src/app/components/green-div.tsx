import Image from "next/image";
import greenman from "@/images/shop-hero-2-png-picture-1.png";

export default function GreenDiv() {
  return (
    <div className="w-full max-w-[1440px] rounded-[5px] absolute bg-[#23856D] mt-[-130px] top-[3200px] border">
      <div className="w-full h-[709px] flex items-center justify-between px-[24px]">
        {/* Left section: Product Info */}
        <div className="w-[1036px] py-[112px] flex gap-[80px]">
          <div className="w-[509px] flex flex-col gap-[30px] pt-[60px]">
            <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-white">SUMMER 2020</h4>
            <h1 className="font-Montserrat font-bold text-[58px] leading-[80px] text-white">Vita Classic Product</h1>
            <p className="font-Montserrat font-medium text-[14px] leading-[20px] text-white">
              We know how large objects will act, We know how objects will act, We know
            </p>
            <div className="w-[295px] h-[52px] flex gap-[34px]">
              <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-white">$16.48</h3>
              <button className="w-[184px] h-[52px] rounded-[5px] px-[40px] bg-[#2DC071] py-[15px] flex items-center justify-center gap-[10px]">
                <span className="font-Montserrat text-[14px] leading-[22px] text-white">ADD TO CART</span>
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-[510px] h-full">
            <Image src={greenman} alt="Product image" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
