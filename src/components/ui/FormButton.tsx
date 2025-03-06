import { ComponentProps } from "react";

function FormButton({ children, ...props }: ComponentProps<"button">) {
  return (
    <button
      className="h-14 w-full cursor-pointer rounded-xl bg-orange-500 text-xl font-extrabold text-neutral-900 transition-all hover:bg-orange-700 focus:outline-2 focus:outline-offset-2 focus:outline-neutral-50 active:bg-orange-500"
      {...props}
    >
      {children}
    </button>
  );
}

export default FormButton;
