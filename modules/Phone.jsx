import "./phone.css";

const Phone = () => {
  return (
    <section className="w-full h-auto flex">
      <div className="w-full h-full body-phone">
        <input type="radio" name="theme" id="deep-purple" />
        <input type="radio" name="theme" id="gold" />
        <input type="radio" name="theme" id="space-black" />
        <input type="radio" name="theme" id="silver" />

        <div className="phone">
          <div className="buttons">
            <div className="left">
              <div className="button"></div>
              <div className="button"></div>
              <div className="button"></div>
            </div>
            <div className="right">
              <div className="button"></div>
            </div>
          </div>
          <div className="camera"></div>
          <div className="screen-container">
            <div className="bg">
              <div className="deep-purple">
                <div className="section">
                  <div className="glow"></div>
                </div>
                <div className="section">
                  <div className="glow"></div>
                </div>
              </div>
              <div className="gold">
                <div className="section">
                  <div className="glow"></div>
                </div>
                <div className="section">
                  <div className="glow"></div>
                </div>
              </div>
              <div className="space-black">
                <div className="section">
                  <div className="glow"></div>
                </div>
                <div className="section">
                  <div className="glow"></div>
                </div>
              </div>
              <div className="silver">
                <div className="section">
                  <div className="glow"></div>
                </div>
                <div className="section">
                  <div className="glow"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="notch-container" tabIndex={0}>
            <div className="notch">
              <div className="content">
                <div className="left">
                  <div className="title"></div>
                  <div className="text"></div>
                </div>
                <div className="right">
                  <div className="bar">
                    <div className="duration"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="notch-blur"></div>
          </div>
        </div>

        <div className="pallette">
          <label htmlFor="deep-purple" className="swatch"></label>
          <label htmlFor="gold" className="swatch"></label>
          <label htmlFor="space-black" className="swatch"></label>
          <label htmlFor="silver" className="swatch"></label>
        </div>
      </div>
    </section>
  );
};

export default Phone;
