import { Box, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const AdBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { user } = useAuth();

  // Don't show ads if user has Basic or Premium subscription
  if (!user || user.subscription === 'basic' || user.subscription === 'premium' || !isVisible) {
    return null;
  }

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#1976d2',
      color: '#fff',
      p: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 1000,
      boxShadow: '0 -2px 10px rgba(0,0,0,0.3)'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          🎯 Upgrade to Premium for Ad-Free Experience!
        </Typography>
        <Typography variant="body2">
          Get unlimited access to all content without interruptions.
        </Typography>
      </Box>
      
      <IconButton 
        onClick={() => setIsVisible(false)}
        sx={{ color: '#fff' }}
        size="small"
      >
        <Close />
      </IconButton>
    </Box>
  );
};

export default AdBanner;