type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "border border-slate-500 hover:bg-slate-800 text-white";

  return (
    <button
      className={`${styles} px-6 py-3 rounded-xl font-semibold transition duration-300`}
    >
      {children}
    </button>
  );
}
