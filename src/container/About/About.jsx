import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
/* import { AppWrap, MotionWrap } from '../../wrapper'; */
import "./About.scss";
import { urlFor, client } from "../../client";
import { images } from "../../constants";
import { FaAngular, FaAws, FaDocker, FaJava, FaReact } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className="app__about">
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {/* {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}  */}
        <div class="card">
          <div class="card-content">
            <div class="card-top">
              <span class="card-title">01.</span>
              <p>Frontend Development.</p>
            </div>
            <div class="card-image">
              <svg
                width="48"
                viewBox="0 -960 960 960"
                height="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-395Z"></path>
              </svg>
            </div>
            <p style={{ marginTop: "0px" }}>
              I distinguish myself by creating attractive and modern designs in
              the Frontend area, specializing in the development of user
              interfaces using React JS and Angular. Attractive interfaces built with clean code!{" "}
            </p>
            <div class="card-bottom">
              <ul>
                <li>
                  <FaReact />
                </li>
                <li>
                  <FaAngular />
                </li>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                  </svg>
                </li>
                <li>
                  <BsFillBootstrapFill />
                </li>
              </ul>
              <svg
                width="32"
                viewBox="0 -960 960 960"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path>
                <p></p>
              </svg>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="card-top">
              <span class="card-title">02.</span>
              <p>Backend Development.</p>
            </div>
            <div class="card-image">
              <svg
                width="48"
                viewBox="0 -960 960 960"
                height="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-395Z"></path>
              </svg>
            </div>
            <p style={{ marginTop: "0px" }}>
              I have a solid knowledge of Java and Spring Boot, which allows me
              to design and develop efficient, scalable and secure backends. I
              know microservices architecture with multiple database engines.
            </p>
            <div class="card-bottom">
              <ul>
                <li>
                  <FaJava />
                </li>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z"></path>
                  </svg>
                </li>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.46192862,4.04007684 C5.18892668,4.03501656 4.99575061,4.06967946 4.79169495,4.11446291 L4.79169495,4.15152944 L4.82901449,4.15152944 C4.95944313,4.41909158 5.18943271,4.591394 5.35034952,4.82188962 C5.47407329,5.08262038 5.59817658,5.34297163 5.72227987,5.60332288 C5.73493056,5.5909252 5.74745474,5.57865403 5.75959941,5.56625635 C5.99047454,5.40394797 6.0957283,5.14410275 6.09471625,4.74737704 C6.00211318,4.64996671 5.98832392,4.52826705 5.90837155,4.4122602 C5.80235875,4.25754224 5.59615247,4.17012595 5.46192862,4.04007684 L5.46192862,4.04007684 Z M23.478665,23.1369293 C23.6543831,23.2658398 23.772161,23.4657208 24,23.5466852 L24,23.5093657 C23.8800714,23.3573044 23.8495833,23.1474294 23.7395222,22.9880306 C23.5786054,22.8271138 23.4164236,22.6655645 23.2555068,22.5040152 C22.7821179,21.8759083 22.1818425,21.3245911 21.5432356,20.8663831 C21.0345512,20.5006515 19.8944709,20.0072745 19.6819392,19.4148426 C19.6697946,19.4021919 19.6571439,19.3896677 19.6444932,19.3770171 C20.0054174,19.3365348 20.4283301,19.2059797 20.7614228,19.1165393 C21.3210894,18.9665021 21.8214243,19.0054662 22.3990549,18.8560615 C22.6600387,18.781296 22.9203899,18.7066569 23.1808677,18.6329033 L23.1808677,18.4834987 C22.8887632,18.1836773 22.6805328,17.7869515 22.3622414,17.5155942 C21.5283078,16.8061434 20.6188495,16.0966926 19.6818127,15.5056522 C19.1626283,15.1774933 18.5200996,14.9645821 17.969415,14.6865199 C17.7842089,14.5931578 17.4590861,14.5444526 17.3365009,14.3887226 C17.0476856,14.0198284 16.8899314,13.5523853 16.6667732,13.1228943 C16.1997097,12.2230506 15.740363,11.2403448 15.3263059,10.293567 C15.044322,9.6481287 14.8597484,9.01154587 14.5076796,8.43227067 C12.8174206,5.65329311 10.9976185,3.97581132 8.17942382,2.3270466 C7.57927498,1.97649592 6.85742648,1.83809735 6.09471625,1.65719245 C5.68546635,1.6325236 5.27545742,1.60734872 4.86620752,1.58267987 C4.61635635,1.47831166 4.35651113,1.17267094 4.12184079,1.02427832 C3.18796669,0.434503045 0.792811133,-0.848656668 0.10157731,0.838313141 C-0.335124586,1.90286889 0.753847001,2.94174374 1.14361483,3.48142227 C1.4172493,3.85980447 1.76704094,4.2842352 1.96287366,4.70967798 C2.09127818,4.98938478 2.11316388,5.27010364 2.22385744,5.56600333 C2.49432924,6.29518923 2.7293791,7.08838764 3.07929725,7.76241652 C3.25653344,8.10322617 3.45173363,8.46263233 3.67539786,8.76738751 C3.81265788,8.95449125 4.04720171,9.03684725 4.08401522,9.32578906 C3.85465817,9.64749617 3.84150145,10.1466925 3.7125909,10.5541713 C3.13065906,12.3887747 3.35014857,14.6686824 4.19660638,16.0266077 C4.45594557,16.443195 5.06773305,17.3374725 5.90837155,16.9942592 C6.64375629,16.6946908 6.47980332,15.76613 6.69018433,14.9469976 C6.73749792,14.760906 6.70865434,14.624405 6.80176344,14.5003017 L6.80176344,14.5373682 C7.02542767,14.9840642 7.2488389,15.4307601 7.47199711,15.8773296 C7.96815726,16.6759678 8.84826592,17.5111665 9.59415073,18.0739958 C9.98037636,18.3659737 10.2848785,18.8709894 10.7852134,19.0419002 L10.7852134,19.0040746 L10.7478939,19.0040746 C10.6504835,18.8536579 10.4989282,18.790531 10.3759635,18.6694638 C10.0844916,18.3836847 9.76050733,18.0287063 9.51938514,17.7014329 C8.84080201,16.780589 8.24153872,15.7725818 7.69553484,14.7235864 C7.43455106,14.2224925 7.20785066,13.6697838 6.98785512,13.1600874 C6.90322199,12.9633691 6.90423404,12.6662043 6.72737736,12.5643663 C6.48650818,12.9378147 6.13190928,13.2401663 5.94556458,13.6811694 C5.64776729,14.386319 5.60943569,15.2461865 5.49899515,16.1379338 C5.43371758,16.1614641 5.46268766,16.1453977 5.42422956,16.1750003 C4.90555118,16.0502645 4.72350772,15.5164053 4.53096418,15.0584502 C4.04378602,13.9006589 3.95333357,12.0360734 4.38206553,10.7030699 C4.4930121,10.3583386 4.99499157,9.27202362 4.79131543,8.95347919 C4.69441112,8.63544079 4.37510765,8.45187925 4.19635337,8.20885945 C3.97420721,7.90853201 3.75332613,7.5134509 3.59974672,7.16644241 C3.20150293,6.26368901 3.01528474,5.25024206 2.59540827,4.33749461 C2.39451528,3.90142525 2.0550972,3.45966308 1.77627595,3.07166635 C1.46759906,2.64204884 1.12185564,2.32578153 0.882884062,1.80583808 C0.797744903,1.62126448 0.681991069,1.32587082 0.808244978,1.13598393 C0.848094658,1.00783242 0.905022773,0.954446496 1.03190922,0.912572704 C1.24810955,0.746089595 1.84889092,0.967982736 2.07394674,1.06147135 C2.67055338,1.30929841 3.16924367,1.54548684 3.67489184,1.88035066 C3.91740561,2.04126747 4.16295554,2.35272751 4.45607208,2.43887872 L4.79118892,2.43887872 C5.31568662,2.5591868 5.90280525,2.47645128 6.39200751,2.62509691 C7.25744137,2.8881048 8.0329288,3.29722819 8.73719284,3.74202653 C10.8826237,5.09653615 12.6370217,7.02526068 13.8370664,9.32578906 C14.030116,9.69620133 14.1138635,10.0496617 14.2836358,10.4427187 C14.6265961,11.2350315 15.0591233,12.0501156 15.4004389,12.825097 C15.7408691,13.5978013 16.0728232,14.3779695 16.5541821,15.0213837 C16.8071959,15.3594102 17.7850944,15.5408211 18.2297663,15.7288104 C18.5412263,15.8602511 19.0514287,15.9976376 19.3460633,16.1750003 C19.9100312,16.5151775 20.4556556,16.9197466 20.9842015,17.292183 C21.2483479,17.4785277 22.0606489,17.886639 22.1006251,18.2223884 C20.7916579,18.1877255 19.7916207,18.3092986 18.9366869,18.6695903 C18.6936671,18.7716814 18.3064295,18.7747176 18.2664533,19.0787137 C18.4000446,19.2186304 18.4211712,19.4281259 18.527437,19.6000488 C18.7309867,19.9304848 19.0755915,20.3728795 19.3833829,20.6053993 C19.7195118,20.8590456 20.0657612,21.130403 20.4255469,21.3498925 C21.0663045,21.7407989 21.7818276,21.9638306 22.3984224,22.3551165 C22.7632683,22.5861182 23.1241926,22.8764515 23.478665,23.1369293 L23.478665,23.1369293 Z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 0 1-.48-.48L12 9l.45 10a3.57 3.57 0 0 1-.45.48z"></path>
                  </svg>
                </li>
              </ul>
              <svg
                width="32"
                viewBox="0 -960 960 960"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path>
                <p></p>
              </svg>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <div class="card-top">
              <span class="card-title">03.</span>
              <p>Cloud Computing.</p>
            </div>
            <div class="card-image">
              <svg
                width="48"
                viewBox="0 -960 960 960"
                height="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-395Z"></path>
              </svg>
            </div>
            <p style={{ marginTop: "0px", zIndex: 1 }}>
            Cloud computing is something I'm very passionate about, it's an area I'm interested in and I'm learning about every day. I work with cloud services on (AWS) to give you the best possible service.
            </p>
            <div class="card-bottom">
              <ul>
                <li>
                  <FaAws />
                </li>
                <li>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.1"
                    viewBox="0 0 34 32"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.871 28.625l-3.22-1.155v-4.72l3.22 1.097z"></path>
                    <path d="M11.461 28.625l3.22-1.155v-4.72l-3.22 1.097z"></path>
                    <path d="M7.981 22.396l3.259-0.917 3.022 0.974-3.022 1.026z"></path>
                    <path d="M7.037 22.031l-3.22-1.155v-4.72l3.22 1.097z"></path>
                    <path d="M7.628 22.031l3.22-1.155v-4.72l-3.22 1.097z"></path>
                    <path d="M4.148 15.802l3.259-0.917 3.022 0.975-3.022 1.026z"></path>
                    <path d="M14.551 22.031l-3.221-1.155v-4.72l3.221 1.097z"></path>
                    <path d="M15.142 22.031l3.22-1.155v-4.72l-3.22 1.097z"></path>
                    <path d="M11.662 15.802l3.259-0.917 3.022 0.975-3.022 1.026z"></path>
                    <path d="M18.385 15.436l-3.22-1.155v-4.72l3.22 1.097z"></path>
                    <path d="M18.976 15.436l3.22-1.155v-4.72l-3.22 1.097z"></path>
                    <path d="M15.496 9.208l3.259-0.917 3.022 0.974-3.022 1.026z"></path>
                    <path d="M25.899 15.436l-3.22-1.155v-4.72l3.22 1.097z"></path>
                    <path d="M26.49 15.436l3.221-1.155v-4.72l-3.221 1.097z"></path>
                    <path d="M23.010 9.208l3.259-0.917 3.022 0.974-3.022 1.026z"></path>
                  </svg>
                </li>
                <li>
                  <FaDocker />
                </li>
              </ul>
              <svg
                width="32"
                viewBox="0 -960 960 960"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(About, "about");
