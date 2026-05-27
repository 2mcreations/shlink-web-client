import type { FC } from 'react';

const VCARD_VERSION = '2.1.2';

export const VCardBuilder: FC = () => (
  <iframe
    src={`/vcard-builder.html?v=${VCARD_VERSION}&embedded=1`}
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
