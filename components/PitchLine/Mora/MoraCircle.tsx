import React from "react";
import { green, height, width } from "../constants";

const MoraCircle: React.FC<{ isHigh: boolean; isMute?: boolean }> = ({
  isHigh,
  isMute,
}) => {
  return (
    <div style={{ width, height }}>
      <div style={{ height: isHigh ? 4 : 13 }} />
      <div className="flex justify-center">
        <div
          className="z-10 box-content h-1 w-1 rounded-full border-2 bg-white"
          style={{
            borderColor: isMute ? "lightgrey" : green,
          }}
        />
      </div>
    </div>
  );
};

export default MoraCircle;
