import { useRef } from "react";

import "./css-styles/styles.css";
import SampleSingle from "../../samples.component/sampleSingle";

function LastView(props) {
  const lastViewContainer = useRef();
  const slideContainer = useRef();

  let counterContainer = 0;

  // returns an array of items
  function getItems(min, max) {
    const arts = props.items;
    return arts.slice(min, max);
  }

  // it makes the container moves back and forward
  function moveSlides(direction) {
    const widthSlideContainer = lastViewContainer.current.offsetWidth;

    if (direction === "backward") {
      if (counterContainer < widthSlideContainer) {
        counterContainer += widthSlideContainer;
      } else {
        counterContainer = 0;
      }
      slideContainer.current.scrollTo(counterContainer, 0);
    } else if (direction === "forward") {
      if (counterContainer > 0) {
        counterContainer -= widthSlideContainer;
      } else {
        counterContainer = widthSlideContainer;
      }
      slideContainer.current.scrollTo(counterContainer, 0);
    }
  }

  return (
    <div id="last-view" ref={lastViewContainer}>
      <button className="btn-slide" onClick={() => moveSlides("backward")}>
        <span className="material-icons">arrow_back_ios</span>
      </button>

      <button
        className="btn-slide"
        onClick={() => moveSlides("forward")}
        style={{ top: "120px", right: "0px" }}
      >
        <span className="material-icons">arrow_forward_ios</span>
      </button>

      <div className="slides-ctn slide-ctn-last-viewed" ref={slideContainer}>
        <div className="slides slides-last-viewed ">
          {getItems(0, 5).map((current) => {
            return (
              <SampleSingle key={current.id} item={current}>
                <h3 className="samples-title" title={current.title}>
                  {current.title}
                </h3>
              </SampleSingle>
            );
          })}
        </div>

        <div className="slides slides-last-viewed ">
          {getItems(0, 5).map((current) => {
            return (
              <SampleSingle key={current.id} item={current}>
                <h3 className="samples-title" title={current.title}>
                  {current.title}
                </h3>
              </SampleSingle>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LastView;
