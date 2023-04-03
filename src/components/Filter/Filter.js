import React from "react";
import DrowDown from "../../UI/Dropdown/Index";
// // import MultiRangeSlider from "multi-range-slider-react";
// import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";
import "./style.filter.scss";

const Filter = () => {


 


  return (
    <div className="float-left">
      <div className="w-64 align-top relative h-full">
        <div className="mt-3 w-64 z-50">
          <div className="row-auto">
            <div className="col"></div>
          </div>
          <div className="mb-8 bg-white bg-clip-border ease-in-out flex flex-col">
            <div className="p-6 flex-auto ">
              {/* PRice */}
              <div>
                <h6 className="mb-4 mt-0 ">Narx</h6>
                <ul className="pl-0">
                  <li>
                    <div className="form-check">
                      <input
                        id="all"
                        type="radio"
                        className="form-check-input"
                      />
                      <label
                        htmlFor="all"
                        className="form-check-label form-label"
                      >
                        All
                      </label>
                      {
                        console.log()
                      }
                    </div>
                  </li>
                  <li>
                    <div>
                      <input id="10-dollars-below" type="radio" />
                      <label htmlFor="10-dollars-below">150 mingdan kam</label>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Time */}
              <div>
                <h6>Vaqt</h6>

                <ul className="time-list">
                  <li>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label htmlFor="" className="form-check-label form-label">
                        9 gacha
                      </label>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" />
                      <label htmlFor="">9 - 12 gacha</label>
                    </div>
                  </li>
                </ul>
              </div>
              {/* category  */}
              <div>
                <h6>Yonalish</h6>
                <ul>
                  <li>
                    <DrowDown>
                      <ul>
                        <li>
                          <div>
                            <input type="checkbox" />
                            <label htmlFor="">Frontend</label>
                          </div>
                        </li>
                        <li>
                          <div>
                            <input type="checkbox" />
                            <label htmlFor="">Backend </label>
                          </div>
                        </li>
                      </ul>
                    </DrowDown>
                  </li>
                  
                  <li>
                    <div>
                      <button>Til</button>
                      <div>
                        <ul>
                          <li>
                            <div>
                              <input type="checkbox" />
                              <label htmlFor="">Ingliz tili</label>
                            </div>
                          </li>
                          <li>
                            <div>
                              <input type="checkbox" />
                              <label htmlFor="">Rus Tili </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Region */}
              <div>
                <h6>Viloyat</h6>
                <ul>
                  <li>
                    <div>
                      <button>Andijon</button>
                      <div>
                        <ul>
                          <li>
                            <div>
                              <input type="checkbox" />
                              <label htmlFor="">Andijon</label>
                            </div>
                          </li>
                          <li>
                            <div>
                              <input type="checkbox" />
                              <label htmlFor="">Marhamat </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button>Farg'ona</button>
                      <div>
                        <ul>
                          <li>
                            <div>
                              <input type="checkbox" />
                              <label htmlFor="">Farg'ona</label>
                            </div>
                          </li>
                          <li>
                            <div>
                              <input type="checkbox" />
                              <label htmlFor="">Marg'ilon </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Date  */}
              <div>
                <h6>Sana</h6>
                <ul>
                  <li>
                    <div>
                      <input type="checkbox" />
                      <label htmlFor="">1 oy oldin </label>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" />
                      <label htmlFor="">1 hafta oldin </label>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" />
                      <label htmlFor="">bugun </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
