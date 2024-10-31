export const filterBar = () => ({ setStatusFilter, statusFilter, amountFilter, setAmountFilter }:
  { setStatusFilter: (status: string) => void,
    statusFilter: string,
    amountFilter: string,
    setAmountFilter: (amount: number) => void
  }) => (
  <div className="mb-6 flex gap-4">
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
      onChange={(e) => setAmountFilter(parseInt(e.target.value))}
      className="px-3 py-2 border rounded w-full"
    />
  </div>
)