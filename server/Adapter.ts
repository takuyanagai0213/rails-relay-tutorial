import { FC } from "React";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { useEnvironment } from "~/src/components/users/useEnvironment";

type Props = {};

export const Adapter: FC<Props> = ({ children }) => {
  const { environment } = useEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment} >
      {children}
    </RelayEnvironmentProvider>
  );
}
