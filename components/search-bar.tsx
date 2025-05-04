export default function SearchBar() {
  return (
    <div className="search-bar h-10 mb-4">
      <input type="text" placeholder="Robinson" className="flex-1 outline-none px-2 py-1 bg-transparent" />
      <button className="w-6 h-6 flex items-center justify-center rounded-full bg-[#373434] text-white text-xs">
        ⌕
      </button>
    </div>
  )
}
