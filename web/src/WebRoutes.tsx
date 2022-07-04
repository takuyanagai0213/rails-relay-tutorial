
import { Route, Routes } from 'react-router-dom';

import { UserList } from '~/src/components/users/UserList';
import { UserCreate } from '~/src/components/users/UserCreate';
import { UserUpdate } from '~/src/components/users/UserUpdate';
import { UserDelete } from '~/src/components/users/UserDelete';

export const WebRoutes = () => {
    return (
          <Routes>
            <Route
                path="/users"
                element={<UserList />}
            />
            <Route
                path="/user/new"
                element={<UserCreate />}
            />
            <Route
                path="/user/update/:userId"
                element={<UserUpdate />}
            />
            <Route
                path="/user/delete/:userId"
                element={<UserDelete />}
            />
        </Routes>
    )
}
