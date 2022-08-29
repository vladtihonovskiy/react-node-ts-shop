import React, { ReactNode, FC } from "react";
// import { useUserAuthState } from './hooks/useUserAuthState/useUserAuthState';
import "./App.css";
// import { useReduxChangeListener } from './hooks/useReduxChangeListener/useReduxChangeListener';
// import LoaderSpinner from './components/LoaderSpinner/LoaderSpinner';
// import { useFBChangeListener } from './hooks/useFBChangeListener/useFBChangeListener';

interface IAppProps {
  /**
   * React children
   */
  children: ReactNode;
}

const App: FC<IAppProps> = ({ children }: IAppProps) => <>{children}</>;

export default App;
