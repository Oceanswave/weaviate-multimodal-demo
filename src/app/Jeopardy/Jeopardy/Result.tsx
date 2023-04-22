import { JeopardyQuestion } from "~/graphql/weaviate";

type ResultProps = {
  result: JeopardyQuestion;
};

export default function Result({ result }: ResultProps) {
  return (
    <div className="card h-64 w-64 bg-base-100 text-center shadow-xl sm:h-96 sm:w-96">
      <figure className="pt-10">
        <b className="">{result?.question}</b>
      </figure>
      <div className="card-body items-center">
        <p className="i text-accent">{result?.answer}</p>
        <p>
          <i>
            {result?.value}
            <br />
            {result?.category}
            <br />
            {result?.air_date}
            <br />
            {result?.round}
            <br />
            {result?.show_number}
          </i>
        </p>
        <h2 className="card-title">
          Certainty: {((result?._additional?.certainty || 0) * 100).toFixed(2)}{" "}
          %
        </h2>
      </div>
    </div>
  );
}
