"use client";

import { useRef, useState } from "react";

import {
  GetMultiModalTextQuery,
  useGetMultiModalTextQuery,
  GetMultiModalImageQuery,
  useGetMultiModalImageQuery,
} from "~/graphql/weaviate";

import Result from "./Result";

type QueryProps = {
  weaviateUrl: string;
};

export default function Query({ weaviateUrl }: QueryProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchImage, setSearchImage] = useState("");
  const [showMore, setShowMore] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const {
    fetchStatus: textFetchStatus,
    isError: isErrorTextResults,
    data: textData,
    error: errorText,
    refetch: queryText,
  } = useGetMultiModalTextQuery<GetMultiModalTextQuery, { message: string }>(
    {
      endpoint: weaviateUrl,
      fetchParams: {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      },
    },
    {
      searchTerm: searchTerm,
    },
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  const {
    fetchStatus: imageFetchStatus,
    isError: isErrorImageResults,
    data: imageData,
    error: errorImage,
    refetch: queryImage,
  } = useGetMultiModalImageQuery<GetMultiModalImageQuery, { message: string }>(
    {
      endpoint: weaviateUrl,
      fetchParams: {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      },
    },
    {
      image: searchImage,
    },
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  const data = textData || imageData;
  const error = errorImage || errorText;
  const isLoading = imageFetchStatus !== "idle" || textFetchStatus !== "idle";
  const firstResult = data?.Get?.MultiModal?.[0];
  const restResults = data?.Get?.MultiModal?.slice(1);

  if ((isErrorImageResults || isErrorTextResults) && error) {
    return <span>Error: {error.message}</span>;
  }

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (fileInput.current) fileInput.current.value = "";
    setSearchImage("");
    setSearchTerm(e.target.value);
  };

  const handleSearchImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm("");

    // convert to base64
    const file = e.target.files?.[0];
    if (!file) {
      setSearchImage("");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // get rid of the mimetype
      const base64 = reader.result?.toString().split(",")[1];
      setSearchImage(base64 || "");
    };
  };

  const handleSubmit = async () => {
    setSearchImage("");
    if (fileInput.current) fileInput.current.value = "";
    setShowMore(false);
    queryText();
  };

  const handleSubmitImage = async () => {
    setSearchTerm("");
    if (fileInput.current) fileInput.current.value = "";
    setShowMore(false);
    queryImage();
  };

  if (!weaviateUrl) {
    return <span>Missing WEAVIATE_GRAPHQL_URL environment variable</span>;
  }

  return (
    <div className="grid h-full">
      <div className="bg-base-300 p-8">
        <div className="mt-5 text-center">
          <h1 className="text-4xl">Multi-Modal Image/Text</h1>
        </div>
        <div className="relative flex items-stretch">
          <input
            className="input-bordered input flex-1 resize-none"
            type="text"
            placeholder="Search for images"
            value={searchTerm}
            onChange={handleSearchTermChange}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          {isLoading && <button className="loading btn-square btn"></button>}
          {!isLoading && (
            <button
              className="btn-primary btn"
              onClick={handleSubmit}
              disabled={!searchTerm}
            >
              Submit
            </button>
          )}
        </div>
        <div className="relative flex items-stretch">
          <input
            ref={fileInput}
            type="file"
            className="file-input-bordered file-input-xs flex-1 resize-none sm:file-input-md"
            onChange={handleSearchImageChange}
          />
          {isLoading && (
            <button className="loading btn-square btn">&nbsp;</button>
          )}
          {!isLoading && (
            <button
              className="btn-primary btn"
              onClick={handleSubmitImage}
              disabled={!searchImage}
            >
              Submit
            </button>
          )}
        </div>
        {searchImage && (
          <div className="relative flex justify-center pb-4">
            <div className="card h-64 w-64 bg-lime-500 shadow-xl sm:h-96 sm:w-96">
              <figure className="px-10 pt-10">
                <img
                  className="max-h-full"
                  src={"data:image/jpg;base64," + searchImage}
                  alt="Search Image"
                />
              </figure>
              <div className="card-body items-center">
                <h2 className="card-title text-black">Input Image</h2>
              </div>
            </div>
          </div>
        )}
        <div className="relative flex justify-center">
          {firstResult && <Result multiModal={firstResult} />}
        </div>
        <div className="relative flex justify-center">
          {data && (
            <div className="pt-20px">
              <button
                className="btn-secondary btn bg-pink-600"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Show more"}
              </button>
            </div>
          )}
        </div>
        <div className="relative m-8 flex flex-wrap justify-center gap-x-12 gap-y-12">
          {data &&
            showMore &&
            restResults &&
            restResults.map((result) => (
              <Result key={result?._additional?.id} multiModal={result || {}} />
            ))}
        </div>
        <div style={{ height: "50px" }} />
      </div>
    </div>
  );
}
