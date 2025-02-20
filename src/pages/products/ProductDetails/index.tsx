import { useParams } from 'react-router-dom'
import PageLayout from '../../../components/layouts/PageLayout/PageLayout'
import { useItem } from '../../../graphql/hooks'
import { useNewProductReviewModal } from '../../../components/modals/NewProductReviewModal'
import Button from '../../../components/ui/Button'

// TODO: handle empty product's reviews
// TODO: handle fetch error

const ProductDetails = () => {
  const { productName = '' } = useParams()
  const { item, loading } = useItem(productName)
  const { open, render } = useNewProductReviewModal(productName)

  return (
    <PageLayout
      className="border border-gray-300 bg-white px-4 py-8 rounded"
      loading={loading}
      loadingMessage="Loading product details"
      notFoundMessage={!item && !loading ? 'Product not found' : ''}
      title="Product details"
    >
      {render}
      <div className="grid grid-cols-3">
        <img
          alt={item?.name}
          className="object-contain w-52 h-52 mx-auto col-span-full md:col-span-1"
          src={item?.img}
        />
        <div className="col-span-full md:col-span-2 mt-7 md:mt-0 pl-0 md:pl-4">
          <p className="text-3xl font-semibold text-gray-700">{item?.name}</p>
          <p className="text-2xl text-primary-600 font-semibold mt-3 mb-4">
            $ {item?.price}
          </p>
          <p className="font-semibold text-lg mb-1">About this item</p>
          <p>{item?.description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6 mb-3">
        <p className="font-semibold text-lg" role="presentation">
          Reviews ({item?.reviews?.length || 0})
        </p>
        <Button color="outline-gray" onClick={open}>
          + Add review
        </Button>
      </div>

      <ul className="divide-y divide-slate-200 border">
        {item?.reviews?.map(
          review =>
            review && (
              <li key={review.id} className="p-4 odd:bg-white even:bg-gray-50">
                <p>{review.text}</p>
                <p className="text-gray-500 text-sm">ID: {review.id}</p>
              </li>
            )
        )}
      </ul>
    </PageLayout>
  )
}

export default ProductDetails
