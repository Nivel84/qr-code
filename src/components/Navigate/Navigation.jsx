import { Link } from "react-router-dom";
import style from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={style.container}>
      <Link to={"/generate"}>Generate QR code</Link>
      <Link to={"/generateLog"}>Generate Log</Link>
      <Link to={"/scan"}>Scan QR code</Link>
      <Link to={"/scanLog"}>Scan Log</Link>
    </nav>
  );
};
