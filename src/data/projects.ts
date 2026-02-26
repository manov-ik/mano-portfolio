// ── Design works (local only — static assets, no DB needed) ──────────────────

import rtx4090 from "../assets/rtx4090.png";
import nothing from "../assets/nothing.png";
import keyboard from "../assets/keyboard.png";
import ashetic from "../assets/asthetic1.png";
import coke from "../assets/coke.png";
import moreOnInstagram from "../assets/more on instagram.png";
import tic from "../assets/tic.png";
import qpo from "../assets/QPo.png";
import rs500 from "../assets/500rs.png";

export interface DesignWork {
  imgSrc: string;
  link: string;
  label: string;
}

export const DESIGN_WORKS: DesignWork[] = [
  { imgSrc: nothing,         link: "https://www.instagram.com/mano3d/reel/CzQ6H38BNCY/", label: "Nothing Phone 3D" },
  { imgSrc: tic,             link: "https://www.theinternetcompany.one/design.html",      label: "The Internet Company" },
  { imgSrc: coke,            link: "https://www.instagram.com/mano3d/reel/DJPJWGJPlki/", label: "Coke 3D" },
  { imgSrc: keyboard,        link: "https://www.instagram.com/mano3d/reel/Cr8U8OQsBg0/", label: "Keyboard Render" },
  { imgSrc: rtx4090,         link: "",                                                    label: "RTX 4090 Render" },
  { imgSrc: ashetic,         link: "",                                                    label: "Aesthetic" },
  { imgSrc: qpo,             link: "https://www.linkedin.com/company/qpo-cabs/",         label: "QPo Cabs" },
  { imgSrc: rs500,           link: "",                                                    label: "500 Rupee Note" },
  { imgSrc: moreOnInstagram, link: "https://www.instagram.com/mano3d/",                  label: "More on Instagram" },
];
