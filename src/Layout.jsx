import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigate/Navigation";
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QRCodeScanner } from "./components/Scan/QRCodeScanner";
import { GenerateLog } from "./components/GenerateLog";
import { ScanLog } from "./components/ScanLog";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/generateLog" element={<GenerateLog />} />
        <Route path="/scan" element={<QRCodeScanner />} />
        <Route path="/scanLog" element={<ScanLog />} />
      </Routes>
    </div>
  );
};

export { Layout };
