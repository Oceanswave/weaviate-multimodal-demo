import { MultiModal } from "~/graphql/weaviate";

type ResultProps = {
  multiModal: MultiModal;
}

export default function Result({ multiModal }: ResultProps) {
  return (
    <div className="card w-96 h-96 bg-base-100 shadow-xl">
      <figure><img className="max-h-full" src={"data:image/jpg;base64," + multiModal?.image} alt="Result" /></figure>
      <div className="card-body items-center">
        <h2 className="card-title">Certainty: {((multiModal?._additional?.certainty || 0) * 100).toFixed(2)} %</h2>
      </div>
    </div>
  )
}