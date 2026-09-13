const logoVariants = {
  lockup: {
    src: "/brand/firefly-lockup-h.svg",
    width: 899,
    height: 100,
  },
  mark: {
    src: "/brand/firefly-mark.svg",
    width: 683,
    height: 854,
  },
  stacked: {
    src: "/brand/firefly-stacked.svg",
    width: 3002,
    height: 1209,
  },
} as const;

export function Logo({
  className,
  variant = "lockup",
}: {
  className?: string;
  variant?: keyof typeof logoVariants;
}) {
  const logo = logoVariants[variant];

  return (
    <img src={logo.src} alt="" className={className} width={logo.width} height={logo.height} />
  );
}
