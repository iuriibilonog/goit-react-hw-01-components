import PropTypes from 'prop-types';
import Transaction from "./Transaction";
import s from './Transaction.module.css';


const TransactionList = ({ transaction }) => {
  const oneTransaction = transaction.map(({ id, type, amount, currency }) => (
        <tr className={s.tableRow} key={id}>
        <Transaction
            type={type}
            amount={amount}
            currency={currency}
          />
        </tr>
      ))
      
  return (
    <table className={s.transactionHistory}>
  <thead className={s.header}>
    <tr>
      <th className={s.tableColumn}>Type</th>
      <th className={s.tableColumn}>Amount</th>
      <th className={s.tableColumn}>Currency</th>
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
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default TransactionList;