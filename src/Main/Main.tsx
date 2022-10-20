import { useEffect, useState } from "react";
import { ListServeEmbed } from "../ListServe/ListServeEmbed";
import { LowerLevelAd, UpperLevelAd } from "../Ads/index";

const inlineStyle = {
  page: {
    margin: "5% 5% 25%"
  },
  pictureAndLink: {
    margin: "2em",
    display: "flex",
    flexDirection: "column"
  },
  image: {
    margin: "5% 10%",
    width: "80%"
  },
  imageButton: {
    width: "200px"
  }
};

export const Main = () => {
  const [page, setPage] = useState("main");

  type renderObject = {
    [key: string]: JSX.Element;
  };

  // <div style={inlineStyle.pictureAndLink}>
  //       <a
  //         href="https://sfbay.craigslist.org/sfc/tix/d/san-francisco-warriors-tickets-celtics/7546536351.html"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         style={inlineStyle.image}
  //       >
  //         <img
  //           src="https://images.craigslist.org/00T0T_eJ1YN8TQJ3Iz_0CI0mE_1200x900.jpg"
  //           alt="Section 216 3D render"
  //           style={inlineStyle.image}
  //         />
  //       </a>
  //       <a
  //         href="https://sfbay.craigslist.org/sfc/tix/d/san-francisco-warriors-tickets-celtics/7546536351.html"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Craigslist Section 109, row 10
  //       </a>
  //     </div>

  const render: renderObject = {
    lower: <LowerLevelAd />,
    upper: <UpperLevelAd />,
    subscribe: <ListServeEmbed />
  };

  return (
    <div style={inlineStyle.page}>
      <div className="selectbar">
        <div>
          <label>I would like to </label>
          <select
            name="actions"
            id="actions"
            onChange={(e) => {
              setPage(e.target.value);
            }}
            value={page}
          >
            <option value="default" disabled>
              Select your option
            </option>
            <option value="lower">
              get lower level tix: Section 109, Row 10
            </option>
            <option value="upper">
              get upper level tix: Section 216, Row 11
            </option>
            <option value="subscribe">subscribe to email listserve</option>
          </select>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            console.log("clicked");
            setPage("upper");
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://images.craigslist.org/00T0T_eJ1YN8TQJ3Iz_0CI0mE_1200x900.jpg"
            alt="Section 216 3D render"
            style={inlineStyle.imageButton}
          />
        </button>
        <button onClick={() => setPage("lower")} style={{ cursor: "pointer" }}>
          <img
            src="https://images.craigslist.org/00T0T_eJ1YN8TQJ3Iz_0CI0mE_1200x900.jpg"
            alt="Section 216 3D render"
            style={inlineStyle.imageButton}
          />
        </button>
      </div>

      {render[page]}
    </div>
  );
};
