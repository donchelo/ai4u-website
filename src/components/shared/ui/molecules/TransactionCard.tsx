import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Avatar,
  IconButton,
  Chip,
  styled
} from '@mui/material';
import {
  Person as PersonIcon,
  MoreVert as MoreVertIcon,
  ShoppingCart as ShoppingCartIcon,
  FitnessCenter as FitnessCenterIcon,
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon,
  Favorite as FavoriteIcon,
  AttachMoney as AttachMoneyIcon
} from '@mui/icons-material';
import { useColors } from '../../../../hooks';

interface Transaction {
  id: string;
  merchant: string;
  category: string;
  amount: number;
  time: string;
  icon?: React.ReactNode;
}

interface TransactionCardProps {
  title: string;
  subtitle?: string;
  transactions: Transaction[];
  onShowMore?: () => void;
}

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  },
}));

const TransactionItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '12px 0',
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const TransactionCard: React.FC<TransactionCardProps> = ({
  title,
  subtitle,
  transactions,
  onShowMore
}) => {
  const colors = useColors();

  const getCategoryColor = (category: string) => {
    const categoryColors: { [key: string]: { bg: string; text: string } } = {
      'SHOPPING': { bg: '#DBEAFE', text: '#1E40AF' },
      'FITNESS': { bg: '#D1FAE5', text: '#065F46' },
      'EDUCATION': { bg: '#E9D5FF', text: '#7C3AED' },
      'INVESTMENTS': { bg: '#FEF3C7', text: '#D97706' },
      'HEALTH': { bg: '#FEE2E2', text: '#DC2626' }
    };
    return categoryColors[category] || { bg: colors.contrast.surface, text: colors.contrast.text.secondary };
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'SHOPPING': <ShoppingCartIcon />,
      'FITNESS': <FitnessCenterIcon />,
      'EDUCATION': <SchoolIcon />,
      'INVESTMENTS': <TrendingUpIcon />,
      'HEALTH': <FavoriteIcon />
    };
    return icons[category] || <AttachMoneyIcon />;
  };

  return (
    <StyledCard>
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          mb: 3 
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar sx={{ 
              bgcolor: colors.contrast.surface,
              width: 40,
              height: 40
            }}>
              <PersonIcon sx={{ color: colors.contrast.text.secondary }} />
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ 
                fontWeight: 600,
                color: colors.contrast.text.primary
              }}>
                {title}
              </Typography>
              {subtitle && (
                <Typography variant="body2" sx={{ 
                  color: colors.contrast.text.secondary
                }}>
                  {subtitle}
                </Typography>
              )}
            </Box>
          </Box>
          <IconButton 
            size="small"
            sx={{ color: colors.contrast.text.disabled }}
          >
            <MoreVertIcon />
          </IconButton>
        </Box>

        {/* Transactions List */}
        <Box sx={{ mb: 3 }}>
          {transactions.map((transaction) => {
            const categoryColors = getCategoryColor(transaction.category);
            
            return (
              <TransactionItem key={transaction.id}>
                {/* Icon */}
                <Avatar sx={{ 
                  width: 40, 
                  height: 40,
                  bgcolor: colors.contrast.surface,
                  boxShadow: 1
                }}>
                  <Box sx={{ color: colors.contrast.text.secondary }}>
                    {transaction.icon || getCategoryIcon(transaction.category)}
                  </Box>
                </Avatar>
                
                {/* Transaction Details */}
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between' 
                  }}>
                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 600,
                      color: colors.contrast.text.primary
                    }}>
                      {transaction.merchant}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 600,
                      color: colors.contrast.text.primary
                    }}>
                      ${transaction.amount.toFixed(2)}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    mt: 0.5
                  }}>
                    <Chip
                      label={transaction.category}
                      size="small"
                      sx={{
                        backgroundColor: categoryColors.bg,
                        color: categoryColors.text,
                        fontSize: '0.75rem',
                        height: 20,
                        '& .MuiChip-label': {
                          px: 1,
                        },
                      }}
                    />
                    <Typography variant="caption" sx={{ 
                      color: colors.contrast.text.secondary
                    }}>
                      {transaction.time}
                    </Typography>
                  </Box>
                </Box>
              </TransactionItem>
            );
          })}
        </Box>

        {/* Show More Button */}
        {onShowMore && (
          <Box sx={{ textAlign: 'center' }}>
            <IconButton
              onClick={onShowMore}
              sx={{
                color: colors.palette.orange,
                '&:hover': {
                  backgroundColor: colors.helpers.state.hover,
                },
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default TransactionCard; 