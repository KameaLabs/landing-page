export default function Box({
  children,
  reverse,
}: {
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      className={` border-primary border-2  ${
        reverse ? "bg-primary text-white" : "bg-white"
      } rounded-md py-2 px-4 w-full`}
    >
      {children}
    </div>
  );
}
