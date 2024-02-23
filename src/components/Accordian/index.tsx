import { useState } from "react";
import { data } from "./data";
import { AccordianData } from "./types";

const Accordian = () => {
  const [isEnabledMultFlag, setIsEnabledMultFlag] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [multipleAnswers, setMultipleAnswers] = useState<string[]>([]);

  const handleMultipleFlag = (): void => {
    setIsEnabledMultFlag(!isEnabledMultFlag);
    setSelectedAnswer(null);
    setMultipleAnswers([]);
  };

  const handleSingleSelected = (id: string): void => {
    setIsSelected(!isSelected);
    setSelectedAnswer(id);
    console.log(selectedAnswer);
  };
  const handleMultipleSelected = (id: string): void => {
    let mutipleArr: string[] = [...multipleAnswers];
    if (mutipleArr.includes(id)) {
      mutipleArr = mutipleArr.filter((elem) => elem !== id);
    } else mutipleArr.push(id);
    setMultipleAnswers(mutipleArr);
  };

  return (
    <div className="flex flex-col justify-center gap-2 p-5 min-h-screen m-auto">
      <button
        className="w-48 rounded-full px-4 py-2 font-semibold text-sm bg-indigo-500 hover:bg-indigo-800 text-white shadow-sm"
        onClick={handleMultipleFlag}
      >
        On {isEnabledMultFlag ? "Multiple Selection" : "Single Selection"}
      </button>

      <div className="rounded-lg">
        {data.map((elem: AccordianData) => (
          <div key={elem.id} className="mb-2 flex flex-col items-baseline">
            <span
              className=" border-l-4 border-indigo-500"
              onClick={() =>
                isEnabledMultFlag
                  ? handleMultipleSelected(elem.id)
                  : handleSingleSelected(elem.id)
              }
            >
              <b className="ms-3">{elem.question}</b>
            </span>
            {/* <div className=""> */}
            {isEnabledMultFlag
              ? multipleAnswers.includes(elem.id) && (
                  <p className="text-wrap ps-5 rounded-lg px-4 py-3 dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-200">
                    {elem.answer}
                  </p>
                )
              : !isEnabledMultFlag &&
                isSelected &&
                selectedAnswer === elem.id && (
                  <p className="text-wrap ps-5 rounded-lg px-4 py-3 dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-200">
                    {elem.answer}
                  </p>
                )}
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
