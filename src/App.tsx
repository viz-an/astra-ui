import { useState } from "react";
import Select from "./components/form/Select";

function App() {
  const [selectValue, setSelectValue] = useState<string[]>([]);
  return (
    <>
      <div className="flex justify-center items-center h-screen	">
        <Select
          className="w-64"
          multiple
          label="Single Select"
          options={[
            { value: "", label: "Choose an option", disabled: true },
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
            { value: "option4", label: "Option 4" },
            { value: "option5", label: "Option 5" },
            { value: "option6", label: "Option 6" },
            { value: "option7", label: "Option 7" },
          ]}
          placeholder="Select an option"
          value={selectValue}
          onChange={(value) => setSelectValue(value as string[])}
          error={selectValue.length === 0 ? "Enter a value" : ""}
        />
      </div>
    </>
  );
}

export default App;
