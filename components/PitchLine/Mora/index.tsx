import MoraCircle from "./MoraCircle";
import MoraString from "./MoraString";

const Mora: React.FC<{
  mora: string;
  isLast?: boolean;
  isMute?: boolean;
  isOdaka: boolean;
  nextPitch?: boolean;
  currentPitch: boolean;
}> = ({ mora, isLast, isMute, isOdaka, nextPitch, currentPitch }) => {
  const isAccentCore =
    (isLast && isOdaka) ||
    (!isLast && currentPitch === true && nextPitch === false);
  const _isMute = isMute || ["っ", "ッ"].includes(mora);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          left: 15,
          zIndex: -1,
          height: 40,
          marginLeft: -1,
        }}
      />
      <MoraCircle isHigh={currentPitch === true} isMute={_isMute} />
      <MoraString label={mora} isAccentCore={isAccentCore} />
    </div>
  );
};

export default Mora;
