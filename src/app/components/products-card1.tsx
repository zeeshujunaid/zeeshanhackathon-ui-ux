import Image from "next/image";
import picture1 from "@/images/product-cover-5.png";
import pic2 from "@/images/product-cover-5 (1).png";
import pic3 from "@/images/product-cover-5 (2).png";
import pic4 from "@/images/product-cover-5 (3).png";
import pic5 from "@/images/product-cover-5 (4).png";
import pic6 from "@/images/product-cover-5 (5).png";
import pic7 from "@/images/product-cover-5 (6).png";
import pic8 from "@/images/product-cover-5 (7).png";
import CardText from "./cards-text";

const images = [picture1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

export default function ProductCard() {
  return (
    <div className="w-full py-[80px] flex justify-center bg-[#F5F5F5]">
      <div className="w-full sm:w-[90%] lg:w-[1124px] px-4">
        {/* Text Section */}
        <div className="text-center mb-[60px]">
          <h4 className="font-Montserrat font-normal text-[20px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[24px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] text-[#737373] mt-2">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Product Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {images.map((image, index) => (
            <div key={index} className="w-full mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-[427px]">
                  <Image
                    src={image}
                    alt={`product-image-${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <CardText />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
