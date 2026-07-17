type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        relative
        overflow-hidden

        rounded-3xl
        border
        border-slate-800

        bg-slate-900/60
        backdrop-blur-xl

        p-8

        shadow-2xl

        transition-all
        duration-500
        ease-out

        hover:-translate-y-2
        hover:shadow-sky-500/20
        hover:border-sky-400

        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-white/5
        before:to-transparent
        before:pointer-events-none

        ${className}
      `}
    >
      {children}
    </div>
  );
}
