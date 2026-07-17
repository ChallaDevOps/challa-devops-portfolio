import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-lg font-semibold transition-all duration-300",

        variant === "primary"
          ? "bg-sky-500 text-white hover:bg-sky-600"
          : "border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}
