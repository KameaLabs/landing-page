export default function RadioBtn({ name, value }: any) {
  return (
    <div className="flex gap-1 items-center select-none p-1 w-40">
      <input type={"radio"} value={value} name={name} id={value} />
      <label className="w-full h-full" htmlFor={value}>
        {value}
      </label>
    </div>
  );
}
