export default function RadioBtn({ name, value, onChange }: any) {
  return (
    <div className="flex gap-1 items-center select-none p-1">
      <input
        type={"radio"}
        value={value}
        name={name}
        id={value}
        onChange={onChange}
      />
      <label className="w-full h-full" htmlFor={value}>
        {value}
      </label>
    </div>
  );
}
