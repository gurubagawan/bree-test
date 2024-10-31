import { FilterBarProps } from "./consts";
export const FilterBar = ({ setStatusFilter, statusFilter, amountFilter, setAmountFilter }: FilterBarProps) => {
  return (
    <div className="flex mb-2 gap-4">
      <select
        value={statusFilter || ''}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="px-3 py-2 border rounded w-full"
      >
        <option value="">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <input
        type="number"
        placeholder="Min Amount"
        value={amountFilter}
        onChange={(e) => setAmountFilter(e.target.value ? parseInt(e.target.value) : '')}
        className="px-3 py-2 border rounded w-full"
      />
    </div>
  );
};
