import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Link } from "react-router-dom";

const QrCode = () => {
  const [url, setUrl] = useState("");
  const qrRef = useRef();

  const scanQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300}
      bgColor={"#00ff00"}
      level={"H"}
    />
  );

  return (
    <div className="qrcode__container">
      <div ref={qrRef}>{qrcode}</div>
      <div className="input__group">
        <form onSubmit={scanQRCode}>
          <label>Enter bike number (scan QR code for bike number)</label>
          <input
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="054"
          />
          <Link to="/payment">
            <button type="submit" disabled={!url}>
              Unlock Bike
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default QrCode;
