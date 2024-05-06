import { FaceBookIcon } from "@/assets/icons/FaceBookIcon";
import ShareIcon from "@/assets/icons/ShareIcon";
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
            <FaceBookIcon />
          </span>
          <span className="px-2">
            <FaceBookIcon />
          </span>
          <span className="px-2">
            <FaceBookIcon />
          </span>
          <span className="px-2">
            <FaceBookIcon />
          </span>
          <span className="px-2">
            <FaceBookIcon />
          </span>
        </div>
        <div className="flex ms-[72px] items-center">
          <span className="font-[400] text-[12px] leading-[14.52px]">
            User Information
          </span>
          <span className="px-2">
            <FaceBookIcon />
          </span>
          <span className="px-2">
            <FaceBookIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
