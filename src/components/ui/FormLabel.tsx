import { ComponentProps } from "react";
import { cn } from "../../helpers/utils";

interface FormLabelProps extends ComponentProps<"label"> {
  labelText: string;
}

function FormLabel({ labelText, className, ...props }: FormLabelProps) {
  return (
    <label
      className={cn("font-regular block text-xl font-medium", className)}
      {...props}
    >
      {labelText}
    </label>
  );
}

export default FormLabel;
