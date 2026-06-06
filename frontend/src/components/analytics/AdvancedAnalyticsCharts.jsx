import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box, useTheme, Grid } from '@mui/material';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Cell, LineChart, Line, Legend, PieChart, Pie } from 'recharts';
import { motion } from 'framer-motion';
import api from '../../services/api';
import { CardSkeleton } from '../loaders/SkeletonLoader';

const MONTH_NAMES = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const AdvancedAnalyticsCharts = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [loading, setLoading] = useState(true);
  const [yearlyData, setYearlyData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [indicatorData, setIndicatorData] = useState([]);
  const [valueDistData, setValueDistData] = useState([]);
  const [freqDistData, setFreqDistData] = useState([]);

  useEffect(() => {
    const fetchCharts = async () => {
      try {
        const [yr, cnt, mn, ind, valDist, freqDist] = await Promise.all([
          api.get('/stats/yearly-average'),
          api.get('/stats/top-countries'),
          api.get('/stats/monthly-average'),
          api.get('/stats/top-indicators'),
          api.get('/stats/value-distribution'),
          api.get('/stats/frequency-distribution')
        ]);
        
        // Map yearly data: sort ascending by year
        const mappedYr = (yr.data.data || [])
          .map(d => ({ year: String(d._id), value: Math.round(d.average * 100) / 100 }))
          .sort((a, b) => a.year.localeCompare(b.year));

        // Map country data: pick top 5
        const mappedCnt = (cnt.data.data || [])
          .slice(0, 5)
          .map(d => ({ name: d._id || 'Unknown', count: d.recordCount }));

        // Map monthly data: sort 1-12
        const mappedMn = (mn.data.data || [])
          .map(d => ({ month: MONTH_NAMES[d._id] || `M${d._id}`, value: Math.round(d.average * 100) / 100, rawMonth: d._id }))
          .sort((a, b) => a.rawMonth - b.rawMonth);

        // Map indicator data: pick top 5
        const mappedInd = (ind.data.data || [])
          .slice(0, 5)
          .map(d => ({
            name: d._id ? (d._id.length > 18 ? d._id.substring(0, 15) + '...' : d._id) : 'General',
            count: d.recordCount
          }));

        // Map value distribution data
        const mappedValDist = (valDist.data.data || []).map(d => ({
          range: d.range,
          count: d.count
        }));

        // Map frequency distribution data
        const mappedFreqDist = (freqDist.data.data || []).map(d => ({
          name: d.name,
          value: d.value
        }));

        setYearlyData(mappedYr);
        setCountryData(mappedCnt);
        setMonthlyData(mappedMn);
        setIndicatorData(mappedInd);
        setValueDistData(mappedValDist);
        setFreqDistData(mappedFreqDist);
      } catch (err) {
        console.error('Error fetching advanced stats charts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCharts();
  }, []);

  const chartColors = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    success: '#10B981',
    info: '#06B6D4',
  };

  if (loading) {
    return (
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}><CardSkeleton /></Grid>
        <Grid item xs={12} md={6}><CardSkeleton /></Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={4} sx={{ mb: 4 }}>
      {/* 1. Ingestion Trajectory (Area Chart) */}
      <Grid item xs={12} lg={6}>
        <Paper elevation={2} sx={{ p: 3, borderRadius: '24px', backgroundColor: 'background.paper' }}>
          <Typography variant="subtitle1" fontWeight="900" sx={{ mb: 3, letterSpacing: '-0.01em', color: 'text.primary' }}>
            Multi-Year Ingestion Mean (MongoDB Aggregation)
          </Typography>
          <Box sx={{ width: '100%', height: 260 }}>
            <ResponsiveContainer>
              <AreaChart data={yearlyData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="yrGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chartColors.primary} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={chartColors.primary} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)'} />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: theme.palette.text.secondary, fontSize: 10, fontWeight: 700 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: theme.palette.text.secondary, fontSize: 10, fontWeight: 700 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', background: theme.palette.background.paper, border: '1px solid rgba(0,0,0,0.05)', fontSize: 11 }} />
                <Area type="monotone" dataKey="value" stroke={chartColors.primary} strokeWidth={3.5} fillOpacity={1} fill="url(#yrGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>

      {/* 2. Global Distribution (Bar Chart) */}
      <Grid item xs={12} lg={6}>
        <Paper elevation={2} sx={{ p: 3, borderRadius: '24px', backgroundColor: 'background.paper' }}>
          <Typography variant="subtitle1" fontWeight="900" sx={{ mb: 3, letterSpacing: '-0.01em', color: 'text.primary' }}>
            Top 5 Countries Record Distribution
          </Typography>
          <Box sx={{ width: '100%', height: 260 }}>
            <ResponsiveContainer>
              <BarChart data={countryData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)'} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: theme.palette.text.secondary, fontSize: 9, fontWeight: 700 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: theme.palette.text.secondary, fontSize: 10, fontWeight: 700 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', background: theme.palette.background.paper, border: '1px solid rgba(0,0,0,0.05)', fontSize: 11 }} />
                <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                  {countryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={[chartColors.secondary, chartColors.info, chartColors.success, '#F59E0B', '#EF4444'][index % 5]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>

      {/* 3. Monthly Seasonal Index (Line Chart) */}
      <Grid item xs={12} lg={6}>
        <Paper elevation={2} sx={{ p: 3, borderRadius: '24px', backgroundColor: 'background.paper' }}>
          <Typography variant="subtitle1" fontWeight="900" sx={{ mb: 3, letterSpacing: '-0.01em', color: 'text.primary' }}>
            Seasonal Ingestion Fluctuations (Monthly Averages)
          </Typography>
          <Box sx={{ width: '100%', height: 260 }}>
            <ResponsiveContainer>
              <LineChart data={monthlyData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)'} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: theme.palette.text.secondary, fontSize: 10, fontWeight: 700 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: theme.palette.text.secondary, fontSize: 10, fontWeight: 700 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', background: theme.palette.background.paper, border: '1px solid rgba(0,0,0,0.05)', fontSize: 11 }} />
                <Line type="monotone" dataKey="value" stroke={chartColors.info} strokeWidth={4} dot={{ r: 4, strokeWidth: 0, fill: chartColors.info }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>

      {/* 4. Top Indicators Data Density (Horizontal Bar Chart) */}
      <Grid item xs={12} lg={6}>
        <Paper elevation={2} sx={{ p: 3, borderRadius: '24px', backgroundColor: 'background.paper' }}>
          <Typography variant="subtitle1" fontWeight="900" sx={{ mb: 3, letterSpacing: '-0.01em', color: 'text.primary' }}>
            Top 5 Indicators Distribution
          </Typography>
          <Box sx={{ width: '100%', height: 260 }}>
            <ResponsiveContainer>
              <BarChart layout="vertical" data={indicatorData} margin={{ top: 10, right: 15, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)'} />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: theme.palette.text.secondary, fontSize: 10, fontWeight: 700 }} />
                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: theme.palette.text.secondary, fontSize: 9, fontWeight: 700 }} width={90} />
                <Tooltip contentStyle={{ borderRadius: '12px', background: theme.palette.background.paper, border: '1px solid rgba(0,0,0,0.05)', fontSize: 11 }} />
                <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                  {indicatorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#6366F1', '#EC4899', '#8B5CF6', '#10B981', '#F59E0B'][index % 5]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>

      {/* 5. Value Distribution (Bar Chart) */}
      <Grid item xs={12} lg={6}>
        <Paper elevation={2} sx={{ p: 3, borderRadius: '24px', backgroundColor: 'background.paper' }}>
          <Typography variant="subtitle1" fontWeight="900" sx={{ mb: 3, letterSpacing: '-0.01em', color: 'text.primary' }}>
            Record Value Ranges (Distribution)
          </Typography>
          <Box sx={{ width: '100%', height: 260 }}>
            <ResponsiveContainer>
              <BarChart data={valueDistData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)'} />
                <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{ fill: theme.palette.text.secondary, fontSize: 10, fontWeight: 700 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: theme.palette.text.secondary, fontSize: 10, fontWeight: 700 }} />
                <Tooltip contentStyle={{ borderRadius: '12px', background: theme.palette.background.paper, border: '1px solid rgba(0,0,0,0.05)', fontSize: 11 }} />
                <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                  {valueDistData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#EF4444'][index % 6]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>

      {/* 6. Frequency Distribution (Donut Chart) */}
      <Grid item xs={12} lg={6}>
        <Paper elevation={2} sx={{ p: 3, borderRadius: '24px', backgroundColor: 'background.paper' }}>
          <Typography variant="subtitle1" fontWeight="900" sx={{ mb: 3, letterSpacing: '-0.01em', color: 'text.primary' }}>
            Data Frequency Breakdown
          </Typography>
          <Box sx={{ width: '100%', height: 260, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ResponsiveContainer>
              <PieChart>
                <Tooltip contentStyle={{ borderRadius: '12px', background: theme.palette.background.paper, border: '1px solid rgba(0,0,0,0.05)', fontSize: 11 }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: 11, fontWeight: 700 }} />
                <Pie
                  data={freqDistData}
                  cx="50%"
                  cy="45%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {freqDistData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={[chartColors.primary, chartColors.secondary][index % 2]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AdvancedAnalyticsCharts;
