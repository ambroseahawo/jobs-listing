import { ReactNode } from "react";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterSectionProps {
  title: string;
  children: ReactNode;
}

const FilterSection = ({ title, children }: FilterSectionProps) => {
  return (
    <div>
      <div className="cd67x cf37z c3774 cznhr">{title}</div>
      {children}
    </div>
  );
};

interface CheckboxListProps {
  options: FilterOption[];
  values: Record<string, boolean>;
  onChange: (id: string) => void;
}

const CheckboxList = ({ options, values, onChange }: CheckboxListProps) => {
  return (
    <ul className="czodn">
      {options.map((option) => (
        <li key={option.id}>
          <label className="c8og8 cduop">
            <input
              type="checkbox"
              className="cicja"
              checked={values[option.id]}
              onChange={() => onChange(option.id)}
            />
            <span className="cvhuf cf37z cm87k">{option.label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Select = ({ options, value, onChange }: SelectProps) => {
  return (
    <>
      <label className="cxbaz">Location</label>
      <select className="coiqx cn582" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </>
  );
};

export { CheckboxList, FilterSection, Select };
