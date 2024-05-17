import {
  ArrowRightSideIcon,
  FaceBookSideIcon,
  InstagramSideIcon,
  LinkedInSideIcon,
  TiktokSideIcon,
  TwitterSideIcon,
  YoutubeSideIcon,
} from "@/assets/icons/side-menu-icon";
import "@/assets/styles/layouts/layout.scss";
import { useState } from "react";
const FloatingSidebar = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <>
      <ul
        id="side_menu"
        className={`fixed overflow-hidden text-center cursor-pointer bg-white z-50 border-t-[1px] border-l-[1px] border-b-[1px] rounded-bl-[10px] rounded-tl-[10px] top-[50%] translate-y-[-50%] ${
          showSideBar ? "right-0" : "-right-40"
        }`}
      >
        <div className="">
          <li className="py-2 px-1 border-b-[1px] flex justify-center">
            <FaceBookSideIcon />
          </li>
          <li className="py-2 px-1 border-b-[1px] flex justify-center">
            <YoutubeSideIcon />
          </li>
          <li className="py-2 px-1 border-b-[1px] flex justify-center">
            <InstagramSideIcon />
          </li>
          <li className="py-2 px-1 border-b-[1px] flex justify-center">
            <TwitterSideIcon />
          </li>
          <li className="py-2 px-1 border-b-[1px] flex justify-center">
            <LinkedInSideIcon />
          </li>
          <li className="py-2 px-1 border-b-[1px] flex justify-center">
            <TiktokSideIcon />
          </li>
          <p
            onClick={() => setShowSideBar(false)}
            className="py-2 px-1 flex justify-center bg-[#ECE7E7] cursor-pointer"
          >
            <ArrowRightSideIcon />
          </p>
        </div>
      </ul>

      {!showSideBar && (
        <button
          onClick={() => setShowSideBar(true)}
          className="fixed right-0 rounded-bl-[10px] rounded-tl-[10px] top-[69%] z-50 px-2 bg-[#ECE7E7] cursor-pointer"
        >{`<<`}</button> //TODO: change icon
      )}
    </>
  );
};
export default FloatingSidebar;
