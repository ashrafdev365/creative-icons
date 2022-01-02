import React, { useState } from "react";
import "../styles/pages/Icons/icons.css";

const Icons = () => {
  const [data, setdata] = useState([]);
  const getIcons = () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer VjUU8EWdmKYXqaF7VSmzVGS7DtEjQta0d5PdMWzuetFpWdWcREBL8VTYMWxEvTXB",
      },
    };

    fetch("v4/icons/search?query=arrow&count=80", options)
      .then((response) => response.json())
      .then((response) => setdata(response.icons))
      .catch((err) => console.error(err));
  };
  React.useEffect(() => {
    getIcons();
  }, []);
  console.log(data);
  return (
    <>
      <nav>
        <div className="logo" style={{ margin: "0 auto" }}>
          <img src="./logo.svg" alt="ashraf" />
          <h1>
            Creative <span>Icons</span>
          </h1>
        </div>
      </nav>

      <div className="search">
        <i className="far fa-search"></i>
        <input type="search" placeholder="Search Icons" />
      </div>

      <section className="icons_section">
        {/* {data ? (
          <div> */}
        {data.map((value) => {
          return (
            <div className="icon_box">
              <img
                src={value.raster_sizes[3].formats[0].preview_url}
                alt="creative"
                className="icons"
              />
            
            </div>
          );
        })}
        {/* </div>
        ) : (
          <h1>Data</h1>
        )} */}
      </section>
    </>
  );
};


export default Icons;

// api key

// hnC1J2Bl1UnFhQNyV2rZ9OKTQ7CI1ODvHACA3SgC2ZiM8gi0esKf9fBEBbpz9zuw

// Client ID	cafitaBU3YerUnvGDh9IAdp6k2rvTxb5JaPhKqUh4Piuan5NpgAXcIQzlwtcVhV1

{
  /* {value.raster_sizes.map((val) => {
                   return (
                     <div>
              
                       <img src={val.formats[0].preview_url} alt="data" className="icons" />
                     </div>
                   )
                 })} */
}

{
  /* <img
                    src={value.raster_sizes[8].formats[3].preview_url}
                    alt="creative"
                    className="icons"
                  /> */
}


  {/* {value.raster_sizes.map((val) => {
                return (
                  <div className="icon_box">
                    <img
                      src={val.formats[0].preview_url}
                      alt="data"
                      className="icons"
                    />
                  </div>
                );
              })} */}