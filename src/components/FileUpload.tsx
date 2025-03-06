import { ComponentProps, useEffect, useRef, useState } from "react";
import FormLabel from "./ui/FormLabel";
import {
  FieldError,
  UseFormClearErrors,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import { Inputs } from "../interfaces/FormValues";
import FormInfo from "./ui/FormInfo";
import FormErrorMessage from "./ui/ErrorMessage";
import { cn } from "../helpers/utils";

interface FileUploadProps extends ComponentProps<"input"> {
  setValue: UseFormSetValue<Inputs>;
  register: UseFormRegister<Inputs>;
  setError: UseFormSetError<Inputs>;
  error: FieldError | undefined;
  clearErrors: UseFormClearErrors<Inputs>;
}

function FileUpload({
  setValue,
  setError,
  register,
  clearErrors,
  error,
  ...props
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const [isDragActive, setIsDragActive] = useState(false);

  function processFile(file: File) {
    // maybe do some advanced image detection for later
    if (!file.type.includes("image")) {
      // implement error handling
      console.log("The file is not an image");
      setError("avatar", {
        message: "The file is not an image",
      });
      return;
    }
    if (file.size > 500_000) {
      console.log("File too large. Please upload a photo under 500KB.");
      setError("avatar", {
        message: "File too large. Please upload a photo under 500KB.",
      });
      return;
    }

    console.log("setting avatar");
    clearErrors("avatar");
    setValue("avatar", file);
  }

  function handleChange() {
    if (inputRef.current?.files) {
      const file = inputRef.current?.files[0];
      processFile(file);
    }
  }

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
  }

  function handleDrop(ev: DragEvent) {
    console.log("File(s) dropped");
    setIsDragActive(false);

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer?.files) {
      // Use DataTransfer interface to access the file(s)
      const file = ev.dataTransfer.files[0];
      processFile(file);
    }
  }

  function handleDragenter(e: DragEvent) {
    e.preventDefault();
    setIsDragActive(true);
  }

  function handleDragleave(e: DragEvent) {
    e.preventDefault();
    setIsDragActive(false);
  }

  useEffect(() => {
    const dropZone = dropZoneRef.current;

    dropZone?.addEventListener("dragover", handleDragOver);
    dropZone?.addEventListener("drop", handleDrop);
    dropZone?.addEventListener("dragenter", handleDragenter);
    dropZone?.addEventListener("dragleave", handleDragleave);

    return () => {
      dropZone?.removeEventListener("dragover", handleDragOver);
      dropZone?.removeEventListener("drop", handleDrop);
      dropZone?.removeEventListener("dragenter", handleDragenter);
      dropZone?.removeEventListener("dragleave", handleDragleave);
    };
  });

  const inputReg = register("avatar", { onChange: handleChange });

  return (
    <div className="space-y-2">
      <FormLabel labelText="Upload Avatar" htmlFor="fileupload" />
      <div
        onClick={(e) => {
          e.stopPropagation();
          inputRef.current?.click();
        }}
        className={cn(
          "relative grid min-h-32 cursor-pointer justify-center justify-items-center gap-4 rounded-xl border-2 border-dashed border-neutral-500 bg-neutral-300/10 p-6 text-center backdrop-blur-sm transition-all selection:bg-neutral-500 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-neutral-300 hover:bg-neutral-700/50",
          {
            "bg-neutral-700/50": isDragActive,
          },
        )}
        ref={dropZoneRef}
      >
        <div className="pointer-events-none grid aspect-square w-12 place-content-center rounded-xl border border-neutral-700 bg-neutral-700/40 transition-all">
          <img src="/assets/images/icon-upload.svg" />
        </div>
        <p className="pointer-events-none text-neutral-300">
          Drag and drop or click to upload{" "}
        </p>
        <input
          type="file"
          className="pointer-events-none absolute inset-0 cursor-pointer opacity-0"
          accept="image/*"
          ref={(e) => {
            inputReg.ref(e);
            inputRef.current = e;
          }}
          onChange={inputReg.onChange}
          {...props}
        />
      </div>

      {error && error.message ? (
        <FormErrorMessage message={error.message} />
      ) : (
        <FormInfo text="Upload your photo (JPG or PNG, max size: 500KB)." />
      )}
    </div>
  );
}

export default FileUpload;
