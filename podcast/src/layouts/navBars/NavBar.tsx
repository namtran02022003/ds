import { HeadPhoneIcon } from "@/assets/icons/HeadPhoneIcon";
import { SettingIcon } from "@/assets/icons/SettingIcon";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export function NavBar() {
  const { t } = useTranslation();
  const LIST_MENU = [
    {
      text: "home",
      path: "/",
    },
    {
      text: "listening",
      path: "/listening",
    },
    {
      text: "speaking",
      path: "/speaking",
    },
    {
      text: "reading",
      path: "/reading",
    },
    {
      text: "writing",
      path: "/writing",
    },
    {
      text: "podcast",
      path: "/podcast",
    },
    {
      text: "about",
      path: "/about",
    },
  ];
  return (
    <div className="flex items-center justify-between px-20 py-3">
      <div className="flex items-center">
        <HeadPhoneIcon />
        <p className="font-[700] text-[20px] ms-3 leading-[24.2px] text-[#174873]">
          {t("title")}
        </p>
      </div>
      <div className="flex items-center">
        {LIST_MENU.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive, isPending }) => {
              return `${
                isPending ? "pending" : isActive ? " border-b-[2px]" : ""
              } px-2 text-[#174873] text-[20px] font-[400] leading-[24.2px]`;
            }}
          >
            {t(link.text)}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center">
        <span className="px-2 text-[#174873] text-[20px] font-[400] leading-[24.2px]">
          {t("helpUs")}
        </span>
        <SettingIcon />
      </div>
    </div>
  );
}
