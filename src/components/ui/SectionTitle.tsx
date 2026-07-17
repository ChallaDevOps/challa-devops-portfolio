type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-16">

      <p className="text-sky-400 uppercase tracking-[5px] mb-3">

        {subtitle}

      </p>

      <h2 className="text-5xl font-bold">

        {title}

      </h2>

    </div>
  );
}
