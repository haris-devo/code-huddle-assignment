import React, { useEffect } from "react";
import DummyArr from "../Misc/DummyData";
import HomeContent from "./HomeContent";

const Sidebar = () => {
  const [dummyData, setDummyData] = React.useState(DummyArr);

  const [showSubMenu, setShowSubMenu] = React.useState(false);

  const showDummyData = () => {
    return dummyData.map((item, index) => {
      return (
        <li>
          <button
            href="#"
            class=" accordion-button accordion-header "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#" + item.collapseId}
            aria-expanded="true"
            aria-controls={item.collapseId}
            id={item.nameId}
          >
            <i class={item.icon}></i>
            <span class="links_name">{item.name}</span>
          </button>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <div
                id={item.collapseId}
                class="accordion-collapse collapse "
                aria-labelledby={item.nameId}
                data-bs-parent="#accordionExample"
              >
                <div className="sidebar_buttons_div">
                  <div className="d-flex flex-wrap-wrap">
                    {item.subMenu.map((subItem, subIndex) => {
                      return (
                        <>
                          <button href="#">
                            <div className="d-flex flex-column align-items-center justify-content-center button_inner">
                                {subItem.name}
                                <div className="d-flex align-items-center justify-content-center">
                                    <i class='bx bx-message-dots'></i>
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
      <div class="sidebar">
        <div class="logo-details">
          <i class="bx bxl-c-plus-plus"></i>
          <span class="logo_name">Code Huddle</span>
        </div>
        <div class="search-box">
          <input type="text" placeholder="Search..." />
          <i class="bx bx-search"></i>
        </div>
        <ul class="nav-links p-0">
          {showDummyData()}
          {/* <li>
            <button
              href="#"
              class=" accordion-button accordion-header"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              id="headingOne"
            >
              <i class="bx bx-grid-alt"></i>
              <span class="links_name">Dashboard</span>
            </button>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">Lorem ipsum</div>
                </div>
              </div>
            </div>
          </li> */}
          <li>
            <button href="#">
              <i class="bx bx-list-ul"></i>
              <span class="links_name">Order list</span>
            </button>
          </li>
          <li>
            <button href="#">
              <i class="bx bx-pie-chart-alt-2"></i>
              <span class="links_name">Analytics</span>
            </button>
          </li>
          <li>
            <button href="#">
              <i class="bx bx-coin-stack"></i>
              <span class="links_name">Stock</span>
            </button>
          </li>
          <li>
            <button href="#">
              <i class="bx bx-book-alt"></i>
              <span class="links_name">Total order</span>
            </button>
          </li>
          <li>
            <button href="#">
              <i class="bx bx-user"></i>
              <span class="links_name">Team</span>
            </button>
          </li>
          <li>
            <button href="#">
              <i class="bx bx-message"></i>
              <span class="links_name">Messages</span>
            </button>
          </li>
          <li>
            <button href="#">
              <i class="bx bx-heart"></i>
              <span class="links_name">Favrorites</span>
            </button>
          </li>
          <li>
            <button href="#">
              <i class="bx bx-cog"></i>
              <span class="links_name">Setting</span>
            </button>
          </li>
         
        </ul>
      </div>
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class="bx bx-menu sidebarBtn"></i>
            <span class="dashboard">Dashboard</span>
          </div>

          <div class="profile-details">
            {/* <!--<img src="images/profile.jpg" alt="">--> */}
            <i class='bx bxs-grid'></i>
            <i class='bx bx-layout'></i>
          </div>
        </nav>

        <div class="home-content">
           <HomeContent />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
