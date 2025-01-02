import React from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "px-4 py-2 font-medium rounded transition",
  variants: {
    variant: {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
    },
    size: {
      small: "text-sm",
      large: "text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "small",
  },
});

export default function Button({ variant, size, children }) {
  return <button className={button({ variant, size })}>{children}</button>;
}