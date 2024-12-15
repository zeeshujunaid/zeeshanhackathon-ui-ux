import Image from "next/image";
import Men from "@/images/filter.png";
import Women from "@/images/filter (1).png";
import Div1 from "@/images/filter (2).png";
import Div2 from "@/images/filter (3).png";

export default function Editors() {
  return (
    <div className="w-full flex justify-center py-[10px] bg-[#f5f5f5]">
      <div className="w-[1050px] flex flex-col gap-[30px] bg-[#FAFAFA] p-[40px]">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-[10px]">
          <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px] text-[#252B42]">
            EDITOR’S PICK
          </h3>
          <p className="w-[347px] h-auto font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full h-[500px] flex gap-[30px]">
          {/* Men Image */}
          <div className="relative w-[510px] h-[500px]">
            <Image
              src={Men}
              alt="Men"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute top-[434px] left-[50%] transform -translate-x-1/2 bg-white px-[50px] py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">
              MEN
            </button>
          </div>

          {/* Women Image */}
          <div className="relative w-[240px] h-[500px]">
            <Image
              src={Women}
              alt="Women"
              className="w-full h-full object-cover"
            />
            <button className="absolute top-[434px] left-[50%] transform -translate-x-1/2 w-[136px] h-[48px] flex items-center justify-center gap-[10px] bg-white shadow-md">
              <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                WOMEN
              </h2>
            </button>
          </div>

          {/* Accessories and Kids */}
          <div className="w-[240px] h-[500px] flex flex-col gap-[30px]">
            {/* Accessories Image */}
            <div className="relative w-[240px] h-[242px]">
              <Image
                src={Div1}
                alt="Accessories"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-[180px] left-[50%] transform -translate-x-1/2 w-[136px] h-[48px] flex items-center justify-center gap-[10px] bg-white shadow-md">
                <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                  ACCESSORIES
                </h2>
              </button>
            </div>

            {/* Kids Image */}
            <div className="relative w-[240px] h-[242px]">
              <Image
                src={Div2}
                alt="Kids"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-[180px] left-[50%] transform -translate-x-1/2 w-[136px] h-[48px] flex items-center justify-center gap-[10px] bg-white shadow-md">
                <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                  KIDS
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
