export default function LabeledInput({ label }: any) {
  return (
    <div>
      {/* <div>{label}</div> */}
      <input
        placeholder={label}
        className="px-3 py-2 text-black w-72 rounded-md"
      />
    </div>
  );
}
