import { Box, Typography, Card, CardContent, TextField, Button, Stack, Divider } from "@mui/material";
import { useState } from "react";

const PaymentGateway = ({ plan, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const [processing, setProcessing] = useState(false);

  const handleInputChange = (field) => (event) => {
    let value = event.target.value;
    
    if (field === 'cardNumber') {
      value = value.replace(/\D/g, '').slice(0, 16);
    }
    
    setFormData({ ...formData, [field]: value });
  };

  const handlePayment = async () => {
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <Box sx={{ 
      p: 3, 
      minHeight: '100vh', 
      backgroundColor: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Card sx={{ maxWidth: 500, width: '100%', backgroundColor: '#1a1a1a' }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ color: '#fff', mb: 3, textAlign: 'center' }}>
            Complete Your Payment
          </Typography>
          
          <Box sx={{ mb: 3, p: 2, backgroundColor: '#333', borderRadius: 1 }}>
            <Typography variant="h6" sx={{ color: plan.color }}>
              {plan.name} Plan
            </Typography>
            <Typography variant="h4" sx={{ color: '#fff' }}>
              ₹{plan.price}/month
            </Typography>
          </Box>

          <Divider sx={{ mb: 3, backgroundColor: '#333' }} />

          <Stack spacing={3}>
            <TextField
              label="Cardholder Name"
              value={formData.cardholderName}
              onChange={handleInputChange('cardholderName')}
              fullWidth
              sx={{ 
                '& .MuiInputLabel-root': { color: '#fff' },
                '& .MuiOutlinedInput-root': { 
                  color: '#fff',
                  '& fieldset': { borderColor: '#333' },
                  '&:hover fieldset': { borderColor: '#666' },
                  '&.Mui-focused fieldset': { borderColor: plan.color }
                }
              }}
            />
            
            <TextField
              label="Card Number"
              value={formData.cardNumber}
              onChange={handleInputChange('cardNumber')}
              placeholder="1234 5678 9012 3456"
              fullWidth
              sx={{ 
                '& .MuiInputLabel-root': { color: '#fff' },
                '& .MuiOutlinedInput-root': { 
                  color: '#fff',
                  '& fieldset': { borderColor: '#333' },
                  '&:hover fieldset': { borderColor: '#666' },
                  '&.Mui-focused fieldset': { borderColor: plan.color }
                }
              }}
            />
            
            <Stack direction="row" spacing={2}>
              <TextField
                label="Expiry Date"
                value={formData.expiryDate}
                onChange={handleInputChange('expiryDate')}
                placeholder="MM/YY"
                sx={{ 
                  '& .MuiInputLabel-root': { color: '#fff' },
                  '& .MuiOutlinedInput-root': { 
                    color: '#fff',
                    '& fieldset': { borderColor: '#333' },
                    '&:hover fieldset': { borderColor: '#666' },
                    '&.Mui-focused fieldset': { borderColor: plan.color }
                  }
                }}
              />
              
              <TextField
                label="CVV"
                value={formData.cvv}
                onChange={handleInputChange('cvv')}
                placeholder="123"
                sx={{ 
                  '& .MuiInputLabel-root': { color: '#fff' },
                  '& .MuiOutlinedInput-root': { 
                    color: '#fff',
                    '& fieldset': { borderColor: '#333' },
                    '&:hover fieldset': { borderColor: '#666' },
                    '&.Mui-focused fieldset': { borderColor: plan.color }
                  }
                }}
              />
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              fullWidth
              onClick={onCancel}
              sx={{ 
                borderColor: '#666',
                color: '#fff',
                '&:hover': { borderColor: '#999' }
              }}
            >
              Cancel
            </Button>
            
            <Button
              variant="contained"
              fullWidth
              onClick={handlePayment}
              disabled={processing}
              sx={{ 
                backgroundColor: plan.color,
                '&:hover': { backgroundColor: plan.color }
              }}
            >
              {processing ? 'Processing...' : `Pay ₹${plan.price}`}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PaymentGateway;