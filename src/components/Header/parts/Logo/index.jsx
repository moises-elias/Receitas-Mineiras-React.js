import "./styles.logo.scss";
import logo from "@assets/default_transparent_765x625.png";

export function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
    </div>
  );
}
