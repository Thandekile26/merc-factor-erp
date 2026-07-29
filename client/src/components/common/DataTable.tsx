import type { ReactNode } from "react";

type Column<T> = {
  key: keyof T;
  header: string;
  render?: (row: T) => ReactNode;
};

type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

export default function DataTable<T extends object>({
  columns,
  data,
}: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-yellow-600/20 bg-[#111111]">

      <table className="w-full">

        <thead className="bg-[#1A1A1A]">

          <tr>

            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="px-6 py-4 text-left text-sm font-semibold text-yellow-500"
              >
                {column.header}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {data.map((row, index) => (
            <tr
              key={index}
              className="border-t border-zinc-800 hover:bg-zinc-900 transition"
            >

              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className="px-6 py-4 text-zinc-300"
                >
                  {column.render
                    ? column.render(row)
                    : String(row[column.key])}
                </td>
              ))}

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}