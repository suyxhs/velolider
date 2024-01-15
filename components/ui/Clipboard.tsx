'use client'

import React from "react";
import { Typography, Button, Tooltip } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
 
export function ClipboardWithTooltip() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);
 
  return (
    <Tooltip content={copied ? "Скопировано в буфер обмена" : "Скопировать"}>
      <Button
        onMouseLeave={() => setCopied(false)}
        onClick={() => {
          copy("улица Домостроителей, 63А");
          setCopied(true);
        }}
        className="flex bg-black border border-green-btn items-center gap-x-3 px-4 py-2.5 lowercase"
      >
        <Typography
          className="border-r border-green-btn pr-3 font-normal"
          variant="small"
        >
          улица Домостроителей, 63А
        </Typography>
        {copied ? (
          <CheckIcon className="h-4 w-4 text-white" />
        ) : (
          <DocumentDuplicateIcon className="h-4 w-4 text-white" />
        )}
      </Button>
    </Tooltip>
  );
}
