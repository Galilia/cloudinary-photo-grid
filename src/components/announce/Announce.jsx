import "./Announce.scss";

const Announce = ({text}) => {

  return (
    <div className="announce">
      <h6>{text}</h6>
    </div>
  )
}

export { Announce };