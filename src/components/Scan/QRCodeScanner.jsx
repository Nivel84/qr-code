import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

import { SCAN_DATA } from "../../constans";
import style from "./QRCodeScanner.module.css";

export const QRCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };

  return (
    <div className={style.container}>
      <Scanner
        onScan={scanHandler}
        components={{
          finder: false,
        }}
        styles={{
          container: {
            width: 250,
          },
        }}
        sound={false}
      />
      <p className={style.result}>{scanned}</p>
    </div>
  );
};
