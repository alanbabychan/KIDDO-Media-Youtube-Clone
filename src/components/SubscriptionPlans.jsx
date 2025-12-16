import { Box, Typography, Card, CardContent, Button, Stack, Chip } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import PaymentGateway from "./PaymentGateway";

const plans = [
  {
    id: 'normal',
    name: 'Normal',
    price: 0,
    features: ['Limited videos', 'Ads included', 'Offline downloads', 'Basic quality'],
    color: '#666'
  },
  {
    id: 'basic',
    name: 'Basic',
    price: 999,
    features: ['HD videos', 'Reduced ads','Offline downloads', 'Download videos'],
    color: '#1976d2'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 2999,
    features: ['4K videos', 'No ads', 'Offline downloads', 'Premium content'],
    color: '#gold'
  }
];

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const { user, updateUser } = useAuth();

  const handleSelectPlan = (plan) => {
    if (plan.price === 0) {
      // Free plan - update immediately
      const updatedUser = { ...user, subscription: plan.id };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      updateUser();
      console.log('Updated user with free plan:', updatedUser);
    } else {
      setSelectedPlan(plan);
      setShowPayment(true);
    }
  };

  const handlePaymentSuccess = () => {
    const updatedUser = { ...user, subscription: selectedPlan.id };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    updateUser();
    console.log('Payment successful, updated user:', updatedUser);
    setShowPayment(false);
    setSelectedPlan(null);
  };

  if (showPayment) {
    return <PaymentGateway plan={selectedPlan} onSuccess={handlePaymentSuccess} onCancel={() => setShowPayment(false)} />;
  }

  return (
    <Box sx={{ p: 3, minHeight: '100vh', backgroundColor: '#000' }}>
      <Typography variant="h4" sx={{ color: '#fff', mb: 4, textAlign: 'center' }}>
        Choose Your Plan
      </Typography>
      
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="center">
        {plans.map((plan) => (
          <Card key={plan.id} sx={{ 
            maxWidth: 300, 
            backgroundColor: '#1a1a1a', 
            border: user?.subscription === plan.id ? `2px solid ${plan.color}` : '1px solid #333',
            position: 'relative'
          }}>
            {user?.subscription === plan.id && (
              <Chip 
                label="Current Plan" 
                sx={{ 
                  position: 'absolute', 
                  top: 10, 
                  right: 10, 
                  backgroundColor: plan.color,
                  color: '#fff'
                }} 
              />
            )}
            
            <CardContent sx={{ 
              color: '#fff', 
              textAlign: 'center',
              pt: user?.subscription === plan.id ? 5 : 3
            }}>
              <Typography variant="h5" sx={{ mb: 2, color: plan.color }}>
                {plan.name}
              </Typography>
              
              <Typography variant="h3" sx={{ mb: 2 }}>
                 ₹{plan.price}
                <Typography component="span" variant="body2">/month</Typography>
              </Typography>
              
              <Stack spacing={1} sx={{ mb: 3 }}>
                {plan.features.map((feature, index) => (
                  <Typography key={index} variant="body2">
                    ✓ {feature}
                  </Typography>
                ))}
              </Stack>
              
              <Button
                variant={user?.subscription === plan.id ? "outlined" : "contained"}
                fullWidth
                disabled={user?.subscription === plan.id}
                onClick={() => handleSelectPlan(plan)}
                sx={{ 
                  backgroundColor: user?.subscription === plan.id ? 'transparent' : plan.color,
                  borderColor: plan.color,
                  '&:hover': {
                    backgroundColor: user?.subscription === plan.id ? 'transparent' : plan.color,
                  }
                }}
              >
                {user?.subscription === plan.id ? 'Subscribed' : 'Select Plan'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default SubscriptionPlans;