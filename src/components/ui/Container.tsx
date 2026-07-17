type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div
      className="mx-auto w-[92%] max-w-7xl"
    >
      {children}
    </div>
  );
}
