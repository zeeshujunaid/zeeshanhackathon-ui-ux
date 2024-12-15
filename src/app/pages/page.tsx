import GreenHeader from "../components/green-header";
import Navbar from "../components/navbar";
import Image from "next/image";
import heart from "@/images/Vector (15).png";
import cart from "@/images/icn favorite.png";
import eye from "@/images/icn favorite (1).png";
import arrow from "@/images/Vector (13).png";
import home from "@/images/unsplash_QANOF9iJlFs.png";
import mainImage from "@/images/single-product-1-cover-2.jpg";
import image1 from "@/images/single-product-1-thumb-1.jpg";
import image2 from "@/images/single-product-1-thumb-2.jpg";

export default function Pages() {
  return (
    <div>
      <GreenHeader />
      <Navbar />
      
      {/* Breadcrumb Section */}
      <div className="w-full h-[92px] py-[24px] bg-[#FAFAFA] relative">
        <div className="absolute top-[190px] left-[130px] flex gap-[30px]">
          <div className="flex items-center gap-[15px]">
            <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
              Home
            </div>
            <Image src={arrow} alt="arrow" width={8.26} height={6} />
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
              Shop
            </h6>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 font-Montserrat">
        {/* Left Section - Image Slider */}
        <div className="flex-1">
          <div className="relative">
            <Image
              src={mainImage}
              alt="Product Image"
              className="rounded-lg"
              width={600}
              height={400}
            />
            {/* Arrows */}
            <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Thumbnails */}
          <div className="flex mt-4 gap-4">
            <Image
              src={image1}
              alt="Thumbnail 1"
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            />
            <Image
              src={image2}
              alt="Thumbnail 2"
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1">
          {/* Product Title and Rating */}
          <h1 className="text-2xl font-semibold text-gray-800">Floating Phone</h1>
          <div className="flex items-center mt-2">
            <span className="flex items-center text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-gray-300"
              >
                <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
              </svg>
            </span>
            <p className="ml-2 text-sm text-gray-500">(10 Reviews)</p>
          </div>

          {/* Price and Availability */}
          <p className="text-xl font-Montserrat font-semibold text-black mt-4">$1,139.33</p>
          <p className="text-sm text-gray-500 mt-2">
            Availability:{" "}
            <span className="text-[#23A6F0] font-medium">In Stock</span>
          </p>

          {/* Description */}
          <p className="text-gray-700 mt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          {/* Color Options */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700">Color:</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">
              Select Options
            </button>
            <div className="flex items-center gap-4">
              <Image src={heart} alt="heart" className="w-6 h-6 cursor-pointer" />
              <Image src={cart} alt="cart" className="w-6 h-6 cursor-pointer" />
              <Image src={eye} alt="eye" className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Description, Additional Information, Reviews */}
      <div className="w-full flex justify-around mt-12">
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] text-[#737373]">Description</span>
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] text-[#737373]">Additional Information</span>
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] text-[#737373]">
          Reviews
          <h1 className="text-sm leading-[24px] text-[#23856D]">(0)</h1>
        </span>
      </div>

      {/* Horizontal Divider */}
      <div className="w-full border-t border-[#ECECEC] mt-4"></div>

      {/* Related Products Section */}
      <div className="flex flex-col lg:flex-row gap-[30px] px-8 py-12 mt-12 items-center justify-center">
        <div className="w-full lg:w-[323px] h-auto rounded-lg overflow-hidden">
          <Image src={home} alt="Interior Design" width={323} height={400} className="object-cover" />
        </div>
        <div className="flex w-full lg:w-[65%] space-y-8">
          <div className="w-[332px] space-y-4">
            <h2 className="text-[24px] font-Montserrat font-bold text-gray-800">The quick fox jumps over</h2>
            <p className="text-[#737373] text-[14px] leading-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>




      {/* Related Products Section */}
      <div className="flex flex-col lg:flex-row gap-[30px] px-8 py-12 mt-12 items-center justify-center">
        <div className="w-full lg:w-[323px] h-auto rounded-lg overflow-hidden">
          <Image src={home} alt="Interior Design" width={323} height={400} className="object-cover" />
        </div>
        <div className="flex w-full lg:w-[65%] space-y-8">
          <div className="w-[332px] space-y-4">
            <h2 className="text-[24px] font-Montserrat font-bold text-gray-800">The quick fox jumps over</h2>
            <p className="text-[#737373] text-[14px] leading-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>






      {/* Related Products Section */}
      <div className="flex flex-col lg:flex-row gap-[30px] px-8 py-12 mt-12 items-center justify-center">
        <div className="w-full lg:w-[323px] h-auto rounded-lg overflow-hidden">
          <Image src={home} alt="Interior Design" width={323} height={400} className="object-cover" />
        </div>
        <div className="flex w-full lg:w-[65%] space-y-8">
          <div className="w-[332px] space-y-4">
            <h2 className="text-[24px] font-Montserrat font-bold text-gray-800">The quick fox jumps over</h2>
            <p className="text-[#737373] text-[14px] leading-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
