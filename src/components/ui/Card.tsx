type Props = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: Props) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-slate-800
      bg-slate-900/70
      backdrop-blur-md
      p-6
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-sky-500
      "
    >
      {children}
    </div>
  );
}
