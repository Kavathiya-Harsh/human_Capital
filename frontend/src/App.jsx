import React, { useMemo, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { store } from './store/store';
import AppRoutes from './routes/AppRoutes';
import { fetchCurrentUser } from './features/authSlice';
import ErrorBoundary from './components/common/ErrorBoundary';
import { ThemeContextProvider } from './context/ThemeContext';

const AppContent = () => {
  const dispatch = useDispatch();
  const { themeMode, appearance } = useSelector((state) => state.ui);
  const { isAuthenticated, token } = useSelector((state) => state.auth);

  useEffect(() => {
    // Auto-login: Validates JWT token and fetches user profile on initial mount
    if (token) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, token]);

  const theme = useMemo(() => {
    const isDark = themeMode === 'dark';

    // Core Palettes (Neumorphic identical background & surfaces)
    const bgDefault = isDark ? '#151A26' : '#E6ECF5';
    const bgPaper = isDark ? '#151A26' : '#E6ECF5';
    const textPrimary = isDark ? '#F8FAFC' : '#1E293B';
    const textSecondary = isDark ? '#94A3B8' : '#475569';
    const primaryColor = isDark ? '#FF6038' : '#FF6038'; // Coral gradient orange primary
    const secondaryColor = isDark ? '#00E5FF' : '#00BACF'; // Neon cyan secondary

    // Complex Neumorphism Shadows matching E6ECF5 (Light) and 151A26 (Dark)
    const isNeu = appearance.neumorphism !== false;

    const neuShadow = isNeu
      ? (isDark ? '9px 9px 18px #0c0f16, -9px -9px 18px #1e2536' : '8px 8px 16px #b8c1cf, -8px -8px 16px #ffffff')
      : (isDark ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.05)');

    const neuShadowSm = isNeu
      ? (isDark ? '4px 4px 8px #0c0f16, -4px -4px 8px #1e2536' : '4px 4px 8px #b8c1cf, -4px -4px 8px #ffffff')
      : (isDark ? '0 2px 6px rgba(0,0,0,0.3)' : '0 2px 6px rgba(0,0,0,0.05)');

    const neuShadowHover = isNeu
      ? (isDark ? '14px 14px 28px #0c0f16, -14px -14px 28px #1e2536' : '14px 14px 28px #b8c1cf, -14px -14px 28px #ffffff')
      : (isDark ? '0 8px 24px rgba(0,0,0,0.4)' : '0 8px 24px rgba(0,0,0,0.1)');

    return createTheme({
      palette: {
        mode: themeMode,
        primary: { main: primaryColor },
        secondary: { main: secondaryColor },
        warning: { main: '#FF6B35' },
        background: {
          default: bgDefault,
          paper: bgPaper,
        },
        text: {
          primary: textPrimary,
          secondary: textSecondary,
        },
      },
      typography: {
        fontFamily: '"Inter", "Poppins", "Sora", sans-serif',
        h4: { fontWeight: 700, letterSpacing: '-0.02em' },
        h6: { fontWeight: 600 },
        subtitle2: { fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' },
        button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0.02em' },
      },
      shape: {
        borderRadius: 16,
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              transition: 'background-color 0.4s ease, color 0.4s ease',
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundImage: 'none', // Removes default MUI dark mode overlay
              boxShadow: neuShadow,
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Bouncy transition
            },
            elevation1: {
              boxShadow: neuShadowSm,
            },
            elevation2: {
              boxShadow: neuShadow,
              '&:hover': {
                boxShadow: neuShadowHover,
                transform: 'translateY(-3px)',
              },
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              padding: '10px 24px',
              transition: 'all 0.3s ease',
            },
            contained: {
              boxShadow: neuShadowSm,
              '&:hover': {
                boxShadow: neuShadow,
                transform: 'translateY(-1px)',
              },
            },
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              boxShadow: isDark
                ? '0 4px 30px rgba(0, 0, 0, 0.15)'
                : '0 4px 30px rgba(31, 38, 135, 0.03)',
              backdropFilter: 'blur(16px)',
              backgroundColor: isDark ? 'rgba(21, 26, 38, 0.8)' : 'rgba(230, 236, 245, 0.8)',
            },
          },
        },
        MuiDrawer: {
          styleOverrides: {
            paper: {
              backgroundColor: bgDefault,
              borderRight: 'none',
              boxShadow: isDark ? '4px 0 24px #080c16' : '4px 0 24px #d1d9e6',
            },
          },
        },
      },
    });
  }, [themeMode, appearance.neumorphism]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={themeMode} style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <BrowserRouter>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: '16px',
                background: themeMode === 'dark' ? '#1E293B' : '#FFFFFF',
                color: themeMode === 'dark' ? '#F8FAFC' : '#0F172A',
                boxShadow:
                  appearance.neumorphism !== false
                    ? (themeMode === 'dark'
                      ? '8px 8px 16px #080c16, -8px -8px 16px #16223e'
                      : '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff')
                    : (themeMode === 'dark' ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.05)'),
                fontWeight: 600,
                padding: '16px 24px',
              },
            }}
          />
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <ThemeContextProvider>
          <AppContent />
        </ThemeContextProvider>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
