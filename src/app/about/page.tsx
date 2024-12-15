import Navbar from "../components/navbar2";
import Image from "next/image";
import girl from "@/images/hero-2-bg-shape-cover.png";
import bg from "@/images/media bg-cover.png";
import facebookIcon from "@/images/facebook.png";
import instagramIcon from "@/images/ant-design_instagram-outlined.png";
import twitterIcon from "@/images/ant-design_twitter-outlined.png";
import user1 from "@/images/team-1-user-1.jpg";
import user2 from "@/images/team-1-user-2.jpg";
import user3 from "@/images/team-1-user-3.jpg";
import cm1 from "@/images/fa-brands-1.png";
import cm2 from "@/images/fa-brands-2.png";
import cm3 from "@/images/fa-brands-3.png";
import cm4 from "@/images/fa-brands-4.png";
import cm5 from "@/images/fa-brands-5.png";
import cm6 from "@/images/fa-brands-6.png";
import girl2 from "@/images/unsplash_vjMgqUkS8q8.png";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      {/* About Us Section */}
      <div className="relative flex flex-col gap-8">
        <div className="w-full max-w-[1050px] mx-auto py-[112px] sm:mb-[50px] flex flex-col items-start gap-[40px] lg:gap-[80px]">
          <div className="flex flex-col lg:flex-row items-center gap-[30px] w-full lg:w-[1044px]">
            {/* Text Content */}
            <div className="flex flex-col lg:items-start items-center gap-[35px] w-full lg:w-[599px]">
              <h5 className="text-[14px] font-semibold text-[#252B42] tracking-[0.1px]">
                ABOUT COMPANY
              </h5>
              <h1 className="text-[30px] lg:text-[58px] font-bold text-[#252B42] tracking-[0.2px]">
                ABOUT US
              </h1>
              <h4 className="text-[12px] lg:text-[20px] text-[#737373] lg:w-[376px]">
                We know how large objects will act, but things on a small scale.
              </h4>
              <div className="bg-[#23A6F0] rounded-[5px] px-[40px] py-[15px]">
                <span className="text-white font-bold">Get Quote Now</span>
              </div>
            </div>
            <Image
              src={girl}
              alt="Company Illustration"
              className="hidden lg:block lg:absolute lg:top-0 lg:left-[-1px]"
            />
          </div>
        </div>

        {/* Team Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto flex flex-col items-center gap-16 px-4">
            <div className="text-center max-w-lg">
              <h2 className="text-4xl font-bold text-[#252B42]">Meet Our Team</h2>
              <p className="text-base text-[#737373] mt-4">
                Problems trying to resolve the conflict between the two major realms of Classical physics.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[user1, user2, user3].map((user, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
                >
                  <Image src={user} alt={`Team Member ${index + 1}`} className="object-cover w-full h-[230px]" />
                  <div className="p-6 text-center">
                    <h5 className="text-xl font-bold text-[#252B42]">Name</h5>
                    <h6 className="text-sm font-semibold text-[#737373]">Position</h6>
                    <div className="flex justify-center gap-4 mt-4">
                      {[facebookIcon, instagramIcon, twitterIcon].map((icon, i) => (
                        <Image key={i} src={icon} alt="Social Icon" className="w-6 h-6" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="bg-gray-100 py-20 flex justify-center">
          <div className="w-full max-w-6xl flex flex-col items-center px-4 md:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Big Companies Are Here</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              {[cm1, cm2, cm3, cm4, cm5, cm6].map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <Image src={logo} alt={`Company ${index + 1}`} className="h-12 w-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work with Us Section */}
        <section className="relative w-full h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[-30px]">
          <div className="lg:w-1/2 px-10 py-16 text-white flex flex-col items-start">
            <h5 className="font-bold">WORK WITH US</h5>
            <h2 className="text-4xl font-bold">Now Let’s grow Yours</h2>
            <p>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th.</p>
            <button className="border border-white rounded-md px-5 py-2 mt-4">Button</button>
          </div>
          <div className="lg:w-1/2 relative">
            <Image src={girl2} alt="Work with us background" className="object-cover w-full h-full" />
          </div>
        </section>
      </div>
    </div>
  );
}
