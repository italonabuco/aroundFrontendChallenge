import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import ViewProducts from './products/ViewProducts'
import RootLayout from '../components/layouts/RootLayout'
import NotFoundPage from './NotFoundPage'
import ProductDetails from './products/ProductDetails'
import ViewReviews from './reviews/ViewReviews'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} path="/">
      <Route errorElement={<NotFoundPage />}>
        <Route index element={<Navigate to="products" />} />
        <Route path="products">
          <Route index element={<ViewProducts />} />
          <Route element={<ProductDetails />} path=":productName" />
        </Route>
        <Route element={<ViewReviews />} path="reviews" />
        <Route element={<NotFoundPage />} path="*" />
      </Route>
    </Route>
  )
)
