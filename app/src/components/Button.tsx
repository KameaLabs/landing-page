export default function Button({ text, onClick }: any) {
  return (
    <button
      className="bg-white text-black rounded-md p-2 w-full"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
