import { ComponentProps } from "react";
interface FormErrorMessageProps extends ComponentProps<"div"> {
  message: string;
}

function FormErrorMessage({ message }: FormErrorMessageProps) {
  return (
    <div className="flex gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          stroke="hsl(7, 71%, 60%)"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
        />
        <path fill="hsl(7, 71%, 60%)" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
        <path
          stroke="hsl(7, 71%, 60%)"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.004 10.462V7.596M8 5.569v-.042"
        />
      </svg>

      <small className="text-orange-700">{message}</small>
    </div>
  );
}

export default FormErrorMessage;
