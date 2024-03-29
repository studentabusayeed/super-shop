import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Pagination from "../pagination/pagination";

const OrderedProductDetails = ({
  products,
  filteredUser,
  currentPage,
  setCurrentPage,
  totalPages,
  refetch,
}) => {
  console.log(refetch);
  const axiosPublic = useAxiosPublic();

  const handleComplete = async (product) => {
    await axiosPublic.patch(`/orderProduct/${product?._id}`).then((res) => {
      if (res.data.message === "success") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Order added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Product Code has already been taken",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      refetch();
    });
  };
  const {
    _id,
    productCode,
    name,
    price,
    quantity,
    advancedAmount,
    deliveryDate,
    image,
    status,
  } = products || {};
  console.log();
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black">
              <th>Product Code</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              {products?.items?.some((dd) => dd.status === "pending") && (
                <>
                  <th>Advanced</th>
                  <th>Due</th>
                </>
              )}

              <th>Delivery Date</th>
              <th>Image</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products?.items?.map((product, ind) => (
              <tr key={product?._id} className="">
                <td>{product?.productCode}</td>
                <td>{product?.name}</td>
                <td className="whitespace-nowrap">BDT {product?.price}</td>
                <td>{product?.quantity}</td>
                {product.status === "pending" && (
                  <>
                    <td>{product?.advancedAmount}</td>
                    <td>
                      {product?.quantity * product?.price -
                        product?.advancedAmount}
                    </td>
                  </>
                )}

                <td>{new Date(product?.deliveryDate).toLocaleDateString()}</td>
                <td>
                  <img className="w-10 h-10" src={product?.image} alt="" />
                </td>
                <th>
                  {product?.status === "pending" ? (
                    <h1 className="text-xs font-bold">Pending</h1>
                  ) : (
                    <h1 className="text-xs font-bold">Paid</h1>
                  )}
                  {product?.status === "pending" ? (
                    filteredUser?.role === "employee" ? (
                      <button
                        onClick={() => handleComplete(product)}
                        className="btn btn-xs btn-accent"
                      >
                        Complete
                      </button>
                    ) : (
                      <button disabled className="btn btn-xs btn-accent">
                        Complete
                      </button>
                    )
                  ) : (
                    <button className="btn btn-xs hidden btn-accent">
                      Complete
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default OrderedProductDetails;
