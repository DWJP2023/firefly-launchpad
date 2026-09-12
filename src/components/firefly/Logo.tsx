import logoAsset from "@/assets/firefly-logo.svg.asset.json";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Firefly Entertainment"
      className={className}
      width={3171}
      height={1651}
    />
  );
}
