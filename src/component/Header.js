import { useState } from "react";


function Header({ pageTitle = "Page Name" }) {

// const { filterQuery, setFilterQuery } = useState();
// const filterArray = useState((state) => state.resetFilter);
// const searchFilterFunction = (text) => {
//   const newData = filterArray.filter((item) => {
//     const itemData = item.teacher.toUpperCase();
//     const textData = text.toUpperCase();
//     return itemData.indexOf(textData) > -1;
//   });
//   setFilterQuery(newData);
// };

  return (
    <div className="Header">
      <div className="Header-content container">
        <div className="d-flex justify-content-between">
          <div>
            <p
              style={{ fontFamily: "Edwardian Script ITC" }}
              className="text-black fs-1 fw-bold col-12"
            >
              Freaky Fashion
            </p>
            <p className="text-info fs-5">{pageTitle}</p>
          </div>
          <div>
            <input
              // onChange={(text) => searchFilterFunction(text)}
              className="rounded-3 fs-5"
              placeholder="search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
