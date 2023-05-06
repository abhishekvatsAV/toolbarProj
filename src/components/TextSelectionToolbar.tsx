import { useState, useEffect } from "react";
import "./TextSelectionToolbar.css";
interface Props {
  onBoldClick: () => void;
  onUnderlineClick: () => void;
  onItalicClick: () => void;
}

const TextSelectionToolbar: React.FC<Props> = ({
  onBoldClick,
  onUnderlineClick,
  onItalicClick,
}) => {
  const [toolbarStyle, setToolbarStyle] = useState({
    display: "none",
    position: "absolute",
    top: 0,
    left: 0,
    transform: "translate(-50%, -100%)",
    zIndex: 100,
    backgroundColor: "#292C33",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    padding: "4px 8px",
    cursor: "pointer",
  } as React.CSSProperties);

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection?.toString().length === 0) {
        setToolbarStyle((prevState) => ({ ...prevState, display: "none" }));
        return;
      }
      if (selection?.rangeCount === 0) {
        setToolbarStyle((prevState) => ({ ...prevState, display: "none" }));
        return;
      }
      const range = selection?.getRangeAt(0);
      const rect = range?.getBoundingClientRect()!;
      const left = rect.left + rect.width / 2;
      const top = rect.top;
      setToolbarStyle((prevState) => ({
        ...prevState,
        display: "block",
        top: top,
        left: left,
      }));
    };
    document.addEventListener("mouseup", handleSelection);
    return () => {
      document.removeEventListener("mouseup", handleSelection);
    };
  }, []);

  return (
    <div style={toolbarStyle} className="toolbar" aria-readonly={true}>
      <button className="btn" onClick={onBoldClick} aria-readonly={true}>
        B
      </button>
      <button className="btn" onClick={onUnderlineClick} aria-readonly={true}>
        U
      </button>
      <button className="btn" onClick={onItalicClick}>
        I
      </button>
    </div>
  );
};

export default TextSelectionToolbar;
