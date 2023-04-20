"use client";

import { useRef, useState } from "react";

import { GetMultiModalTextQuery, useGetMultiModalTextQuery, GetMultiModalImageQuery, useGetMultiModalImageQuery } from "~/graphql/weaviate";

import Result from "./Result";

export default function Demo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchImage, setSearchImage] = useState("");
  const [showMore, setShowMore] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const { isLoading: isLoadingTextResults, isError: isErrorTextResults, data: textData, error: errorText, refetch: queryText } = useGetMultiModalTextQuery<GetMultiModalTextQuery, { message: string }>(
    {
      endpoint: "http://desktop-k4t6j4j.cuttlefish-lime.ts.net:8080/v1/graphql",
      fetchParams: {
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*",
        }
      }
    },
    {
      searchTerm: searchTerm,
    },
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  const { isLoading: isLoadingImageResults, isError: isErrorImageResults, data: imageData, error: errorImage, refetch: queryImage } = useGetMultiModalImageQuery<GetMultiModalImageQuery, { message: string }>(
    {
      endpoint: "http://desktop-k4t6j4j.cuttlefish-lime.ts.net:8080/v1/graphql",
      fetchParams: {
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*",
        }
      }
    },
    {
      image: searchImage
    },
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  const data = textData || imageData;
  const error = errorImage || errorText;
  const isLoading = isLoadingTextResults || isLoadingImageResults;
  const firstResult = data?.Get?.MultiModal?.[0];
  const restResults = data?.Get?.MultiModal?.slice(1);

  if ((isErrorImageResults || isErrorTextResults) && error) {
    return <span>Error: {error.message}</span>
  }

  const handleSearchImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {

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
    }    
  };

  const handleSubmit = async () => {
    setSearchImage("");
    if (fileInput.current)
      fileInput.current.value = "";
    setShowMore(false);
    queryText();
  };

  const handleSubmitImage = async () => {
    setSearchTerm("");
    if (fileInput.current)
      fileInput.current.value = "";
    setShowMore(false);
    queryImage();
  };

  return (
    <div className="grid">
      <div className="bg-base-300">
        <div className="text-center mt-5">
          <h1 className="text-4xl">Multi-Modal Image/Text</h1>
        </div>
        <div className="relative flex items-stretch m-8">
          <input
            className="input input-bordered flex-1 resize-none"
            type="text"
            placeholder="Search for images"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
          {isLoading && <button className="btn btn-square loading"></button>}
          {!isLoading && (
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
        <div className="relative flex items-stretch m-8">
          <input ref={fileInput} type="file" className="file-input file-input-bordered file-input-lg flex-1" onChange={handleSearchImageChange}/>
          {isLoading && <button className="btn btn-square loading"></button>}
          {!isLoading && (
            <button className="btn btn-primary" onClick={handleSubmitImage}>
              Submit
            </button>
          )}
        </div>
        {searchImage && (
          <div className="relative flex justify-center m-8">
            <div className="card w-96 h-96 bg-lime-500 shadow-xl">
              <figure><img className="max-h-full" src={"data:image/jpg;base64," + searchImage} alt="Search Image" /></figure>
            </div>
          </div>
        )}
        <div className="relative flex justify-center m-8">
          {firstResult && <Result multiModal={firstResult} />}
        </div>
        <div className="relative flex justify-center m-8">
        {data && (
            <div className="control" style={{ paddingTop: "20px" }}>
              <input
                type="button"
                className="btn btn-secondary"
                value={showMore ? "Show less" : "Show more"}
                onClick={() => setShowMore(!showMore)}
                style={{ backgroundColor: "#fa0171" }}
              />
            </div>
          )}
        </div>
        <div className="relative flex justify-center flex-wrap m-8 gap-y-12 gap-x-12">
          { data && showMore && restResults && restResults.map((result) => (
            <Result key={result?._additional?.id} multiModal={result || {}} />
          ))}
        </div>
        <div style={{ height: "50px" }} />
      </div>
    </div >
  );
}
