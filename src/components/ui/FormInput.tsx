import { ComponentProps, forwardRef } from "react";
import FormLabel from "./FormLabel";
import { FieldError } from "react-hook-form";
import FormErrorMessage from "./ErrorMessage";
interface FormInputProps extends ComponentProps<"input"> {
  labelText: string;
  error: FieldError | undefined;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ labelText, error, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <FormLabel labelText={labelText} htmlFor={id} />
        <input
          className="h-14 w-full cursor-pointer rounded-xl border-2 border-neutral-500 bg-neutral-300/10 p-4 backdrop-blur-md transition-all selection:bg-neutral-500 hover:bg-neutral-700/50 focus:outline-2 focus:outline-offset-2 focus:outline-neutral-300"
          ref={ref}
          id={id}
          {...props}
        />
        <div className="h-1">
          {error && error.message && (
            <FormErrorMessage message={error.message} />
          )}
        </div>
      </div>
    );
  },
);

export default FormInput;
