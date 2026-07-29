import { Eye, Pencil, Trash2 } from "lucide-react";

type Props = {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function CustomerActions({
  onView,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onView}
        className="rounded-lg bg-blue-600 p-2 hover:bg-blue-700"
        title="View Customer"
      >
        <Eye size={16} />
      </button>

      <button
        onClick={onEdit}
        className="rounded-lg bg-yellow-500 p-2 text-black hover:bg-yellow-400"
        title="Edit Customer"
      >
        <Pencil size={16} />
      </button>

      <button
        onClick={onDelete}
        className="rounded-lg bg-red-600 p-2 hover:bg-red-700"
        title="Delete Customer"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}