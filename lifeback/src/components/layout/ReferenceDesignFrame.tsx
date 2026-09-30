export function ReferenceDesignFrame({ src, title }: { src: string; title: string }) {
  return (
    <main className="fixed inset-0 z-[9999] h-[100dvh] w-full overflow-hidden bg-white">
      <iframe className="h-full w-full border-0" src={src} title={title} />
    </main>
  );
}
