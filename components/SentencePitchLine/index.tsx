import PitchLine from "../PitchLine";

export function SentencePitchLine({ pitchString }: { pitchString: string }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pitchString.split("　").map((wordPitchString, index) => (
        <PitchLine key={index} pitchString={wordPitchString} />
      ))}
    </div>
  );
}
