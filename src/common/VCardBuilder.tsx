import type { FC } from 'react';

export const VCardBuilder: FC = () => (
  <iframe
    src="/vcard-builder.html?embedded=1"
    title="vCard"
    style={{
      width: '100%',
      height: '100%',
      minHeight: 'calc(100dvh - var(--header-height))',
      border: 'none',
      display: 'block',
    }}
  />
);
