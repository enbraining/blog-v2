import { Github, Linkedin, Mail } from "./icons";

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

type SocialIconProps = {
  kind: keyof typeof components;
  href: string | undefined;
  size?: number;
};

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === "mail" &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      class="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span class="sr-only">{kind}</span>
      <SocialSvg
        class={`fill-current text-gray-700 hover:text-blue-600  h-${size} w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
