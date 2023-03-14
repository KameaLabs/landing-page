export default function LabeledInput({ label, type, icon }: any) {
  return (
    <div className="flex items-center whitespace-nowrap gap-2">
      <div className="flex gap-2">
        <span className="text-primary border-2 border-primary rounded-md p-1">
          {icon}
        </span>
        {label}:
      </div>
      <input
        type={type}
        className="px-3  text-primary w-full border-b border-primary outline-none"
      />
    </div>
  );
}
