import { Link, Button } from "@nextui-org/react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-lg m-auto mt-8 border border-red-500 p-4 rounded-lg">
          <p className="text-lg">Sorry, we did not found the page you requested.</p>
          <div className="flex justify-end mt-4">
            <Button
              href="/"
              as={Link}
              color="primary"
              variant="shadow"
            >
              Back to Home
            </Button>
          </div>
      </div>
    </div>
    
  )
}

export default NotFoundPage