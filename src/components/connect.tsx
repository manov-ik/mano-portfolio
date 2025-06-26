import InstaSVG from "../assets/Instagram.svg";
import GithubSVG from "../assets/GitHub.svg";
import MailSVG from "../assets/Mail.svg";
import LinkedInSVG from "../assets/LinkedIn.svg";
import KaggleSVG from "../assets/Kaggle.svg";
import PinterstSVG from "../assets/Pinterest.svg";
import RedditSVG from "../assets/Reddit.svg";
import WhatsAppSVG from "../assets/WhatsApp.svg";

const socialLinks = [
  {
    href: "https://www.instagram.com/manov_ik/",
    img: InstaSVG,
    alt: "Instagram",
  },
  { href: "https://github.com/manov-ik", img: GithubSVG, alt: "GitHub" },
  {
    href: "https://www.linkedin.com/in/manovikramk/",
    img: LinkedInSVG,
    alt: "LinkedIn",
  },
  { href: "mailto:manozart5@gmail.com", img: MailSVG, alt: "Mail" },
  {
    href: "https://in.pinterest.com/manov_ik/",
    img: PinterstSVG,
    alt: "Pinterest",
  },
  {
    href: "https://www.reddit.com/user/manov_ik/",
    img: RedditSVG,
    alt: "Reddit",
  },
  { href: "tel:+91 93610 26919", img: WhatsAppSVG, alt: "WhatsApp" },
  { href: "https://www.kaggle.com/manovik", img: KaggleSVG, alt: "Kaggle" },
];

const SocialIcon = ({
  href,
  img,
  alt,
}: {
  href: string;
  img: string;
  alt: string;
}) => (
  <div className="m-auto rounded-2xl bg-[#2323288d] border-1 border-[#484851] hover:bg-[#232328] backdrop-blur-xl">
    <a target="blank" href={href} aria-label={alt}>
      <img src={img} alt={alt} className="p-4" />
    </a>
  </div>
);

function Connect() {
  return (
    <div className="font-mono mt-12 flex m-auto text-4xl font-bold text-white flex-col xl:flex-row xl:w-[80%]">
      <div className="text-7xl xl:text-9xl xl:w-1/2 justify-center flex items-center text-center xl:text-left">
        <p className="m-auto mb-4">Let`s Connect</p>
      </div>

      <div className="grid grid-cols-4 gap-4 p-4 xl:w-1/2">
        {socialLinks.map(({ href, img, alt }) => (
          <SocialIcon key={alt} href={href} img={img} alt={alt} />
        ))}
      </div>
    </div>
  );
}

export default Connect;
