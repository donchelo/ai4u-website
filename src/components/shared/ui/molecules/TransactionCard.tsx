import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Avatar,
  IconButton,
  Chip,
  Divider
} from '@mui/material';
import {
  Person as PersonIcon,
  MoreVert as MoreVertIcon,
  ShoppingCart as ShoppingCartIcon,
  FitnessCenter as FitnessCenterIcon,
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon,
  Favorite as FavoriteIcon,
  AttachMoney as AttachMoneyIcon,
  Receipt as ReceiptIcon
} from '@mui/icons-material';
import { useColors } from '../../../../hooks';
import { H3, H4, BodyText, SmallText } from '../atoms';

interface Transaction {
  id: string;
  merchant: string;
  category: string;
  amount: number;
  time: string;
  icon?: React.ReactNode;
  status?: 'completed' | 'pending' | 'failed';
}

interface TransactionCardProps {
  title: string;
  subtitle?: string;
  transactions: Transaction[];
  onShowMore?: () => void;
  variant?: 'glass' | 'dark' | 'primary' | 'accent';
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  title,
  subtitle = '',
  transactions,
  onShowMore = () => {},
  variant = 'glass'
}) => {
  const colors = useColors();

  // Configuración de variantes según el sistema AI4U
  const getVariantStyles = () => {
    switch (variant) {
      case 'dark':
        return {
          card: {
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: colors.helpers.text.highContrast
          },
          surface: {
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }
        };
      case 'primary':
        return {
          card: {
            background: `linear-gradient(135deg, ${colors.palette.orange}15, ${colors.palette.orange}25)`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colors.palette.orange}30`,
            color: colors.helpers.text.highContrast
          },
          surface: {
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }
        };
      case 'accent':
        return {
          card: {
            background: `linear-gradient(135deg, ${colors.palette.green}15, ${colors.palette.green}25)`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colors.palette.green}30`,
            color: colors.helpers.text.highContrast
          },
          surface: {
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }
        };
      default: // glass
        return {
          card: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: colors.helpers.text.highContrast
          },
          surface: {
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.25)'
          }
        };
    }
  };

  const getCategoryColor = (category: string) => {
    const categoryColors: { [key: string]: { bg: string; text: string; icon: React.ReactNode } } = {
      'SHOPPING': { 
        bg: colors.palette.orange + '20', 
        text: colors.palette.orange,
        icon: <ShoppingCartIcon />
      },
      'FITNESS': { 
        bg: colors.palette.green + '20', 
        text: colors.palette.green,
        icon: <FitnessCenterIcon />
      },
      'EDUCATION': { 
        bg: colors.palette.orange + '20', 
        text: colors.palette.orange,
        icon: <SchoolIcon />
      },
      'INVESTMENTS': { 
        bg: colors.palette.green + '20', 
        text: colors.palette.green,
        icon: <TrendingUpIcon />
      },
      'HEALTH': { 
        bg: colors.palette.orange + '20', 
        text: colors.palette.orange,
        icon: <FavoriteIcon />
      }
    };
    return categoryColors[category] || { 
      bg: colors.helpers.background.secondary, 
      text: colors.helpers.text.secondary,
      icon: <AttachMoneyIcon />
    };
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return colors.palette.green;
      case 'pending':
        return colors.palette.orange;
      case 'failed':
        return '#DC2626';
      default:
        return colors.palette.green;
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <Card
      sx={{
        borderRadius: 4,
        maxWidth: 400,
        margin: '0 auto',
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
        },
        ...variantStyles.card
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          mb: 3 
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ 
              width: 48,
              height: 48,
              background: variantStyles.surface.background,
              border: variantStyles.surface.border,
              backdropFilter: 'blur(10px)'
            }}>
              <ReceiptIcon sx={{ 
                color: colors.helpers.text.primary,
                fontSize: 24
              }} />
            </Avatar>
            <Box>
              <H4 sx={{ 
                color: colors.helpers.text.primary,
                mb: 0.5
              }}>
                {title}
              </H4>
              {subtitle && (
                <SmallText sx={{ 
                  color: colors.helpers.text.secondary
                }}>
                  {subtitle}
                </SmallText>
              )}
            </Box>
          </Box>
          <IconButton 
            size="small"
            sx={{ 
              color: colors.helpers.text.secondary,
              '&:hover': {
                background: colors.helpers.state.hover
              }
            }}
          >
            <MoreVertIcon />
          </IconButton>
        </Box>

        {/* Transactions List */}
        <Box sx={{ mb: 3 }}>
          {transactions.map((transaction) => {
            const categoryColors = getCategoryColor(transaction.category);
            
            return (
              <Box
                key={transaction.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  p: 2.5,
                  mb: 2,
                  borderRadius: 3,
                  background: variantStyles.surface.background,
                  border: variantStyles.surface.border,
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    background: colors.helpers.state.hover,
                    transform: 'translateX(4px)'
                  }
                }}
              >
                {/* Transaction Icon */}
                <Avatar sx={{ 
                  width: 48, 
                  height: 48,
                  background: categoryColors.bg,
                  color: categoryColors.text,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  {transaction.icon || categoryColors.icon}
                </Avatar>
                
                {/* Transaction Details */}
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    mb: 1
                  }}>
                    <H4 sx={{ 
                      fontWeight: 600,
                      color: colors.helpers.text.primary
                    }}>
                      {transaction.merchant}
                    </H4>
                    <H3 sx={{ 
                      fontWeight: 700,
                      color: colors.helpers.text.primary
                    }}>
                      ${transaction.amount.toFixed(2)}
                    </H3>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between'
                  }}>
                    <Chip
                      label={transaction.category}
                      size="small"
                      sx={{
                        backgroundColor: categoryColors.bg,
                        color: categoryColors.text,
                        fontSize: '0.75rem',
                        height: 24,
                        fontWeight: 600,
                        '& .MuiChip-label': {
                          px: 1.5,
                        },
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <SmallText sx={{ 
                        color: colors.helpers.text.secondary
                      }}>
                        {transaction.time}
                      </SmallText>
                      {transaction.status && (
                        <Box sx={{ 
                          width: 8, 
                          height: 8, 
                          backgroundColor: getStatusColor(transaction.status),
                          borderRadius: '50%'
                        }} />
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Show More Button */}
        {onShowMore && (
          <>
            <Divider sx={{ 
              mb: 3,
              borderColor: colors.helpers.border.secondary + '40'
            }} />
            <Box sx={{ textAlign: 'center' }}>
              <IconButton
                onClick={onShowMore}
                sx={{
                  width: 48,
                  height: 48,
                  background: colors.palette.orange,
                  color: colors.palette.white,
                  '&:hover': {
                    background: '#E54A00',
                    transform: 'scale(1.05)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                <MoreVertIcon />
              </IconButton>
              <SmallText sx={{ 
                mt: 1,
                color: colors.helpers.text.secondary,
                textTransform: 'uppercase',
                letterSpacing: 0.5
              }}>
                Ver más transacciones
              </SmallText>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionCard; 