import Image from "next/image";
import Link from "next/link";

export function BrandLockup({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      {...(onClick ? { onClick } : {})}
      aria-label="Sequoia Insilico home"
      className="inline-flex min-w-0 flex-col text-[#0F2C45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087D78] focus-visible:ring-offset-4"
    >
      <span className="inline-flex items-center gap-[7px] font-heading text-[22px] font-semibold leading-none tracking-[-0.05em] sm:text-[25px]">
        Sequoia Insilico
        <span className="inline-flex shrink-0 flex-col items-center leading-none" aria-hidden="true">
          <Image src="/brand/sipl-emblem.png" alt="" width={30} height={30} sizes="30px" className="h-[30px] w-[30px] object-contain" />
          <span className="-mt-0.5 text-[7px] font-bold tracking-[0.14em] text-[#8A6522]">SIPL</span>
        </span>
      </span>
      <span className="mt-[3px] text-[9px] font-medium uppercase tracking-[0.09em] text-[#087D78] sm:text-[10px]">
        Measure. Monitor. Discover.
      </span>
    </Link>
  );
}
