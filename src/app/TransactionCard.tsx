interface Transaction {
  date: string;
  amount: number;
  status: string;
  id: string;
  type: string;
}

export const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  console.log(transaction.amount);
  return (
    <div
      key={transaction.id}
      className="p-4 relative bg-gray-50 rounded-lg text-black shadow hover:bg-gray-100 transition group"
    >
      {transaction.status === 'Pending' && (
        <span className="absolute top-2 right-2 bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded">
          Pending
        </span>
      )}
      
      <div className="absolute bottom-2 right-2 text-gray-500 text-xs bg-gray-200 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        ID: {transaction.id}
      </div>
      <p>Date: {transaction.date}</p>
      <p>Amount: ${transaction.amount}</p>
      <p>
        Type: <span className={`font-semibold ${transaction.type === 'Withdrawal' ? 'text-red-500' : 'text-green-500'}`}>{transaction.type}</span>
      </p>
    </div>
  );
};
