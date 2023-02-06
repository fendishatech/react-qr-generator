import { useState } from "react";
import { ChromePicker } from "react-color";

const InputForm = () => {
  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />
      <button className="bg-blue-400 max-w-xs px-2 py-2 rounded-sm mt-4 hover:bg-blue-500 ml-auto text-white">
        Generate QR
      </button>
    </div>
  );
};

export default InputForm;

const InputField = () => {
  return (
    <div>
      <label className="font-semibold text-md" htmlFor="">
        Your URL
      </label>
      <input
        type="url"
        className="w-full border-2 py-1 px-3 text-gray-700 rounded-sm"
        placeholder="https://example.com"
      />
    </div>
  );
};

const InputColor = () => {
  const [color, setColor] = useState("#41e29a");
  const [colorPicker, setColorPicker] = useState(false);

  const handleChange = (color) => {
    setColor(color.hex);
  };
  return (
    <div>
      <label className="font-semibold text-md" htmlFor="">
        Color
      </label>
      <div className="flex flex-col justify-start gap-2">
        <div
          style={{ background: color }}
          onClick={() => setColorPicker(!colorPicker)}
          className="w-10 h-8 cursor-pointer border-4"
        ></div>
        <div>
          {colorPicker && (
            <ChromePicker color={color} onChange={handleChange} />
          )}
        </div>
      </div>
    </div>
  );
};
