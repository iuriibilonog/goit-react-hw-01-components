import PropTypes from 'prop-types';
import Transaction from "./Transaction";


const TransactionList = ({ transaction }) => {
  const oneTransaction = transaction.map(({ id, type, amount, currency }) => (
        <tr key={id}>
        <Transaction
            type={type}
            amount={amount}
            currency={currency}
          />
        </tr>
      ))
      
  return (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
        { oneTransaction}
      </tbody>
</table>
  )
}

TransactionList.defaultProps = {
  transaction: [],
};

TransactionList.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default TransactionList;