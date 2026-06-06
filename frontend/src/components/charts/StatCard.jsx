import React from 'react';
import { Paper, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const StatCard = ({
  title,
  value,
  icon,
  color = 'primary.main',
  trend,
  description,
  delay = 0,
}) => (
  <motion.div
    whileHover={{ scale: 1.025, translateY: -3 }}
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20, delay }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={2}
      sx={{
        py: { xs: 2.8, sm: 3, md: 3.2 },
        px: { xs: 2, sm: 2.2, md: 2.5 },
        borderRadius: '24px',
        height: '100%',
        minHeight: 160,
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            gutterBottom
            sx={{
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: '0.72rem',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h3"
            fontWeight="800"
            sx={{
              mt: 0.8,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'text.primary',
              fontSize: { xs: '1.8rem', md: '2.1rem' },
            }}
          >
            {value}
          </Typography>
          {trend !== undefined && (
            <Chip
              label={`${trend >= 0 ? '↑' : '↓'} ${Math.abs(trend)}% vs last month`}
              size="small"
              sx={{
                mt: 1.2,
                fontWeight: 800,
                fontSize: '0.68rem',
                bgcolor: (theme) => theme.palette.mode === 'dark'
                  ? (trend >= 0 ? 'rgba(0,229,255,0.1)' : 'rgba(255,96,56,0.1)')
                  : (trend >= 0 ? 'rgba(34,197,94,0.12)' : 'rgba(255,107,53,0.12)'),
                color: trend >= 0 ? 'secondary.main' : 'warning.main',
                border: 'none',
                borderRadius: '8px',
                px: 0.5,
              }}
            />
          )}
          {description && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.2, fontSize: '0.78rem' }}>
              {description}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            bgcolor: 'background.default',
            p: 1.8,
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            ml: 1.5,
            boxShadow: (theme) => theme.palette.mode === 'dark'
              ? 'inset 4px 4px 8px #0c0f16, inset -4px -4px 8px #1e2536'
              : 'inset 4px 4px 8px #b8c1cf, inset -4px -4px 8px #ffffff',
            border: '1px solid',
            borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.01)',
          }}
        >
          {React.cloneElement(icon, { size: 24, color })}
        </Box>
      </Box>
    </Paper>
  </motion.div>
);

export default StatCard;
