import React from 'react';
import {
  CardContent,
  Box,
  Avatar,
  IconButton,
  Chip,
  Divider
} from '@mui/material';
import {
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
import { H3, H4, SmallText } from '../atoms';
import Card from './Card';

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
  variant?: 'default' | 'elevated' | 'outlined';
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  title,
  subtitle = '',
  transactions,
  onShowMore = () => {},
  variant = 'elevated'
}) => {
  const colors = useColors();

  // Configuración de variantes según el sistema AI4U minimalista
  const getVariantStyles = () => {
    switch (variant) {
      case 'outlined':
        return {
          card: {
            background: 'transparent',
            border: `1px solid ${colors.contrast.divider}`,
            color: colors.contrast.text.primary
          },
          surface: {
            background: colors.contrast.surface,
            border: 'none'
          }
        };
      case 'elevated':
        return {
          card: {
            background: colors.contrast.surface,
            border: 'none',
            color: colors.contrast.text.primary,
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          },
          surface: {
            background: colors.contrast.background,
            border: 'none'
          }
        };
      default: // default
        return {
          card: {
            background: colors.contrast.surface,
            border: 'none',
            color: colors.contrast.text.primary
          },
          surface: {
            background: colors.contrast.background,
            border: 'none'
          }
        };
    }
  };

  const getCategoryColor = (category: string) => {
    const categoryColors: { [key: string]: { bg: string; text: string; icon: React.ReactNode } } = {
      'Shopping': { 
        bg: colors.palette.accent + '20', 
        text: colors.palette.accent,
        icon: <ShoppingCartIcon />
      },
      'Fitness': { 
        bg: colors.palette.success + '20', 
        text: colors.palette.success,
        icon: <FitnessCenterIcon />
      },
      'Education': { 
        bg: colors.palette.accent + '20', 
        text: colors.palette.accent,
        icon: <SchoolIcon />
      },
      'Investments': { 
        bg: colors.palette.success + '20', 
        text: colors.palette.success,
        icon: <TrendingUpIcon />
      },
      'Health': { 
        bg: colors.palette.accent + '20', 
        text: colors.palette.accent,
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
        return colors.palette.success;
      case 'pending':
        return colors.palette.accent;
      case 'failed':
        return '#DC2626';
      default:
        return colors.palette.success;
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <Card
      variant={variant as 'default' | 'elevated' | 'outlined'}
      sx={{
        borderRadius: 4,
        maxWidth: 400,
        margin: '0 auto',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
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
                      fontWeight: 400,
                      color: colors.helpers.text.primary
                    }}>
                      {transaction.merchant}
                    </H4>
                    <H3 sx={{ 
                      fontWeight: 400,
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
                        fontWeight: 400,
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
                  background: colors.palette.accent,
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
                textTransform: 'none',
                letterSpacing: 0.5
              }}>
                Explorar más
              </SmallText>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionCard; 