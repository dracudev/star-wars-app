import { FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export interface SocialProps {
  className?: string;
}

export function Social({ className }: SocialProps) {
  return (
    <div className={className}>
      <a
        href="https://www.tiktok.com/@starwars"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-orange-700"
      >
        <FaTiktok />
      </a>
      <a
        href="https://www.instagram.com/starwars/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-orange-700"
      >
        <FaInstagram />
      </a>
      <a
        href="https://x.com/starwars"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-orange-700"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://www.facebook.com/starwars.es/?brand_redir=169299103121699"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-orange-700"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.youtube.com/user/starwars"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-orange-700"
      >
        <FaYoutube />
      </a>
    </div>
  );
}
