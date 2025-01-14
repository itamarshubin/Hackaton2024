import { FC } from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

export const NiggaCodeBlock: FC<{ codeContent: string }> = ({ codeContent }) => {
  return (
    <div style={{ width: '100%' }}>
      <CopyBlock text={codeContent} language={'plaintext'} showLineNumbers={false} theme={dracula} />
    </div>
  );
};
