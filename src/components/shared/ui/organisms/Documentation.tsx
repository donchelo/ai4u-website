import React, { ReactNode } from 'react';
import { 
  Box, 
  Paper, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  useTheme,
  styled
} from '@mui/material';
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';
import { H3, H4, BodyText, SmallText, CodeText } from '../atoms';
import { Button } from '../atoms';
import { useColors } from '../../../../hooks';

interface DocumentationProps {
  title: string;
  description: string;
  children: ReactNode;
  codeExample?: string;
  props?: Array<{
    name: string;
    type: string;
    required: boolean;
    description: string;
    defaultValue?: string;
  }>;
  className?: string;
}

interface CodeBlockProps {
  code: string;
  language?: 'tsx' | 'ts' | 'jsx' | 'js' | 'css' | 'html';
  className?: string;
}

// Styled components
const CodeContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  color: '#f5f5f5',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  overflow: 'auto',
  '&:hover': {
    backgroundColor: '#3a3a3a',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
  },
}));

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'tsx', className = '' }) => {
  const theme = useTheme();
  const colors = useColors();

  return (
    <CodeContainer className={className}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        mb: 2 
      }}>
        <SmallText sx={{ 
          color: colors.helpers.text.mediumContrast,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {language}
        </SmallText>
        <IconButton
          size="small"
          onClick={() => navigator.clipboard.writeText(code)}
          sx={{ color: colors.helpers.text.mediumContrast }}
        >
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box component="pre" sx={{ 
        fontSize: '0.875rem',
        color: colors.helpers.text.highContrast,
        fontFamily: 'monospace',
        margin: 0,
        whiteSpace: 'pre-wrap'
      }}>
        <Box component="code">{code}</Box>
      </Box>
    </CodeContainer>
  );
};

const PropsTable: React.FC<{ props: DocumentationProps['props'] }> = ({ props }) => {
  const theme = useTheme();
  
  if (!props || props.length === 0) return null;

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: theme.palette.grey[50] }}>
            <TableCell sx={{ fontWeight: 600 }}>Propiedad</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Tipo</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Requerido</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Descripción</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Default</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.map((prop, index) => (
            <TableRow key={index} sx={{ 
              '&:hover': { backgroundColor: theme.palette.action.hover }
            }}>
              <TableCell>
                <CodeText>{prop.name}</CodeText>
              </TableCell>
              <TableCell>
                <CodeText>{prop.type}</CodeText>
              </TableCell>
              <TableCell>
                <Chip
                  label={prop.required ? 'Sí' : 'No'}
                  size="small"
                  color={prop.required ? 'error' : 'success'}
                  variant="outlined"
                />
              </TableCell>
              <TableCell sx={{ 
                fontSize: '0.875rem',
                color: theme.palette.text.secondary
              }}>
                {prop.description}
              </TableCell>
              <TableCell>
                {prop.defaultValue ? (
                  <CodeText>{prop.defaultValue}</CodeText>
                ) : (
                  <Box sx={{ color: theme.palette.text.disabled }}>-</Box>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const Documentation: React.FC<DocumentationProps> = ({
  title,
  description,
  children,
  codeExample,
  props,
  className = ''
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }} className={className}>
      {/* Header */}
      <Box sx={{ 
        borderBottom: `1px solid ${theme.palette.divider}`,
        pb: 3
      }}>
        <H3 sx={{ mb: 1 }}>{title}</H3>
        <BodyText sx={{ color: theme.palette.text.secondary }}>
          {description}
        </BodyText>
      </Box>

      {/* Preview */}
      <Paper sx={{ 
        position: 'relative',
        p: 4,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 4,
        overflow: 'hidden'
      }}>
        <Box sx={{ mb: 2 }}>
          <H4 sx={{ color: theme.palette.text.primary }}>Preview</H4>
        </Box>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 200,
          position: 'relative',
          zIndex: 1
        }}>
          {children}
        </Box>
      </Paper>

      {/* Code Example */}
      {codeExample && (
        <Box>
          <H4 sx={{ mb: 2 }}>Código de Ejemplo</H4>
          <CodeBlock code={codeExample} />
        </Box>
      )}

      {/* Props Table */}
      {props && props.length > 0 && (
        <Box>
          <H4 sx={{ mb: 2 }}>Propiedades</H4>
          <PropsTable props={props} />
        </Box>
      )}
    </Box>
  );
};

export default Documentation; 