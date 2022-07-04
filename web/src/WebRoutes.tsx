
import { Route, Routes } from 'react-router-dom';

import { UserList } from '~/src/components/users/UserList';

export const WebRoutes = () => {
    return (
          <Routes>
            <Route
                path="/"
                element={<UserList />}
            />
        </Routes>
    )
}
