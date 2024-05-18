import { Link, Button } from "@nextui-org/react";

const NotFoundMedicine = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-lg m-auto mt-8 border border-red-500 p-4 rounded-lg">
          <p className="text-lg">Sorry, we can't find this medicine.</p>
          <div className="flex justify-end mt-4">
            <Button
              href="/medicines"
              as={Link}
              color="primary"
              variant="shadow"
            >
              Back to Medicines Page
            </Button>
          </div>
      </div>
    </div>
    
  )
}

export default NotFoundMedicine