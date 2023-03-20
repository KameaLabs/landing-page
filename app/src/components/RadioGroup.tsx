import RadioBtn from "@/components/RadioBtn";

export default function RadioGroup({ title, icon, setValue, radioList }: any) {
  return (
    <div className="flex pb-4">
      <div className="flex items-center whitespace-nowrap gap-2">
        <div className="flex gap-2">
          <span className="text-primary border-2 border-primary rounded-md p-1">
            {icon}
          </span>
          {title}
        </div>
        {radioList.map((item: any, k: any) => (
          <RadioBtn
            key={k}
            name={item.groupName}
            value={item.value}
            onChange={() => setValue(item.value)}
          />
        ))}
      </div>
    </div>
  );
}
