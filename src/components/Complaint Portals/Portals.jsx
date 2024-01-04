import React from "react";
import "./portals.css";
import { Link } from "react-router-dom";
import police from "../../assets/portals/police.svg";
import Frame43 from "../../assets/portals/industrialdispute.svg";
import Frame42 from "../../assets/portals/ebilling.svg";
import Frame41 from "../../assets/portals/consumer.svg";
import Frame25 from "../../assets/portals/nch.svg";
import Frame24 from "../../assets/portals/cyber.svg";
import Frame23 from "../../assets/portals/women.svg";
import Frame21 from "../../assets/portals/lost.svg";
import Frame47 from "../../assets/portals/nationaltest.svg";
import Frame46 from "../../assets/portals/drone.svg";
import Frame45 from "../../assets/portals/foodsafety.svg";
import Frame44 from "../../assets/portals/telecom.svg";
import TM from "../../assets/portals/tm.svg";
import GST from "../../assets/portals/gstportal.svg";
import phblk from "../../assets/portals/blockph.svg";
import education from "../../assets/portals/education.png";
import insurance from "../../assets/portals/insurance.png";
import photo from "../../assets/portals/photo.png";
import ama from "../../assets/portals/ama.png";
import airline from "../../assets/portals/airline.png";
import induslogo from  "./indus.png"

function Portals() {
  return (
    <div className="Portal">
      <p>
        Online&nbsp;
        <span style={{ color: "#31A049"}}>
          Complaint Portals
        </span>
      </p>
      <div id="Portal-content">
        <div class="Portal-content-card">
          <Link to={"/form/Police Complaint"}>
            <div className="con">
              <img src={police} />
              <p>Police Complaint</p>
              <div class="middle-portal">
                {/* <div class="text-links"></div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/industrial-dispute/"}>
            <div className="con">
              <img src={induslogo} />
              <p>Industrial Dispute</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://samadhan.labour.gov.in/</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/edaakhil"}>
            <div className="con">
              <img src={Frame42} />
              <p>E-Filling Consumer Commission</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://edaakhil.nic.in/edaakhil</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/consumer-help"}>
            <div className="con">
              <img src={Frame25} />
              <p> Consumer Help</p>
              <div class="middle-portal">
                {/* <div class="text-links"></div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/cybercrime"}>
            <div className="con">
              <img src={Frame24} />
              <p>Cyber Crime</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://cybercrime.gov.in/</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/women-helpline"}>
            <div className="con">
              <img src={Frame23} />
              <p>Women Helpline</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://www.ncwwomenhelpline.in/</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/lost-and-found"}>
            <div className="con">
              <img src={Frame21} />
              <p>Lost And Found</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://lostfound.delhipolice.gov.in/</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/consumer-dispute"}>
            <div className="con">
              <img src={Frame41} />
              <p>Consumer Dispute</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://ncdrc.nic.in/</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/telecom-dispute"}>
            <div className="con">
              <img src={Frame44} />
              <p>Telecom Dispute</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://tdsat.gov.in/Delhi/Delhi.php</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/food-safety"}>
            <div className="con">
              <img src={Frame45} />
              <p>Food Safety</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://fssai.gov.in/cms/grievances.php</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/drone-flying-license"}>
            <div className="con">
              <img src={Frame46} />
              <p>Drone Flying License</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://digitalsky.dgca.gov.in/home</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/national-test-house"}>
            <div className="con">
              <img src={Frame47} />
              <p>National Test House</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://www.nth.gov.in/</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/trademark-registration"}>
            <div className="con">
              <img src={TM} />
              <p>TradeMark Registration</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://ipindiaonline.gov.in/trademarkefiling/user/frmNewRegistration.aspx</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/gst-portal-for-filling"}>
            <div className="con">
              <img src={GST} />
              <p>GST Portal for Filling</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://services.gst.gov.in/services/login</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/educational-complaints"}>
            <div className="con">
              <img src={education} />
              <p>Educational Complaints</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://ncte.gov.in/website/grievance.aspx</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/phone-block-theft"}>
            <div className="con">
              <img src={phblk} />
              <p>Phone Block Theft</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://www.ceir.gov.in/Home/index.jsp</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/inappropriate-photo-portal"}>
            <div className="con">
              <img src={photo} />
              <p>Inappropriate Photo Portal</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://stopncii.org/</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/insurance-complaint-portal"}>
            <div className="con">
              <img src={insurance} />
              <p>Insurance Complaint Portal</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://irdai.gov.in/igms1</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link
            onClick={() => {
              window.location.href = "https://www.amalegalsolutions.com";
            }}
          >
            <div className="con">
              <img src={ama} />
              <p>Online Dispute Resolution</p>
              <div class="middle-portal">
                {/* <div class="text-links">www.amalegalsolutions.com</div> */}
              </div>
            </div>
          </Link>
        </div>

        <div class="Portal-content-card">
          <Link to={"/contact/airlines-complaint-portal"}>
            <div className="con">
              <img src={airline} />
              <p>Airlines Complaint Portal</p>
              <div class="middle-portal">
                {/* <div class="text-links">https://airsewa.gov.in/grievance/grievance-redressal</div> */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portals;
