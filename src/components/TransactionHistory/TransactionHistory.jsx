import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <thead>
        {items.map(item => (
          <TransactionHistoryItem key={item.id} item={item} />
        ))}
      </thead>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
