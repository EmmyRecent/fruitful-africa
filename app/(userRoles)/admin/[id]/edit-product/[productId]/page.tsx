"use client";

import { useData } from "@/app/context/DataContext";
import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  addProductToProductCollection,
  updateProductCollection,
} from "@/firebase/services/firestore";
import { handleAddProductValidation } from "@/lib/actions";
import { uploadManyToFirebase } from "@/lib/firebaseUpload";
import { AddProductState, ProductDataType } from "@/types";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useActionState, useEffect, useMemo, useState } from "react";

const EditProduct = () => {
  const { products } = useData();
  const params = useParams<{ id: string; productId: string }>();
  const router = useRouter();

  const productId = params.productId;
  const productDetail = useMemo(
    () => products.find((product) => product.id === productId),
    [products, productId],
  );

  const [inputValue, setInputValue] = useState({
    productName: "",
    productCategory: "",
    productLocation: "",
    productImage: [] as string[],
    productPrice: "",
    productDescription: "",
    productStock: "",
  });

  const initialState: AddProductState = {
    errors: {},
    message: null,
    data: {
      productName: "",
      productCategory: "",
      productLocation: "",
      productImage: [],
      productPrice: "",
      productDescription: "",
      productStock: "",
    },
  };

  const [message, formAction, isPending] = useActionState(
    handleAddProductValidation,
    initialState,
  );

  useEffect(() => {
    if (!productDetail) return;

    const handleSetInput = () => {
      setInputValue({
        productName: productDetail.productName ?? "",
        productCategory: productDetail.productCategory ?? "",
        productLocation: productDetail.productLocation ?? "",
        productImage: productDetail.productImage ?? [],
        productPrice: productDetail.productPrice ?? "",
        productDescription: productDetail.productDescription ?? "",
        productStock: productDetail.productStock ?? "",
      });
    };

    handleSetInput();
  }, [productDetail]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type } = e.target;

    if (type === "file" && files && files.length > 0) {
      const fileList = Array.from(files);
      const urls = await uploadManyToFirebase(fileList);

      setInputValue((prevValue) => {
        return {
          ...prevValue,
          productImage: urls,
        };
      });

      return;
    }

    setInputValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setInputValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setInputValue((prevValue) => {
      return {
        ...prevValue,
        productDescription: value,
      };
    });
  };

  useEffect(() => {
    const hasErrors = Object.keys(message.errors ?? {}).length > 0;
    const hasData =
      !!message.data?.productName &&
      !!message.data?.productCategory &&
      !!message.data?.productLocation &&
      Array.isArray(message.data?.productImage) &&
      message.data.productImage.length > 0 &&
      !!message.data?.productPrice &&
      !!message.data?.productDescription &&
      !!message.data?.productStock;

    if (hasErrors || !hasData) return;

    const persistProduct = async () => {
      try {
        const data: ProductDataType = {
          productName: message.data.productName,
          productCategory: message.data.productCategory,
          productLocation: message.data.productLocation,
          productImage: message.data.productImage,
          productPrice: message.data.productPrice,
          productDescription: message.data.productDescription,
          productStock: message.data.productStock,
        };

        await updateProductCollection(data, productId);

        const adminId = params.id;
        if (adminId) router.push(`/admin/${adminId}`);
      } catch (error) {
        console.error("Failed to add product", error);
      }
    };

    void persistProduct();
  }, [message, router, params.id, productId]);

  return (
    <section>
      <Card className="wrapper w-full max-w-[800px]">
        <CardHeader>
          <h1 className="text-primaryColor text-center text-lg font-semibold capitalize">
            Edit Product
          </h1>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <form className="flex flex-col gap-6" action={formAction}>
            <InputField
              name="productName"
              type="text"
              text="Product Name"
              placeholder="Product Name"
              inputValue={inputValue}
              handleChange={handleChange}
              fieldErrors={message?.errors?.productName}
            />

            <InputField
              name="productCategory"
              type="select"
              options={["textile", "crafts", "pottery", "baskets"]}
              text="Product Category"
              placeholder="Product Category"
              inputValue={inputValue}
              handleSelectChange={handleSelectChange}
              fieldErrors={message?.errors?.productCategory}
            />

            <InputField
              name="productLocation"
              type="select"
              options={["Nigeria", "Ghana", "Congo"]}
              text="Product Location"
              placeholder="Product Location"
              inputValue={inputValue}
              handleSelectChange={handleSelectChange}
              fieldErrors={message?.errors?.productLocation}
            />

            <InputField
              name="productImage"
              type="file"
              text="Product Image"
              placeholder="Product Image"
              inputValue={inputValue}
              handleChange={handleChange}
              fieldErrors={message?.errors?.productImage}
              allowMultiple
            />
            <input
              type="hidden"
              name="productImage"
              value={JSON.stringify(inputValue.productImage)}
            />

            {inputValue.productImage.length > 0 && (
              <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
                {inputValue.productImage.map((img) => (
                  <Image
                    key={img}
                    src={img}
                    alt="Product Image"
                    width={400}
                    height={400}
                    className="rounded-round object-cover shadow-xl"
                  />
                ))}
              </div>
            )}

            <InputField
              name="productPrice"
              type="number"
              text="Price"
              placeholder="Price"
              inputValue={inputValue}
              handleChange={handleChange}
              fieldErrors={message?.errors?.productPrice}
            />

            <InputField
              name="productStock"
              type="number"
              text="Stock Amount"
              placeholder="Stock Amount"
              inputValue={inputValue}
              handleChange={handleChange}
              fieldErrors={message?.errors?.productStock}
            />

            <InputField
              name="productDescription"
              type="textarea"
              text="Product Description"
              placeholder="Product Description"
              inputValue={inputValue}
              handleTextareaChange={handleTextareaChange}
              fieldErrors={message?.errors?.productDescription}
            />

            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="bg-primaryColor hover:bg-primaryColor/90 rounded-round mt-6 w-full cursor-pointer font-medium text-white"
            >
              {isPending ? "Submitting" : "Save"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default EditProduct;
