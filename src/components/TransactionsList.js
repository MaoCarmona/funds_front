import React, { useEffect } from 'react';
import { Typography,Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Card } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import {fetchTransactions} from 'features/transactions/transactionsSlice'

const TransactionsList = ({userId}) => {
  const dispatch = useDispatch();
  const {transactions , status} = useSelector((state) => state.transactions);
  useEffect(() => {
    if ( status=== 'idle') {
      dispatch(fetchTransactions(userId));
    }
  }, [status, dispatch, userId]);

  return (
    <TableContainer component={Card} sx={{ maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h4" component="h2" sx={{ p: 2, fontWeight: 'bold' }}>
        Historial de Transacciones
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tipo</TableCell>
            <TableCell align="left">Valor</TableCell>
            <TableCell>Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.type}</TableCell>
              <TableCell amount={transaction.amount}>
                {transaction.amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}
              </TableCell>
              <TableCell>{new Date(transaction.date).toDateString('')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

};

export default TransactionsList;
