import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { TiDeleteOutline } from "react-icons/ti";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import DashBoardTitle from "../../../components/dashboardTitle/DashBoardTitle";
import { useQuery } from "@tanstack/react-query";
import { CiCirclePlus } from "react-icons/ci";
import { imageUpload } from "../../../components/utils/utils";

const OrderedProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      products: [
        { name: "", quantity: "", price: "", productStatus: "pending" },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  const handleAddProduct = () => {
    append({ name: "", quantity: "", price: "", productStatus: "pending" });
  };

  const handleRemoveProduct = (index) => {
    remove(index);
  };

  const { data: categories = [] } = useQuery({
    queryKey: ["categoryData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/category");
      return res.data;
    },
  });

  const onSubmit = async (data) => {
    try {
      const photoURL = data?.image?.[0];
      const img_url = await imageUpload(photoURL);
      const formdata = {
        ...data,
        email: user?.email,
        image: img_url?.data?.display_url,
        status: "pending",
      };
      // console.log(formdata);
      const res = await axiosPublic.post("/orderProduct", formdata);
      if (res.data.message === "Success") {
        Swal.fire({
          title: "Congratulations!",
          text: "Order Product Added Successfully.",
          confirmButtonText: "Return",
          showConfirmButton: true,
          confirmButtonColor: "#403030",
          imageUrl: "https://i.ibb.co/G0DfFjk/Character.png",
          imageWidth: 220,
          imageHeight: 200,
          imageAlt: "Custom image",
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
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="overflow-scroll 2xl:h-[80vh] lg:h-[85vh] lg:ml-10 mx-3 lg:mx-0">
      <div className="mb-2">
        <DashBoardTitle
          title={"Admin"}
          subTitle={"Add, Edit your category section in one click."}
        />
      </div>
      <div className="bg-white xl:h-full h-auto rounded-md py-5">
        <SectionTitle title="Add Products Info" />
        <div className="lg:w-5/6 mx-auto w-full p-2 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-1 grid-cols-1 lg:gap-4 gap-1 lg:mb-2 mb-1">
              {fields.map((product, index) => (
                <div key={product.id} className="flex gap-2 w-full">
                  <input
                    {...register(`products[${index}].name`, { required: true })}
                    type="text"
                    placeholder="Product Name*"
                    className="input input-bordered w-4/6 focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                  />
                  <input
                    {...register(`products[${index}].quantity`, {
                      required: true,
                    })}
                    type="number"
                    placeholder="Quantity"
                    className="input input-bordered w-1/6 focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                  />
                  <input
                    {...register(`products[${index}].price`, {
                      required: true,
                    })}
                    type="number"
                    placeholder="Price*"
                    min={1}
                    className="input input-bordered w-1/6 focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                  />
                  <button
                    type="button"
                    className="text-2xl text-red-600"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="text-4xl text-center"
                onClick={handleAddProduct}
              >
                <CiCirclePlus />
              </button>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-1 lg:mb-2 mb-1">
              <div className="form-control w-full my-1">
                <input
                  {...register("invoiceNo", { required: true })}
                  type="number"
                  placeholder="Invoice No*"
                  className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                />
              </div>
              <div className="form-control w-full my-1">
                <input
                  {...register("advancedAmount", { required: true })}
                  type="number"
                  placeholder="Advanced Amount*"
                  min={1}
                  className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                />
              </div>

              <div className="form-control w-full my-1">
                <select
                  className="select select-bordered w-full focus:outline-none bg-[#F0F2F5]"
                  {...register("category", { required: true })}
                >
                  {categories.map((category) => (
                    <option value={category.category} key={category._id}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-1 lg:mb-2 mb-1">
              <div className="form-control w-full my-1">
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Price*"
                  min={1}
                  className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                />
              </div>
              <div className="form-control w-full my-1">
                <input
                  {...register("advancedAmount", { required: true })}
                  type="number"
                  placeholder="Advanced Amount*"
                  min={1}
                  className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                />
              </div>
            </div> */}
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-1 lg:mb-2 mb-1">
              <div className="form-control w-full my-1">
                <span className="text-xs">Ordered Date*</span>
                <input
                  {...register("orderedDate", { required: true })}
                  type="date"
                  placeholder="Ordered Date (YYYY-MM-DD)"
                  className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                />
              </div>
              <div className="form-control w-full my-1">
                <span className="text-xs">Delivery Date*</span>
                <input
                  {...register("deliveryDate", { required: true })}
                  type="date"
                  placeholder="Delivery Date*"
                  className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                />
              </div>
            </div>
            <div className="form-control w-full my-1 relative border-2 border-dotted border-gray-600 rounded-lg">
              <div className="input_field text-center">
                <label className="label flex flex-col justify-center items-center ">
                  <input
                    {...register("image", { required: false })}
                    type="file"
                    className="text-sm cursor-pointer w-20 hidden"
                  />
                  <div className=" cursor-pointer px-3">
                    <svg
                      className="text-[#403030] w-10 mx-auto mb-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <div className="title"> Drag or Upload File</div>
                </label>
              </div>
            </div>
            <button className="focus:outline-none  bg-[#403030] hover:bg-[#332626] text-white font-semibold py-2.5 rounded-md w-full mt-5 ">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderedProduct;
