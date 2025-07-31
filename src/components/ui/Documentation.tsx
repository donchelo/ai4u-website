import React, { ReactNode } from 'react';
import { H3, H4, BodyText, SmallText, CodeText } from './Typography';
import { Button } from './Button';

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

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'tsx', className = '' }) => {
  return (
    <div className={`bg-gray-900 rounded-lg p-4 overflow-x-auto ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <SmallText className="text-gray-400 uppercase tracking-wide">{language}</SmallText>
        <Button
          variant="outline"
          size="small"
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs"
        >
          Copiar
        </Button>
      </div>
      <pre className="text-sm text-gray-100 font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const PropsTable: React.FC<{ props: DocumentationProps['props'] }> = ({ props }) => {
  if (!props || props.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-2 px-4 font-semibold text-gray-700">Propiedad</th>
            <th className="text-left py-2 px-4 font-semibold text-gray-700">Tipo</th>
            <th className="text-left py-2 px-4 font-semibold text-gray-700">Requerido</th>
            <th className="text-left py-2 px-4 font-semibold text-gray-700">Descripción</th>
            <th className="text-left py-2 px-4 font-semibold text-gray-700">Default</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr key={index} className="border-b border-gray-100">
              <td className="py-2 px-4">
                <CodeText>{prop.name}</CodeText>
              </td>
              <td className="py-2 px-4">
                <CodeText>{prop.type}</CodeText>
              </td>
              <td className="py-2 px-4">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  prop.required 
                    ? 'bg-red-100 text-red-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {prop.required ? 'Sí' : 'No'}
                </span>
              </td>
              <td className="py-2 px-4 text-sm text-gray-600">{prop.description}</td>
              <td className="py-2 px-4">
                {prop.defaultValue ? (
                  <CodeText>{prop.defaultValue}</CodeText>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <H3 className="mb-2">{title}</H3>
        <BodyText className="text-gray-600">{description}</BodyText>
      </div>

      {/* Preview */}
      <div className="relative p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
        <div className="mb-4">
          <H4 className="text-gray-700">Preview</H4>
        </div>
        <div className="flex items-center justify-center min-h-[200px]">
          {children}
        </div>
      </div>

      {/* Code Example */}
      {codeExample && (
        <div>
          <H4 className="mb-4">Código de Ejemplo</H4>
          <CodeBlock code={codeExample} />
        </div>
      )}

      {/* Props Table */}
      {props && props.length > 0 && (
        <div>
          <H4 className="mb-4">Propiedades</H4>
          <PropsTable props={props} />
        </div>
      )}
    </div>
  );
};

export default Documentation; 