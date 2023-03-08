export default function RadioBtn({ name, value }: any) {
  return (
    <div className="flex gap-1 items-center">
      <input type={"radio"} value={value} name={name} />
      {value}
    </div>
  );
}
