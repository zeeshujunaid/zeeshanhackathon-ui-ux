import Image from "next/image";
import Navbar from "../components/navbar";
import GreenHeader from "../components/green-header";
import arrow from "@/images/Vector (13).png";
import cat1 from "@/images/card-item.png";
import cat2 from "@/images/card-item (1).png";
import cat3 from "@/images/card-item (2).png";
import cat4 from "@/images/card-item (3).png";
import cat5 from "@/images/card-item (4).png";
import drop from "@/images/Vector (14).png";
import frame from "@/images/Frame 31.png";
import clients from "@/images/desktop-clients-1.png";
import pic9 from "@/images/product-cover-5 (8).png";
import pic10 from "@/images/product-cover-5 (9).png";
import pic11 from "@/images/product-cover-5 (10).png";
import pic12 from "@/images/product-cover-5 (11).png";
import pic13 from "@/images/product-cover-5 (12).png";
import pic14 from "@/images/product-cover-5 (13).png";
import pic15 from "@/images/product-cover-5 (14).png";
import pic16 from "@/images/product-cover-5 (15).png";
import pic17 from "@/images/product-cover-5 (16).png";
import pic18 from "@/images/product-cover-5 (17).png";
import pic19 from "@/images/product-cover-5 (18).png";
import pic20 from "@/images/product-cover-5 (19).png";
import fb from "@/images/facebook.png";
import instagram from "@/images/ant-design_instagram-outlined.png";
import twitter from "@/images/ant-design_twitter-outlined.png";
import CardText from "../components/cards-text";

export default function ShopPage() {
  return (
    <div className="relative">
      <GreenHeader />
      <Navbar />

      {/* Shop Section */}
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-full py-[24px] flex flex-col items-center">
        <div className="w-full max-w-[1049px] flex justify-between items-center py-[40px]">
          {/* Shop Title */}
          <div className="flex justify-center items-center mb-[8px]">
            <h2 className="font-Montserrat font-bold text-[24px] text-[#252B42]">
              Shop
            </h2>
          </div>
          {/* Breadcrumb */}
          <div className="flex items-center gap-[15px]">
            <div className="font-Montserrat font-bold text-[14px] text-[#252B42]">
              Home
            </div>
            <Image src={arrow} alt="arrow" width={8.26} height={6} />
            <h6 className="font-Montserrat font-bold text-[14px] text-[#BDBDBD]">
              Shop
            </h6>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="w-full bg-[#FAFAFA] py-[48px]">
        <div className="flex gap-[15px] justify-center max-w-[1088px] mx-auto">
          <Image src={cat1} alt="Category 1" width={200} height={200} />
          <Image src={cat2} alt="Category 2" width={200} height={200} />
          <Image src={cat3} alt="Category 3" width={200} height={200} />
          <Image src={cat4} alt="Category 4" width={200} height={200} />
          <Image src={cat5} alt="Category 5" width={200} height={200} />
        </div>
      </div>

      {/* Popularity Section */}
      <div className="w-full py-[24px] flex justify-center items-center gap-[80px]">
        <div className="flex justify-between items-center w-full max-w-[1050px]">
          <div className="font-Montserrat font-bold text-[14px] text-[#737373]">
            Showing all 12 results
          </div>
          <div className="flex items-center gap-[15px]">
            <h6 className="font-Montserrat font-bold text-[14px] text-[#737373]">
              Views:
            </h6>
            <Image src={frame} alt="frame" className="w-[20px] h-[20px]" />
          </div>
          <div className="flex gap-[15px]">
            <button className="w-[141px] h-[50px] border border-[#DDDDDD] flex items-center justify-center">
              <p className="font-Montserrat text-[14px] text-[#737373]">Popularity</p>
              <Image src={drop} alt="Dropdown" width={10} height={10} />
            </button>
            <button className="w-[94px] h-[50px] px-[20px] py-[10px] bg-[#23A6F0] text-white font-Montserrat">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <Image src={clients} alt="Clients" className="w-full max-w-[1440px] mx-auto mt-[50px]" />

      {/* Footer Section */}
      <footer className="bg-white py-10">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-[#252b42] text-2xl font-bold">Bandage</h1>
          </div>
          <div className="flex gap-6">
            <Image src={fb} alt="Facebook" className="w-6 h-6" />
            <Image src={instagram} alt="Instagram" className="w-6 h-6" />
            <Image src={twitter} alt="Twitter" className="w-6 h-6" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-[#e6e6e6] my-6" />
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div>
            <h2 className="font-bold text-[#252b42]">Company Info</h2>
            <nav className="mt-3">
              <a href="#" className="block text-[#727272]">About Us</a>
              <a href="#" className="block text-[#727272]">Careers</a>
              <a href="#" className="block text-[#727272]">We Are Hiring</a>
              <a href="#" className="block text-[#727272]">Blog</a>
            </nav>
          </div>

          <div>
            <h2 className="font-bold text-[#252b42]">Legal</h2>
            <nav className="mt-3">
              <a href="#" className="block text-[#727272]">Terms of Service</a>
              <a href="#" className="block text-[#727272]">Privacy Policy</a>
              <a href="#" className="block text-[#727272]">Cookies</a>
              <a href="#" className="block text-[#727272]">Refund Policy</a>
            </nav>
          </div>

          {/* Additional footer sections */}
          <div>
            <h2 className="font-bold text-[#252b42]">Features</h2>
            <nav className="mt-3">
              <a href="#" className="block text-[#727272]">Business Marketing</a>
              <a href="#" className="block text-[#727272]">User Analytics</a>
              <a href="#" className="block text-[#727272]">Live Chat</a>
              <a href="#" className="block text-[#727272]">Unlimited Support</a>
            </nav>
          </div>

          <div>
            <h2 className="font-bold text-[#252b42]">Get In Touch</h2>
            <div className="mt-3">
              <div className="relative mb-4">
                <input
                  type="email"
                  className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272]"
                  placeholder="Your Email"
                />
                <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white rounded-r-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-[#727272] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
