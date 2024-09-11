import React, { useState } from "react";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import "./FilePageHeader.scss";
function FilePageHeader({
  searchRef,
  isMenu,
  toggleMenu,
  isSearch,
  setIsSearch,
}) {
  const [search, setSearch] = useState(isSearch);
  const [menu, setMenu] = useState(isMenu);
  return (
    <div className="file_page_header__container">
      <div className="file_page_header__menu">
        <img className="file_page_header__menu_icon" src="images/menu.png" onClick={() => toggleMenu(!menu)} />
      </div>
      <div
        className={`file_page_header__logo  ${
          isSearch && " file_page_header__logo--none"
        }`}
      >
        <img src="images/file_logo.png" />
        <p>AIGENVALUE</p>
      </div>
      <div
        ref={searchRef}
        className={`file_page_header__search ${
          isSearch && " file_page_header__search--block"
        }`}
      >
        <div className="file_page_header__search_input">
          <SearchInput />
        </div>
      </div>
      <div
        className={`file_page_header__search_icon ${
          isSearch && " file_page_header__search_icon--none"
        }`}
      >
        <img src="images/loupe.png" onClick={() => setIsSearch(true)} />
      </div>
    </div>
  );
}

export default FilePageHeader;
