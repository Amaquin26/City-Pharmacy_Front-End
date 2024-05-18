import { Link, Button } from "@nextui-org/react";

const NotFoundProduct = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-lg m-auto mt-8 border border-red-500 p-4 rounded-lg">
          <p className="text-lg">Sorry, we can't find this product.</p>
          <div className="flex justify-end mt-4">
            <Button
              href="/products"
              as={Link}
              color="primary"
              variant="shadow"
            >
              Back to Products Page
            </Button>
          </div>
      </div>
    </div>
    
  )
}

export default NotFoundProduct