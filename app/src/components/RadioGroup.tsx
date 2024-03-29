import RadioBtn from "@/components/RadioBtn";

export default function RadioGroup({
  title,
  itemKey,
  icon,
  setValue,
  radioList,
}: any) {
  return (
    <div className="flex pb-4">
      <div className="flex items-center whitespace-nowrap gap-2 flex-wrap">
        <div className="flex gap-2">
          <span className="text-primary border-2 border-primary rounded-md p-1">
            {icon}
          </span>
          {title}
        </div>
        <div className="flex items-center whitespace-nowrap flex-wrap gap-2">
          {radioList.map((item: any, k: any) => (
            <RadioBtn
              key={k}
              name={item.groupName}
              value={item.value}
              onChange={() => setValue({ itemKey, value: item.exchange })}
              checked={item.active}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
