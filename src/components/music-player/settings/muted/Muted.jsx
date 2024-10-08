import { useEffect, useState } from "react";
import TextForIcon from "../../functions/TextForIcon";

const Muted = ({ muted, setMuted, volume: initialVolume }) => {
  const [localVolume, setLocalVolume] = useState(initialVolume);
  const [showText, SetShowText] = useState();
  const mutedFunction = () => {
    setMuted((prevMode) => !prevMode);
  };

  return (
    <>
      <div className="text-container">
        <TextForIcon showText={showText} text={!muted ? "Mute" : "Unmute"} />
        <button
          onMouseEnter={() => SetShowText("show-text")}
          onMouseLeave={() => SetShowText("")}
          className="button-style"
          onClick={mutedFunction}
        >
          {!muted && localVolume !== 0 ? (
            <i className="fa-solid fa-volume-high"></i>
          ) : (
            <i className="fa-solid fa-volume-xmark"></i>
          )}
        </button>
      </div>
    </>
  );
};

export default Muted;
