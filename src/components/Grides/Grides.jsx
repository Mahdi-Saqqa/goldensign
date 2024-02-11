import "./Grides.css";
const Grides = () => {
  return (
    <div className="gride-container">
      <div className="column-1">
        <div
          className="img-1 shadows"
          style={{
            background:
              "url('https://source.unsplash.com/random/700×700/?travel')",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="img-row">
          <div
            className="img-1 shadows"
            style={{
              background:
                "url('https://source.unsplash.com/random/900×450/?lecture')",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="column">
            <div
              className="img-1 shadows"
              style={{
                background:
                  "url('https://source.unsplash.com/random/600x600/?fruit')",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="img-1 shadows"
              style={{
                background:
                  "url('https://source.unsplash.com/random/600x600/?map')",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="column-1">
        <div className="img-row">
          <div
            className="img-1 shadows"
            style={{
              background:
                "url('https://source.unsplash.com/random/600x600/?phone')",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="img-row">
          <div
            className="img-1 shadows"
            style={{
              background:
                "url('https://source.unsplash.com/random/600x600/?car')",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="img-1 shadows"
            style={{
              background:
                "url('https://source.unsplash.com/random/600x600/?culture')",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="img-row">
          <div
            className="img-1 shadows"
            style={{
              background:
                "url('https://source.unsplash.com/random/600x600/?girl')",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="img-row">
          <div
            className="img-1 shadows"
            style={{
              background:
                "url('https://source.unsplash.com/random/600x600/?life')",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="img-1 shadows"
            style={{
              background:
                "url('https://source.unsplash.com/random/600x600/?flags')",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="img-1 shadows"
            style={{
              background:
                "url('https://source.unsplash.com/random/600x600/?nature')",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Grides;
