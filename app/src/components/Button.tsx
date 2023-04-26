export default function Button({ text, onClick, reverse, icon }: any) {
  return (
    <div className="pt-4">
      <button
        className={`flex items-center justify-center gap-3 mx-auto
      ${
        reverse
          ? "bg-secondary text-white  border-secondary"
          : "bg-white text-secondary border-primary"
      } border  rounded-md p-2 min-w-[18rem] max-w-[30rem]`}
        onClick={onClick}
      >
        <span>{icon}</span> {text}
      </button>
    </div>
  );
}
