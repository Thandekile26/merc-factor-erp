type Props = {
  search: string;
  onSearchChange: (value: string) => void;
};

export default function CustomerSearch({
  search,
  onSearchChange,
}: Props) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="🔍 Search by name, phone or email..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-yellow-500 focus:outline-none"
      />
    </div>
  );
}