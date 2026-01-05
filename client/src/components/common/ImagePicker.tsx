"use client";

import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";
import { ImageIcon, XCircleIcon } from "lucide-react";
import { useState } from "react";
import Dropzone from "react-dropzone";
import type { UseFormSetValue } from "react-hook-form";


const ImagePreview = ({
  url,
  onRemove,
}: {
  url: string;
  onRemove: () => void;
}) => (
  <div className="relative aspect-square">
    <button
      type="button"
      className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
      onClick={onRemove}
    >
      <XCircleIcon className="h-5 w-5 fill-primary text-primary-foreground" />
    </button>

    <img
      src={url}
      alt=""
      className="border border-border h-full w-full rounded-md object-cover"
    />
  </div>
);

export default function InputImage({ 
  setValue 
}: {
  setValue: UseFormSetValue<any>;
}) {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div className="w-full max-w-40">
      <Label>Item Image</Label>

      <div className="mt-2">
        {preview ? (
          <ImagePreview
            url={preview}
            onRemove={() => {
              setPreview(null);
              setValue("img", undefined); 
            }}
          />
        ) : (
          <Dropzone
            accept={{ "image/*": [] }}
            maxFiles={1}
            onDrop={(acceptedFiles) => {
              const file = acceptedFiles[0];
              if (!file) return;

              setPreview(URL.createObjectURL(file));
              setValue("img", file, { shouldValidate: true });
            }}
          >
            {({ getRootProps, getInputProps, isDragActive }) => (
              <div
                {...getRootProps()}
                className={cn(
                  "border border-dashed flex items-center justify-center aspect-square rounded-md",
                  isDragActive && "border-primary bg-secondary"
                )}
              >
                <input {...getInputProps()} />
                <ImageIcon className="h-16 w-16" />
              </div>
            )}
          </Dropzone>
        )}
      </div>
    </div>
  );
}
