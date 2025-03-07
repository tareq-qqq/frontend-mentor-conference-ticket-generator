import {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import FormLabel from "./ui/FormLabel";
import {
  FieldError,
  UseFormClearErrors,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import { Inputs } from "../interfaces/FormValues";
import FormInfo from "./ui/FormInfo";
import FormErrorMessage from "./ui/ErrorMessage";
import { cn } from "../helpers/utils";
import UploadIcon from "../../assets/images/icon-upload.svg";

interface FileUploadProps extends ComponentProps<"input"> {
  setValue: UseFormSetValue<Inputs>;
  setError: UseFormSetError<Inputs>;
  error: FieldError | undefined;
  clearErrors: UseFormClearErrors<Inputs>;
  setPreview: Dispatch<SetStateAction<string | null>>;
  preview: string | null | undefined;
}

function FileUpload({
  setValue,
  setError,
  setPreview,
  preview,
  clearErrors,
  error,
  ...props
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const [isDragActive, setIsDragActive] = useState(false);

  const processFile = useCallback(
    (file: File) => {
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
      setPreview(URL.createObjectURL(file));
    },
    [clearErrors, setError, setPreview, setValue],
  );

  function handleChange() {
    console.log("test");
    if (inputRef.current?.files) {
      const file = inputRef.current?.files[0];
      processFile(file);
    }
  }

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
  }

  const handleDrop = useCallback(
    (ev: DragEvent) => {
      console.log("File(s) dropped");
      setIsDragActive(false);

      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault();

      if (ev.dataTransfer?.files) {
        // Use DataTransfer interface to access the file(s)
        const file = ev.dataTransfer.files[0];
        processFile(file);
      }
    },
    [processFile],
  );

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
  }, [handleDrop]);

  // const inputReg = register("avatar", { onChange: handleChange });

  return (
    <div className="space-y-2">
      <FormLabel labelText="Upload Avatar" htmlFor="avatar" />
      <div
        onClick={(e) => {
          if (preview) {
            return;
          }
          e.stopPropagation();
          inputRef.current?.click();
        }}
        className={cn(
          "relative grid min-h-35 justify-center justify-items-center gap-4 rounded-xl border-2 border-dashed border-neutral-500 bg-neutral-300/10 p-6 text-center backdrop-blur-sm transition-all selection:bg-neutral-500 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-neutral-300",
          {
            "bg-neutral-700/50": isDragActive && !preview,
            "cursor-pointer hover:bg-neutral-700/50": !preview,
          },
        )}
        ref={dropZoneRef}
      >
        <div
          className={cn(
            "pointer-events-none grid aspect-square w-14 place-content-center overflow-hidden rounded-xl border border-neutral-700 bg-neutral-700/40 transition-all",
            {
              "place-content-stretch border-neutral-300": preview,
            },
          )}
        >
          {preview ? (
            <img
              className="h-full w-full max-w-full object-cover"
              src={preview}
            />
          ) : (
            <img src={UploadIcon} />
          )}
        </div>
        {preview ? (
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                setPreview(null);
                setValue("avatar", null);
                if (inputRef.current) {
                  inputRef.current.value = "";
                }
              }}
              className="cursor-pointer rounded-sm bg-neutral-500/5 px-3 py-1 text-sm backdrop-blur-2xl hover:underline"
            >
              Remove Image
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                inputRef.current?.click();
              }}
              className="cursor-pointer rounded-sm bg-neutral-500/5 px-3 py-1 text-sm backdrop-blur-2xl hover:underline"
            >
              Change Image
            </button>
          </div>
        ) : (
          <p className="pointer-events-none text-neutral-300">
            Drag and drop or click to upload{" "}
          </p>
        )}

        <input
          type="file"
          id="avatar"
          className="pointer-events-none absolute inset-0 cursor-pointer opacity-0"
          accept="image/*"
          ref={inputRef}
          onChange={handleChange}
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
