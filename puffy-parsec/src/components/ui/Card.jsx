import React from "react";
import clsx from "clsx"; // For conditional class merging, optional

export function Card({ className, children, ...props }) {
  return (
    <div
      className={clsx(
        "rounded-lg border border-gray-200 shadow-md bg-white",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}