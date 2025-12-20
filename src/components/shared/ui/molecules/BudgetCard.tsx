import React from 'react';
import { 
  Box, 
  CardContent, 
  IconButton, 
  Avatar,
  Divider
} from '@mui/material';
import { 
  MoreVert as MoreVertIcon,
  Add as AddIcon,
  AccountBalance as AccountBalanceIcon
} from '@mui/icons-material';
import { useColors } from '../../../../hooks';
import { H3, H4, BodyText, SmallText } from '../atoms';
import Card from './Card';

interface BudgetCategory {
  name: string;
  amount: number;
  color?: string;
  icon?: React.ReactNode;
}

interface BudgetCardProps {
  title: string;
  subtitle?: string;
  categories: BudgetCategory[];
  totalAmount?: number;
  onAddCategory?: () => void;
  variant?: 'default' | 'elevated' | 'outlined';
}

const BudgetCard: React.FC<BudgetCardProps> = ({
  title,
  subtitle = '',
  categories,
  totalAmount = 0,
  onAddCategory = () => {},
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
            border: `1px solid ${colors.contrast.divider}`
          }
        };
      case 'elevated':
        return {
          card: {
            background: colors.contrast.surface,
            border: 'none',
            color: colors.contrast.text.primary
          },
          surface: {
            background: colors.contrast.background,
            border: `1px solid ${colors.contrast.divider}`
          }
        };
      default: // default
        return {
          card: {
            background: colors.contrast.surface,
            border: `1px solid ${colors.contrast.divider}`,
            color: colors.contrast.text.primary
          },
          surface: {
            background: colors.contrast.background,
            border: `1px solid ${colors.contrast.divider}`
          }
        };
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
              <AccountBalanceIcon sx={{ 
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

        {/* Main Budget Section */}
        <Box sx={{ 
          p: 3,
          borderRadius: 3,
          mb: 3,
          ...variantStyles.surface,
          backdropFilter: 'blur(10px)'
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            mb: 2 
          }}>
            <SmallText sx={{ 
              fontWeight: 600,
              color: colors.helpers.text.primary,
              textTransform: 'uppercase',
              letterSpacing: 0.5
            }}>
              Presupuesto Total
            </SmallText>
            <H3 sx={{ 
              color: colors.helpers.text.primary,
              fontWeight: 700
            }}>
              ${totalAmount?.toFixed(1) || '0.0'}
            </H3>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            mb: 2 
          }}>
            <IconButton
              onClick={onAddCategory}
              sx={{
                width: 40,
                height: 40,
                background: colors.palette.accent,
                color: colors.palette.white,
                '&:hover': {
                  background: '#E54A00',
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              <AddIcon />
            </IconButton>
          </Box>
          
          <SmallText sx={{ 
            textAlign: 'center',
            color: colors.helpers.text.secondary,
            textTransform: 'uppercase',
            letterSpacing: 0.5
          }}>
            Agregar Categoría
          </SmallText>
        </Box>

        {/* Categories List */}
        <Box sx={{ mb: 3 }}>
          {categories.map((category, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                mb: 1.5,
                borderRadius: 2,
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {category.icon && (
                  <Box sx={{ 
                    width: 32,
                    height: 32,
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: colors.palette.accent + '20',
                    color: colors.palette.accent
                  }}>
                    {category.icon}
                  </Box>
                )}
                <BodyText sx={{ 
                  fontWeight: 600,
                  color: colors.helpers.text.primary
                }}>
                  {category.name}
                </BodyText>
              </Box>
              <H4 sx={{ 
                fontWeight: 700,
                color: colors.helpers.text.primary
              }}>
                ${category.amount.toFixed(1)}
              </H4>
            </Box>
          ))}
        </Box>

        {/* Total Summary */}
        {totalAmount && (
          <>
            <Divider sx={{ 
              mb: 3,
              borderColor: colors.helpers.border.secondary + '40'
            }} />
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2,
              borderRadius: 2,
              background: variantStyles.surface.background,
              border: variantStyles.surface.border,
              backdropFilter: 'blur(10px)'
            }}>
              <H4 sx={{ 
                fontWeight: 600,
                color: colors.helpers.text.primary
              }}>
                Total Disponible
              </H4>
              <H3 sx={{ 
                fontWeight: 700,
                color: colors.palette.accent
              }}>
                ${totalAmount.toFixed(1)}
              </H3>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default BudgetCard; 