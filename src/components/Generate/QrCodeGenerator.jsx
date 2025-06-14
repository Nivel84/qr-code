import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import { GENERATE_DATA } from "../../constans";
import style from "./QRCodeGenerator.module.css";

export const QrCodeGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [QRCodeToGenerate, setQRCodeToGenerate] = useState("");

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData, inputText])
    );

    setQRCodeToGenerate(inputText);
    setInputText("");
  };

  const onChangeHandler = (event) => {
    setInputText(event.target.value);
    setQRCodeToGenerate("");
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="Input text here"
        value={inputText}
        className={style.input}
        onChange={onChangeHandler}
      />
      <button type="button" className={style.button} onClick={onClickHandler}>
        Generate QR
      </button>
      {QRCodeToGenerate !== "" && (
        <div className={style.qrWrapper}>
          <QRCodeSVG value={QRCodeToGenerate} size={200} />
        </div>
      )}
    </div>
  );
};
