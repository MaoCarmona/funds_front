import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFunds, subscribeToFund } from 'features/funds/fundsSlice';
import { Card, CardContent, CardActions, Typography, Button, Box, Grid2 } from '@mui/material'
import {AttachMoney, Timeline } from '@mui/icons-material'

const FundsList = ({}) => {
  const dispatch = useDispatch();
  const { funds, status, error } = useSelector((state) => state.funds);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFunds());
    }
  }, [status, dispatch]);

  const handleSubscribe = (fundId) => {
    const amount = prompt('Enter the amount to subscribe:');
    if (amount) {
      dispatch(subscribeToFund({ fundId, amount }));
    }
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>{error}</div>;

  return (
    <Card sx={{ maxWidth: 1000, margin: 'auto', marginRight:'8%'}}>
    <Box sx={{ padding: 2 }}>
      <Grid2 container justifyContent="center" spacing={2}>
        <Grid2 item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Fondos de Inversion
          </Typography>
        </Grid2>
      </Grid2>
    <Grid2 container spacing={2} justifyContent="center">
      {funds.map((fund) => (
        <Grid2 item key={fund.id}  xs={12} sm={6} md={1}>
          <Card sx={{ maxWidth: 400, m: 1, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {fund.nombre}
              </Typography>
              <Grid2 container spacing={2}>
                <Grid2 item xs={6}>
                  <Box display="flex" alignItems="center">
                    <Timeline color="warning" sx={{ mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Riesgo: {fund.riesgo}
                    </Typography>
                  </Box>
                </Grid2>
                <Grid2 item xs={6}>
                  <Box display="flex" alignItems="center">
                    <AttachMoney color="success" sx={{ mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Inversión mínima: ${fund.min_investment_amount}
                    </Typography>
                  </Box>
                </Grid2>
              </Grid2>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => handleSubscribe(fund.id)}
              >
                Subscribirse
              </Button>
            </CardActions>
          </Card>
        </Grid2>
      ))}
    </Grid2>
    </Box>
    </Card>
  );
};

export default FundsList;
