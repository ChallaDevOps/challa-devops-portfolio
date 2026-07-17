type Props = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: Props) {
  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-8
      hover:border-blue-500
      transition
      duration-300
      "
    >
      {children}
    </div>
  );
}
