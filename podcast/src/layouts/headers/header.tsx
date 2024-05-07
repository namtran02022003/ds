import { FaceBookIcon } from "@/assets/icons/FaceBookIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";
import { SettingIcon } from "@/assets/icons/SettingIcon";
import ShareIcon from "@/assets/icons/ShareIcon";
import { TiktokIcon } from "@/assets/icons/TiktokIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import { YoutubeIcon } from "@/assets/icons/YoutubeIcon";
import i18next from "@/settings/localization/i18n";
const Header = () => {
  return (
    <div id="header" className="bg-[#174873] text-white h-[31px] px-10">
      <div className="flex justify-between items-center h-full">
        <div className="flex ms-[72px] items-center">
          <ShareIcon />
          <p className="font-[400] text-[12px] leading-[14.52px] ps-1">
            {i18next.t("title")}
          </p>
          <span className="px-2">
            <FaceBookIcon />
          </span>
          <span className="px-2">
            <InstagramIcon />
          </span>
          <span className="px-2">
            <TwitterIcon />
          </span>
          <span className="px-2">
            <YoutubeIcon />
          </span>
          <span className="px-2">
            <LinkedinIcon />
          </span>
          <span className="px-2">
            <TiktokIcon />
          </span>
        </div>
        <div className="flex ms-[72px] items-center">
          <span className="font-[400] text-[12px] leading-[14.52px]">
            User Information
          </span>
          <span className="px-2">
            <UserIcon />
          </span>
          <span className="px-2">
            <SettingIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
