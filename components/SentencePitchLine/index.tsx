import { PitchLine } from "../PitchLine";

export function SentencePitchLine({
  pitchesArray,
}: {
  pitchesArray: string[][][];
}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pitchesArray.map((pitches, index) => (
        <PitchLine pitches={pitches} key={index} />
      ))}
    </div>
  );
}
