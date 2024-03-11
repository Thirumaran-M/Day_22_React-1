import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

Card.propTypes = {
  item: {},
};

function Card({ item }) {
  return (
    <div className="col">
      <div
        className={`card`}
      >
        <div
          className={`card-header`}
        >
          <h4 className="my-0 fw-normal"><small>{item.planName}</small></h4>
          <h1 className="card-title">
            ${item.price}/month
          </h1>
        </div>
        <div className="card-body">

            {item.features.map((feature, index) => {
              return (
                <p class="card-text" key={index}>
                  {feature.enabled ? (
                    <span>
                      <TiTick />
                      {feature.name}
                    </span>
                  ) : (
                    <>
                      
                      <span class="opac"><ImCross size={9} />&#160;{feature.name}</span>
                    </>
                  )}
                </p>
              );
            })}
          <button
            type="button"
            className={`w-100 btn btn-lg btn-primary`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;