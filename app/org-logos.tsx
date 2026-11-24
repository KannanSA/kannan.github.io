export type OrgLogoName =
  | 'nhs'
  | 'kcl'
  | 'kannan'
  | 'oxford'
  | 'snap'
  | 'ucl'
  | 'rgs'
  | 'meta'
  | 'stanford'
  | 'dlai'
  | 'harvard';

export function OrgMarks({ logo }: { logo?: OrgLogoName | OrgLogoName[] }) {
  if (!logo) return null;
  const marks = Array.isArray(logo) ? logo : [logo];

  return (
    <span className={marks.length > 1 ? 'org-logo org-logo--pair' : 'org-logo'} aria-hidden="true">
      {marks.map((name) => (
        <OrgLogo key={name} name={name} />
      ))}
    </span>
  );
}

function OrgLogo({ name }: { name: OrgLogoName }) {
  switch (name) {
    case 'nhs':
      return (
        <svg viewBox="0 0 48 48" role="img">
          <rect width="48" height="48" rx="12" fill="#005EB8" />
          <text
            x="24"
            y="30"
            textAnchor="middle"
            fill="#fff"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="15"
            fontWeight="700"
            letterSpacing="-0.4"
          >
            nhs
          </text>
        </svg>
      );
    case 'kcl':
      return (
        <svg viewBox="0 0 48 48" role="img">
          <rect width="48" height="48" rx="12" fill="#E1251B" />
          <circle cx="16" cy="14" r="2.2" fill="#FFD56A" />
          <circle cx="24" cy="11" r="2.2" fill="#FFD56A" />
          <circle cx="32" cy="14" r="2.2" fill="#FFD56A" />
          <path fill="#fff" d="M13 32h22v3.2H13zM15 18l4.2 6.2L24 15l4.8 9.2L33 18v12H15V18z" />
        </svg>
      );
    case 'kannan':
      return (
        <svg viewBox="0 0 48 48" role="img">
          <defs>
            <linearGradient id="logo-kannan" x1="8" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#54BDFF" />
              <stop offset="1" stopColor="#7A5CFF" />
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="12" fill="url(#logo-kannan)" />
          <text
            x="24"
            y="30"
            textAnchor="middle"
            fill="#fff"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="15"
            fontWeight="700"
          >
            SA
          </text>
        </svg>
      );
    case 'oxford':
      return (
        <svg viewBox="0 0 48 48" role="img">
          <rect width="48" height="48" rx="12" fill="#002147" />
          <path fill="#F4E6C3" d="M11 17h12.2v15H11z" />
          <path fill="#E7D3A1" d="M24.8 17H37v15H24.8z" />
          <path fill="#C4A35A" d="M23.2 15.5h1.6v18h-1.6z" />
        </svg>
      );
    case 'snap':
      return (
        <svg viewBox="0 0 48 48" role="img">
          <rect width="48" height="48" rx="12" fill="#FFFC00" />
          <path
            fill="#111"
            d="M24 12c-5 0-8.2 3.6-8.2 8.4v6.2c0 .7-.5 1.1-1.1 1.4-.7.3-1.5.8-1.5 1.6 0 .5.4.9 1 .9.8 0 1.5.4 2.2 1.1.8.8 1.8 1.4 3.4 1.4.7 0 1.2.5 1.6 1 .4.5 1 1 2.6 1s2.2-.5 2.6-1c.4-.5.9-1 1.6-1 1.6 0 2.6-.6 3.4-1.4.7-.7 1.4-1.1 2.2-1.1.6 0 1-.4 1-.9 0-.8-.8-1.3-1.5-1.6-.6-.3-1.1-.7-1.1-1.4v-6.2C32.2 15.6 29 12 24 12z"
          />
          <circle cx="20.6" cy="21" r="1.35" fill="#FFFC00" />
          <circle cx="27.4" cy="21" r="1.35" fill="#FFFC00" />
        </svg>
      );
    case 'ucl':
      return (
        <svg viewBox="0 0 48 48" role="img">
          <rect width="48" height="48" rx="12" fill="#500778" />
          <text
            x="24"
            y="30"
            textAnchor="middle"
            fill="#fff"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="14"
            fontWeight="700"
            letterSpacing="-0.4"
          >
            UCL
          </text>
        </svg>
      );
    case 'rgs':
      return (
        <svg viewBox="0 0 48 48" role="img">
          <rect width="48" height="48" rx="12" fill="#14284B" />
          <path fill="#E0B15A" d="M8 33h32v4H8z" />
          <text
            x="24"
            y="26"
            textAnchor="middle"
            fill="#E0B15A"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="13"
            fontWeight="700"
            letterSpacing="0.4"
          >
            RGS
          </text>
        </svg>
      );
    case 'meta':
      return (
        <svg viewBox="0 0 48 48" role="img">
          <defs>
            <linearGradient id="logo-meta" x1="6" y1="40" x2="42" y2="8" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0064E0" />
              <stop offset="0.55" stopColor="#0082FB" />
              <stop offset="1" stopColor="#00D0FF" />
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="12" fill="url(#logo-meta)" />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M24 18.2c-1.7-2.2-3.7-3.7-6.2-3.7-4.2 0-7.3 3.4-7.3 8.1s3.1 8.1 7.3 8.1c2.5 0 4.5-1.5 6.2-3.7 1.7 2.2 3.7 3.7 6.2 3.7 4.2 0 7.3-3.4 7.3-8.1s-3.1-8.1-7.3-8.1c-2.5 0-4.5 1.5-6.2 3.7zm-6.2 9.2c-2.3 0-3.8-1.8-3.8-4.8s1.5-4.8 3.8-4.8c1.7 0 3 1.2 4.2 3.1-1.3 1.7-2.1 3.2-2.1 4.1 0 .5.1 1.1.3 1.7-.9.5-1.6.7-2.4.7zm12.4 0c-.8 0-1.5-.2-2.4-.7.2-.6.3-1.2.3-1.7 0-.9-.8-2.4-2.1-4.1 1.2-1.9 2.5-3.1 4.2-3.1 2.3 0 3.8 1.8 3.8 4.8s-1.5 4.8-3.8 4.8z"
          />
        </svg>
      );
    case 'stanford':
      return (
        <svg viewBox="0 0 48 48" role="img">
          <rect width="48" height="48" rx="12" fill="#8C1515" />
          <text
            x="24"
            y="33"
            textAnchor="middle"
            fill="#fff"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="26"
            fontWeight="700"
          >
            S
          </text>
        </svg>
      );
    case 'dlai':
      return (
        <svg viewBox="0 0 48 48" role="img">
          <rect width="48" height="48" rx="12" fill="#101828" />
          <circle cx="24" cy="24" r="9" fill="none" stroke="#3DDC97" strokeWidth="2.4" />
          <circle cx="24" cy="15" r="2.6" fill="#4C6FFF" />
          <circle cx="32" cy="28" r="2.6" fill="#F5C542" />
          <circle cx="16" cy="28" r="2.6" fill="#FF5C7A" />
        </svg>
      );
    case 'harvard':
      return (
        <svg viewBox="0 0 48 48" role="img">
          <rect width="48" height="48" rx="12" fill="#A51C30" />
          <path fill="#fff" d="M15 11h18l2.4 3.2v14.2c0 5.2-5.2 8.6-11.4 10.4-6.2-1.8-11.4-5.2-11.4-10.4V14.2L15 11z" />
          <path fill="#A51C30" d="M18 17.2h12v2.1H18zm0 4.2h12v2.1H18zm0 4.2h12v2.1H18z" />
        </svg>
      );
  }
}
