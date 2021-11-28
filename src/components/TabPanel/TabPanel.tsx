import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  index: number;
  active: boolean;
  className?: string;
}

const TabPanel: FC<Props> = ({ children, index, active, className }) => {
  return active ? (
    <div
      role='tabpanel'
      hidden={!active}
      aria-labelleby={`tab-${index}`}
      className={className}
    >
      {children}
    </div>
  ) : null;
};
export default TabPanel;
