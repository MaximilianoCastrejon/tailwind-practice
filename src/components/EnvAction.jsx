import React from "react";

function EnvAction(props) {
  const { imgs, titles, copys } = props;
  Object.values(props.actions).map((props, index) => {
    console.log(props);
  });
  return (
    <>
      {props.actions.map((props, index) => {
        console.log(props.image);
        return (
          <div
            key={index}
            className={`flex ${
              index % 2 == 0 ? "flex-row" : "flex-row-reverse"
            } h-[10%] my-8 md:my-16 justify-around items-center`}
          >
            <div className="w-40 flex justify-center sm:w-64 lg:w-96 h-fit max-h-full">
              <img
                src={props.image}
                alt="protection_png"
                className="help-action-img__dropshadow max-h-[100%] max-w-[100%]"
              />
            </div>
            <div className="w-52 sm:w-64 lg:w-96">
              <h1
                className={` ${
                  index % 2 == 0 ? "text-left" : "text-right"
                } text-xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-[var(--medium-carmine)] from-[var(--khaki-web)]`}
              >
                {props.title}
              </h1>
              <p
                className={`${
                  index % 2 == 0 ? "text-left" : "text-right"
                } text-base sm:text-lg text-left`}
              >
                {props.copy}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default EnvAction;
