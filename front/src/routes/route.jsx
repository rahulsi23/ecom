import Cart from "../pages/Cart/Cart";
import Home from "../pages/home/Index";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/Product_details/Product_details";
import Signup from "../pages/SignUp/Signup";
import Wishlist from "../pages/Wishlist/Wishlist";
import Dashboard from "../pages/admin_pages/Home/Dashboard";
import Category from "../pages/admin_pages/Home/Component/Category/Category";
import AddCategory from "../pages/admin_pages/Home/Component/Category/AddCategory";
import EditCategory from "../pages/admin_pages/Home/Component/Category/Editcategory";
import AllProducts from "../pages/Products/AllProducts";
import Sidebar from "../pages/Products/components/Sidebar";
import Product from "../pages/admin_pages/Home/Component/Products/Product";
import AddProduct from "../pages/admin_pages/Home/Component/Products/Addproduct";
import EditProduct from "../pages/admin_pages/Home/Component/Products/EditProduct";
import Details_Product from "../pages/Products/Details_Product";

export const routes = {
  home: {
    path: "/",
    component: Home,
  },

  sidebar: {
    path: "/sidebar",
    component: Sidebar,
  },
  productDetails: {
    path: "/productdetails",
    component: ProductDetails,
  },
  detailsproduct: {
    path: "/detailsproduct/:productId",
    component: Details_Product,
  },
  Cart: {
    path: "/cart",
    component: Cart,
  },
  Wishlist: {
    path: "/wishlist",
    component: Wishlist,
  },
  Login: {
    path: "/login",
    component: Login,
  },
  Signup: {
    path: "/signup",
    component: Signup,
  },
  Products:{
    path:"/AllProducts",
    component:AllProducts
  }
};

export const admin_routes = {
  home: {
    path: "/admin",
    component: Dashboard,
  },
  category: {
    path: "/admin/category",
    component: Category,
  },
  add_category: {
    path: "/admin/add-category",
    component: AddCategory,
  },
  edit_category: {
    path: "/admin/edit-category/:id",
    component: EditCategory,
  },
  products:{
    path:"/admin/product",
    component:Product,
  },
    add_product: {
      path: "/admin/add-product",
      component: AddProduct,
    },
    edit_product: {
      path: "/admin/edit-product/:id",
      component: EditProduct,
    },

    product_list: {
      path: "/admin/product-list",
      component: Product,
    },
};
