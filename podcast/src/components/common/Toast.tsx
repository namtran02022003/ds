import toast from "react-hot-toast";

export enum ToastType {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning",
}
interface SuccessToastProps {
  title?: string;
  content: string;
  toastProp: {
    id: string;
  };
  type: ToastType;
  isNetworkError?: boolean;
}

export default function Toast({
  title,
  content,
  type,
  toastProp,
  isNetworkError,
}: SuccessToastProps) {
  const closeToast = () => {
    toast.dismiss(toastProp.id);
  };
  const toastData = {
    [ToastType.Success]: {
      iconSrc: "/imgs/checked-circle.svg",
      className: "bg-[#E2F9E6]",
    },
    [ToastType.Error]: {
      iconSrc: "/imgs/error-warning.svg",
      className: "bg-[#F9E2E2]",
    },
    [ToastType.Info]: {
      iconSrc: "/imgs/tooltip-circle.svg",
      className: "bg-[#E6F4FB]",
    },
    [ToastType.Warning]: {
      iconSrc: "/imgs/error-warning.svg",
      className: "bg-[#F9EAE2]",
    },
  };

  return (
    <div
      className={`flex w-full min-w-[300px] max-w-[400px] rounded-[20px] px-5 py-3 text-[16px] leading-6 shadow-md ${toastData[type].className}
      `}
    >
      {!isNetworkError && (
        <img
          src={toastData[type].iconSrc}
          width={24}
          height={24}
          alt={type}
          className="mr-2 max-h-[24px]"
        />
      )}
      <div className="mr-2">
        {title && <div className="text-[#101010]">{title}</div>}
        <div className="text-[14px] text-[#404040]">{content}</div>
      </div>
      {!isNetworkError && (
        <img
          src="/imgs/close.svg"
          width={24}
          height={24}
          alt="close"
          className="ml-auto max-h-[24px] cursor-pointer"
          data-testid="close-icon"
          onClick={closeToast}
        />
      )}
    </div>
  );
}
