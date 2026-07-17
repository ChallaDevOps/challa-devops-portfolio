type Props = {
  title: string;
};

export default function Badge({
  title,
}: Props) {
  return (
    <span
      className="
      rounded-full
      bg-sky-500/10
      border
      border-sky-500/30
      px-4
      py-2
      text-sm
      text-sky-400
      "
    >
      {title}
    </span>
  );
}
