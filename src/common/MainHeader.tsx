import { faAddressCard as vcardIcon, faCogs as cogsIcon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavBar } from '@shlinkio/shlink-frontend-kit';
import type { FC } from 'react';
import { Link, useLocation } from 'react-router';
import { ServersDropdown } from '../servers/ServersDropdown';
import { ShlinkLogo } from './img/ShlinkLogo';

const SMARTVCARD_PATH = 'https://vcard.obiettivoqr.it';

export const MainHeader: FC = () => {
  const { pathname } = useLocation();

  const settingsPath = '/settings';

  return (
    <NavBar
      className="[&]:fixed top-0 z-900"
      brand={(
        <Link to="/" className="[&]:text-white no-underline flex items-center gap-2">
          <ShlinkLogo className="w-7" color="white" /> <small className="font-normal">Shlink</small>
        </Link>
      )}
    >
      <NavBar.MenuItem
        to={settingsPath}
        active={pathname.startsWith(settingsPath)}
        className="flex items-center gap-1.5"
      >
        <FontAwesomeIcon icon={cogsIcon} /> Settings
      </NavBar.MenuItem>
      <NavBar.MenuItem
        to={SMARTVCARD_PATH}
        active={false}
        className="flex items-center gap-1.5"
        reloadDocument
      >
        <FontAwesomeIcon icon={vcardIcon} /> SmartVCard
      </NavBar.MenuItem>
      <ServersDropdown />
    </NavBar>
  );
};
