import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      className={cn(
        `
        px-7
        py-3
        rounded-xl
        font-semibold

        transition-all
        duration-300

        hover:scale-105
        active:scale-95
        `,

        variant === "primary" &&
          `
          bg-sky-500
          text-white
          hover:bg-sky-600
          shadow-lg
          shadow-sky-500/30
          `,

        variant === "secondary" &&
          `
          bg-violet-600
          text-white
          hover:bg-violet-700
          shadow-lg
          shadow-violet-500/30
          `,

        variant === "outline" &&
          `
          border
          border-sky-500
          text-sky-400
          hover:bg-sky-500
          hover:text-white
          `,

        className
      )}
    >
      {children}
    </button>
  );
}
