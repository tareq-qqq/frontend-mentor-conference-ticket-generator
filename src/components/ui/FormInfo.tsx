import { ComponentProps } from "react";
interface FormInfoProps extends ComponentProps<"div"> {
  text: string;
}

import InfoIcon from "../../../assets/images/icon-info.svg";

function FormInfo({ text }: FormInfoProps) {
  return (
    <div className="flex gap-2">
      <img src={InfoIcon} alt="" />
      <small>{text}</small>
    </div>
  );
}

export default FormInfo;
