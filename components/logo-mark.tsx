// eslint-disable-next-line @next/next/no-img-element
export function LogoMark({ size = 36, opacity = 1 }: { size?: number; opacity?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/images/erick-logo.svg" width={size} height={size} alt="" style={{ opacity }} />
  );
}
