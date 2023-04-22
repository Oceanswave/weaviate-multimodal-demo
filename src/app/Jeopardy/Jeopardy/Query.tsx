"use client";

import { useState } from "react";

import {
  GetJeopardyAnswerQuery,
  useGetJeopardyAnswerQuery,
} from "~/graphql/weaviate";

import Result from "./Result";

type QueryProps = {
  weaviateUrl: string;
};

export default function Query({ weaviateUrl }: QueryProps) {
  const [jeopardyAnswer, setJeopardyAnswer] = useState("");
  const [showMore, setShowMore] = useState(false);

  const {
    fetchStatus: textFetchStatus,
    isError: isErrorTextResults,
    data: textData,
    error: errorText,
    refetch: queryText,
  } = useGetJeopardyAnswerQuery<GetJeopardyAnswerQuery, { message: string }>(
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
      question: jeopardyAnswer,
    },
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  const data = textData;
  const error = errorText;
  const isLoading = textFetchStatus !== "idle";
  const firstResult = data?.Get?.JeopardyQuestion?.[0];
  const restResults = data?.Get?.JeopardyQuestion?.slice(1);

  if (isErrorTextResults && error) {
    return <span>Error: {error.message}</span>;
  }

  const handleJeopardyAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setJeopardyAnswer(e.target.value);
  };

  const handleSubmit = async () => {
    setShowMore(false);
    queryText();
  };

  if (!weaviateUrl) {
    return <span>Missing WEAVIATE_GRAPHQL_URL environment variable</span>;
  }

  return (
    <div className="grid h-full">
      <div className="bg-base-300 p-8">
        <div className="mt-5 text-center">
          <h1 className="text-4xl">Jeopardy Questions</h1>
        </div>
        <div className="relative flex items-stretch">
          <input
            className="input-bordered input flex-1 resize-none"
            type="text"
            placeholder="Search for answers"
            value={jeopardyAnswer}
            onChange={handleJeopardyAnswerChange}
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
              disabled={!jeopardyAnswer}
            >
              Search with Text
            </button>
          )}
        </div>
        <div className="relative flex justify-center">
          {firstResult && <Result result={firstResult} />}
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
              <Result key={result?._additional?.id} result={result || {}} />
            ))}
        </div>
        <div style={{ height: "50px" }} />
      </div>
    </div>
  );
}
