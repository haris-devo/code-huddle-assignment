import React, { useEffect } from "react";
import DummyArr from "../Misc/DummyData";
import HomeContent from "./HomeContent";

const Sidebar = () => {
  const [dummyData, setDummyData] = React.useState(DummyArr);


  // const [searchData, setSearchData] = React.useState("");

  // const searchItem = (e) => {
  //   setSearchData(e.target.value);
  // };

  const showDummyData = () => {
    return dummyData.map((item, index) => {
      return (
        <li>
          <button
            href="#"
            className=" accordion-button accordion-header  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#" + item.collapseId}
            aria-expanded="true"
            aria-controls={item.collapseId}
            id={item.nameId}
           
          >
            <i>{item.icon}</i>
            <span className="links_name">{item.name}</span>
          </button>
          <div className="accordion " id="accordionExample"  key={index}>
            <div className="accordion-item">
              <div
                id={item.collapseId}
                className="accordion-collapse collapse show "
                aria-labelledby={item.nameId}
                data-bs-parent="#accordionExample"
              >
                <div className="sidebar_buttons_div">
                  <div className="d-flex flex-wrap-wrap">
                    {item.subMenu.map((subItem, subIndex) => {
                      return (
                        <>
                          <button href="#"  key={subIndex}>
                            <div className="d-flex flex-column align-items-center justify-content-center button_inner">
                                {subItem.name}
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className='bx bx-message-dots'></i>
                                    <p>Channel</p>
                                </div>
                            </div>
                          </button>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
  };

  useEffect(() => {
    
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");

    // let divWidth = document.querySelector(".sidebar").offSetWidth;
    sidebarBtn.onclick = function () {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        // setShowSubMenu(false);
        sidebarBtn.classList.replace("accordion-collapse", "show");
      } else {
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        // setShowSubMenu(true);
      }
    };
  }, []);

  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">Code Huddle</span>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <i className="bx bx-search"></i>
        </div>
        <ul className="nav-links p-0">
          {showDummyData()}
        </ul>
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Dashboard</span>
          </div>

          <div className="profile-details">
            {/* <!--<img src="images/profile.jpg" alt="">--> */}
            <i className='bx bxs-grid'></i>
            <i className='bx bx-layout'></i>
          </div>
        </nav>

        <div className="home-content">
           <HomeContent />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
