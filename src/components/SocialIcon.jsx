import React from "react";
import linkedinIcon from "../assets/icons/linkedin.svg?url";
import instagramIcon from "../assets/icons/instagram.svg?url";
import githubIcon from "../assets/icons/github.svg?url";

const iconMap = {
  linkedin: { src: linkedinIcon, label: "LinkedIn" },
  instagram: { src: instagramIcon, label: "Instagram" },
  github: { src: githubIcon, label: "GitHub" },
};

export default function SocialIcon({ platform, url, className = "w-6 h-6" }) {
  const icon = iconMap[platform.toLowerCase()];

  if (!icon) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={icon.label}
      className="hover:opacity-75 transition"
    >
      <img
        src={icon.src}
        alt={icon.label}
        className={`invert dark:invert-0 ${className}`}
      />
    </a>
  );
}
