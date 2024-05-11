import { HeadPhoneIcon } from "@/assets/icons/HeadPhoneIcon";
import i18n from "@/settings/localization/i18n";

const HomePage = () => {
  return (
    <div>
      <div className="top text-center text-[48px] leading-[58.09px] text-[#2F669A] my-5">
        <h2 className="font-[400]">{i18n.t("home_boosting_english_skills")}</h2>
        <h2 className="font-[700]">{i18n.t("home_text_free")}</h2>
      </div>
      <div className="grid grid-cols-3 px-20 gap-14">
        <div className="text-[20px] font-[400] leading-[24.2px] rounded-[20px] border-[#0077B5] p-4 border">
          <p className="text-center font-[700] text-[24px] text-[#0077B5] leading-[29.05px]">
            {i18n.t("home_ipa_pronunciation")}
          </p>
          <div className=" my-4 flex justify-center">
            <HeadPhoneIcon />
          </div>
          <p>{i18n.t("home_text_ipa_pronunciation")}</p>
        </div>
        <div className="text-[20px] font-[400] leading-[24.2px] rounded-[20px] border-[#0077B5] p-4 border">
          <p className="text-center font-[700] text-[24px] text-[#0077B5] leading-[29.05px]">
            {i18n.t("home_listening")}
          </p>
          <div className=" my-4 flex justify-center">
            <HeadPhoneIcon />
          </div>
          <p>{i18n.t("home_listen_read")}</p>
          <p>{i18n.t("home_listen_only")}</p>
        </div>
        <div className="text-[20px] font-[400] leading-[24.2px] rounded-[20px] border-[#0077B5] p-4 border">
          <p className="text-center font-[700] text-[24px] text-[#0077B5] leading-[29.05px]">
            {i18n.t("home_speaking")}
          </p>
          <div className=" my-4 flex justify-center">
            <HeadPhoneIcon />
          </div>
          <p>{i18n.t("home_speak_answer")}</p>
        </div>
        <div className="text-[20px] font-[400] leading-[24.2px] rounded-[20px] border-[#0077B5] p-4 border">
          <p className="text-center font-[700] text-[24px] text-[#0077B5] leading-[29.05px]">
            {i18n.t("home_reading")}
          </p>
          <div className=" my-4 flex justify-center">
            <HeadPhoneIcon />
          </div>
          <p>{i18n.t("home_read_daily")}</p>
          <p>{i18n.t("home_read_previous")}</p>
        </div>
        <div className="text-[20px] font-[400] leading-[24.2px] rounded-[20px] border-[#0077B5] p-4 border">
          <p className="text-center font-[700] text-[24px] text-[#0077B5] leading-[29.05px]">
            {i18n.t("home_writing")}
          </p>
          <div className=" my-4 flex justify-center">
            <HeadPhoneIcon />
          </div>
          <p>{i18n.t("home_write_answer")}</p>
        </div>
        <div className="text-[20px] font-[400] leading-[24.2px] rounded-[20px] border-[#0077B5] p-4 border">
          <p className="text-center font-[700] text-[24px] text-[#0077B5] leading-[29.05px]">
            {i18n.t("home_grammar")}
          </p>
          <div className=" my-4 flex justify-center">
            <HeadPhoneIcon />
          </div>
          <p>{i18n.t("home_grammar_discover")}</p>
        </div>
        <div className="text-[20px] font-[400] leading-[24.2px] rounded-[20px] border-[#0077B5] p-4 border">
          <p className="text-center font-[700] text-[24px] text-[#0077B5] leading-[29.05px]">
            {i18n.t("home_vocab_lists")}
          </p>
          <div className=" my-4 flex justify-center">
            <HeadPhoneIcon />
          </div>
          <p>{i18n.t("des1")}</p>
          <p>{i18n.t("des2")}</p>
        </div>
        <div className="text-[20px] font-[400] leading-[24.2px] rounded-[20px] border-[#0077B5] p-4 border">
          <p className="text-center font-[700] text-[24px] text-[#0077B5] leading-[29.05px]">
            {i18n.t("grammar")}
          </p>
          <div className=" my-4 flex justify-center">
            <HeadPhoneIcon />
          </div>
          <p>{i18n.t("1")}</p>
          <p>{i18n.t("2")}</p>
        </div>
        <div className="text-[20px] font-[400] leading-[24.2px] rounded-[20px] border-[#0077B5] p-4 border">
          <p className="text-center font-[700] text-[24px] text-[#0077B5] leading-[29.05px]">
            {i18n.t("grammar")}
          </p>
          <div className=" my-4 flex justify-center">
            <HeadPhoneIcon />
          </div>
          <p>{i18n.t("1")}</p>
          <p>{i18n.t("2")}</p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
