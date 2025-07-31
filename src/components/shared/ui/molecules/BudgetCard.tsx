import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  IconButton, 
  Avatar,
  Chip,
  useTheme,
  styled
} from '@mui/material';
import { 
  Person as PersonIcon,
  MoreVert as MoreVertIcon,
  Add as AddIcon
} from '@mui/icons-material';

interface BudgetCategory {
  name: string;
  amount: number;
  color?: string;
}

interface BudgetCardProps {
  title: string;
  subtitle?: string;
  categories: BudgetCategory[];
  totalAmount?: number;
  onAddCategory?: () => void;
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

const MainCategoryBox = styled(Box)(({ theme }) => ({
  background: '#FEF3C7', // yellow-400 equivalent
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  position: 'relative',
  marginBottom: theme.spacing(3),
}));

const CategoryItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1.5),
  background: theme.palette.grey[100],
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(1.5),
}));

const BudgetCard: React.FC<BudgetCardProps> = ({
  title,
  subtitle,
  categories,
  totalAmount,
  onAddCategory
}) => {
  const theme = useTheme();

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

        {/* Main Category */}
        <MainCategoryBox>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            mb: 1 
          }}>
            <Typography variant="caption" sx={{ 
              fontWeight: 500,
              color: theme.palette.text.primary
            }}>
              FINANCIAL
            </Typography>
            <Typography variant="caption" sx={{ 
              fontWeight: 500,
              color: theme.palette.text.primary
            }}>
              500.0
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            mb: 1 
          }}>
            <IconButton
              onClick={onAddCategory}
              sx={{
                width: 32,
                height: 32,
                bgcolor: theme.palette.grey[800],
                color: '#FFFFFF',
                '&:hover': {
                  bgcolor: theme.palette.grey[700],
                },
              }}
            >
              <AddIcon />
            </IconButton>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}>
            <Typography variant="caption" sx={{ 
              fontWeight: 500,
              color: theme.palette.text.primary
            }}>
              BUDGET
            </Typography>
            <Typography variant="caption" sx={{ 
              fontWeight: 500,
              color: theme.palette.text.primary
            }}>
              500.0
            </Typography>
          </Box>
        </MainCategoryBox>

        {/* Categories List */}
        <Box sx={{ mb: 2 }}>
          {categories.map((category, index) => (
            <CategoryItem key={index}>
              <Typography variant="body2" sx={{ 
                fontWeight: 500,
                color: theme.palette.text.primary
              }}>
                {category.name}
              </Typography>
              <Typography variant="body2" sx={{ 
                fontWeight: 500,
                color: theme.palette.text.primary
              }}>
                {category.amount.toFixed(1)}
              </Typography>
            </CategoryItem>
          ))}
        </Box>

        {/* Total */}
        {totalAmount && (
          <Box sx={{ 
            pt: 2, 
            borderTop: `1px solid ${theme.palette.divider}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography variant="body2" sx={{ 
              fontWeight: 600,
              color: theme.palette.text.primary
            }}>
              Total
            </Typography>
            <Typography variant="h6" sx={{ 
              fontWeight: 700,
              color: theme.palette.text.primary
            }}>
              ${totalAmount.toFixed(1)}
            </Typography>
          </Box>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default BudgetCard; 