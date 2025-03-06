import { ComponentProps } from "react";
import FormLabel from "./FormLabel";
interface FormInputProps extends ComponentProps<"input"> {
  labelText: string;
}
function FormInput({ labelText, id, name, ...props }: FormInputProps) {
  return (
    <div className="space-y-2">
      <FormLabel labelText={labelText} htmlFor={id} />
      <input
        className="h-14 w-full rounded-xl border-2 border-neutral-500 bg-neutral-50/5 p-4 backdrop-blur-md selection:bg-neutral-500 focus:outline-2 focus:outline-offset-2 focus:outline-neutral-300"
        name={name}
        id={id}
        {...props}
      />
    </div>
  );
}

export default FormInput;
