type Props = {
  title: string;
};

export default function Badge({
  title,
}: Props) {
  return (
    <span
      className="
      px-4
      py-2
      rounded-full
      bg-sky-600/20
      border
      border-sky-500
      text-sky-300
      text-sm
      font-medium
      "
    >
      {title}
    </span>
  );
}
