import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Loader = ({ message = 'Initializing System...', fullScreen = false }) => {
  const { themeMode } = useSelector((state) => state.ui);
  const isDark = themeMode === 'dark';

  const neumorphicShadow = isDark
    ? '8px 8px 16px #080c16, -8px -8px 16px #16223e'
    : '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: fullScreen ? '100vh' : '100%',
        minHeight: fullScreen ? '100vh' : '300px',
        width: '100%',
        backgroundColor: fullScreen ? 'background.default' : 'transparent',
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 24, // Squircle shape
          boxShadow: neumorphicShadow,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isDark
            ? 'linear-gradient(145deg, #1b2535, #202c40)'
            : 'linear-gradient(145deg, #ffffff, #dcdfe3)',
          marginBottom: 32,
        }}
      >
        <motion.div
          animate={{ scale: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: '#3B82F6',
            boxShadow: '0 0 20px #3B82F6',
          }}
        />
      </motion.div>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontSize: '0.85rem',
        }}
      >
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {message}
        </motion.span>
      </Typography>
    </Box>
  );
};

export default Loader;
