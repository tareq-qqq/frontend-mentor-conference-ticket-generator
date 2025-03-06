import { Ref, useRef } from "react";
import FormLabel from "./ui/FormLabel";

function FileUpload() {
  const ref: Ref<HTMLInputElement> = useRef(null);

  return (
    <div className="space-y-2">
      <FormLabel labelText="Upload Avatar" htmlFor="fileupload" />
      <div
        onClick={(e) => {
          e.stopPropagation();
          ref.current?.click();
        }}
        className="relative grid min-h-32 cursor-pointer justify-center justify-items-center gap-4 rounded-xl border-2 border-dashed border-neutral-500 bg-neutral-300/10 p-6 text-center backdrop-blur-sm transition-all selection:bg-neutral-500 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-neutral-300 hover:bg-neutral-700/50"
      >
        <div className="grid aspect-square w-12 place-content-center rounded-xl border border-neutral-700 bg-neutral-700/40 transition-all hover:bg-neutral-700/50">
          <img src="/assets/images/icon-upload.svg" />
        </div>
        <p className="text-neutral-300">Drag and drop or click to upload </p>
        <input
          ref={ref}
          type="file"
          className="pointer-events-none absolute inset-0 -z-10 cursor-pointer opacity-0"
        />
      </div>
    </div>
  );
}

export default FileUpload;
