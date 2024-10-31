export const TRANSACTIONS = [
  { date: '2024-10-30', amount: 250, status: 'Completed', id: '410ae62f-1fbb-4358-a5cc-d070c6e2a1e2', type: 'Deposit' },
  { date: '2024-10-28', amount: 100, status: 'Completed', id: '1ea307e7-c6c4-4850-944e-ef486ece1ba0', type: 'Deposit'},
  { date: '2024-10-25', amount: 75, status: 'Completed', id: '7f171b23-b5fe-4a43-8f68-e61a270093c5', type: 'Withdrawal' },
  { date: '2024-10-20', amount: 150, status: 'Completed', id: 'faa67c97-58dc-41e0-b57f-c5ff73786499', type: 'Withdrawal' },
  { date: '2024-10-15', amount: 200, status: 'Pending', id: '95c9e516-704f-4d73-a6d1-edb2b00cb679' , type: 'Withdrawal'},
];

export interface TransactionProps {
  date: string;
  amount: number;
  status: string;
  id: string;
  type: string;
}

export interface FilterBarProps {
  setStatusFilter: (status: string) => void;
  statusFilter: string | null;
  amountFilter: number | "";
  setAmountFilter: (amount: number | "") => void;
}

export const getCurrentDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
};

export const MAX_AMOUNT = 1000