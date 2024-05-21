import { HeadPhoneIcon } from "@/assets/icons/HeadPhoneIcon";
import { setUserName } from "@/redux/common";
import { RootState } from "@/redux/stores";
import i18n from "@/settings/localization/i18n";
import { showErrorMessage } from "@/utils/Toast";
import { useDispatch, useSelector } from "react-redux";
const HomePage = () => {
  const userName = useSelector((state: RootState) => state?.common?.userName);
  const dispatch = useDispatch();

  console.log(userName);
  return (
    <div>
      <button onClick={() => showErrorMessage({ content: "Content toast" })}>
        Demo toast
      </button>
      <button onClick={() => dispatch(setUserName({ name: "new name" }))}>
        Demo redux
      </button>
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
      <div className="bg-[#174873] h-[500px] relative my-10">
        <div className="text-center text-white py-10">
          <h3 className="text-[40px] font-[400] leading-[48.41px]">
            Explore More English Listening Activities
          </h3>
          <p className="text-[20px] font-[400] leading-[24.2px]">
            Randall has created a variety of other ESL listening activities to
            improve your comprehension, speaking, vocabulary, and cultural
            awareness.
          </p>
        </div>
        <div className="px-20 mx-auto">
          <div className="grid grid-cols-3 gap-x-14">
            <div className="rounded-[20px] text-center border-[#0077B5] p-5 border bg-white">
              <img className="pt-10 pb-20" src="/imgs/quizzes.svg" alt="des" />
              <p className="text-[20px] font-[700] leading-[24.2px]">Easy</p>
              <p className="leading-[14.52px] font-[400] text-[12px] py-2">
                Listening for high-beginning ESL studemts
              </p>
              <button className="py-5 text-[#0077B5] leading-[19.36px] font-[700] text-[16px]">
                View Quizzes
              </button>
            </div>
            <div className="rounded-[20px] text-center border-[#0077B5] p-5 border bg-white">
              <img className="pt-10 pb-20" src="/imgs/quizzes.svg" alt="des" />
              <p className="text-[20px] font-[700] leading-[24.2px]">
                Intermediate
              </p>
              <p className="leading-[14.52px] font-[400] text-[12px] py-2">
                Listening for high-beginning ESL studemts
              </p>
              <button className="py-5 text-[#0077B5] leading-[19.36px] font-[700] text-[16px]">
                View Quizzes
              </button>
            </div>
            <div className="rounded-[20px] text-center border-[#0077B5] p-5 border bg-white">
              <img className="pt-10 pb-20" src="/imgs/quizzes.svg" alt="des" />
              <p className="text-[20px] font-[700] leading-[24.2px]">
                Difficult
              </p>
              <p className="leading-[14.52px] font-[400] text-[12px] py-2">
                Listening for high-beginning ESL studemts
              </p>
              <button className="py-5 text-[#0077B5] leading-[19.36px] font-[700] text-[16px]">
                View Quizzes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
