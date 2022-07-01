export default function Pagination({ pages }) {
  return (
    <div className="mt-6 flex justify-center gap-8">
      <button className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 text-sm uppercase text-slate-400">
        Prev
      </button>
      <ol className="flex items-center gap-4 text-slate-400">
        <li className="flex h-14 w-14 items-center justify-center rounded-full bg-[#48C0C0] text-white">
          <b>1</b>
        </li>
        <li className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
          <b>2</b>
        </li>
        <li className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
          <b>3</b>
        </li>
        <li>...</li>
        <li className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
          <b>118</b>
        </li>
      </ol>
      <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#B5E4DC] text-sm uppercase text-[#439C9C]">
        Next
      </button>
    </div>
  );
}
