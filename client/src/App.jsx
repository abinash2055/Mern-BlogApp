import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import {
  RouteIndex,
  RouteProfile,
  RouteSignIn,
  RouteSignUp,
  RouteAddCategory,
  RouteEditCategory,
  RouteCategoryDetails,
  RouteBlogAdd,
  RouteBlog,
  RouteBlogEdit,
  RouteBlogDetails,
} from './helpers/RouteName';
import Index from './pages/Index';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import AddCategory from './pages/category/AddCategory';
import EditCategory from './pages/category/EditCategory';
import CategoryDetails from './pages/category/CategoryDetails';
import AddBlog from './pages/blog/AddBlog';
import BlogDetails from './pages/blog/BlogDetails';
import EditBlog from './pages/blog/EditBlog';
import SingleBlogDetails from './pages/SingleBlogDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />} />
          <Route path={RouteProfile} element={<Profile />} />

          {/* Category */}
          <Route path={RouteAddCategory} element={<AddCategory />} />
          <Route path={RouteCategoryDetails} element={<CategoryDetails />} />
          <Route path={RouteEditCategory()} element={<EditCategory />} />

          {/* Blog */}
          <Route path={RouteBlogAdd} element={<AddBlog />} />
          <Route path={RouteBlog} element={<BlogDetails />} />
          <Route path={RouteBlogEdit()} element={<EditBlog />} />
          <Route path={RouteBlogDetails()} element={<SingleBlogDetails />} />
        </Route>

        <Route path={RouteSignIn} element={<SignIn />} />
        <Route path={RouteSignUp} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
