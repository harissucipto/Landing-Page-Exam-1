const log = console.log.bind(console);
const eases = window.eases;
const SlideToggle = window.ReactSlideToggle;

const ToggleText = () => "Toggle";

const defaultEase = eases["cubicInOut"];

const ProgressBar = ({ progress }) => {
  return (
    <span className="progress-bar">
      <span
        className="progress-bar__inner"
        style={{
          transform: `scaleX(${progress})`
        }}
      />
    </span>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="content">
          <h1>React Slide Toggle</h1>
        </div>

        <SlideToggle
          duration={1000}
          collapsed
          render={({
            toggle,
            setCollapsibleElement,
            toggleState,
            isMoving,
            hasReversed,
            range,
            progress
          }) => (
            <div
              className={
                "slide-toggle slide-toggle--special " +
                (toggleState || "").toLowerCase()
              }
            >
              <div className="slide-toggle__header">
                <button className="slide-toggle__toggle" onClick={toggle}>
                  <ToggleText />
                </button>
                <ProgressBar progress={progress} />
              </div>
              <div className="slide-toggle__box" ref={setCollapsibleElement}>
                <div
                  className="slide-toggle__box-inner"
                  style={{ opacity: Math.max(0.5, range) }}
                >
                  <p>
                    Default easing is cubicInOut. You can reverse the toggle
                    before the movement completes. Ease in-out works best when
                    reverse toggling is to be used.
                  </p>

                  <p>
                    This should be A11Y friendly, you can test the tabindex by
                    tabbing. The collapsed items should be skipped due to usage
                    of display:none
                  </p>

                  <p>
                    JS animation is used for best animation control and
                    possibility of adding interpolation or using advanged easing
                    configuration which you can't with CSS alone. This triggers
                    browser reflows on every requestAnimationFrame. If you have
                    a very long page this might not be the best option to use.
                  </p>
                  <button onClick={toggle}>
                    <ToggleText />
                  </button>
                </div>
              </div>

              <div className="state-values">
                <div>
                  <span>toggleState:</span>
                  <span>{toggleState}</span>
                </div>
                <div>
                  <span>range:</span>
                  <span>{range.toFixed(1)}</span>
                </div>
                <div>
                  <span>isMoving:</span>
                  <span>{isMoving + ""}</span>
                </div>
                <div>
                  <span>hasReversed:</span>
                  <span>{hasReversed + ""}</span>
                </div>
              </div>
            </div>
          )}
        />

        <SlideToggle
          duration={700}
          collapsed
          interpolateOnReverse
          easeCollapse={eases["quartOut"]}
          easeExpand={eases["bounceOut"]}
          render={({
            toggle,
            progress,
            setCollapsibleElement,
            range,
            toggleState
          }) => (
            <div className="slide-toggle">
              <div className="slide-toggle__header">
                <button className="slide-toggle__toggle" onClick={toggle}>
                  <ToggleText />
                </button>
                <ProgressBar progress={progress} />
              </div>
              <div className="slide-toggle__box" ref={setCollapsibleElement}>
                <div className="slide-toggle__box-inner">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                  <button onClick={toggle}>
                    <ToggleText />
                  </button>
                </div>
              </div>
            </div>
          )}
        />

        <SlideToggle
          duration={500}
          easeCollapse={eases["bounceOut"]}
          easeExpand={eases["bounceOut"]}
          render={({
            toggle,
            progress,
            setCollapsibleElement,
            range,
            toggleState
          }) => (
            <div className="slide-toggle">
              <div className="slide-toggle__header">
                <button className="slide-toggle__toggle" onClick={toggle}>
                  <ToggleText />
                </button>
                <ProgressBar progress={progress} />
              </div>
              <div className="slide-toggle__box" ref={setCollapsibleElement}>
                <div className="slide-toggle__box-inner">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <button onClick={toggle}>
                    <ToggleText />
                  </button>
                </div>
              </div>
            </div>
          )}
        />

        <SlideToggle
          duration={800}
          collapsed
          whenReversedUseBackwardEase
          easeCollapse={eases["circOut"]}
          easeExpand={eases["circOut"]}
          render={({
            toggle,
            progress,
            setCollapsibleElement,
            range,
            toggleState
          }) => (
            <div className="slide-toggle">
              <div className="slide-toggle__header">
                <button className="slide-toggle__toggle" onClick={toggle}>
                  <ToggleText />
                </button>
                <ProgressBar progress={progress} />
              </div>
              <div className="slide-toggle__box" ref={setCollapsibleElement}>
                <div className="slide-toggle__box-inner">
                  Using whenReversedUseBackwardEase property.
                  <button onClick={toggle}>
                    <ToggleText />
                  </button>
                </div>
              </div>
            </div>
          )}
        />

        <div className="content">
          <a
            target="_blank"
            href="https://github.com/kunukn/react-slide-toggle"
          >
            Github project
          </a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#react-app"));
