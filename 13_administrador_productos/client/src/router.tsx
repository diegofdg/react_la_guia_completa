import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Products, { loader as productsLoader } from "./views/Products"
import NewProduct, { action as newProductAction } from "./views/NewProduct"
import EditProduct, { loader as editProductLoader, action as editProductAction } from "./views/EditProduct"
import { action as deleteProductAction} from "./components/ProductDetails"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader
      },
      {
        path: "productos/nuevo",
        element: <NewProduct />,
        action: newProductAction
      },
      {
        path: "productos/:id/editar", // ROA Pattern - Resource-oriented design
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction
      }, 
      {
          path:'productos/:id/eliminar',
          action: deleteProductAction
      }
    ],
  }
])