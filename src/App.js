
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import MyProfile from './pages/MyProfile'
import Layout from './components/Layout'
import ProductContainer from './components/Product/ProductContainer'
import Purchase from './pages/Purchase'
import DashBoard from './pages/DashBoard'
import Dashboard from './components/DashBoard/Dashboard';
import ProductList from './components/DashBoard/Product/ProductList';
import AddProduct from './components/DashBoard/Product/AddProduct';
import ProductUpdate from './components/DashBoard/Product/ProductUpdate';
import ProductDetails from './components/DashBoard/Product/ProductDetails';
import AddCategory from './components/DashBoard/Category/AddCategory';
import CategoryList from './components/DashBoard/Category/CategoryList';
import OrderList from './components/DashBoard/Order/OrderList';
import UserList from './components/DashBoard/User/UserList';
import Login from './pages/Login'
import Signup from './pages/Signup'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ProfileUpdate from './pages/ProfileUpdate';



function App() {
  return (
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/myProfile" element={<MyProfile />} />
            <Route path="/profile/update" element={<ProfileUpdate />} />
            <Route path="/purchase/:id" element={<Purchase />} />
          </Route>
          <Route path="/products" element={<Products />} >
            <Route path="/products/" element={<ProductContainer />} />
            <Route path="/products/:feature" element={<ProductContainer />} />
            <Route path="/products/:feature/:category" element={<ProductContainer />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<DashBoard />} >
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/productList' element={<ProductList />} />
            <Route path='/dashboard/productAdd' element={<AddProduct />} />
            <Route path='/dashboard/productUpdate/:id' element={<ProductUpdate />} />
            <Route path='/dashboard/productDetails/:id' element={<ProductDetails />} />
            <Route path='/dashboard/newCategory' element={<AddCategory />} />
            <Route path='/dashboard/categoryList' element={<CategoryList />} />
            <Route path='/dashboard/orderList' element={<OrderList />} />
            <Route path='/dashboard/user' element={<UserList />} />
            {/* <Route path='/dashboard/' element={<ProductUpdate />} /> */}
          </Route>

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
