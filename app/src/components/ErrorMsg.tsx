export default function ErrorMsg({ msg }: any) {
  return Object.keys(msg).length ? (
    <div className="bg-orange-200 border border-secoundary rounded-md px-2 py-1">
      <ul>
        {Object.entries(msg).map(([key, value]) => (
          <li key={key}>
            <>- {value}</>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );
}
