import { QRCodeSVG } from "qrcode.react";

import { GENERATE_DATA } from "../constans";

export const GenerateLog = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
  return (
    <div>
      {data.map((text) => (
        <>
          <p key={text}>{text}</p>
          <QRCodeSVG value={text} size={100} />
        </>
      ))}
    </div>
  );
};
