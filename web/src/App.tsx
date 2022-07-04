import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { FC, Suspense } from "react";
import { WebRoutes } from "~/src/WebRoutes";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { useEnvironment } from "~/src/components/users/useEnvironment";


export const App: FC = () => {
  const { environment } = useEnvironment();
  return (
    <BrowserRouter>
      <Suspense fallback={'Loading...'}>
        <RelayEnvironmentProvider environment={environment} >
          <WebRoutes />
        </RelayEnvironmentProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
