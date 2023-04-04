interface ISelectProps {
  data: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FunctionComponent<ISelectProps> = ({ data, onChange }) => {
  return (
    <div className="inline-block">
      <select
        className="outline-0 w-52 text-sm bg-slate-200 dark:bg-slate-700 py-2.5 px-2 rounded-sm"
        name="select"
        id="select"
        data-testid="select"
        onChange={onChange}
      >
        {data &&
          data.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Select;
