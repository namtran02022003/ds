import toast, { Toast } from "react-hot-toast";
import ToastComponent, { ToastType } from "@/components/common/Toast";
export enum ScreenType {
  Mobile = "mobile",
  Tablet = "tablet",
  PC = "pc",
}

export const ScreenBreakPoint = {
  [ScreenType.Mobile]: 375,
  [ScreenType.Tablet]: 744,
  [ScreenType.PC]: 1024,
};
export function options({
  content,
}: {
  isMobile?: boolean;
  content: string;
}): Partial<
  Pick<
    Toast,
    | "style"
    | "className"
    | "id"
    | "icon"
    | "duration"
    | "ariaProps"
    | "position"
    | "iconTheme"
  >
> {
  return {
    id: content,
    position: "top-right",
    duration: 3000,
    className: "custom-toast",
    style: {
      padding: 0,
    },
  };
}

interface HandleMessageProps {
  title?: string;
  content: string;
}

/**
 * @param param0.title toast title (optional)
 * @param param0.content toast content
 */
function showMessage(
  { title, content }: HandleMessageProps,
  type: ToastType,
  isNetworkError?: boolean
) {
  return toast(
    (toastProp) => (
      // render custom toast
      <ToastComponent
        title={title}
        content={content}
        toastProp={toastProp}
        type={type}
        isNetworkError={isNetworkError}
      />
    ),
    options({
      isMobile: screen.width < ScreenBreakPoint[ScreenType.Tablet],
      content,
    })
  );
}

export function showSuccessMessage({ title, content }: HandleMessageProps) {
  showMessage({ title, content }, ToastType.Success);
}

export function showErrorMessage({ title, content }: HandleMessageProps) {
  console.log("run");

  showMessage({ title, content }, ToastType.Error);
}

export function showInfoMessage({ title, content }: HandleMessageProps) {
  showMessage({ title, content }, ToastType.Info);
}

export function showWarningMessage({ title, content }: HandleMessageProps) {
  showMessage({ title, content }, ToastType.Warning);
}

export function showNetworkErrorMessage({
  title,
  content,
}: HandleMessageProps) {
  showMessage({ title, content }, ToastType.Error, true);
}
