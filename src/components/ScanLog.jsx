import { QRCodeSVG } from "qrcode.react";

import { SCAN_DATA } from "../constans";

export const ScanLog = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
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
