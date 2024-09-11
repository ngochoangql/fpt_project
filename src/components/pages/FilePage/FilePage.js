import React, { useEffect, useRef, useState } from "react";
import ButtonNavigate from "../../atoms/ButtonNavigate/ButtonNavigate";
import NavColumn from "../../molecules/NavColumn/NavColumn";
import "./FilePage.scss";
import FilePageHeader from "../../molecules/FilePageHeader/FilePageHeader";
import TypeMessage from "../../molecules/TypeMessage/TypeMessage";
import Select from "../../atoms/Select/Select";
function FilePage() {
  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [navSelected, setNavSelected] = useState(0);
  const navRef = useRef(null);
  const searchRef = useRef(null);
  const handleClickOutside = (event) => {
    // Kiểm tra nếu click bên ngoài nav và menu đang mở
    if (isMenu && navRef.current && !navRef.current.contains(event.target)) {
      setIsMenu(false); // Đóng menu
    }

    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearch(false); // Đóng menu

      console.log("FFFFFFFFFFFFFFFFFFFFF", isSearch);
    }
  };
  useEffect(() => {
    if (isMenu || isSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenu, isSearch]);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="file_page__container">
      <div className="file_page_header">
        <FilePageHeader
          searchRef={searchRef}
          isMenu={isMenu}
          toggleMenu={setIsMenu}
          isSearch={isSearch}
          setIsSearch={setIsSearch}
        />
      </div>

      <div className="file_page_mainlayout">
        <div
          ref={navRef}
          className={`nav_column  ${isMenu ? " nav_column--show" : ""}`}
        >
          <NavColumn navRef={navRef} />
        </div>
        {navSelected === 0 ? (
          <div className="file_page__main">
            <div className="file_page__message"></div>
            <div className="file_page__type_message">
              <TypeMessage />
            </div>
          </div>
        ) : (
          <div className="file_page__main">
            <div className="file_page_main__filter">
              <Select />
            </div>
            <div className="file_page_name__table">a</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilePage;
