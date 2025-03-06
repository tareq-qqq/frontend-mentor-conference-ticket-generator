import { ComponentProps } from "react";
interface FormInfoProps extends ComponentProps<"div"> {
  text: string;
}

function FormInfo({ text }: FormInfoProps) {
  return (
    <div className="flex gap-2">
      <img src="/assets/images/icon-info.svg" alt="" />
      <small>{text}</small>
    </div>
  );
}

export default FormInfo;
