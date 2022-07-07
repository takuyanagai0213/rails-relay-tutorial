
import { Route, Routes } from 'react-router-dom';

import { UserCreate } from '~/src/components/users/UserCreate';
import { UserUpdate } from '~/src/components/users/UserUpdate';
import { UserDelete } from '~/src/components/users/UserDelete';
import { PostList } from '~/src/components/posts/PostList';
import { CommentCreate } from '~/src/components/comments/CommentCreate';
import { CommentList } from '~/src/components/comments/CommentList';
import { UserListContainer } from './pages';
import { PostCreate } from './components/posts';

export const WebRoutes = () => {
    return (
          <Routes>
            <Route
                path="/users"
                element={<UserListContainer />}
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
            <Route
                path="/posts"
                element={<PostList />}
            />
            <Route
                path="/post/new"
                element={<PostCreate />}
            />
            <Route
                path="/comment/new"
                element={<CommentCreate />}
            />
            <Route
                path="/comments"
                element={<CommentList />}
            />
        </Routes>
    )
}
