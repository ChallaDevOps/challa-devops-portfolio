type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-14">
      {subtitle && (
        <p className="uppercase tracking-[6px] text-sky-400 text-sm mb-3">
          {subtitle}
        </p>
      )}

      <h2 className="text-5xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}
