import { usePitchLineContext } from "./PitchLineContextProvider";

const MoraCircle = ({ index }: { index: number }) => {
  const { pitches } = usePitchLineContext();

  const isHigh = !!pitches.at(index)?.at(1);
  const isMute = ["っ", "ッ"].includes(pitches.at(index)?.at(0) || "");

  if (!pitches.at(index)?.at(0)) return null;

  return (
    <div className={`flex justify-center  ${isHigh ? "mt-1" : "mt-[13px]"}`}>
      <div
        className={`z-10 h-2 w-2 rounded-full border-2 bg-white ${
          isMute ? "border-gray-400" : "border-primary"
        }`}
      />
    </div>
  );
};

export default MoraCircle;
