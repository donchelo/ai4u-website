import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  IconButton, 
  Avatar,
  Chip,
  Button,
  useTheme,
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

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  maxWidth: 400,
  margin: '0 auto',
  background: theme.palette.background.paper,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
  },
}));

const TransactionItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5),
  background: theme.palette.grey[50],
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
  transition: 'all 0.2s ease',
  '&:hover': {
    background: theme.palette.grey[100],
  },
}));

const TransactionCard: React.FC<TransactionCardProps> = ({
  title,
  subtitle,
  transactions,
  onShowMore
}) => {
  const theme = useTheme();

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: { bg: string; text: string } } = {
      'SHOPPING': { bg: '#DBEAFE', text: '#1E40AF' },
      'FITNESS': { bg: '#D1FAE5', text: '#065F46' },
      'EDUCATION': { bg: '#E9D5FF', text: '#7C3AED' },
      'INVESTMENTS': { bg: '#FEF3C7', text: '#D97706' },
      'HEALTH': { bg: '#FEE2E2', text: '#DC2626' }
    };
    return colors[category] || { bg: '#F3F4F6', text: '#374151' };
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
              bgcolor: theme.palette.grey[200],
              width: 40,
              height: 40
            }}>
              <PersonIcon sx={{ color: theme.palette.grey[600] }} />
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ 
                fontWeight: 600,
                color: theme.palette.text.primary
              }}>
                {title}
              </Typography>
              {subtitle && (
                <Typography variant="body2" sx={{ 
                  color: theme.palette.text.secondary
                }}>
                  {subtitle}
                </Typography>
              )}
            </Box>
          </Box>
          <IconButton 
            size="small"
            sx={{ color: theme.palette.grey[400] }}
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
                  bgcolor: '#FFFFFF',
                  boxShadow: 1
                }}>
                  <Box sx={{ color: theme.palette.grey[600] }}>
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
                      color: theme.palette.text.primary
                    }}>
                      {transaction.merchant}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 700,
                      color: theme.palette.text.primary
                    }}>
                      ${transaction.amount.toFixed(1)}
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
                        bgcolor: categoryColors.bg,
                        color: categoryColors.text,
                        fontSize: '0.75rem',
                        height: 20,
                      }}
                    />
                    <Typography variant="caption" sx={{ 
                      color: theme.palette.text.secondary
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
            <Button
              onClick={onShowMore}
              sx={{
                textTransform: 'none',
                fontWeight: 500,
                color: theme.palette.text.secondary,
                '&:hover': {
                  color: theme.palette.text.primary,
                  background: 'transparent',
                },
              }}
            >
              SHOW MORE
            </Button>
          </Box>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default TransactionCard; 