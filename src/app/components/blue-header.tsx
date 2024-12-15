import Image from "next/image";
import phone from "@/images/icn settings icn-xs.png";
import mail from "@/images/icn settings icn-xs (1).png";
import insta from "@/images/icn settings icn-xs (2).png";
import yout from "@/images/icn settings icn-xs (3).png";
import fb from "@/images/icn settings icn-xs (4).png";
import twit from "@/images/icn settings icn-xs (5).png";

export default function BlueHeader() {
  return (
    <div className="hidden lg:block w-full h-[58px] bg-[#252B42]">
      <div className="flex justify-between items-center w-full h-full px-6">
        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <Image src={phone} alt="Phone Icon" width={16} height={16} />
            <span className="font-semibold text-[14px]">(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Image src={mail} alt="Mail Icon" width={16} height={16} />
            <span className="text-[14px]">michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Follow Us Text */}
        <div className="text-center">
          <h6 className="font-semibold text-[14px] text-white">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <h6 className="text-[14px] text-white">Follow Us</h6>
          <div className="flex gap-3">
            <Image src={insta} alt="Instagram Icon" width={20} height={20} />
            <Image src={yout} alt="YouTube Icon" width={20} height={20} />
            <Image src={fb} alt="Facebook Icon" width={20} height={20} />
            <Image src={twit} alt="Twitter Icon" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
