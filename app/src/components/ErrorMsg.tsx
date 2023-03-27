export default function ErrorMsgs({ msgs }: any) {
  return Object.keys(msgs).length ? (
    <div className="bg-orange-50 border border-orange-300 rounded-md px-2 py-1">
      <ul>
        {Object.entries(msgs).map(([key, value]) => (
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

export function ErrorMsg({ msg }: any) {
  return (
    <div className="pt-3">
      <div className="bg-orange-50 border border-orange-300 rounded-md px-2 py-1 overflow-hidden">
        {msg}
      </div>
    </div>
  );
}
