export default function BrowserFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-sm -rotate-1 rounded-lg border-[3px] border-black bg-black shadow-[7px_7px_0_0_rgba(0,0,0,1)] sm:max-w-md">
      <div className="flex items-center gap-2 rounded-t-[5px] border-b-[3px] border-black bg-[#faf3e0] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-black" />
        <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-black" />
        <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-black" />
      </div>
      <div className="border-b-[3px] border-black" />
      <div className="aspect-[4/5] overflow-hidden bg-white">{children}</div>
      <div className="rounded-b-[5px] border-t-[3px] border-black bg-[#faf3e0] py-2.5" />
    </div>
  );
}
