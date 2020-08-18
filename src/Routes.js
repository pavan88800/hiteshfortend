import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import AdminDashBoard from './user/AdminDashBoard';
import UserDashBoard from './user/UserDashBoard';
// import Profile from './user/Profile';
import AdminRoutes from './auth/helper/AdminRoutes';
import PrivateRoutes from './auth/helper/PrivateRoutes';
import AddCategory from './admin/AddCategory';
import ManageCategoery from './admin/ManageCategoery';
import AddProduct from './admin/AddProduct';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import UpdateCategory from './admin/UpdateCategory';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/signin" component={Signin} />
				<PrivateRoutes path="/user/dashboard" component={UserDashBoard} />
				<AdminRoutes path="/admin/dashboard" component={AdminDashBoard} />
				<AdminRoutes path="/admin/create/category" component={AddCategory} />

				<AdminRoutes path="/admin/create/product" component={AddProduct} />
				<AdminRoutes path="/admin/products" component={ManageProducts} />
				<AdminRoutes path="/admin/product/update/:productId" component={UpdateProduct} />
				<AdminRoutes path="/admin/manage/category" component={ManageCategoery} />
				<AdminRoutes path="/admin/category/update/:categoryId" component={UpdateCategory} />
			</Switch>
			category/update
		</BrowserRouter>
	);
};

export default Routes;
