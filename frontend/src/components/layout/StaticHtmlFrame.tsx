"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function StaticHtmlFrame({ src, title }: { src: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const syncHash = () => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      const target = new URL(src, window.location.origin);
      if ((pathname === "/" || pathname === "/team") && window.location.hash) {
        target.hash = window.location.hash;
      }
      if (iframe.src !== target.href) iframe.src = target.href;
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname, src]);

  return (
    <main className="fixed inset-0 z-[9999] h-[100dvh] w-full overflow-hidden bg-white">
      <iframe ref={iframeRef} className="h-full w-full border-0" src={src} title={title} />
    </main>
  );
}
