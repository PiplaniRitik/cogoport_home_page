import React from "react";
import "./Inner.css";

const Inner = () => {
  return (
    <div className="Inner-Container">


      {/* Section-1-start */}



      <div className="flex-container container-a"
       style={{
        backgroundImage: "url(https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/home-banner-background-1.webp)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"}}
  >
        <div className="left-item">
          <p className="container-b">
            <h1>
              Grow Faster, Go Global.
            </h1>
            Strengthen your Supply Chain, and Scale your Business
            <br />
            with Reliable Shipping and Cashflows.
            <br />
            <br />

            <strong style={{ fontSize: "12px" }}>Talk to us now:</strong>
          </p>
          <div className="form-inputs">
            <select>
              <option value="1">+91</option>
              <option value="91">+1</option>
              <option value="44">+44</option>
              {/* Add more country code options */}
            </select>
            <input className="container-d" type="text" placeholder="Whatsapp Number" />
            <button className="container-e"><strong>Get Started</strong></button>
          </div>
        </div>
        {/* </div> */}
        <div className="right-item container-c">
          <video

            src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/cogoverse_mobile_gif_2.webm"
            type="video/webm"
            controls
          />
        </div>
      </div>


      {/* Section-1-end */}




      {/* Section-2-start */}


      <div className="flex-container-horizontal">
        {/* <span  style={{display:"flex", flexDirection:"row"}}> */}
        <div className="flex-item container-f">

          <h2 className="styling-numbers ">180+ </h2>
          <h4 className="sizing" >Countries Served</h4>
        </div>
        <div className="flex-item container-g">
          <h2 className="styling-numbers " >10,000 </h2>
          <h4 className="sizing" >Ports Pairs Served</h4>
        </div>
        {/* </span> */}
        {/* <span style={{display:"flex", flexDirection:"row"}}> */}
        <div className="flex-item container-h">
          <h2 className="styling-numbers " >30,000+ </h2>
          <h4 className="sizing" >Tons of Air Cargo Moved</h4>
        </div>
        <div className="flex-item container-i">
          <h2 className="styling-numbers " >7,00,000+</h2>
          <h4 className="sizing" >Containers Moved</h4>
        </div>
        {/* </span> */}
      </div>


      {/* section-2-end */}



      {/* section-3-start */}



      <div className="flex-container2">
        <div className="left-item">
          <p

          >
            <h1 >
              One Stop Solution for Your <br />
              Supply Chain
            </h1>
            Connected Shipping, Finance, and Trade-tech, to Power Global Trade
            and Supply Chains.
          </p>
        </div>
        <div className="right-item">
          {/* <img  alt="productCheck" src={("/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fmap-supply-chain.png&amp;w=640&amp;q=75")}/> */}
          <img
            src={require("./images/Screenshot (76).png")}

            style={{ height: "293px", width: "100%" }}
          />
        </div>
      </div>

      {/* section-3-end */}




      {/* section-4-start */}


      <div className="hid-cont">
      <div>
  <h3 className="h3-sizing" style={{textAlign:"start"}} >Our Products</h3>
  </div>
  <div className="text" >
            <h4>
              End to End Cross Border 
              Logistics
            </h4>
          </div>
  <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
  <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 15 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.485 6.675H6.618v3.394h5.867V6.675Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.485 10.153H6.618a.085.085 0 0 1-.084-.084V6.675a.085.085 0 0 1 .084-.085h5.867a.085.085 0 0 1 .084.085v3.394a.084.084 0 0 1-.084.084Zm-5.782-.169H12.4V6.76H6.703v3.225Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.62 9.735a.084.084 0 0 1-.085-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.035 0a.084.084 0 0 1-.084-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.084-.085V7.283a.085.085 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.085.085 0 0 1-.084-.085V7.283a.085.085 0 0 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.085-.085V7.283a.085.085 0 0 1 .17 0V9.65a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.495 3.252H6.619v3.4h5.876v-3.4Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.495 6.737H6.618a.085.085 0 0 1-.084-.085v-3.4a.085.085 0 0 1 .084-.084h5.877a.085.085 0 0 1 .084.085v3.4a.085.085 0 0 1-.084.084Zm-5.792-.17h5.707v-3.23H6.703v3.23Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.628 6.317a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .169 0v2.37a.085.085 0 0 1-.085.085Zm-1.036 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.086.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.037 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M5.555 6.83V5.263H2.358V6.83"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.63 6.83h-.15V5.338H2.432v1.494h-.15V5.186H5.63v1.645Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="m1.108 7.402 2.89-1.296 2.755 1.296L5.42 10.44H2.73L1.108 7.402Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.47 10.516H2.684l-1.682-3.15 2.995-1.343 2.854 1.342-1.383 3.15Zm-2.694-.151H5.37l1.284-2.926-2.658-1.25-2.785 1.249 1.564 2.927Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.997 4.417H2.92v.845h2.078v-.845Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.073 5.337H2.845v-.995h2.229v.995Zm-2.078-.15h1.927v-.694H2.995v.693Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.334 3.662h-.756v.755h.756v-.755Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.41 4.493h-.906v-.907h.906v.907Zm-.756-.15h.605v-.606h-.605v.605Zm.396 1.801H3.9v4.24h.15v-4.24Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.942 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.942 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M2.919 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M2.919 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M12.968 9.652v1.153H2.165V9.658c.637 0 1.239-1.169 1.814-1.169.63 0 1.23 1.169 1.813 1.169.617 0 1.215-1.169 1.814-1.169S8.804 9.658 9.42 9.658c.584 0 1.184-1.169 1.813-1.169.553 0 1.127 1.074 1.735 1.163Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M13.044 10.88H2.09V9.582h.075c.297 0 .604-.297.901-.585.31-.3.603-.583.913-.583.351 0 .678.316.994.622.277.27.564.547.82.547.28 0 .578-.29.867-.57.304-.294.619-.6.947-.6.327 0 .642.305.946.6.289.28.588.57.867.57.256 0 .543-.278.82-.547.316-.306.643-.622.994-.622.311 0 .604.283.913.583.274.265.557.54.832.58l.064.01.001 1.293Zm-10.803-.151h10.652V9.714c-.298-.074-.579-.346-.85-.609-.275-.266-.559-.54-.808-.54-.291 0-.595.294-.89.58-.312.302-.608.588-.924.588-.341 0-.662-.31-.973-.612-.282-.274-.574-.556-.841-.556s-.559.283-.841.556c-.311.301-.632.612-.973.612-.317 0-.612-.286-.924-.589-.295-.285-.599-.58-.889-.58-.25 0-.534.275-.809.541-.296.287-.601.583-.93.623v1Z"
                ></path>
              </svg>
              <h4 >Ocean:FCL</h4>
              <strong>
                <span className="red-sizing">
                  Find Out More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 15 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.485 6.675H6.618v3.394h5.867V6.675Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.485 10.153H6.618a.085.085 0 0 1-.084-.084V6.675a.085.085 0 0 1 .084-.085h5.867a.085.085 0 0 1 .084.085v3.394a.084.084 0 0 1-.084.084Zm-5.782-.169H12.4V6.76H6.703v3.225Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.62 9.735a.084.084 0 0 1-.085-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.035 0a.084.084 0 0 1-.084-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.084-.085V7.283a.085.085 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.085.085 0 0 1-.084-.085V7.283a.085.085 0 0 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.085-.085V7.283a.085.085 0 0 1 .17 0V9.65a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.495 3.252H6.619v3.4h5.876v-3.4Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.495 6.737H6.618a.085.085 0 0 1-.084-.085v-3.4a.085.085 0 0 1 .084-.084h5.877a.085.085 0 0 1 .084.085v3.4a.085.085 0 0 1-.084.084Zm-5.792-.17h5.707v-3.23H6.703v3.23Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.628 6.317a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .169 0v2.37a.085.085 0 0 1-.085.085Zm-1.036 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.086.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.037 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M5.555 6.83V5.263H2.358V6.83"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.63 6.83h-.15V5.338H2.432v1.494h-.15V5.186H5.63v1.645Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="m1.108 7.402 2.89-1.296 2.755 1.296L5.42 10.44H2.73L1.108 7.402Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.47 10.516H2.684l-1.682-3.15 2.995-1.343 2.854 1.342-1.383 3.15Zm-2.694-.151H5.37l1.284-2.926-2.658-1.25-2.785 1.249 1.564 2.927Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.997 4.417H2.92v.845h2.078v-.845Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.073 5.337H2.845v-.995h2.229v.995Zm-2.078-.15h1.927v-.694H2.995v.693Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.334 3.662h-.756v.755h.756v-.755Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.41 4.493h-.906v-.907h.906v.907Zm-.756-.15h.605v-.606h-.605v.605Zm.396 1.801H3.9v4.24h.15v-4.24Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.942 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.942 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M2.919 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M2.919 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M12.968 9.652v1.153H2.165V9.658c.637 0 1.239-1.169 1.814-1.169.63 0 1.23 1.169 1.813 1.169.617 0 1.215-1.169 1.814-1.169S8.804 9.658 9.42 9.658c.584 0 1.184-1.169 1.813-1.169.553 0 1.127 1.074 1.735 1.163Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M13.044 10.88H2.09V9.582h.075c.297 0 .604-.297.901-.585.31-.3.603-.583.913-.583.351 0 .678.316.994.622.277.27.564.547.82.547.28 0 .578-.29.867-.57.304-.294.619-.6.947-.6.327 0 .642.305.946.6.289.28.588.57.867.57.256 0 .543-.278.82-.547.316-.306.643-.622.994-.622.311 0 .604.283.913.583.274.265.557.54.832.58l.064.01.001 1.293Zm-10.803-.151h10.652V9.714c-.298-.074-.579-.346-.85-.609-.275-.266-.559-.54-.808-.54-.291 0-.595.294-.89.58-.312.302-.608.588-.924.588-.341 0-.662-.31-.973-.612-.282-.274-.574-.556-.841-.556s-.559.283-.841.556c-.311.301-.632.612-.973.612-.317 0-.612-.286-.924-.589-.295-.285-.599-.58-.889-.58-.25 0-.534.275-.809.541-.296.287-.601.583-.93.623v1Z"
                ></path>{" "}
              </svg>
              <h4 >Ocean:FCL</h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
  </div>
  
  <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
  <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 15 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.485 6.675H6.618v3.394h5.867V6.675Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.485 10.153H6.618a.085.085 0 0 1-.084-.084V6.675a.085.085 0 0 1 .084-.085h5.867a.085.085 0 0 1 .084.085v3.394a.084.084 0 0 1-.084.084Zm-5.782-.169H12.4V6.76H6.703v3.225Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.62 9.735a.084.084 0 0 1-.085-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.035 0a.084.084 0 0 1-.084-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.084-.085V7.283a.085.085 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.085.085 0 0 1-.084-.085V7.283a.085.085 0 0 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.085-.085V7.283a.085.085 0 0 1 .17 0V9.65a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.495 3.252H6.619v3.4h5.876v-3.4Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.495 6.737H6.618a.085.085 0 0 1-.084-.085v-3.4a.085.085 0 0 1 .084-.084h5.877a.085.085 0 0 1 .084.085v3.4a.085.085 0 0 1-.084.084Zm-5.792-.17h5.707v-3.23H6.703v3.23Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.628 6.317a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .169 0v2.37a.085.085 0 0 1-.085.085Zm-1.036 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.086.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.037 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M5.555 6.83V5.263H2.358V6.83"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.63 6.83h-.15V5.338H2.432v1.494h-.15V5.186H5.63v1.645Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="m1.108 7.402 2.89-1.296 2.755 1.296L5.42 10.44H2.73L1.108 7.402Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.47 10.516H2.684l-1.682-3.15 2.995-1.343 2.854 1.342-1.383 3.15Zm-2.694-.151H5.37l1.284-2.926-2.658-1.25-2.785 1.249 1.564 2.927Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.997 4.417H2.92v.845h2.078v-.845Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.073 5.337H2.845v-.995h2.229v.995Zm-2.078-.15h1.927v-.694H2.995v.693Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.334 3.662h-.756v.755h.756v-.755Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.41 4.493h-.906v-.907h.906v.907Zm-.756-.15h.605v-.606h-.605v.605Zm.396 1.801H3.9v4.24h.15v-4.24Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.942 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.942 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M2.919 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M2.919 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M12.968 9.652v1.153H2.165V9.658c.637 0 1.239-1.169 1.814-1.169.63 0 1.23 1.169 1.813 1.169.617 0 1.215-1.169 1.814-1.169S8.804 9.658 9.42 9.658c.584 0 1.184-1.169 1.813-1.169.553 0 1.127 1.074 1.735 1.163Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M13.044 10.88H2.09V9.582h.075c.297 0 .604-.297.901-.585.31-.3.603-.583.913-.583.351 0 .678.316.994.622.277.27.564.547.82.547.28 0 .578-.29.867-.57.304-.294.619-.6.947-.6.327 0 .642.305.946.6.289.28.588.57.867.57.256 0 .543-.278.82-.547.316-.306.643-.622.994-.622.311 0 .604.283.913.583.274.265.557.54.832.58l.064.01.001 1.293Zm-10.803-.151h10.652V9.714c-.298-.074-.579-.346-.85-.609-.275-.266-.559-.54-.808-.54-.291 0-.595.294-.89.58-.312.302-.608.588-.924.588-.341 0-.662-.31-.973-.612-.282-.274-.574-.556-.841-.556s-.559.283-.841.556c-.311.301-.632.612-.973.612-.317 0-.612-.286-.924-.589-.295-.285-.599-.58-.889-.58-.25 0-.534.275-.809.541-.296.287-.601.583-.93.623v1Z"
                ></path>
              </svg>
              <h4 >Ocean:FCL</h4>
              <strong>
                <span className="red-sizing">
                  Find Out More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 15 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.485 6.675H6.618v3.394h5.867V6.675Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.485 10.153H6.618a.085.085 0 0 1-.084-.084V6.675a.085.085 0 0 1 .084-.085h5.867a.085.085 0 0 1 .084.085v3.394a.084.084 0 0 1-.084.084Zm-5.782-.169H12.4V6.76H6.703v3.225Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.62 9.735a.084.084 0 0 1-.085-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.035 0a.084.084 0 0 1-.084-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.084-.085V7.283a.085.085 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.085.085 0 0 1-.084-.085V7.283a.085.085 0 0 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.085-.085V7.283a.085.085 0 0 1 .17 0V9.65a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.495 3.252H6.619v3.4h5.876v-3.4Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.495 6.737H6.618a.085.085 0 0 1-.084-.085v-3.4a.085.085 0 0 1 .084-.084h5.877a.085.085 0 0 1 .084.085v3.4a.085.085 0 0 1-.084.084Zm-5.792-.17h5.707v-3.23H6.703v3.23Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.628 6.317a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .169 0v2.37a.085.085 0 0 1-.085.085Zm-1.036 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.086.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.037 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M5.555 6.83V5.263H2.358V6.83"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.63 6.83h-.15V5.338H2.432v1.494h-.15V5.186H5.63v1.645Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="m1.108 7.402 2.89-1.296 2.755 1.296L5.42 10.44H2.73L1.108 7.402Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.47 10.516H2.684l-1.682-3.15 2.995-1.343 2.854 1.342-1.383 3.15Zm-2.694-.151H5.37l1.284-2.926-2.658-1.25-2.785 1.249 1.564 2.927Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.997 4.417H2.92v.845h2.078v-.845Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.073 5.337H2.845v-.995h2.229v.995Zm-2.078-.15h1.927v-.694H2.995v.693Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.334 3.662h-.756v.755h.756v-.755Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.41 4.493h-.906v-.907h.906v.907Zm-.756-.15h.605v-.606h-.605v.605Zm.396 1.801H3.9v4.24h.15v-4.24Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.942 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.942 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M2.919 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M2.919 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M12.968 9.652v1.153H2.165V9.658c.637 0 1.239-1.169 1.814-1.169.63 0 1.23 1.169 1.813 1.169.617 0 1.215-1.169 1.814-1.169S8.804 9.658 9.42 9.658c.584 0 1.184-1.169 1.813-1.169.553 0 1.127 1.074 1.735 1.163Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M13.044 10.88H2.09V9.582h.075c.297 0 .604-.297.901-.585.31-.3.603-.583.913-.583.351 0 .678.316.994.622.277.27.564.547.82.547.28 0 .578-.29.867-.57.304-.294.619-.6.947-.6.327 0 .642.305.946.6.289.28.588.57.867.57.256 0 .543-.278.82-.547.316-.306.643-.622.994-.622.311 0 .604.283.913.583.274.265.557.54.832.58l.064.01.001 1.293Zm-10.803-.151h10.652V9.714c-.298-.074-.579-.346-.85-.609-.275-.266-.559-.54-.808-.54-.291 0-.595.294-.89.58-.312.302-.608.588-.924.588-.341 0-.662-.31-.973-.612-.282-.274-.574-.556-.841-.556s-.559.283-.841.556c-.311.301-.632.612-.973.612-.317 0-.612-.286-.924-.589-.295-.285-.599-.58-.889-.58-.25 0-.534.275-.809.541-.296.287-.601.583-.93.623v1Z"
                ></path>{" "}
              </svg>
              <h4 >Ocean:FCL</h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
  </div>
  <div className="text" >
            <h4>
              End to End Cross Border 
              Logistics
            </h4>
          </div>
  <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
  <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 15 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.485 6.675H6.618v3.394h5.867V6.675Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.485 10.153H6.618a.085.085 0 0 1-.084-.084V6.675a.085.085 0 0 1 .084-.085h5.867a.085.085 0 0 1 .084.085v3.394a.084.084 0 0 1-.084.084Zm-5.782-.169H12.4V6.76H6.703v3.225Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.62 9.735a.084.084 0 0 1-.085-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.035 0a.084.084 0 0 1-.084-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.084-.085V7.283a.085.085 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.085.085 0 0 1-.084-.085V7.283a.085.085 0 0 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.085-.085V7.283a.085.085 0 0 1 .17 0V9.65a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.495 3.252H6.619v3.4h5.876v-3.4Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.495 6.737H6.618a.085.085 0 0 1-.084-.085v-3.4a.085.085 0 0 1 .084-.084h5.877a.085.085 0 0 1 .084.085v3.4a.085.085 0 0 1-.084.084Zm-5.792-.17h5.707v-3.23H6.703v3.23Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.628 6.317a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .169 0v2.37a.085.085 0 0 1-.085.085Zm-1.036 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.086.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.037 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M5.555 6.83V5.263H2.358V6.83"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.63 6.83h-.15V5.338H2.432v1.494h-.15V5.186H5.63v1.645Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="m1.108 7.402 2.89-1.296 2.755 1.296L5.42 10.44H2.73L1.108 7.402Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.47 10.516H2.684l-1.682-3.15 2.995-1.343 2.854 1.342-1.383 3.15Zm-2.694-.151H5.37l1.284-2.926-2.658-1.25-2.785 1.249 1.564 2.927Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.997 4.417H2.92v.845h2.078v-.845Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.073 5.337H2.845v-.995h2.229v.995Zm-2.078-.15h1.927v-.694H2.995v.693Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.334 3.662h-.756v.755h.756v-.755Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.41 4.493h-.906v-.907h.906v.907Zm-.756-.15h.605v-.606h-.605v.605Zm.396 1.801H3.9v4.24h.15v-4.24Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.942 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.942 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M2.919 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M2.919 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M12.968 9.652v1.153H2.165V9.658c.637 0 1.239-1.169 1.814-1.169.63 0 1.23 1.169 1.813 1.169.617 0 1.215-1.169 1.814-1.169S8.804 9.658 9.42 9.658c.584 0 1.184-1.169 1.813-1.169.553 0 1.127 1.074 1.735 1.163Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M13.044 10.88H2.09V9.582h.075c.297 0 .604-.297.901-.585.31-.3.603-.583.913-.583.351 0 .678.316.994.622.277.27.564.547.82.547.28 0 .578-.29.867-.57.304-.294.619-.6.947-.6.327 0 .642.305.946.6.289.28.588.57.867.57.256 0 .543-.278.82-.547.316-.306.643-.622.994-.622.311 0 .604.283.913.583.274.265.557.54.832.58l.064.01.001 1.293Zm-10.803-.151h10.652V9.714c-.298-.074-.579-.346-.85-.609-.275-.266-.559-.54-.808-.54-.291 0-.595.294-.89.58-.312.302-.608.588-.924.588-.341 0-.662-.31-.973-.612-.282-.274-.574-.556-.841-.556s-.559.283-.841.556c-.311.301-.632.612-.973.612-.317 0-.612-.286-.924-.589-.295-.285-.599-.58-.889-.58-.25 0-.534.275-.809.541-.296.287-.601.583-.93.623v1Z"
                ></path>
              </svg>
              <h4 >Ocean:FCL</h4>
              <strong>
                <span className="red-sizing">
                  Find Out More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 15 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.485 6.675H6.618v3.394h5.867V6.675Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.485 10.153H6.618a.085.085 0 0 1-.084-.084V6.675a.085.085 0 0 1 .084-.085h5.867a.085.085 0 0 1 .084.085v3.394a.084.084 0 0 1-.084.084Zm-5.782-.169H12.4V6.76H6.703v3.225Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.62 9.735a.084.084 0 0 1-.085-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.035 0a.084.084 0 0 1-.084-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.084-.085V7.283a.085.085 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.085.085 0 0 1-.084-.085V7.283a.085.085 0 0 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.085-.085V7.283a.085.085 0 0 1 .17 0V9.65a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.495 3.252H6.619v3.4h5.876v-3.4Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.495 6.737H6.618a.085.085 0 0 1-.084-.085v-3.4a.085.085 0 0 1 .084-.084h5.877a.085.085 0 0 1 .084.085v3.4a.085.085 0 0 1-.084.084Zm-5.792-.17h5.707v-3.23H6.703v3.23Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.628 6.317a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .169 0v2.37a.085.085 0 0 1-.085.085Zm-1.036 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.086.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.037 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M5.555 6.83V5.263H2.358V6.83"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.63 6.83h-.15V5.338H2.432v1.494h-.15V5.186H5.63v1.645Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="m1.108 7.402 2.89-1.296 2.755 1.296L5.42 10.44H2.73L1.108 7.402Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.47 10.516H2.684l-1.682-3.15 2.995-1.343 2.854 1.342-1.383 3.15Zm-2.694-.151H5.37l1.284-2.926-2.658-1.25-2.785 1.249 1.564 2.927Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.997 4.417H2.92v.845h2.078v-.845Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.073 5.337H2.845v-.995h2.229v.995Zm-2.078-.15h1.927v-.694H2.995v.693Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.334 3.662h-.756v.755h.756v-.755Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.41 4.493h-.906v-.907h.906v.907Zm-.756-.15h.605v-.606h-.605v.605Zm.396 1.801H3.9v4.24h.15v-4.24Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.942 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.942 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M2.919 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M2.919 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M12.968 9.652v1.153H2.165V9.658c.637 0 1.239-1.169 1.814-1.169.63 0 1.23 1.169 1.813 1.169.617 0 1.215-1.169 1.814-1.169S8.804 9.658 9.42 9.658c.584 0 1.184-1.169 1.813-1.169.553 0 1.127 1.074 1.735 1.163Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M13.044 10.88H2.09V9.582h.075c.297 0 .604-.297.901-.585.31-.3.603-.583.913-.583.351 0 .678.316.994.622.277.27.564.547.82.547.28 0 .578-.29.867-.57.304-.294.619-.6.947-.6.327 0 .642.305.946.6.289.28.588.57.867.57.256 0 .543-.278.82-.547.316-.306.643-.622.994-.622.311 0 .604.283.913.583.274.265.557.54.832.58l.064.01.001 1.293Zm-10.803-.151h10.652V9.714c-.298-.074-.579-.346-.85-.609-.275-.266-.559-.54-.808-.54-.291 0-.595.294-.89.58-.312.302-.608.588-.924.588-.341 0-.662-.31-.973-.612-.282-.274-.574-.556-.841-.556s-.559.283-.841.556c-.311.301-.632.612-.973.612-.317 0-.612-.286-.924-.589-.295-.285-.599-.58-.889-.58-.25 0-.534.275-.809.541-.296.287-.601.583-.93.623v1Z"
                ></path>{" "}
              </svg>
              <h4 >Ocean:FCL</h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
  </div>

      </div>
      <div className="container3">
        <div

        >
          <h3 className="h3-sizing" >Our Products</h3>
        </div>
        <div className="row3">
          <div className="text" >
            <h4>
              End to End Cross Border <br />
              Logistics
            </h4>
          </div>
          <div className="abc">

            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 15 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.485 6.675H6.618v3.394h5.867V6.675Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.485 10.153H6.618a.085.085 0 0 1-.084-.084V6.675a.085.085 0 0 1 .084-.085h5.867a.085.085 0 0 1 .084.085v3.394a.084.084 0 0 1-.084.084Zm-5.782-.169H12.4V6.76H6.703v3.225Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.62 9.735a.084.084 0 0 1-.085-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.035 0a.084.084 0 0 1-.084-.085V7.283a.084.084 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.084-.085V7.283a.085.085 0 1 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.085.085 0 0 1-.084-.085V7.283a.085.085 0 0 1 .169 0V9.65a.085.085 0 0 1-.085.085Zm-1.034 0a.084.084 0 0 1-.085-.085V7.283a.085.085 0 0 1 .17 0V9.65a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#FBDC00"
                  d="M12.495 3.252H6.619v3.4h5.876v-3.4Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M12.495 6.737H6.618a.085.085 0 0 1-.084-.085v-3.4a.085.085 0 0 1 .084-.084h5.877a.085.085 0 0 1 .084.085v3.4a.085.085 0 0 1-.084.084Zm-5.792-.17h5.707v-3.23H6.703v3.23Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M11.628 6.317a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .169 0v2.37a.085.085 0 0 1-.085.085Zm-1.036 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.086.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.037 0a.085.085 0 0 1-.084-.084V3.862a.085.085 0 0 1 .17 0v2.37a.085.085 0 0 1-.085.085Zm-1.035 0a.085.085 0 0 1-.085-.084V3.862a.085.085 0 1 1 .17 0v2.37a.085.085 0 0 1-.085.085Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M5.555 6.83V5.263H2.358V6.83"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.63 6.83h-.15V5.338H2.432v1.494h-.15V5.186H5.63v1.645Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="m1.108 7.402 2.89-1.296 2.755 1.296L5.42 10.44H2.73L1.108 7.402Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.47 10.516H2.684l-1.682-3.15 2.995-1.343 2.854 1.342-1.383 3.15Zm-2.694-.151H5.37l1.284-2.926-2.658-1.25-2.785 1.249 1.564 2.927Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.997 4.417H2.92v.845h2.078v-.845Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M5.073 5.337H2.845v-.995h2.229v.995Zm-2.078-.15h1.927v-.694H2.995v.693Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.334 3.662h-.756v.755h.756v-.755Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.41 4.493h-.906v-.907h.906v.907Zm-.756-.15h.605v-.606h-.605v.605Zm.396 1.801H3.9v4.24h.15v-4.24Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M4.942 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M4.942 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M2.919 8.294a.37.37 0 1 0 0-.74.37.37 0 0 0 0 .74Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M2.919 8.369a.445.445 0 1 1 0-.89.445.445 0 0 1 0 .89Zm0-.74a.295.295 0 1 0 0 .59.295.295 0 0 0 0-.59Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#fff"
                  d="M12.968 9.652v1.153H2.165V9.658c.637 0 1.239-1.169 1.814-1.169.63 0 1.23 1.169 1.813 1.169.617 0 1.215-1.169 1.814-1.169S8.804 9.658 9.42 9.658c.584 0 1.184-1.169 1.813-1.169.553 0 1.127 1.074 1.735 1.163Z"
                ></path>
                <path
                  className="ic-a-ocean_fcl_svg__ic_a_ocean_fcl"
                  fill="#000"
                  d="M13.044 10.88H2.09V9.582h.075c.297 0 .604-.297.901-.585.31-.3.603-.583.913-.583.351 0 .678.316.994.622.277.27.564.547.82.547.28 0 .578-.29.867-.57.304-.294.619-.6.947-.6.327 0 .642.305.946.6.289.28.588.57.867.57.256 0 .543-.278.82-.547.316-.306.643-.622.994-.622.311 0 .604.283.913.583.274.265.557.54.832.58l.064.01.001 1.293Zm-10.803-.151h10.652V9.714c-.298-.074-.579-.346-.85-.609-.275-.266-.559-.54-.808-.54-.291 0-.595.294-.89.58-.312.302-.608.588-.924.588-.341 0-.662-.31-.973-.612-.282-.274-.574-.556-.841-.556s-.559.283-.841.556c-.311.301-.632.612-.973.612-.317 0-.612-.286-.924-.589-.295-.285-.599-.58-.889-.58-.25 0-.534.275-.809.541-.296.287-.601.583-.93.623v1Z"
                ></path>{" "}
              </svg>
              <h4 >Ocean:FCL</h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 15 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#FBDC00"
                  d="M10.012 7.091H7.31v2.677h2.7V7.091Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#000"
                  d="M10.012 9.899h-2.7a.13.13 0 0 1-.131-.13V7.09a.13.13 0 0 1 .13-.13h2.701a.13.13 0 0 1 .13.13v2.677a.132.132 0 0 1-.08.12.13.13 0 0 1-.05.01Zm-2.7-.13h2.7V7.09h-2.7v2.677Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#fff"
                  d="M9.174 7.092v.866H8.15v-.866"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#000"
                  d="M8.669 8.79H7.72a.154.154 0 0 1-.087-.03.083.083 0 0 1-.035-.065c0-.024.012-.048.035-.065a.154.154 0 0 1 .087-.03h.949a.154.154 0 0 1 .086.03c.023.017.036.04.036.065a.083.083 0 0 1-.036.065.154.154 0 0 1-.086.03Zm0 .308H7.72a.154.154 0 0 1-.087-.03.083.083 0 0 1-.035-.065c0-.024.012-.048.035-.065a.154.154 0 0 1 .087-.03h.949a.154.154 0 0 1 .086.03c.023.017.036.04.036.065a.083.083 0 0 1-.036.065.154.154 0 0 1-.086.03Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  stroke="#000"
                  stroke-width="0.103"
                  d="M8.137 7.052v.905h1.04v-.905"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#FBDC00"
                  d="M12.843 7.091h-2.701v2.677h2.701V7.091Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#000"
                  d="M12.844 9.899h-2.701a.13.13 0 0 1-.13-.13V7.09a.13.13 0 0 1 .13-.13h2.7a.13.13 0 0 1 .131.13v2.677a.132.132 0 0 1-.08.12.13.13 0 0 1-.05.01Zm-2.701-.13h2.7V7.09h-2.7v2.677Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#fff"
                  d="M12.005 7.092v.866H10.98v-.866"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#000"
                  d="M11.5 8.79h-.949a.154.154 0 0 1-.087-.03.084.084 0 0 1-.035-.065c0-.024.013-.048.035-.065a.154.154 0 0 1 .087-.03h.949a.154.154 0 0 1 .087.03.08.08 0 0 1 .035.065.083.083 0 0 1-.035.065.154.154 0 0 1-.087.03Zm0 .308h-.949a.154.154 0 0 1-.087-.03.084.084 0 0 1-.035-.065c0-.024.013-.048.035-.065a.154.154 0 0 1 .087-.03h.949a.154.154 0 0 1 .087.03.08.08 0 0 1 .035.065.083.083 0 0 1-.035.065.154.154 0 0 1-.087.03Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  stroke="#000"
                  stroke-width="0.103"
                  d="M10.968 7.052v.905h1.04v-.905"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#fff"
                  d="M5.729 6.828V5.21H2.432v1.618"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#000"
                  d="M5.806 6.828h-.155v-1.54H2.509v1.54h-.155V5.132h3.452v1.696Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#fff"
                  d="m1.142 7.417 2.98-1.336 2.842 1.336L5.59 10.55H2.815L1.142 7.417Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#000"
                  d="M5.64 10.628H2.77L1.034 7.38l3.088-1.385 2.943 1.384-1.426 3.249Zm-2.778-.156h2.676l1.325-3.017-2.742-1.29-2.87 1.288 1.611 3.02Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#fff"
                  d="M5.153 4.339H3.01v.87h2.143v-.87Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#000"
                  d="M5.231 5.288H2.933V4.26h2.299v1.027Zm-2.143-.156h1.988v-.715H3.088v.715Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#fff"
                  d="M4.469 3.56h-.78v.779h.78v-.78Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#000"
                  d="M4.547 4.417h-.934v-.935h.935v.935Zm-.779-.156h.624v-.624h-.624v.624Zm.409 1.859H4.02v4.372h.156V6.12Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#fff"
                  d="M5.096 8.336a.382.382 0 1 0 0-.763.382.382 0 0 0 0 .763Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#000"
                  d="M5.096 8.414a.46.46 0 1 1 0-.919.46.46 0 0 1 0 .919Zm0-.763a.304.304 0 1 0 0 .607.304.304 0 0 0 0-.607Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#fff"
                  d="M3.01 8.336a.382.382 0 1 0 0-.763.382.382 0 0 0 0 .763Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#000"
                  d="M3.01 8.414a.46.46 0 1 1 0-.919.46.46 0 0 1 0 .919Zm0-.763a.304.304 0 1 0 0 .607.304.304 0 0 0 0-.607Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#fff"
                  d="M13.373 9.738v1.188H2.233V9.744c.657 0 1.277-1.205 1.87-1.205.65 0 1.268 1.205 1.87 1.205.636 0 1.253-1.205 1.87-1.205.618 0 1.236 1.205 1.871 1.205.602 0 1.221-1.205 1.87-1.205.57 0 1.163 1.106 1.79 1.199Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#000"
                  d="M13.452 11.004H2.155V9.666h.078c.306 0 .623-.307.93-.604.319-.309.62-.601.94-.601.362 0 .7.325 1.025.641.286.278.582.564.846.564.288 0 .596-.299.894-.587.314-.304.638-.618.976-.618.338 0 .662.313.976.618.298.288.606.587.895.587.264 0 .56-.287.845-.564.326-.315.663-.641 1.025-.641.32 0 .622.292.941.601.283.274.575.556.858.598l.067.01v1.334ZM2.31 10.848h10.985V9.8c-.308-.076-.597-.356-.877-.628-.283-.274-.576-.557-.833-.557-.3 0-.614.304-.918.598-.322.312-.627.607-.953.607-.351 0-.682-.32-1.003-.63-.291-.283-.592-.575-.867-.575s-.577.292-.868.574c-.32.31-.652.631-1.003.631-.327 0-.631-.295-.953-.607-.304-.294-.617-.598-.917-.598-.257 0-.55.283-.833.558-.306.296-.621.6-.96.642v1.032Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#FBDC00"
                  d="M11.443 4.284H8.742v2.677h2.701V4.284Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#000"
                  d="M11.444 7.092H8.743a.13.13 0 0 1-.13-.13V4.283a.13.13 0 0 1 .08-.12.13.13 0 0 1 .05-.01h2.7a.13.13 0 0 1 .131.13V6.96a.132.132 0 0 1-.08.12.13.13 0 0 1-.05.01Zm-2.701-.13h2.7V4.283h-2.7V6.96Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#fff"
                  d="M10.605 4.285v.866H9.58v-.866"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  fill="#000"
                  d="M10.1 5.983h-.95a.154.154 0 0 1-.087-.03.083.083 0 0 1-.035-.065c0-.024.013-.048.035-.065a.154.154 0 0 1 .087-.03h.949a.154.154 0 0 1 .087.03.08.08 0 0 1 .035.065.083.083 0 0 1-.035.065.154.154 0 0 1-.087.03Zm0 .307h-.95a.154.154 0 0 1-.086-.029.083.083 0 0 1-.036-.065c0-.024.013-.048.036-.065a.154.154 0 0 1 .086-.03h.949a.154.154 0 0 1 .087.03.08.08 0 0 1 .035.065.083.083 0 0 1-.035.065.154.154 0 0 1-.087.03Z"
                ></path>
                <path
                  className="ic-a-ocean_lcl_svg__ic_a_ocean_lcl"
                  stroke="#000"
                  stroke-width="0.103"
                  d="M9.568 4.245v.905h1.04v-.905"
                ></path>
              </svg>
              <h4>Ocean:LCL</h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#fff"
                  d="M3.078 6.074C1.648 7.109.839 8.144 1.129 8.72c.418.832 2.96.398 5.678-.97"
                ></path>
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#000"
                  d="M2.239 9.212c-.613 0-1.02-.156-1.172-.46-.302-.6.434-1.622 1.97-2.735a.07.07 0 0 1 .082.113C1.688 7.167.93 8.171 1.192 8.69c.184.367.877.477 1.902.302 1.065-.182 2.373-.645 3.682-1.303a.07.07 0 0 1 .062.125c-1.32.664-2.642 1.132-3.72 1.316-.29.052-.584.08-.879.083Z"
                ></path>
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#fff"
                  d="M6.824 11.64a4.638 4.638 0 1 0 0-9.277 4.638 4.638 0 0 0 0 9.277Z"
                ></path>
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#000"
                  d="M6.824 11.71a4.708 4.708 0 1 1 0-9.416 4.708 4.708 0 0 1 0 9.416Zm0-9.277a4.568 4.568 0 1 0 0 9.136 4.568 4.568 0 0 0 0-9.136Z"
                ></path>
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#FBDC00"
                  d="M7.694 2.474c-.177.092-.8.484-.315 1.25.095.149.154.317.171.492.026.286-.06.597-.52.731-.224.066-1.48-.213-.966.53.646.938.078 1.629-.88 1.634-1.186.006-1.12-.546-.993-.852.083-.195.12-.408.105-.62-.096-1.212-1.138-.971-1.552-.787-.049.022-.004-.027.027-.07l.182-.3a3.86 3.86 0 0 1 .605-.766c.374-.375.805-.69 1.276-.932A4.509 4.509 0 0 1 7.69 2.44a.018.018 0 0 1 .004.034Z"
                ></path>
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#000"
                  d="M5.164 7.18c-.53 0-.875-.113-1.025-.336-.108-.16-.112-.372-.013-.612.08-.185.115-.387.1-.588-.03-.378-.158-.638-.38-.77-.31-.184-.772-.092-1.074.042a.08.08 0 0 1-.104-.017c-.038-.048-.002-.095.03-.137l.015-.02.179-.295c.172-.286.379-.548.617-.78a5.081 5.081 0 0 1 1.294-.947 4.602 4.602 0 0 1 2.902-.347.088.088 0 0 1 .02.164.853.853 0 0 0-.438.49c-.053.198-.002.42.15.66.101.158.164.337.182.523.037.406-.16.684-.57.805a1.29 1.29 0 0 1-.327.009c-.235-.009-.627-.023-.699.108-.034.06 0 .166.097.307.3.433.369.855.195 1.188-.18.344-.603.551-1.132.554h-.02ZM3.422 4.63a.96.96 0 0 1 .496.124c.263.157.414.453.447.879.016.223-.021.447-.11.653-.056.136-.102.329 0 .48.12.18.435.275.909.275h.019c.476-.003.854-.182 1.009-.48.148-.284.082-.655-.186-1.043-.133-.192-.167-.34-.105-.454.113-.207.51-.192.827-.18.094.008.189.007.283-.004.347-.102.5-.317.47-.658a1.045 1.045 0 0 0-.16-.46c-.175-.275-.231-.535-.168-.772a.926.926 0 0 1 .393-.509 4.52 4.52 0 0 0-2.683.366c-.464.239-.888.55-1.256.92a3.72 3.72 0 0 0-.594.752l-.123.203c.171-.058.35-.09.532-.092Z"
                ></path>
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#FBDC00"
                  d="M5.287 11.38s-.343-2.007 1.105-2.473c.492-.159 1.065.433 1.461.764 0 0 .52.489.845-.585.143-.472.586-.82 1.098-.739.025.004.938.304 1.324.406.139.037-.533 1.327-1.46 1.969a4.857 4.857 0 0 1-1.379.709c-1.83.522-2.994-.052-2.994-.052Z"
                ></path>
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#000"
                  d="M6.769 11.723c-.929 0-1.48-.264-1.513-.28l-.032-.016-.006-.035c-.003-.02-.335-2.072 1.153-2.551.461-.148.957.283 1.356.63.06.052.117.102.171.147l.004.003a.352.352 0 0 0 .298.083c.17-.047.319-.267.431-.637.163-.54.658-.871 1.176-.788.011.001.027.006.243.075.308.098.822.262 1.088.332a.095.095 0 0 1 .068.079c.041.236-.654 1.426-1.505 2.016a4.968 4.968 0 0 1-1.4.718 5.57 5.57 0 0 1-1.532.224ZM5.35 11.33c.2.085 1.298.493 2.911.033.487-.16.946-.396 1.359-.699.822-.57 1.419-1.631 1.446-1.854-.276-.075-.763-.23-1.06-.324-.11-.035-.207-.066-.225-.07a.93.93 0 0 0-1.017.69c-.13.426-.308.672-.53.732a.486.486 0 0 1-.428-.115 7.972 7.972 0 0 1-.172-.148c-.372-.324-.835-.727-1.222-.602-1.267.408-1.098 2.087-1.062 2.357ZM2.24 9.212c-.614 0-1.02-.156-1.173-.46a.07.07 0 0 1 .125-.063c.184.367.877.477 1.902.302 1.065-.182 2.373-.645 3.682-1.303.473-.237.93-.493 1.359-.76a.07.07 0 0 1 .074.12c-.433.268-.894.526-1.37.765-1.32.664-2.643 1.132-3.722 1.316-.29.052-.583.08-.878.083Z"
                ></path>
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#fff"
                  d="M11.598 4.339a1.74 1.74 0 0 0-.647.28c-.193.135-.384.274-.576.41l-.949.677a.169.169 0 0 1-.106.04c-.35-.012-1.909-.05-2.054-.062a.51.51 0 0 0-.387.123c-.054.049-.218.166-.215.198.003.034.033.041.061.048.118.028.782.156.976.192l.648.122c.017.011.04.021.047.036-.167.128-.523.403-.646.49a.097.097 0 0 1-.088.017c-.224-.054-.448-.106-.673-.159a.077.077 0 0 0-.066.004c-.09.064-.181.127-.27.192-.036.026-.037.055 0 .086.077.066.152.136.228.203a.06.06 0 0 1 .025.068l-.095.065c-.016.012-.031.023-.027.047.005.025.024.034.045.037.036.008.072.014.109.02.106.021.536.182.77.161.132-.01.263.003.395-.013.31-.042.611-.126.897-.252a9.88 9.88 0 0 0 1.153-.626c.083-.053.99-.61.975-.62.018-.012 1.498-1.084 1.558-1.13.682-.522-.197-.843-1.088-.654Z"
                ></path>
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#000"
                  d="M7.665 7.707a2.438 2.438 0 0 1-.608-.127 1.398 1.398 0 0 0-.132-.037 3.441 3.441 0 0 0-.109-.02.115.115 0 0 1-.1-.093.113.113 0 0 1 .054-.117 2.51 2.51 0 0 1 .052-.036 7.23 7.23 0 0 1-.083-.074 4.76 4.76 0 0 0-.132-.116.127.127 0 0 1-.051-.102.12.12 0 0 1 .056-.094c.075-.055.152-.11.227-.162l.044-.03a.141.141 0 0 1 .122-.016l.173.041a71.5 71.5 0 0 1 .517.12.029.029 0 0 0 .015-.007c.102-.073.365-.275.548-.415l-.128-.024-.442-.083c-.18-.034-.858-.164-.98-.194a.129.129 0 0 1-.113-.11c-.005-.054.038-.094.171-.201.027-.021.051-.041.065-.054a.582.582 0 0 1 .44-.141c.093.008.783.026 1.338.041l.713.02a.107.107 0 0 0 .063-.027c.269-.19.538-.382.806-.574l.144-.102.184-.132c.128-.092.26-.187.392-.279.202-.142.43-.241.673-.292.638-.135 1.262-.017 1.39.261.052.111.05.291-.245.518-.068.052-1.55 1.126-1.56 1.133l-.001-.001c-.063.055-.254.173-.833.532l-.144.09a10.61 10.61 0 0 1-.665.386 6.056 6.056 0 0 1-.498.245c-.291.128-.6.215-.916.257-.074.008-.148.01-.222.01-.06 0-.118 0-.175.004a.797.797 0 0 1-.05.002Zm-.768-.312.004.001.05.01c.031.005.08.02.146.04.195.07.4.11.606.119.063-.005.126-.005.187-.005.068.001.137-.001.205-.008a3.24 3.24 0 0 0 .878-.247c.178-.075.346-.163.487-.239.245-.132.46-.257.656-.382l.145-.09c.17-.106.569-.352.74-.464L11 6.129l.088-.062c.011-.008 1.492-1.08 1.556-1.13.1-.076.26-.224.203-.347-.088-.19-.634-.31-1.235-.183a1.666 1.666 0 0 0-.621.27c-.13.091-.262.186-.39.277l-.185.133-.144.102-.805.574a.24.24 0 0 1-.15.053l-.712-.02c-.585-.016-1.249-.034-1.344-.042a.436.436 0 0 0-.336.107l-.07.058-.088.072a58.21 58.21 0 0 0 1.39.269l.219.041.012.008a.113.113 0 0 0 .01.006.134.134 0 0 1 .063.062l.021.05-.12.092c-.184.141-.463.355-.57.432a.167.167 0 0 1-.146.028l-.5-.119-.172-.04a.41.41 0 0 0-.015-.004l-.039.027c-.069.048-.14.098-.208.149.04.035.081.07.121.107l.096.085a.128.128 0 0 1 .045.142l-.007.023-.05.034-.02.012Z"
                ></path>
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#FFEF00"
                  d="M7.135 6.13c.098-.082.2-.159.307-.23l.31-.205"
                ></path>
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#000"
                  d="m7.18 6.184-.09-.107c.1-.084.204-.163.313-.235l.31-.205.077.116-.31.206a3.45 3.45 0 0 0-.3.225Z"
                ></path>
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#FBDC00"
                  d="M12.9 4.537c-.024-.042-.088-.118-.142-.108a7.731 7.731 0 0 0-.923.424c-.219.121-.434.247-.643.383-.281.182-.558.372-.834.562-.33.225-2.26 1.516-2.446 1.592-.232.094-.297.006-.368-.004-.11-.016-.235.139-.35.162.166.046.334.08.504.104.135.01.27.004.402-.014a3.37 3.37 0 0 0 .914-.256c.171-.073.337-.158.501-.246.229-.123.454-.252.673-.392a.367.367 0 0 1 .272-.068c.126.021.253.03.38.042l.96.09a.094.094 0 0 0 .08-.032l.233-.271a.095.095 0 0 0-.006-.13.094.094 0 0 0-.04-.022 54.178 54.178 0 0 1-.886-.24c.018-.012 1.35-.954 1.412-1 .059-.05.12-.096.174-.15.05-.05.23-.26.134-.426Z"
                ></path>
                <path
                  className="ic-a-international__svg__ic_a_international"
                  fill="#000"
                  d="M7.823 7.727c-.045 0-.088-.002-.13-.005a2.652 2.652 0 0 1-.32-.058c-.235-.053-.245-.055-.248-.112a.07.07 0 0 1 .056-.073.439.439 0 0 0 .127-.07.366.366 0 0 1 .246-.092.28.28 0 0 1 .07.022.288.288 0 0 0 .26-.014c.176-.071 2.065-1.332 2.434-1.584l.088-.061c.244-.167.495-.34.748-.503.19-.123.396-.246.647-.384.304-.166.62-.31.943-.432.12-.024.213.135.217.142.128.222-.116.48-.144.509-.04.04-.082.077-.126.112l-.053.044-.004.003-1.294.916.744.2a.164.164 0 0 1 .082.265l-.234.27a.163.163 0 0 1-.139.057l-.96-.091a3.866 3.866 0 0 1-.384-.042.297.297 0 0 0-.224.058 9.976 9.976 0 0 1-1.184.644 3.43 3.43 0 0 1-.932.26c-.095.013-.19.019-.286.019Zm-.434-.203c.104.026.209.045.315.058.13.009.26.005.388-.013a3.3 3.3 0 0 0 .895-.252 6.09 6.09 0 0 0 .495-.243c.25-.134.469-.262.669-.389a.442.442 0 0 1 .322-.078c.091.016.188.025.28.033l.094.008.96.091c.004 0 .007 0 .011-.002a.024.024 0 0 0 .01-.006l.233-.271a.024.024 0 0 0 .005-.022.023.023 0 0 0-.017-.017c-.882-.233-.892-.239-.904-.246a.07.07 0 0 1-.027-.091.07.07 0 0 1 .023-.026l1.41-.998.052-.044c.04-.032.078-.066.115-.102.008-.008.2-.206.123-.34a.193.193 0 0 0-.071-.075c-.308.12-.609.26-.9.417a9.856 9.856 0 0 0-.639.38c-.25.162-.502.334-.744.5l-.089.06c-.24.165-2.255 1.516-2.459 1.6a.419.419 0 0 1-.368.013.187.187 0 0 0-.036-.013c-.036-.006-.094.033-.146.068Z"
                ></path>
              </svg>
              <h4>International Air</h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square last-square" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#fff"
                  d="M9.619 11.736a2.129 2.129 0 1 0 0-4.259 2.129 2.129 0 0 0 0 4.258Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M9.619 11.849a2.245 2.245 0 0 1-2.243-2.242A2.245 2.245 0 0 1 9.62 7.364a2.245 2.245 0 0 1 2.242 2.243 2.245 2.245 0 0 1-2.242 2.242Zm0-4.258a2.019 2.019 0 0 0-2.016 2.016 2.018 2.018 0 0 0 2.016 2.016 2.018 2.018 0 0 0 2.016-2.016A2.018 2.018 0 0 0 9.619 7.59Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#fff"
                  d="M9.687 6.635a2.185 2.185 0 1 0 0-4.37 2.185 2.185 0 0 0 0 4.37Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M9.688 6.748a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6Zm0-4.37A2.074 2.074 0 0 0 7.614 4.45a2.074 2.074 0 0 0 2.072 2.072A2.074 2.074 0 0 0 11.76 4.45a2.074 2.074 0 0 0-2.072-2.072Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#fff"
                  d="M4.381 11.736a2.129 2.129 0 1 0 0-4.259 2.129 2.129 0 0 0 0 4.258Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M4.381 11.849a2.245 2.245 0 0 1-2.243-2.242 2.245 2.245 0 0 1 2.243-2.243 2.245 2.245 0 0 1 2.242 2.243 2.245 2.245 0 0 1-2.242 2.242Zm0-4.258a2.018 2.018 0 0 0-2.016 2.016 2.018 2.018 0 0 0 2.016 2.016 2.018 2.018 0 0 0 2.016-2.016A2.018 2.018 0 0 0 4.381 7.59Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#fff"
                  d="M4.312 6.635a2.185 2.185 0 1 0 0-4.37 2.185 2.185 0 0 0 0 4.37Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M4.314 6.748a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6Zm0-4.37A2.074 2.074 0 0 0 2.242 4.45a2.074 2.074 0 0 0 2.072 2.072A2.074 2.074 0 0 0 6.386 4.45a2.074 2.074 0 0 0-2.072-2.072Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#fff"
                  d="M7.05 10.026a2.97 2.97 0 1 0 0-5.941 2.97 2.97 0 0 0 0 5.941Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#FBDC00"
                  d="M9.246 7.391v-.727l-.511-.038a1.726 1.726 0 0 0-.213-.513l.345-.385-.513-.514-.391.337a1.728 1.728 0 0 0-.516-.216l-.028-.512h-.727l-.037.507a1.73 1.73 0 0 0-.534.22l-.38-.339-.514.514.334.386a1.726 1.726 0 0 0-.215.516l-.502.027v.726l.5.037c.043.19.119.371.223.536l-.343.382.514.514.392-.338c.162.1.339.172.524.214l.028.506h.727l.037-.51a1.73 1.73 0 0 0 .514-.215l.391.35.514-.514-.343-.4c.1-.162.174-.34.217-.526l.507-.025Zm-2.197.48a.843.843 0 1 1-.001-1.685.843.843 0 0 1 .001 1.684Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M7.407 9.345H6.68a.113.113 0 0 1-.112-.107l-.024-.423a1.847 1.847 0 0 1-.4-.165l-.331.286a.113.113 0 0 1-.154-.005l-.514-.514a.113.113 0 0 1-.004-.156l.287-.32a1.839 1.839 0 0 1-.173-.416l-.418-.03a.114.114 0 0 1-.105-.114v-.727a.114.114 0 0 1 .107-.112l.42-.023c.04-.138.094-.27.164-.395l-.28-.325a.113.113 0 0 1 .005-.154l.514-.514a.113.113 0 0 1 .156-.004l.318.285c.13-.074.27-.131.413-.171l.032-.425a.113.113 0 0 1 .113-.105h.726a.113.113 0 0 1 .114.107l.024.43c.137.04.27.095.394.165l.329-.284a.113.113 0 0 1 .154.006l.514.514a.114.114 0 0 1 .004.155l-.29.324c.07.125.124.256.163.393l.43.031a.114.114 0 0 1 .105.113v.727a.114.114 0 0 1-.107.113l-.425.024c-.04.14-.096.277-.168.405l.291.337a.114.114 0 0 1-.006.153l-.514.514a.113.113 0 0 1-.156.005l-.329-.295c-.124.07-.256.125-.393.164l-.032.43a.113.113 0 0 1-.115.103Zm-.619-.226h.514l.03-.406a.113.113 0 0 1 .087-.1c.17-.04.332-.108.48-.2a.114.114 0 0 1 .136.012l.311.278.364-.364-.275-.318a.113.113 0 0 1-.01-.134c.094-.151.162-.317.202-.491a.113.113 0 0 1 .105-.088l.4-.022V6.77l-.407-.03a.113.113 0 0 1-.1-.087 1.615 1.615 0 0 0-.2-.48.113.113 0 0 1 .012-.135l.274-.305-.364-.364-.31.268a.113.113 0 0 1-.135.01 1.62 1.62 0 0 0-.482-.2.113.113 0 0 1-.086-.104l-.023-.404h-.514l-.03.4a.113.113 0 0 1-.088.1c-.177.04-.346.11-.5.206a.114.114 0 0 1-.135-.011l-.3-.269-.364.364.265.307a.113.113 0 0 1 .01.134 1.63 1.63 0 0 0-.2.482.114.114 0 0 1-.104.087l-.395.022v.515l.395.029a.113.113 0 0 1 .1.087c.04.177.111.346.208.5a.113.113 0 0 1-.012.136l-.27.303.363.363.312-.27a.114.114 0 0 1 .134-.01c.15.093.316.16.489.2a.113.113 0 0 1 .088.104l.025.4Zm.261-1.135a.957.957 0 0 1 0-1.912.957.957 0 0 1 0 1.912Zm0-1.686a.73.73 0 0 0 0 1.458.73.73 0 0 0 0-1.458Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#FBDC00"
                  d="m3.197 3.974.724-.453v1.386h-.724v-.933Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M3.921 5.02h-.724a.113.113 0 0 1-.114-.113v-.934a.113.113 0 0 1 .053-.096l.724-.452a.114.114 0 0 1 .174.097v1.385a.114.114 0 0 1-.113.113Zm-.61-.226h.497V3.725l-.498.31v.758Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#FBDC00"
                  d="m3.92 3.974.724-.453v1.386H3.92v-.933Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M4.645 5.02h-.724a.113.113 0 0 1-.114-.113v-.934a.114.114 0 0 1 .054-.096l.724-.452a.113.113 0 0 1 .174.097v1.385a.114.114 0 0 1-.114.113Zm-.611-.226h.497V3.725l-.497.31v.758Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#FBDC00"
                  d="m4.645 3.974.724-.453v1.386h-.724v-.933Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M5.369 5.02h-.724a.113.113 0 0 1-.114-.113v-.934a.113.113 0 0 1 .054-.096l.724-.452a.114.114 0 0 1 .173.097v1.385a.114.114 0 0 1-.113.113Zm-.61-.226h.497V3.725l-.498.31v.758Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M5.57 5.02H3.008a.114.114 0 0 1 0-.227h2.56a.114.114 0 0 1 0 .227Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#FBDC00"
                  d="M10.774 3.448h-1.88v1.825h1.88V3.448Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M10.774 5.386h-1.88a.114.114 0 0 1-.114-.113V3.447a.114.114 0 0 1 .114-.113h1.88a.113.113 0 0 1 .114.113v1.826a.114.114 0 0 1-.114.113ZM9.008 5.16h1.655v-1.6H9.007v1.6Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#FBDC00"
                  d="M10.191 3.517v.59h-.713v-.59"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M10.191 4.22h-.714a.113.113 0 0 1-.114-.113v-.59a.114.114 0 0 1 .228 0v.477h.487v-.477a.113.113 0 1 1 .227 0v.593a.113.113 0 0 1-.114.11Zm-.353.609h-.66a.113.113 0 0 1-.043-.218.113.113 0 0 1 .043-.009h.66a.113.113 0 1 1 0 .227Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#FBDC00"
                  d="m9.605 8.485-1.003.926v1.207h2.034V9.411l-1.03-.926Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M10.635 10.732H8.601a.113.113 0 0 1-.113-.114V9.412a.113.113 0 0 1 .036-.083l1.004-.927a.113.113 0 0 1 .152 0l1.03.927a.113.113 0 0 1 .038.084v1.207a.113.113 0 0 1-.113.112Zm-1.92-.227h1.808V9.462l-.917-.824-.891.823v1.044Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#FBDC00"
                  d="M10.017 9.472H9.22v1.146h.796V9.473Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M10.017 10.732H9.22a.114.114 0 0 1-.114-.114V9.472a.113.113 0 0 1 .114-.114h.796a.114.114 0 0 1 .113.114v1.146a.113.113 0 0 1-.113.114Zm-.683-.227h.57v-.92h-.57v.92Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M10.017 10.159H9.22a.112.112 0 0 1-.08-.034.113.113 0 0 1-.025-.123.113.113 0 0 1 .105-.07h.796a.114.114 0 0 1 .113.113.113.113 0 0 1-.113.114Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#FBDC00"
                  d="M4.857 9.495a.114.114 0 0 1-.094-.178.54.54 0 0 0 .09-.28.55.55 0 0 0-.532-.559.541.541 0 0 0-.46.841.113.113 0 0 1-.094.176c-.174 0-.395.141-.395.315v.856h1.88V9.81c0-.175-.222-.315-.395-.315Z"
                ></path>
                <path
                  className="ic-a-enterprise_svg__ic_a_enterprise"
                  fill="#000"
                  d="M5.251 10.778h-1.88a.113.113 0 0 1-.113-.114v-.856a.5.5 0 0 1 .508-.428.65.65 0 0 1 .086-.829.63.63 0 0 1 .47-.188.65.65 0 0 1 .461.206.657.657 0 0 1 .183.471.65.65 0 0 1-.108.338.5.5 0 0 1 .508.428v.857a.114.114 0 0 1-.115.115Zm-1.766-.226h1.652v-.743c0-.1-.164-.2-.281-.2a.225.225 0 0 1-.227-.238.229.229 0 0 1 .038-.116.426.426 0 0 0 .042-.386.43.43 0 0 0-.091-.142.421.421 0 0 0-.608-.012.424.424 0 0 0-.056.542.226.226 0 0 1-.189.353c-.118 0-.282.1-.282.2l.002.742Z"
                ></path>
              </svg>
              <h4>
                Customs, CFS, & <br />
                Handling
              </h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
          </div>
        </div>
        <div className="row3">
          <div className="text" style={{ fontSize: "24px" }}>
            <h4>Domestic Logistics</h4>
          </div>
          <div className="abc">
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="60"
                height="60"
                role="img"
              >
                <g clip-path="url(#ic-a-surface_ftt_rail_svg__a)">
                  <path
                    className="ic-a-surface_ftt_rail_svg__ic_a_surface_ftt_rail"
                    d="M2.82 10.99a.523.523 0 1 0 0-1.046.523.523 0 0 0 0 1.045Zm3.223 0a.523.523 0 1 0 0-1.046.523.523 0 0 0 0 1.045Z"
                    fill="#FBDC00"
                  ></path>
                  <path
                    className="ic-a-surface_ftt_rail_svg__ic_a_surface_ftt_rail"
                    fill="#fff"
                    d="M7.12 8.855H5.865s-.087-.022-.12-.044a.164.164 0 0 1-.043-.12V7.469h.862s.021 0 .032.011c0 0 .022.022.022.033l.502 1.32v.022Z"
                  ></path>
                  <path
                    className="ic-a-surface_ftt_rail_svg__ic_a_surface_ftt_rail"
                    fill="#000"
                    d="M7.12 8.975H5.876a.314.314 0 0 1-.196-.077.263.263 0 0 1-.076-.196V7.48s.01-.055.032-.076a.118.118 0 0 1 .077-.033h.862s.065.01.098.033a.147.147 0 0 1 .065.076L7.24 8.8v.065c0 .022 0 .044-.022.055-.01.022-.033.033-.043.044-.022 0-.044.01-.066.01h.011ZM5.822 7.6v1.124c.01.01.022.01.033.01h1.101L6.52 7.59h-.71l.012.011Z"
                  ></path>
                  <path
                    className="ic-a-surface_ftt_rail_svg__ic_a_surface_ftt_rail"
                    fill="#FBDC00"
                    d="M10.786 10.47H8.189a.215.215 0 0 1-.153-.066.215.215 0 0 1-.065-.153V7.207s0-.032.01-.043c0 0 .023-.011.044-.011h2.913s.033 0 .044.01c0 0 .01.022.01.044v3.044a.214.214 0 0 1-.065.153.215.215 0 0 1-.152.065h.01Z"
                  ></path>
                  <path
                    className="ic-a-surface_ftt_rail_svg__ic_a_surface_ftt_rail"
                    fill="#000"
                    d="M10.786 10.578H8.189s-.087 0-.12-.022a.393.393 0 0 1-.185-.185c-.022-.044-.022-.087-.022-.12V7.207s.022-.087.054-.12a.175.175 0 0 1 .12-.054h2.913a.338.338 0 0 0 .12.054.175.175 0 0 1 .055.12v3.044s0 .087-.022.13a.391.391 0 0 1-.077.11.226.226 0 0 1-.109.065.536.536 0 0 1-.13.022ZM8.09 7.262v2.989s0 .055.033.065c.021.022.043.033.065.033h2.597s.054 0 .065-.033c.022-.021.033-.043.033-.065V7.26H8.09Z"
                  ></path>
                  <path
                    className="ic-a-surface_ftt_rail_svg__ic_a_surface_ftt_rail"
                    fill="#fff"
                    d="M8.615 6.564h1.712l.666.545s0 .076-.066.076H7.982c-.011 0-.022-.021-.022-.032v-.044c0-.01.01-.022.022-.033l.622-.501.01-.011Z"
                  ></path>
                  <g fill="#000">
                    <path
                      className="ic-a-surface_ftt_rail_svg__ic_a_surface_ftt_rail"
                      d="M10.938 7.295H8.036s-.076-.011-.109-.033a.17.17 0 0 1-.065-.087.185.185 0 0 1 0-.11.17.17 0 0 1 .065-.087l.655-.523h1.8l.698.567s.044.043.054.076v.098a.194.194 0 0 1-.076.088c-.033.021-.076.032-.109.021l-.01-.01Zm-2.76-.23h2.596l-.48-.392H8.659l-.48.392Zm2.771 1.811H7.971v.23h2.978v-.23Zm-.316 1.528v.163h-.175l.404.502.174-.142-.403-.523Zm-2.291.043-.393.47.175.141.447-.502h-.23v-.109Zm-2.367-3.72c-.088 0-.164 0-.251-.01-.077 0-.153-.012-.23-.012a2.613 2.613 0 0 1-.85-.24L4.48 6.4l-.142-.044s-.065-.021-.087-.054a.162.162 0 0 1-.044-.098c0-.033 0-.066.022-.099a.147.147 0 0 1 .076-.065l.044-.022-.087-.087-.153-.164c-.022-.022-.044-.043-.054-.076 0-.033-.011-.055-.011-.087 0-.033.01-.055.032-.077a.112.112 0 0 1 .066-.054l.316-.186.055-.032s.054-.022.087-.022c.033 0 .065 0 .087.022l.218.076.633.207.742-.458-.676-.185-1.255-.36c-.044 0-.076-.033-.109-.066a.164.164 0 0 1-.044-.12c0-.087.077-.142.262-.262.033-.022.066-.043.087-.065a.742.742 0 0 1 .6-.131c.12.022 1.015.12 1.735.207l.938.11c.022 0 .033 0 .066-.023l1.069-.632.502-.295.545-.316c.28-.166.593-.27.916-.306.862-.109 1.67.12 1.811.513.055.164.033.404-.382.676l-2.16 1.299c-.098.076-.37.207-1.134.6l-.207.109-.917.425-.676.262a4.25 4.25 0 0 1-1.233.23h-.043v-.023Zm-1.44-.556h.01l.186.076c.242.11.5.184.764.218l.25.011.262.011a4.789 4.789 0 0 0 1.168-.218c.24-.076.469-.174.654-.25l.895-.426.207-.11.97-.501.154-.087 2.149-1.299c.13-.087.349-.25.294-.403-.087-.251-.774-.458-1.56-.36a2.03 2.03 0 0 0-.829.283l-.534.317-.502.294-1.07.633a.314.314 0 0 1-.218.055l-.927-.11-1.745-.207a.807.807 0 0 0-.23 0 .518.518 0 0 0-.207.098c-.021.011-.054.044-.098.066-.022.01-.054.033-.087.054l1.167.339.851.24.033.021s.065.055.087.099l.033.087-.197.12-.774.49a.176.176 0 0 1-.098.033c-.033 0-.077 0-.11-.01l-.632-.208-.218-.076-.044.022-.262.152.12.131c.044.044.077.088.12.12a.13.13 0 0 1 .055.099v.152l-.066.033-.021.01Zm.6 3.796H1.109s-.054-.01-.076-.032A.118.118 0 0 1 1 9.858V6.825s.01-.054.033-.076a.118.118 0 0 1 .076-.033h4.026s.054.011.076.033a.118.118 0 0 1 .033.076v3.033s-.011.055-.033.077a.118.118 0 0 1-.076.032Zm-3.906-.229h3.786V6.935H1.229v2.803Zm3.044-.24h-.044c-.01 0-.022-.01-.033-.022 0 0-.021-.021-.021-.032v-2.04c0-.011.01-.033.021-.044 0-.01.022-.022.044-.022h.087c.011 0 .033.011.044.022 0 .01.022.022.022.044V9.4s-.011.055-.033.076a.118.118 0 0 1-.076.033l-.011-.01Zm-1.151 0s-.055-.01-.077-.033a.118.118 0 0 1-.032-.076V7.393c0-.011.01-.033.022-.044 0-.01.021-.022.043-.022h.087c.011 0 .033.011.044.022 0 .011.022.022.022.044v2.04c0 .01-.011.022-.022.032 0 0-.022.022-.033.022h-.043l-.011.011Zm-1.162 0s-.055-.01-.076-.033a.118.118 0 0 1-.033-.076V7.436s.01-.054.033-.076a.118.118 0 0 1 .076-.033c.022 0 .055.011.076.033a.118.118 0 0 1 .033.076v1.997c0 .01-.01.022-.022.032 0 0-.022.022-.032.022H1.97l-.011.011Z"
                    ></path>
                    <path
                      className="ic-a-surface_ftt_rail_svg__ic_a_surface_ftt_rail"
                      d="M7.142 9.967H5.135s-.055-.01-.077-.032a.118.118 0 0 1-.033-.077V7.436c0-.01.011-.021.022-.032 0 0 .022-.022.033-.022h1.527s.044 0 .066.022c.022.01.032.032.043.054l.524 1.375v1.091c0 .01-.01.021-.022.032 0 0-.022.022-.033.022h-.043v-.01Zm-1.898-.229h1.778v-.862L6.53 7.59H5.244v2.15Z"
                    ></path>
                    <path
                      className="ic-a-surface_ftt_rail_svg__ic_a_surface_ftt_rail"
                      d="M6.03 11.09a.578.578 0 0 1-.35-.108.534.534 0 0 1-.23-.284.614.614 0 0 1-.032-.37.64.64 0 0 1 .502-.503.71.71 0 0 1 .37.033c.12.044.22.131.285.23a.66.66 0 0 1 .109.348.636.636 0 0 1-.633.633l-.022.022Zm0-1.035a.458.458 0 0 0-.23.065.426.426 0 0 0-.153.186.335.335 0 0 0-.022.229.385.385 0 0 0 .11.207c.054.054.13.098.207.109.076.01.163 0 .229-.022a.404.404 0 0 0 .25-.382c0-.054 0-.109-.032-.152a.393.393 0 0 0-.218-.219.385.385 0 0 0-.153-.032l.011.01ZM2.81 11.09a.578.578 0 0 1-.348-.11.534.534 0 0 1-.23-.283.614.614 0 0 1-.032-.37.64.64 0 0 1 .502-.503.72.72 0 0 1 .37.033.59.59 0 0 1 .284.23.68.68 0 0 1 .11.348.636.636 0 0 1-.633.633l-.022.022Zm0-1.036a.458.458 0 0 0-.228.065.426.426 0 0 0-.153.186.335.335 0 0 0-.022.229.385.385 0 0 0 .11.207c.054.054.13.098.207.109.076.01.163 0 .229-.022a.404.404 0 0 0 .25-.382c0-.054 0-.109-.032-.152a.393.393 0 0 0-.218-.219.385.385 0 0 0-.153-.032l.01.01Z"
                    ></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="ic-a-surface_ftt_rail_svg__a">
                    <path
                      className="ic-a-surface_ftt_rail_svg__ic_a_surface_ftt_rail"
                      fill="#fff"
                      d="M0 0h12v9.818H0z"
                      transform="translate(1 2.09)"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <h4>
                Customs, CFS, & <br />
                Handling
              </h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 15 15"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-multi_modal_container_haulage_svg__ic_a_multi_modal_container_haulage"
                  fill="#000"
                  d="M1.2 12.476c.073-.117.182-.145.314-.145.76.004 1.518.002 2.277.002h.108c-.13-.1-.301-.19-.41-.328-.108-.138-.154-.325-.237-.512h-.91c-.236 0-.303-.065-.303-.297v-.664c0-.227.068-.296.291-.297h.837c.04 0 .08-.003.124-.005.003-.04.007-.072.007-.104 0-.504-.001-1.009.002-1.513 0-.08-.022-.115-.104-.132-.168-.034-.334-.08-.5-.123-.19-.048-.237-.108-.238-.3V7.59c0-.225.07-.296.293-.297h2.768c.234 0 .303.069.303.299v.324c.047.003.082.007.118.007.43 0 .862.001 1.292-.002.043 0 .105-.012.126-.042.236-.333.57-.406.945-.358.25.032.46.14.6.362.014.02.046.038.069.038.344.003.687.002 1.052.002v-.59c-.148-.069-.301-.143-.458-.209-.037-.016-.087-.008-.13 0-.315.052-.63.055-.94-.024-.39-.1-.704-.293-.8-.705-.22 0-.434.026-.639-.006a.987.987 0 0 1-.694-.444c-.042-.065-.085-.08-.16-.073-.47.043-.871-.094-1.142-.499-.29-.43-.216-1.01.167-1.384.085-.083.114-.151.084-.273-.12-.478.092-.935.548-1.223.585-.369 1.333-.314 1.783.138.25.25.368.557.355.912l-.004.11c0 .013.003.025.005.05a.584.584 0 0 1 .492.352c.393-.112.762-.074 1.1.15.344.23.508.557.494.974.066.02.13.033.19.056.341.132.513.461.442.836-.009.046-.015.103.004.14.183.347.185.346.148.703.463.187.425.595.412 1.004.047.002.086.005.125.005.262 0 .525.012.787-.003.321-.018.528.131.641.413.186.46.183.92-.043 1.368-.093.183-.24.308-.459.324.061.188.09.21.275.21.11 0 .222-.003.332 0 .146.005.227.077.23.218.005.274.005.55 0 .824-.003.145-.087.214-.243.215-.291.002-.582 0-.874 0h-.135c-.035.423-.249.694-.638.84h.127l2.08.001a.6.6 0 0 1 .181.021c.092.03.138.106.133.2-.007.1-.062.17-.163.19-.047.01-.098.008-.147.008-3.99 0-7.982 0-11.972.002-.136 0-.255-.014-.316-.156v-.123H1.2Zm4.63-2.252h6.1c-.064-.098-.122-.183-.175-.27-.11-.177-.025-.341.184-.35.106-.005.213-.005.32 0 .074.003.124-.022.157-.09.172-.36.172-.718.001-1.077-.034-.072-.087-.097-.167-.096-.357.004-.713.002-1.07.002-.262 0-.317-.056-.318-.317 0-.156.002-.312 0-.468-.003-.169-.08-.26-.213-.26-.131.002-.204.094-.207.265v.123c0 .144.003.288-.003.431-.005.142-.077.222-.21.223-.488.004-.976.003-1.464 0-.106 0-.184-.055-.202-.161-.019-.115-.09-.17-.187-.206a.628.628 0 0 0-.512.013.316.316 0 0 0-.147.15c-.071.179-.098.206-.296.207H5.83v1.881Zm2.002-6.092-.049.003c-.235.013-.322-.1-.252-.328.152-.495-.067-.949-.54-1.085a1.221 1.221 0 0 0-.425-.038c-.508.04-1.11.52-.773 1.15.058.107.019.204-.075.282-.082.068-.167.135-.235.215-.36.423-.152 1.017.395 1.11.152.026.316-.002.473-.023.176-.023.245.02.313.176a.65.65 0 0 0 .2.266c.29.202.598.194.902.02.086-.05.174-.08.266-.02.092.06.1.148.088.249-.036.297.073.458.375.556.317.102.64.1.959.024a.364.364 0 0 1 .351.08.633.633 0 0 0 .473.132c.146-.012.222-.11.186-.252a.435.435 0 0 0-.119-.206c-.105-.096-.132-.192-.081-.327.126-.338-.008-.532-.362-.503-.243.02-.35-.142-.272-.353.086-.233.011-.443-.165-.616-.25-.244-.626-.292-.981-.126-.191.09-.315.032-.355-.165-.046-.222-.06-.232-.298-.22h.001ZM2.885 7.971l.583.147c.217.054.25.096.25.324v1.809c0 .38-.022.404-.402.404h-.85v.41h10.277v-.41H5.712c-.25 0-.31-.06-.31-.312V7.725H2.886v.246Zm3.355 4.356c-.39-.142-.6-.42-.634-.828h-.622c-.03.412-.246.684-.628.828H6.24Zm4.624 0c-.392-.14-.603-.418-.638-.825h-.623c-.033.419-.251.685-.637.825h1.898Zm-2.312.001c-.18-.073-.348-.16-.446-.321-.093-.153-.152-.327-.232-.505h-.533c-.086.186-.134.37-.243.508-.108.136-.276.223-.4.319h1.854Zm.614-.829H8.35c.007.25.193.423.437.412a.393.393 0 0 0 .379-.412Zm1.494 0a.408.408 0 0 0 .426.413c.23-.002.427-.23.392-.413h-.818Zm-4.619 0c.01.253.19.421.43.412a.394.394 0 0 0 .385-.411h-.815Zm-2.307.002a.4.4 0 0 0 .415.411.394.394 0 0 0 .396-.412h-.81Z"
                ></path>
                <path
                  className="ic-a-multi_modal_container_haulage_svg__ic_a_multi_modal_container_haulage"
                  fill="#fff"
                  d="M5.83 10.224V8.343h1.59c.197 0 .224-.028.295-.207a.316.316 0 0 1 .147-.15.628.628 0 0 1 .513-.013c.096.036.168.092.186.206.018.107.097.161.203.162.488.002.976.003 1.463 0 .133-.001.205-.082.21-.224.007-.143.003-.287.003-.43v-.123c.004-.171.076-.263.208-.265.132-.001.21.09.212.26.003.155 0 .311 0 .467.001.261.057.317.318.317.357 0 .714.002 1.07-.002.08 0 .134.024.168.096.17.36.17.718-.002 1.077-.033.069-.082.093-.157.09a3.457 3.457 0 0 0-.32 0c-.209.01-.294.173-.184.35.054.087.111.172.176.27h-6.1Z"
                ></path>
                <path
                  className="ic-a-multi_modal_container_haulage_svg__ic_a_multi_modal_container_haulage"
                  fill="#FEDE00"
                  d="M7.832 4.132c.238-.012.252-.002.297.22.04.197.165.254.355.165.356-.166.732-.118.982.126.176.173.25.383.165.616-.078.21.028.372.272.353.353-.029.487.165.361.503-.05.135-.024.231.082.327.056.052.1.131.119.206.036.142-.04.24-.187.252a.626.626 0 0 1-.472-.133.364.364 0 0 0-.352-.079c-.32.076-.641.078-.958-.024-.302-.098-.412-.258-.375-.556.013-.101.003-.19-.089-.249-.091-.059-.179-.029-.265.02-.305.174-.612.182-.902-.02a.644.644 0 0 1-.2-.266c-.069-.156-.138-.2-.314-.176-.156.021-.32.05-.473.024-.546-.093-.753-.687-.394-1.11.068-.08.153-.148.235-.216.094-.078.133-.175.075-.283-.338-.628.265-1.109.773-1.149.14-.01.29 0 .424.038.473.136.693.59.54 1.085-.07.228.017.341.253.328l.049-.003v.001ZM2.885 7.97v-.245h2.517v2.618c0 .253.06.312.31.312h7.03v.41H2.468v-.41h.849c.38 0 .403-.023.403-.404V8.44c0-.227-.034-.269-.25-.323-.195-.048-.39-.098-.584-.147Z"
                ></path>
                <path
                  className="ic-a-multi_modal_container_haulage_svg__ic_a_multi_modal_container_haulage"
                  fill="#fff"
                  d="M9.166 11.5a.393.393 0 0 1-.379.411.406.406 0 0 1-.437-.411h.816Zm1.494 0h.818c.035.182-.162.41-.392.412a.408.408 0 0 1-.426-.413Zm-4.619 0h.815a.394.394 0 0 1-.385.412c-.24.008-.42-.16-.43-.412Zm-2.307 0h.811a.394.394 0 0 1-.396.412.399.399 0 0 1-.415-.411Z"
                ></path>
              </svg>
              <h4>
                Customs, CFS, & <br />
                Handling
              </h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square empty-square" ></div>
            <div className="square empty-square last-square"  ></div>
          </div>
        </div>
        {/* <!-- Add more rows as needed --> */}
        <div className="row3">
          <div className="text" style={{ fontSize: "24px" }}>
            <h4>Supply Chain Solutions</h4>
          </div>
          <div className="abc">
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-cogoassured_amber_svg__ic_a_cogoassured_amber"
                  fill="#FBDC00"
                  d="M12.631 2.542c-2.866 1.19-4.335-1.35-5.628-1.28h-.006c-1.293-.07-2.762 2.471-5.628 1.28C.817 6.663 2.756 11.279 7 12.739c4.244-1.462 6.183-6.076 5.631-10.197Z"
                ></path>
                <path
                  className="ic-a-cogoassured_amber_svg__ic_a_cogoassured_amber"
                  fill="#231F20"
                  d="M7.056 1.26c1.033 0 2.188 1.6 4.082 1.6a3.862 3.862 0 0 0 1.493-.318c.552 4.121-1.387 8.737-5.631 10.197C2.756 11.28.817 6.663 1.369 2.543c.468.203.976.312 1.493.318 1.893 0 3.05-1.6 4.082-1.6h.111m0-.26h-.111a3.204 3.204 0 0 0-1.586.665 4.673 4.673 0 0 1-2.496.934 3.552 3.552 0 0 1-1.38-.295.295.295 0 0 0-.345.093.25.25 0 0 0-.045.113c-.54 4.025 1.284 8.916 5.811 10.474a.297.297 0 0 0 .194 0c4.527-1.559 6.35-6.45 5.811-10.474a.25.25 0 0 0-.045-.113.273.273 0 0 0-.095-.082.294.294 0 0 0-.25-.01 3.555 3.555 0 0 1-1.38.294 4.674 4.674 0 0 1-2.496-.934c-.45-.359-1-.59-1.586-.665Z"
                ></path>
                <path
                  className="ic-a-cogoassured_amber_svg__ic_a_cogoassured_amber"
                  fill="#fff"
                  d="M7 11.868c-1.704-.714-3.066-1.988-3.83-3.579a9.629 9.629 0 0 1-1.02-4.677c.234.04.472.061.71.062 1.54 0 2.662-.835 3.431-1.3a1.498 1.498 0 0 1 1.414 0c.77.464 1.891 1.3 3.432 1.3a4.38 4.38 0 0 0 .71-.062 9.63 9.63 0 0 1-1.02 4.677C10.067 9.88 8.704 11.154 7 11.868Z"
                ></path>
                <path
                  className="ic-a-cogoassured_amber_svg__ic_a_cogoassured_amber"
                  fill="#000"
                  d="m7 12.009-.055-.022c-1.734-.727-3.122-2.023-3.9-3.642a9.714 9.714 0 0 1-1.034-4.737l.006-.15.159.026c.227.037.456.056.687.057A5.683 5.683 0 0 0 5.92 2.447l.298-.186a1.634 1.634 0 0 1 1.565 0c.093.056.193.119.297.186a5.683 5.683 0 0 0 3.058 1.094c.23 0 .46-.02.687-.057l.16-.026.005.15a9.71 9.71 0 0 1-1.034 4.737c-.778 1.62-2.166 2.915-3.9 3.642L7 12.01ZM2.286 3.764a9.45 9.45 0 0 0 1.011 4.47c.741 1.542 2.057 2.782 3.703 3.49 1.646-.708 2.962-1.948 3.703-3.492a9.45 9.45 0 0 0 1.011-4.47c-.19.026-.383.038-.576.038a5.926 5.926 0 0 1-3.213-1.138c-.103-.062-.199-.124-.293-.181a1.359 1.359 0 0 0-1.26 0 16.67 16.67 0 0 0-.294.182 5.928 5.928 0 0 1-3.213 1.138c-.194 0-.387-.013-.579-.037v-.001Z"
                ></path>
                <path
                  className="ic-a-cogoassured_amber_svg__ic_a_cogoassured_amber"
                  fill="#FBDC00"
                  d="M8.884 4.532a.407.407 0 0 0-.537.046c-.091.103-.163.22-.211.346a1.886 1.886 0 0 0-.621-.348 1.98 1.98 0 0 0-.717-.1 1.92 1.92 0 0 0-1.288.567 1.67 1.67 0 0 0-.482 1.25c.025.46.243.891.608 1.2.366.31.847.472 1.34.45a1.92 1.92 0 0 0 1.287-.567c.332-.34.505-.79.482-1.25a1.65 1.65 0 0 0-.313-.883c.146-.047.282-.118.403-.21a.346.346 0 0 0 .05-.502ZM6.941 7.258a1.177 1.177 0 0 1-.81-.272 1.025 1.025 0 0 1-.368-.726 1.01 1.01 0 0 1 .292-.756c.2-.206.48-.329.778-.343.298-.013.589.085.81.272.22.187.353.448.367.726a1.01 1.01 0 0 1-.292.753c-.2.205-.48.328-.776.342l-.001.004Z"
                ></path>
                <path
                  className="ic-a-cogoassured_amber_svg__ic_a_cogoassured_amber"
                  fill="#231F20"
                  d="M8.665 4.448a.32.32 0 0 1 .219.083.346.346 0 0 1-.05.501c-.12.091-.257.162-.403.21.19.262.298.568.314.883.023.46-.15.91-.482 1.25a1.92 1.92 0 0 1-1.288.567h-.09c-.477 0-.936-.173-1.282-.48a1.69 1.69 0 0 1-.575-1.172c-.023-.46.15-.91.482-1.25a1.92 1.92 0 0 1 1.288-.568h.09c.461 0 .906.161 1.248.45.049-.125.12-.242.21-.345a.487.487 0 0 1 .319-.13Zm-1.78 2.81h.056c.298-.015.577-.138.778-.344.2-.206.305-.478.291-.755a1.023 1.023 0 0 0-.348-.71 1.172 1.172 0 0 0-.775-.29h-.054a1.162 1.162 0 0 0-.779.343 1.01 1.01 0 0 0-.292.756c.015.27.14.523.349.709.209.186.486.29.775.29Zm1.78-3.071a.777.777 0 0 0-.516.205.786.786 0 0 0-.111.133 2.243 2.243 0 0 0-1.15-.314h-.104a2.207 2.207 0 0 0-1.48.652A1.92 1.92 0 0 0 4.75 6.3c.025.513.262.996.66 1.35a2.22 2.22 0 0 0 1.476.551h.103a2.207 2.207 0 0 0 1.48-.652 1.92 1.92 0 0 0 .555-1.438 1.882 1.882 0 0 0-.2-.754.953.953 0 0 0 .21-.141.698.698 0 0 0 .212-.388.512.512 0 0 0-.017-.26.542.542 0 0 0-.145-.222.621.621 0 0 0-.416-.159h-.003Zm-1.78 2.81a.878.878 0 0 1-.583-.218.766.766 0 0 1-.26-.534.736.736 0 0 1 .048-.304.776.776 0 0 1 .17-.264.839.839 0 0 1 .266-.184.89.89 0 0 1 .32-.074h.041c.217 0 .426.078.583.218.158.14.251.33.261.533a.76.76 0 0 1-.219.568.873.873 0 0 1-.585.258h-.041Z"
                ></path>
                <path
                  className="ic-a-cogoassured_amber_svg__ic_a_cogoassured_amber"
                  fill="#FBDC00"
                  d="M8.588 8.35c-.073-.083-.188-.039-.265.017-.1.074-.205.144-.313.208-.217.13-.458.22-.711.265a2.964 2.964 0 0 1-.824 0 2.073 2.073 0 0 1-.71-.265 3.662 3.662 0 0 1-.314-.208c-.076-.055-.192-.1-.265-.018a.475.475 0 0 0 .052.557c.151.19.352.338.583.433l.013.007c.328.147.689.219 1.052.207.364.011.725-.06 1.052-.207l.013-.007a1.45 1.45 0 0 0 .583-.433.475.475 0 0 0 .054-.557Z"
                ></path>
                <path
                  className="ic-a-cogoassured_amber_svg__ic_a_cogoassured_amber"
                  fill="#231F20"
                  d="M8.485 8.304a.128.128 0 0 1 .103.046.475.475 0 0 1-.053.556 1.451 1.451 0 0 1-.584.433l-.012.007a2.379 2.379 0 0 1-1.053.207 2.378 2.378 0 0 1-1.052-.207l-.013-.007a1.451 1.451 0 0 1-.583-.433.475.475 0 0 1-.052-.557.127.127 0 0 1 .045-.034.136.136 0 0 1 .057-.011c.06.004.116.026.162.062.1.074.205.144.314.208a2.063 2.063 0 0 0 1.122.294c.138 0 .275-.01.412-.03a2.07 2.07 0 0 0 .71-.264 3.86 3.86 0 0 0 .313-.208.297.297 0 0 1 .162-.062m0-.26a.579.579 0 0 0-.331.117 3.42 3.42 0 0 1-.29.193 1.763 1.763 0 0 1-.975.253 2.349 2.349 0 0 1-.365-.025 1.785 1.785 0 0 1-.61-.228 3.42 3.42 0 0 1-.289-.193.579.579 0 0 0-.331-.118.43.43 0 0 0-.176.037.403.403 0 0 0-.141.103.71.71 0 0 0 .03.866c.178.229.416.409.692.523l.01.005c.368.168.774.25 1.183.238.407.012.81-.07 1.177-.235l.016-.008a1.69 1.69 0 0 0 .691-.523.71.71 0 0 0 .032-.866.431.431 0 0 0-.318-.14h-.005Z"
                ></path>
              </svg>
              <h4>
                Customs, CFS, & <br />
                Handling
              </h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 15 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#FBDC00"
                  d="M11.587 10.24h-7.86l-.762-6.936H1.123V2.54H3.64l.761 6.937h7.185v.765Z"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#000"
                  d="M11.587 10.363h-7.86a.123.123 0 0 1-.123-.11l-.749-6.827H1.122A.122.122 0 0 1 1 3.304v-.765a.122.122 0 0 1 .122-.122h2.519a.122.122 0 0 1 .121.109l.75 6.828h7.075a.122.122 0 0 1 .122.122v.765a.122.122 0 0 1-.122.122Zm-7.75-.245h7.628v-.52H4.402a.123.123 0 0 1-.121-.109l-.75-6.828H1.245v.521h1.72a.122.122 0 0 1 .122.11l.75 6.826Z"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#FBDC00"
                  d="M5.235 11.461a.738.738 0 1 0 0-1.475.738.738 0 0 0 0 1.475Z"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#000"
                  d="M5.235 11.583a.861.861 0 1 1 0-1.722.861.861 0 0 1 0 1.722Zm0-1.475a.616.616 0 0 0 0 1.23.616.616 0 0 0 0-1.23Z"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#FBDC00"
                  d="M10.04 11.461a.738.738 0 1 0 0-1.475.738.738 0 0 0 0 1.475Z"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#000"
                  d="M10.04 11.583a.861.861 0 1 1 0-1.722.861.861 0 0 1 0 1.722Zm0-1.475a.616.616 0 0 0 0 1.23.616.616 0 0 0 0-1.23Z"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#fff"
                  d="M3.725 3.304h9.206l-1.309 5.453H4.323l-.598-5.453Z"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#000"
                  d="M11.623 8.881H4.324a.123.123 0 0 1-.121-.109l-.599-5.453a.123.123 0 0 1 .122-.136h9.206a.122.122 0 0 1 .12.096.121.121 0 0 1 0 .055l-1.31 5.454a.123.123 0 0 1-.12.093Zm-7.19-.244h7.094l1.25-5.21H3.862l.572 5.21Z"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#FBDC00"
                  d="M9.99 4.248H6.736v3.314H9.99V4.248Z"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#000"
                  d="M9.99 7.684H6.736a.122.122 0 0 1-.123-.122V4.248a.122.122 0 0 1 .123-.122H9.99a.123.123 0 0 1 .122.122v3.314a.122.122 0 0 1-.122.122Zm-3.133-.245h3.011V4.371h-3.01v3.068Z"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#fff"
                  d="M8.98 4.374v1.072H7.746V4.374"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#000"
                  d="M8.98 5.569H7.746a.122.122 0 0 1-.122-.123V4.374a.122.122 0 0 1 .244 0v.95h.991v-.95a.122.122 0 0 1 .245 0v1.072a.122.122 0 0 1-.122.123Zm-.609 1.229H7.228a.122.122 0 1 1 0-.245h1.143a.123.123 0 0 1 0 .245Zm-1.685-1.76H5.022a.122.122 0 1 1 0-.244h1.664a.122.122 0 0 1 0 .244Zm.001.689h-1.22a.122.122 0 1 1 0-.244h1.22a.123.123 0 0 1 .086.208.123.123 0 0 1-.086.036Zm0 .688h-1.22a.122.122 0 1 1 0-.245h1.22a.122.122 0 1 1 0 .245Zm-.001.689H5.022a.122.122 0 1 1 0-.244h1.664a.122.122 0 0 1 0 .244Z"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#fff"
                  d="M9.933 8.008c.492 0 .89-.41.89-.915a.903.903 0 0 0-.89-.914.903.903 0 0 0-.891.914c0 .505.399.915.89.915Z"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#000"
                  d="M9.933 8.13A1.027 1.027 0 0 1 8.92 7.093a1.027 1.027 0 0 1 1.013-1.037 1.027 1.027 0 0 1 1.013 1.037A1.027 1.027 0 0 1 9.933 8.13Zm0-1.83a.782.782 0 0 0-.769.793.781.781 0 0 0 .769.793.781.781 0 0 0 .768-.793.781.781 0 0 0-.768-.792Z"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#fff"
                  d="M9.904 6.741v.44l.242.093"
                ></path>
                <path
                  className="ic-a-solutions_for_domestic_dulfilment_svg__ic_a_solutions_for_domestic_dulfilment"
                  fill="#000"
                  d="M10.146 7.395a.12.12 0 0 1-.044-.008l-.24-.092a.123.123 0 0 1-.08-.115v-.44a.122.122 0 0 1 .245 0v.356l.163.062a.122.122 0 0 1-.044.237Z"
                ></path>
              </svg>
              <h4>
                Customs, CFS, & <br />
                Handling
              </h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M10.4 5.025a.077.077 0 0 1-.077-.077v-.882a.194.194 0 0 0-.193-.193H7.096a.077.077 0 0 1 0-.154h3.034a.348.348 0 0 1 .347.347v.882a.077.077 0 0 1-.077.077Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#FBDC00"
                  d="m4.091 3.797 6.345 1.08v4.589H4.09v-5.67Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M10.436 9.543H4.09a.077.077 0 0 1-.076-.077v-5.67a.077.077 0 0 1 .09-.075l6.344 1.08a.077.077 0 0 1 .063.075v4.59a.077.077 0 0 1-.076.077Zm-6.268-.154h6.19V4.94l-6.19-1.053v5.5Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#FBDC00"
                  d="m1.077 4.651 3.015-.855v5.67H1.077V4.65Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M4.091 9.542H1.077A.077.077 0 0 1 1 9.466V4.65a.077.077 0 0 1 .056-.074l3.014-.855a.077.077 0 0 1 .098.074v5.67a.077.077 0 0 1-.077.076ZM1.154 9.39h2.861V3.9l-2.861.81v4.68Zm8.216-.644a.077.077 0 0 1-.077-.077V5.643a.077.077 0 0 1 .153 0V8.67a.077.077 0 0 1-.076.077Zm-1.034 0a.077.077 0 0 1-.077-.077V5.491a.077.077 0 1 1 .154 0V8.67a.077.077 0 0 1-.077.077Zm-1.034 0a.077.077 0 0 1-.077-.077v-3.38a.077.077 0 1 1 .154 0v3.38a.077.077 0 0 1-.077.077Zm-1.033 0a.077.077 0 0 1-.077-.077V5.112a.077.077 0 0 1 .154 0V8.67a.077.077 0 0 1-.077.077Zm-1.034 0a.077.077 0 0 1-.077-.077V4.91a.077.077 0 0 1 .154 0v3.76a.077.077 0 0 1-.077.076Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M2.499 8.494a.077.077 0 0 1-.077-.077V5.282a.077.077 0 1 1 .153 0v3.135a.077.077 0 0 1-.076.077Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#fff"
                  d="M7.742 7.73v-.515l2.641-.761 2.485.805v.47H7.741Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M12.867 7.806H7.742a.077.077 0 0 1-.077-.077v-.514a.077.077 0 0 1 .056-.074l2.64-.761a.077.077 0 0 1 .046 0l2.484.806a.077.077 0 0 1 .053.073v.47a.077.077 0 0 1-.077.077ZM7.82 7.653h4.972v-.338l-2.41-.781-2.562.738v.38Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#fff"
                  d="M12.662 7.73H7.947v3.372h4.715V7.729Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M12.662 11.178H7.947a.077.077 0 0 1-.077-.076V7.729a.077.077 0 0 1 .077-.076h4.715a.077.077 0 0 1 .077.076v3.373a.077.077 0 0 1-.077.076Zm-4.638-.153h4.561V7.806H8.024v3.219Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#fff"
                  d="M12.078 8.223H8.531v2.879h3.547v-2.88Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M12.156 11.18H8.454V8.144h3.704v3.036Zm-3.547-.156h3.39V8.3H8.61v2.723Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M12.923 11.178H7.686a.077.077 0 0 1 0-.153h5.237a.077.077 0 1 1 0 .153ZM9.924 7.205h-.37v.153h.37v-.153Zm.623 0h-.369v.153h.37v-.153Zm.623 0h-.368v.153h.369v-.153Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#fff"
                  d="M6.091 3.817c0 .478.65 1.246.65 1.246s.65-.717.65-1.246c0-.384-.266-.74-.65-.74s-.65.356-.65.74Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M6.742 5.14H6.74a.077.077 0 0 1-.057-.027c-.027-.032-.668-.796-.668-1.296 0-.45.326-.817.728-.817.401 0 .727.366.727.817 0 .553-.643 1.268-.67 1.298a.077.077 0 0 1-.058.025Zm0-1.986c-.354 0-.574.344-.574.663 0 .364.42.93.576 1.126.156-.188.571-.724.571-1.126 0-.32-.22-.663-.573-.663Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#fff"
                  d="M6.742 4.058a.287.287 0 1 0 0-.573.287.287 0 0 0 0 .573Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M6.742 4.135a.364.364 0 1 1 0-.727.364.364 0 0 1 0 .727Zm0-.573a.21.21 0 1 0 0 .42.21.21 0 0 0 0-.42Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#fff"
                  d="M9.75 5.584c0 .478.65 1.247.65 1.247s.65-.718.65-1.247c0-.384-.266-.74-.65-.74-.383 0-.65.356-.65.74Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M10.4 6.907a.077.077 0 0 1-.058-.027c-.028-.032-.668-.795-.668-1.296 0-.45.326-.817.727-.817.4 0 .727.367.727.817 0 .553-.643 1.268-.67 1.298a.076.076 0 0 1-.058.025Zm0-1.986c-.354 0-.573.344-.573.663 0 .365.42.93.575 1.127.157-.188.572-.724.572-1.127 0-.319-.22-.663-.574-.663Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#fff"
                  d="M10.4 5.826a.287.287 0 1 0 0-.574.287.287 0 0 0 0 .574Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M10.4 5.903a.363.363 0 1 1 0-.727.363.363 0 0 1 0 .727Zm0-.574a.21.21 0 1 0 0 .42.21.21 0 0 0 0-.42Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#fff"
                  d="M10.058 9.83H8.936v.857h1.122V9.83Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M10.135 10.764H8.859v-1.01h1.276v1.01Zm-1.122-.154h.968v-.703h-.968v.703Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#fff"
                  d="M11.605 9.83h-1.122v.857h1.122V9.83Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M11.682 10.764h-1.276v-1.01h1.276v1.01Zm-1.121-.154h.968v-.703h-.968v.703Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#fff"
                  d="M10.058 8.666H8.936v.856h1.122v-.856Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M10.135 9.599H8.859v-1.01h1.276v1.01Zm-1.122-.154h.968v-.702h-.968v.702Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#fff"
                  d="M11.605 8.666h-1.122v.856h1.122v-.856Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M11.682 9.599h-1.276v-1.01h1.276v1.01Zm-1.121-.154h.968v-.702h-.968v.702Z"
                ></path>
                <path
                  className="ic-a-door_to_door_svg__ic_a_door_to_door"
                  fill="#231F20"
                  d="M10.942 9.185h-.395v.153h.395v-.153Zm-1.572 0h-.395v.153h.395v-.153Zm1.572 1.153h-.395v.154h.395v-.154Zm-1.572 0h-.395v.154h.395v-.154Z"
                ></path>
              </svg>
              <h4>
                Customs, CFS, & <br />
                Handling
              </h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square last-square" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-cif_svg__ic_a_cif"
                  fill="#fff"
                  d="M1.389 1.769h8.038L9.4 11.21l-1.128 1.501H1.39V1.77Z"
                ></path>
                <path
                  className="ic-a-cif_svg__ic_a_cif"
                  fill="#000"
                  d="M13 7.185c-.046.227-.07.463-.14.684-.41 1.307-1.287 2.125-2.624 2.435-.129.03-.274-.015-.423-.025 0 .285-.007.584.003.883a.472.472 0 0 1-.16.381c-.449.44-.892.886-1.335 1.333a.378.378 0 0 1-.29.123c-.741-.004-1.484 0-2.225-.003-.21 0-.337-.17-.251-.337.052-.103.143-.132.254-.132h2.059v-.71c0-.477.29-.765.766-.767h.71c0-.315.002-.619-.004-.922 0-.03-.053-.068-.091-.086-.803-.399-1.384-1.008-1.714-1.841-.112-.284-.176-.588-.267-.903H5.485c-.043 0-.087 0-.13-.008a.227.227 0 0 1-.189-.243.22.22 0 0 1 .22-.215c.172-.005.343-.002.515-.002h1.373V4.745H5.45c-.179 0-.28-.084-.284-.227a.224.224 0 0 1 .207-.239c.043-.004.086-.003.129-.003h2.553a.765.765 0 0 0 .217-.035c.325-.097.648-.203.972-.3.069-.021.1-.047.1-.126-.004-.504-.001-1.008-.003-1.512 0-.165-.082-.269-.226-.27-.566-.004-1.132-.002-1.716-.002v.235a.5.5 0 0 1-.508.515c-.993.002-1.984.002-2.976 0a.497.497 0 0 1-.504-.508v-.236c-.041-.002-.079-.006-.115-.006H1.76c-.21 0-.291.082-.291.29v9.922c0 .2.084.286.284.286h1.863c.15 0 .247.073.265.195.024.155-.083.272-.257.273-.437.002-.874 0-1.313 0H1.75c-.452 0-.749-.295-.75-.746V2.34c0-.494.284-.778.776-.778h1.635c0-.09.006-.174 0-.257-.011-.14.04-.242.168-.305h3.655c.126.063.18.163.168.305-.007.083 0 .167 0 .257H9.07c.444 0 .741.297.741.742v1.455c.046-.012.077-.015.104-.028.155-.074.303-.049.463.002.787.25 1.575.494 2.365.738.108.034.203.079.255.185v2.53L13 7.185ZM7.752 4.897c0 .677-.002 1.345 0 2.01a2.99 2.99 0 0 0 2.255 2.909.58.58 0 0 0 .262.003 2.992 2.992 0 0 0 2.261-2.905c.003-.64 0-1.28 0-1.92v-.087c-.014-.009-.02-.015-.026-.017-.77-.242-1.538-.482-2.308-.722a.202.202 0 0 0-.115.003c-.774.24-1.548.483-2.33.727v-.001ZM3.884 1.47c0 .244.005.477-.003.71-.003.101.025.133.13.131.89-.004 1.778-.002 2.668-.002.17 0 .256-.086.256-.258V1.47H3.884Zm4.454 10.665.618-.616c-.113 0-.25-.004-.385 0a.23.23 0 0 0-.231.23c-.006.135 0 .272 0 .385l-.002.001Z"
                ></path>
                <path
                  className="ic-a-cif_svg__ic_a_cif"
                  fill="#000"
                  d="M6.443 9.854H5.437c-.166 0-.266-.09-.267-.23-.003-.136.091-.235.235-.236.238-.004.476-.001.714-.001h1.358c.167 0 .27.101.262.246-.008.135-.107.22-.266.22-.343.002-.686 0-1.03 0Z"
                ></path>
                <path
                  className="ic-a-cif_svg__ic_a_cif"
                  fill="#FDDE01"
                  stroke="#000"
                  stroke-width="0.082"
                  d="m2.66 10.409.03-.029a.235.235 0 0 1-.074-.15.181.181 0 0 1 .057-.136.181.181 0 0 1 .136-.057.235.235 0 0 1 .152.07c.033.029.063.06.095.094l.019.02c.028.028.054.059.086.095l.032.037.03.033.03-.031.001-.001.653-.655.049-.049c.038-.04.075-.078.116-.113a.216.216 0 0 1 .141-.059c.045 0 .09.018.13.056a.187.187 0 0 1 .058.13.218.218 0 0 1-.054.142l.032.026m-1.718.577.03-.029c.099.103.2.203.301.303l.062.061c.072.071.128.1.178.1.049 0 .104-.027.175-.097.227-.225.452-.45.677-.676l.226-.226a.59.59 0 0 0 .038-.04l.031.027m-1.718.577c.1.103.201.203.303.303l.061.061c.148.147.264.15.411.003l.678-.676.225-.226a.627.627 0 0 0 .04-.042m-1.718.577 1.384-.903c.105-.092.234-.092.326 0 .093.09.095.219.008.326M2.66 7.891l.03-.028a.235.235 0 0 1-.074-.15.181.181 0 0 1 .057-.136.181.181 0 0 1 .136-.058.235.235 0 0 1 .152.07c.033.03.063.061.095.094l.019.02c.028.029.054.059.086.095l.032.037.03.033.03-.031.001-.001.653-.655.049-.049c.038-.039.075-.077.116-.112a.216.216 0 0 1 .141-.06c.045 0 .09.018.13.056.039.04.057.084.058.13a.218.218 0 0 1-.054.142l.032.026m-1.718.577.03-.028c.099.102.2.202.301.302l.062.061c.072.071.128.1.178.1.049 0 .104-.026.175-.097a196.995 196.995 0 0 0 .94-.942l.032.027m-1.718.577c.1.103.201.203.303.304l.061.06c.148.147.264.15.411.003.227-.224.452-.45.678-.676l.225-.225.04-.043m-1.718.577 1.384-.902c.105-.093.234-.093.326-.002.093.091.095.22.008.327M2.66 5.261l.03-.029a.235.235 0 0 1-.074-.15.181.181 0 0 1 .057-.136.181.181 0 0 1 .136-.057.235.235 0 0 1 .152.07c.033.029.063.06.095.094l.019.02c.028.028.054.059.086.095l.032.037.03.033.03-.031.001-.001.653-.655.049-.049c.038-.04.075-.077.116-.113a.216.216 0 0 1 .141-.059c.045 0 .09.018.13.056a.187.187 0 0 1 .058.13.218.218 0 0 1-.054.142l.032.026m-1.718.577.03-.029c.099.103.2.203.301.303l.062.061c.072.071.128.1.178.1.049 0 .104-.027.175-.097a196.995 196.995 0 0 0 .94-.942l.032.027m-1.718.577c.1.103.201.203.303.304l.061.06c.148.147.264.15.411.003a196.224 196.224 0 0 0 .903-.902l.04-.042m-1.718.577 1.384-.903c.105-.092.234-.092.326 0 .093.09.095.219.008.326"
                ></path>
                <path
                  className="ic-a-cif_svg__ic_a_cif"
                  fill="#000"
                  d="M6.2 10.881c-.261 0-.521.005-.783-.001-.203-.005-.324-.207-.21-.357a.3.3 0 0 1 .205-.105 70.92 70.92 0 0 1 1.578-.004c.148 0 .244.091.248.223.004.135-.092.239-.243.243-.266.005-.53.001-.795.001Zm-.242-3.024c.176 0 .351-.002.526 0 .152.003.255.099.255.232 0 .132-.102.232-.254.234-.355.004-.709.004-1.064 0-.156-.002-.251-.097-.251-.234 0-.138.095-.23.251-.232.18-.004.359 0 .537 0Zm-.025-2.553c.168 0 .336-.003.504 0 .15.003.244.092.25.224.005.135-.094.239-.245.242-.343.005-.687.005-1.03 0-.154-.003-.247-.105-.242-.244.004-.132.097-.22.25-.222.171-.004.343 0 .515 0h-.002Z"
                ></path>
                <path
                  className="ic-a-cif_svg__ic_a_cif"
                  fill="#fff"
                  d="M7.752 4.897c.783-.245 1.557-.487 2.33-.727a.214.214 0 0 1 .115-.003l2.309.722.026.017v.087c0 .64.002 1.28 0 1.92a2.993 2.993 0 0 1-2.262 2.904.539.539 0 0 1-.262-.002 2.99 2.99 0 0 1-2.255-2.909c-.003-.667 0-1.334 0-2.01h-.001Zm4.331 1.362h-.02V5.45c0-.15-.052-.223-.196-.268a194.09 194.09 0 0 0-1.641-.51.316.316 0 0 0-.17 0c-.548.167-1.096.338-1.642.51-.138.043-.194.117-.194.257 0 .523-.008 1.048.003 1.57.02 1.07.796 2.057 1.827 2.336a.341.341 0 0 0 .18 0c.97-.307 1.577-.96 1.776-1.955.074-.366.054-.753.076-1.13l.001-.002ZM3.884 1.472h3.05v.583c0 .172-.086.257-.257.257-.89 0-1.778 0-2.667.003-.106 0-.133-.03-.13-.131.007-.233.002-.467.002-.71l.002-.002Zm4.454 10.664c0-.113-.004-.25 0-.385a.228.228 0 0 1 .232-.23c.135-.005.272 0 .385 0l-.618.617.001-.002Z"
                ></path>
                <path
                  className="ic-a-cif_svg__ic_a_cif"
                  fill="#000"
                  d="M12.084 6.259c-.022.377-.001.763-.075 1.13-.2.995-.807 1.647-1.776 1.955a.34.34 0 0 1-.18 0c-1.032-.28-1.807-1.266-1.828-2.336-.01-.523-.002-1.047-.002-1.57 0-.14.056-.213.193-.258.547-.171 1.094-.342 1.642-.51a.303.303 0 0 1 .17 0c.548.167 1.095.339 1.642.51.143.046.194.119.195.268v.808h.02v.003ZM8.69 6.35h.002c0 .222-.006.445 0 .667.026.794.582 1.553 1.327 1.826a.332.332 0 0 0 .247 0 2.07 2.07 0 0 0 1.325-1.874c.008-.425 0-.85.006-1.276 0-.088-.032-.12-.11-.144-.421-.128-.84-.262-1.261-.39a.281.281 0 0 0-.158 0c-.432.13-.862.27-1.294.4-.074.022-.086.059-.084.125.002.222 0 .445 0 .667V6.35Z"
                ></path>
                <path
                  className="ic-a-cif_svg__ic_a_cif"
                  fill="#FDDE01"
                  d="M8.69 6.35v-.666c0-.065.01-.103.084-.125.433-.13.862-.27 1.294-.4a.294.294 0 0 1 .158 0c.421.128.84.262 1.261.39.078.023.11.055.11.144-.006.425.002.85-.006 1.276a2.07 2.07 0 0 1-1.325 1.874.332.332 0 0 1-.247 0c-.745-.273-1.3-1.031-1.327-1.826-.008-.223 0-.445 0-.667H8.69Zm1.235.807c-.129-.134-.243-.26-.365-.38-.102-.098-.244-.094-.335 0a.224.224 0 0 0 .003.324c.178.185.36.367.545.545a.224.224 0 0 0 .317 0c.325-.32.648-.642.967-.967a.224.224 0 0 0 .008-.318c-.095-.105-.245-.101-.36.013-.254.253-.507.508-.78.782v.001Z"
                ></path>
                <path
                  className="ic-a-cif_svg__ic_a_cif"
                  fill="#000"
                  d="M9.983 6.749c.181-.18.344-.35.515-.51a.504.504 0 0 1 .835.22.457.457 0 0 1-.112.473c-.357.36-.718.714-1.08 1.067-.1.098-.207.093-.311-.008a54.808 54.808 0 0 1-.623-.615.493.493 0 0 1-.004-.709.513.513 0 0 1 .719.004c.02.018.033.041.061.078Zm.004.832.074-.066.814-.804c.015-.014.039-.027.041-.043.006-.046.018-.105-.004-.139-.015-.02-.088-.01-.132-.001-.022.004-.04.035-.058.053-.189.187-.375.373-.565.557-.113.11-.22.109-.334 0l-.179-.177c-.047-.044-.102-.057-.152-.01-.05.05-.039.103.009.15l.487.481h-.001Z"
                ></path>
              </svg>
              <h4>
                Customs, CFS, & <br />
                Handling
              </h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
          </div>
        </div>
        <div className="row3">
          <div className="text" style={{ fontSize: "24px" }}>
            <h4>Financial Services</h4>
          </div>
          <div className="abc">
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="60"
                height="60"
                role="img"
                src="/iccpaylater.svg"
              >
                <path
                  className="ic-a-pay_later_svg__ic_a_pay_later"
                  fill="#fff"
                  stroke="#060606"
                  stroke-miterlimit="10"
                  stroke-width="0.24"
                  d="M8.812 1.214h-5.16c-.636 0-1.152.516-1.152 1.152v9.268c0 .636.516 1.152 1.152 1.152h5.16c.636 0 1.152-.516 1.152-1.152V2.366c0-.636-.516-1.152-1.152-1.152Z"
                ></path>
                <path
                  className="ic-a-pay_later_svg__ic_a_pay_later"
                  stroke="#060606"
                  stroke-miterlimit="10"
                  stroke-width="0.24"
                  d="M2.5 2.954h7.464M2.5 11.383h7.464"
                ></path>
                <path
                  className="ic-a-pay_later_svg__ic_a_pay_later"
                  fill="#FBDC00"
                  stroke="#000"
                  stroke-miterlimit="10"
                  stroke-width="0.269"
                  d="M8.103 10.492a3.397 3.397 0 1 0 0-6.795 3.397 3.397 0 0 0 0 6.795Z"
                ></path>
                <path
                  className="ic-a-pay_later_svg__ic_a_pay_later"
                  stroke="#060606"
                  stroke-miterlimit="10"
                  stroke-width="0.24"
                  d="M5.215 5.31H3.941m-.358 0h-.354m.354 1.925h-.354m.354 1.847h-.354m1.647-2.798H3.23m1.588.951h-.877m1.437 1.847H3.94m.833-.948H3.229"
                ></path>
                <path
                  className="ic-a-pay_later_svg__ic_a_pay_later"
                  fill="#000"
                  d="M8.434 4.49H7.88v1.175h.554V4.49Zm0 3.942H7.88V9.51h.554V8.432Z"
                ></path>
                <path
                  className="ic-a-pay_later_svg__ic_a_pay_later"
                  stroke="#000"
                  stroke-miterlimit="10"
                  stroke-width="0.24"
                  d="M9.348 6.297V5.75l-.262-.226H7.204l-.238.285v.934l.214.217h1.863l.298.222v1.08l-.286.324h-1.78l-.25-.166v-.546"
                ></path>
              </svg>
              <h4>
                Customs, CFS, & <br />
                Handling
              </h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="60"
                height="60"
                role="img"
                src="/icctrade.svg"
              >
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  d="M9.545 10.056a.108.108 0 0 1-.076-.031l-.636-.636a.107.107 0 0 1 0-.15.107.107 0 0 1 .15 0l.636.636a.107.107 0 0 1 0 .15.107.107 0 0 1-.074.031Zm.932-2.403h-.92a.108.108 0 0 1 0-.215h.92a.108.108 0 0 1 0 .215ZM8.738 5.947a.107.107 0 0 1-.075-.032.107.107 0 0 1 0-.15l.488-.488a.107.107 0 0 1 .15 0 .108.108 0 0 1 0 .15l-.489.488a.108.108 0 0 1-.074.032ZM7.032 5.28a.108.108 0 0 1-.107-.108V3.813a.107.107 0 1 1 .215 0v1.359a.108.108 0 0 1-.107.108Zm-1.647.725a.107.107 0 0 1-.076-.031l-.546-.546a.108.108 0 0 1 0-.15.108.108 0 0 1 .15 0l.546.546a.108.108 0 0 1 0 .15.107.107 0 0 1-.074.031Zm-.767 1.648h-1.45a.108.108 0 0 1 0-.215h1.45a.107.107 0 1 1 0 .215Zm.076 2.337a.108.108 0 0 1-.075-.031.108.108 0 0 1 0-.15l.556-.557a.107.107 0 0 1 .15 0 .107.107 0 0 1 0 .15l-.557.557a.108.108 0 0 1-.074.031Zm2.338 1.108a.108.108 0 0 1-.107-.108v-.918a.107.107 0 0 1 .107-.108.108.108 0 0 1 .108.107v.921a.107.107 0 0 1-.107.105Z"
                  fill="#231F20"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#FBDC00"
                  d="M7.032 4.074a.92.92 0 1 0 0-1.84.92.92 0 0 0 0 1.84Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M7.033 4.183a1.03 1.03 0 0 1-.727-1.755 1.029 1.029 0 0 1 1.755.727 1.03 1.03 0 0 1-1.028 1.028Zm0-1.841a.814.814 0 1 0 0 1.627.814.814 0 0 0 0-1.627Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#FBDC00"
                  d="M7.025 12.892a.92.92 0 1 0 0-1.841.92.92 0 0 0 0 1.841Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M7.025 13a1.03 1.03 0 0 1 0-2.056 1.03 1.03 0 0 1 .727 1.754 1.03 1.03 0 0 1-.727.302Zm0-1.841a.814.814 0 1 0 .002 1.627.814.814 0 0 0-.002-1.627Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#FBDC00"
                  d="M11.535 8.465a.92.92 0 1 0 0-1.84.92.92 0 0 0 0 1.84Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M11.535 8.573a1.03 1.03 0 0 1-.726-1.754 1.03 1.03 0 0 1 1.453 0 1.03 1.03 0 0 1 0 1.453 1.03 1.03 0 0 1-.727.301Zm0-1.84a.814.814 0 1 0 .001 1.627.814.814 0 0 0-.001-1.628Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#FBDC00"
                  d="M2.465 8.465a.92.92 0 1 0 0-1.84.92.92 0 0 0 0 1.84Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M2.465 8.573a1.03 1.03 0 0 1-.726-1.754 1.03 1.03 0 0 1 1.452 0 1.03 1.03 0 0 1 0 1.453 1.03 1.03 0 0 1-.726.301Zm0-1.84a.814.814 0 0 0 0 1.625.814.814 0 0 0 0-1.626Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#fff"
                  d="M4.264 5.467a.69.69 0 1 0 0-1.381.69.69 0 0 0 0 1.38Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M4.263 5.574A.796.796 0 0 1 3.7 4.212a.793.793 0 0 1 .87-.174.792.792 0 0 1 .432.433.792.792 0 0 1 0 .61.793.793 0 0 1-.738.493Zm0-1.38a.58.58 0 0 0-.582.582.584.584 0 1 0 .582-.582Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#fff"
                  d="M10.017 11.082a.69.69 0 1 0 0-1.381.69.69 0 0 0 0 1.381Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M10.017 11.187a.792.792 0 0 1-.738-.493.792.792 0 0 1 0-.61.793.793 0 0 1 .738-.492.8.8 0 0 1 .564.232.8.8 0 0 1-.564 1.363Zm0-1.38a.581.581 0 1 0 0 1.165.58.58 0 1 0 0-1.163v-.002Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#fff"
                  d="M9.802 5.467a.69.69 0 1 0 0-1.381.69.69 0 0 0 0 1.38Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M9.802 5.574a.796.796 0 0 1-.738-1.103.793.793 0 0 1 .432-.433.793.793 0 0 1 .611 0 .792.792 0 0 1 .432.433.792.792 0 0 1 0 .61.793.793 0 0 1-.432.433c-.097.04-.2.06-.305.06Zm0-1.38a.58.58 0 0 0-.583.582.58.58 0 0 0 .583.583.584.584 0 0 0 0-1.165Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#fff"
                  d="M4.217 11.052a.69.69 0 1 0 0-1.382.69.69 0 0 0 0 1.382Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M4.217 11.159a.793.793 0 0 1-.738-.493.792.792 0 0 1 0-.61.8.8 0 0 1 1.476.611.792.792 0 0 1-.432.432.802.802 0 0 1-.306.06Zm0-1.38a.582.582 0 1 0-.001 1.163.582.582 0 0 0 .001-1.164Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#fff"
                  d="M7.01 9.978a2.393 2.393 0 1 0 0-4.786 2.393 2.393 0 0 0 0 4.786Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M7.01 10.084a2.503 2.503 0 0 1-2.5-2.5 2.503 2.503 0 0 1 2.5-2.5 2.504 2.504 0 0 1 2.5 2.5 2.504 2.504 0 0 1-2.5 2.5Zm0-4.786a2.288 2.288 0 0 0-2.285 2.285A2.288 2.288 0 0 0 7.011 9.87a2.288 2.288 0 0 0 2.285-2.286A2.288 2.288 0 0 0 7.011 5.3v-.002Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#FFF2EE"
                  d="M7.96 7.155h-.357v1.256h.357V7.155Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M8.067 8.519h-.572V7.048h.572v1.471Zm-.356-.216h.141v-1.04h-.141v1.04Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#FFF2EE"
                  d="M7.172 7.155h-.357v1.256h.357V7.155Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M7.28 8.519h-.57V7.048h.572L7.28 8.519Zm-.357-.216h.141v-1.04h-.141v1.04Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#FFF2EE"
                  d="M6.385 7.155h-.357v1.256h.357V7.155Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M6.492 8.519H5.92V7.048h.572v1.471Zm-.356-.216h.141v-1.04h-.141v1.04Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#FFF2EE"
                  d="M6.968 5.829a.05.05 0 0 1 .05 0 90.569 90.569 0 0 1 1.527.993c-.036-.011-2.837 0-3.087 0h-.003a.006.006 0 0 1-.002-.007l.002-.003 1.513-.983Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="m8.605 6.953-.08-.025c-.144-.006-1.63-.004-3.066 0h-.08l-.05-.157.069-.05 1.514-.984a.155.155 0 0 1 .168 0c.1.066.484.311.842.542.37.24.562.365.657.439h.002c.1.078.088.1.066.147l-.042.088ZM6.995 5.94l-1.188.773a337.38 337.38 0 0 1 2.379-.003c-.257-.168-.67-.434-1.191-.77Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#020202"
                  d="M6.994 6.588a.203.203 0 1 0 0-.407.203.203 0 0 0 0 .407Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#FFF2EE"
                  d="M8.283 6.822H5.706v.333h2.577v-.333Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M8.39 7.263H5.599v-.55h2.793v.55Zm-2.576-.215h2.361v-.119H5.814v.119Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#FFF2EE"
                  d="M8.283 8.411H5.706v.406h2.577v-.406Z"
                ></path>
                <path
                  className="ic-a-trade_finance_svg__ic_a_trade_finance"
                  fill="#231F20"
                  d="M8.39 8.925H5.599v-.622h2.793v.622Zm-2.576-.216h2.361v-.19H5.814v.19Z"
                ></path>
              </svg>
              <h4>
                Customs, CFS, & <br />
                Handling
              </h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square empty-square" ></div>
            <div className="square square empty-square last-square"  ></div>
          </div>
        </div>
        <div className="row3">
          <div className="text" style={{ fontSize: "24px" }}>
            <h4>
              Trade Management <br />
              Solutions
            </h4>
          </div>
          <div className="abc">
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-freight_rates_schedules_svg__ic_a_freight_rates_schedules"
                  fill="#FBDC00"
                  d="M1.48 5.03h9.865v6.176H1.48V5.03Z"
                ></path>
                <path
                  className="ic-a-freight_rates_schedules_svg__ic_a_freight_rates_schedules"
                  fill="#000"
                  d="M1.064 2.914c.019-.043.035-.089.056-.132.125-.265.327-.447.633-.463.334-.018.67-.013 1.004-.009.17.002.278.118.274.261-.005.15-.119.252-.295.254-.285.003-.573 0-.858 0-.192 0-.283.089-.283.277v1.783c0 .034.005.065.007.104h9.079c.002-.039.007-.073.007-.109V3.11c0-.2-.084-.285-.288-.285-.262 0-.526.003-.788 0-.186-.002-.297-.1-.297-.26 0-.15.113-.257.29-.257.32 0 .64-.01.957.013.353.025.654.35.654.697.005 1.015.003 2.028.003 3.043 0 .018-.005.036-.007.059l-.529-.137v-.465H1.588v4.929c0 .23.074.302.313.302 1.368 0 2.737.002 4.105-.002.109 0 .162.02.188.136.027.127.085.247.136.388H1.862c-.404 0-.675-.207-.782-.593-.002-.009-.011-.018-.018-.027.002-2.577.002-5.156.002-7.737Z"
                ></path>
                <path
                  className="ic-a-freight_rates_schedules_svg__ic_a_freight_rates_schedules"
                  fill="#000"
                  d="M9.622 12.677c-.172-.036-.346-.063-.517-.109-1.236-.327-2.127-1.378-2.227-2.624-.106-1.338.708-2.618 1.992-3.045 1.86-.615 3.71.513 4.021 2.311.012.073.03.146.044.218v.545c-.007.016-.018.032-.018.05-.14 1.203-.974 2.184-2.16 2.53-.19.054-.386.08-.581.122-.183.002-.369.002-.554.002Zm.252-5.43c-1.407.002-2.52 1.087-2.52 2.458 0 1.374 1.15 2.498 2.553 2.495 1.405-.002 2.537-1.123 2.546-2.5.01-1.457-1.333-2.48-2.579-2.454ZM4.101 1.325c.035.014.07.027.105.043.171.075.266.198.266.386-.002.51-.018 1.022.005 1.53.018.409-.396.572-.698.447-.174-.07-.269-.193-.269-.383 0-.534-.002-1.067 0-1.598 0-.196.093-.316.278-.388a1.03 1.03 0 0 0 .082-.04c.076.003.155.003.231.003Zm4.289 0c.073.034.149.059.214.104.104.07.158.173.158.3 0 .547.002 1.096 0 1.643-.003.245-.253.43-.531.4-.283-.032-.425-.186-.425-.466V1.788c0-.245.08-.352.316-.44.014-.005.025-.016.037-.023h.232ZM3.002 9.75H2.48c-.107 0-.155-.05-.153-.152 0-.245.002-.49 0-.738 0-.106.056-.152.158-.152.343 0 .686-.002 1.029 0 .118 0 .158.043.16.16.002.242.002.483 0 .726 0 .115-.042.154-.162.154-.172.002-.341.002-.51.002Zm.119-3.298h.522c.107 0 .155.05.155.152-.002.245 0 .49 0 .735 0 .098-.048.15-.146.15-.35.002-.7.002-1.05 0-.104 0-.15-.057-.15-.159.002-.24 0-.483 0-.724 0-.12.037-.154.162-.154.169-.002.338 0 .507 0Zm2.091 1.041c-.165 0-.331.002-.496 0-.125-.002-.165-.04-.165-.163 0-.239-.002-.477 0-.715 0-.12.042-.161.17-.161a56.45 56.45 0 0 1 1.008 0c.132 0 .17.038.17.172v.704c0 .125-.04.163-.165.165l-.522-.002ZM5.098 9.75h-.51c-.125 0-.165-.039-.165-.164a36.722 36.722 0 0 1 0-.715c0-.12.042-.16.167-.16.341-.003.68-.003 1.02 0 .116 0 .158.042.16.158 0 .243.003.483 0 .726 0 .114-.041.155-.162.157-.171-.002-.34-.002-.51-.002Zm1.01-6.924h-.846c-.174 0-.29-.1-.297-.252-.007-.143.116-.265.286-.265.58-.003 1.159-.003 1.738 0 .167 0 .283.113.285.254 0 .159-.116.263-.296.263h-.87ZM7.93 6.472c-.228.188-.453.363-.664.554-.134.122-.25.268-.364.408-.046.06-.102.08-.157.048-.044-.023-.098-.077-.098-.12a14.6 14.6 0 0 1-.002-.781c0-.07.04-.127.12-.127.374-.002.75 0 1.123.002.013 0 .027.01.041.016Z"
                ></path>
                <path
                  className="ic-a-freight_rates_schedules_svg__ic_a_freight_rates_schedules"
                  fill="#FBDC00"
                  d="M9.875 7.246c1.245-.028 2.588.996 2.579 2.452-.01 1.375-1.141 2.497-2.547 2.5-1.402.002-2.55-1.122-2.553-2.496 0-1.369 1.113-2.454 2.521-2.456Zm.213 2.529V8.524c0-.045 0-.09-.011-.134-.042-.148-.179-.23-.339-.209a.292.292 0 0 0-.255.302c-.002.515 0 1.029 0 1.544 0 .24.114.352.362.352h1.136a.804.804 0 0 0 .128-.01.289.289 0 0 0 .239-.292.29.29 0 0 0-.244-.289c-.056-.009-.116-.009-.174-.01-.278-.003-.552-.003-.842-.003Z"
                ></path>
                <path
                  className="ic-a-freight_rates_schedules_svg__ic_a_freight_rates_schedules"
                  fill="#000"
                  d="M9.447 9.094c0 .225.162.41.387.443.093.015.19.017.282.04a.849.849 0 0 1 .638.759c.031.341-.17.7-.497.833-.134.055-.205.109-.189.266.012.107-.086.186-.188.19-.103.001-.186-.075-.2-.183a.351.351 0 0 1-.002-.095c.014-.09-.025-.129-.108-.164-.31-.133-.48-.378-.52-.711-.02-.152.057-.26.182-.27.121-.01.203.077.218.229.023.25.21.42.46.42a.447.447 0 0 0 .444-.413.442.442 0 0 0-.393-.483c-.183-.022-.362-.038-.52-.145-.277-.186-.413-.45-.388-.779a.81.81 0 0 1 .521-.722c.086-.036.117-.078.105-.164a.352.352 0 0 1 .004-.095.197.197 0 0 1 .195-.174c.102 0 .203.08.191.184-.017.16.061.207.191.265.306.133.463.386.495.716.015.142-.068.247-.19.252-.115.006-.196-.081-.21-.224a.457.457 0 0 0-.466-.43.45.45 0 0 0-.442.455Z"
                ></path>
              </svg>
              <h4>
                Customs, CFS, & <br />
                Handling
              </h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-professional_quotations_svg__ic_a_professional_quotations"
                  fill="#FEDE00"
                  d="M2.334 1.29v11.5h9.492l-.23-9.882-.35-.22-.789-.04V1.81l-.13-.51s-.06.21-.5 0c-.439-.21-7.493-.01-7.493-.01Z"
                ></path>
                <path
                  className="ic-a-professional_quotations_svg__ic_a_professional_quotations"
                  fill="#fff"
                  d="M4.652 5.356a1.649 1.649 0 1 0 0-3.297 1.649 1.649 0 0 0 0 3.297Z"
                ></path>
                <path
                  className="ic-a-professional_quotations_svg__ic_a_professional_quotations"
                  fill="#000"
                  d="M2.004 6.995V1.3c0-.25.05-.3.3-.3h8.613c.66 0 1.079.42 1.079 1.08v10.63c0 .23-.06.29-.29.29H2.294c-.23-.01-.29-.07-.29-.3V6.995Zm.41-5.595v11.18h9.172V2.998h-.939c-.18 0-.25-.07-.25-.25V1.89c0-.34-.15-.49-.48-.49H2.415Zm9.182 1.189c0-.23.01-.44 0-.66a.585.585 0 0 0-.51-.53c-.12-.01-.25 0-.38 0 .18.39.06.79.11 1.19h.78Z"
                ></path>
                <path
                  className="ic-a-professional_quotations_svg__ic_a_professional_quotations"
                  fill="#000"
                  d="M9.018 4.507h1.619c.1.02.16.09.16.19s-.06.17-.16.2c-.04.01-.09.01-.14.01H7.41c-.12-.01-.2-.09-.2-.2 0-.11.08-.2.21-.2h1.598Zm-.03 6.914H7.45c-.07 0-.15-.02-.19-.06-.04-.04-.07-.14-.05-.19.02-.06.1-.1.16-.14.03-.02.07-.01.11-.01h3.117c.12.01.2.09.2.19 0 .11-.08.2-.21.2h-.6c-.33.01-.659.01-.999.01Zm.61-7.623h.949c.16 0 .25.08.25.2 0 .12-.09.2-.25.2H8.649c-.16 0-.25-.08-.25-.2 0-.12.09-.2.25-.2h.949Zm-4.387-.48c0 .11-.07.19-.17.21-.1.01-.18-.06-.21-.16a.336.336 0 0 0-.05-.14c-.04-.08-.11-.1-.199-.06-.08.03-.12.1-.11.18.01.09.06.15.15.17.06.01.12.01.17.02a.554.554 0 0 1 .15 1.02c-.06.039-.1.059-.11.139-.02.09-.09.13-.18.13s-.14-.06-.18-.14a.313.313 0 0 0-.08-.11.562.562 0 0 1-.29-.44c-.02-.13.05-.23.16-.24.11-.01.19.06.21.19.01.1.06.17.16.17.06 0 .15-.04.18-.09.03-.05.02-.14-.01-.2a.338.338 0 0 0-.16-.07c-.28-.03-.48-.19-.53-.449-.05-.24.06-.47.3-.61.03-.02.05-.05.06-.08.03-.1.09-.16.19-.15.1 0 .15.06.18.15.01.04.04.08.08.1.18.09.29.27.29.46Z"
                ></path>
              </svg>
              <h4>
                Customs, CFS, & <br />
                Handling
              </h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 15"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#FDDE00"
                  d="M9.234 1.128H1.863v10.178h7.37V1.128Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#000"
                  d="M5.604 3.696c-.006.1-.046.16-.132.18-.084.02-.153-.007-.192-.086-.034-.069-.052-.147-.089-.213-.017-.032-.062-.067-.094-.07a7.198 7.198 0 0 0-.527 0c-.034.002-.08.036-.097.067-.033.055-.046.122-.073.182-.046.108-.134.15-.229.115-.093-.034-.135-.13-.095-.24.084-.233.173-.463.26-.693.097-.255.193-.512.288-.769.038-.103.098-.177.215-.175.11.002.169.072.206.172l.535 1.442c.011.032.019.066.025.087h-.001Zm-.771-1.09-.204.542h.405l-.202-.542Zm1.864-.03c.123-.175.235-.34.352-.501.055-.077.13-.108.22-.062.083.041.114.113.091.203-.01.04-.038.075-.062.11l-.387.558.417.605c.025.035.05.068.072.105.061.097.049.2-.03.257-.08.06-.182.041-.25-.052-.119-.165-.233-.334-.35-.502l-.075-.102c-.139.199-.268.393-.408.578a.274.274 0 0 1-.164.104c-.046.005-.127-.042-.143-.084a.258.258 0 0 1 .017-.2 8.57 8.57 0 0 1 .413-.598c.062-.083.063-.138 0-.22-.117-.152-.221-.314-.33-.473-.075-.11-.066-.212.02-.275.089-.064.184-.04.262.072.109.154.216.31.333.478h.002Zm-3.82-.234c-.088 0-.164.003-.24 0-.107-.005-.174-.074-.173-.174 0-.1.068-.172.175-.173.275-.003.55-.003.825 0 .11 0 .188.082.183.18-.003.096-.076.163-.183.168l-.218.007c-.003 0-.005.004-.023.018v.124c0 .403 0 .806-.002 1.208 0 .112-.067.18-.166.183-.099.003-.171-.072-.179-.185V2.343l.001-.001Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#FDDE00"
                  d="m10.242 6.664-.783.232v-4.47c.208 0 .417-.008.623.002.085.005.142.073.153.164.006.042.006.085.006.127v3.945Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M8.34 9.354v.406h-.396v-.406h.396Zm.009-1.534c0 .117.003.232-.003.346-.001.022-.04.056-.063.057-.108.006-.218.003-.336.003V7.82h.402Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#000"
                  d="M6.816 6.681H2.633v-.4h4.183v.4Zm.001.612v.4h-4.19v-.4h4.19ZM2.628 8.728v-.406h4.189v.406h-4.19Zm0-3.095v-.406h4.188v.406H2.628Zm5.316.644h.395v.4h-.395v-.4Zm.396-1.135h-.393v-.408h.393v.408Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#FDDE00"
                  d="M10.42 10.586H9.226v.95H2.908v1.032h7.426v-.317h.086v-1.665Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#000"
                  d="M10.595 10.892a2.112 2.112 0 0 0 1.895-2.078 2.053 2.053 0 0 0-.403-1.269c-.37-.505-.871-.78-1.492-.855V2.676c0-.295-.154-.521-.41-.586-.087-.023-.18-.02-.271-.023-.151-.003-.303 0-.462 0 0-.21.003-.404 0-.597a.55.55 0 0 0-.546-.554L2.066.915a.529.529 0 0 0-.543.491c-.019.22-.013.443-.01.664H1.51v8.945c0 .422.217.641.636.643h.503v.567c.001.304.167.483.433.586h7.083c.33-.123.45-.37.433-.716-.013-.27-.003-.542-.003-.813v-.392.002ZM9.46 2.426c.208 0 .417-.008.623.003.085.004.142.072.153.163a.907.907 0 0 1 .006.128v3.943l-.783.232v-4.47Zm-7.301 8.877c-.038 0-.08.009-.114-.004-.051-.02-.117-.043-.14-.084a.465.465 0 0 1-.04-.21c-.002-2.648 0-5.295-.002-7.944v-.99c.002-.182 0-.363 0-.545 0-.187.073-.263.253-.263h6.737c.173 0 .254.08.254.255v5.564c0 .035-.01.08-.031.105-.137.154-.28.305-.422.458a.374.374 0 0 0-.32-.188c-.13-.003-.26-.008-.39 0-.218.012-.349.151-.357.374a5.487 5.487 0 0 0 0 .349c.005.256.15.399.402.4h.359V9c-.143 0-.28-.004-.416 0a.332.332 0 0 0-.334.303 3.155 3.155 0 0 0 0 .51.337.337 0 0 0 .336.3c.11.003.222-.005.333.003.173.012.305-.048.387-.19.139.151.28.302.416.457a.19.19 0 0 1 .036.114c.005.167.002.332.002.5 0 .246-.058.305-.304.305H2.159v.001Zm6.186-3.137c-.001.021-.04.055-.063.056-.108.007-.218.004-.336.004v-.407h.402c0 .118.003.232-.003.347ZM8.34 9.353v.407h-.396v-.407h.396Zm1.902 1.825v.988c0 .233-.064.297-.29.297H3.493c-.09 0-.181.002-.272 0-.13-.004-.213-.077-.218-.205C2.995 12.065 3 11.87 3 11.66h.151l5.635-.001c.09 0 .184-.004.27-.027a.544.544 0 0 0 .395-.524c.003-.147 0-.294 0-.431l.79.235v.268-.003Zm.17-.644c-.945 0-1.717-.784-1.717-1.743 0-.97.765-1.748 1.722-1.748.958 0 1.723.775 1.722 1.745a1.73 1.73 0 0 1-1.726 1.746Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#FBDC00"
                  d="M11.919 6.57H8.128c-.73 0-.499.592-.499 1.322v3.784c0 .73-.138 1.322.592 1.322h3.698c.73 0 .48-.592.48-1.322V7.892c0-.73.25-1.322-.48-1.322Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M11.992 13.089H8.038a.498.498 0 0 1-.497-.497V6.979a.498.498 0 0 1 .497-.497h3.954a.498.498 0 0 1 .498.497v5.613a.497.497 0 0 1-.498.497Zm-3.954-6.43a.319.319 0 0 0-.319.32v5.612a.319.319 0 0 0 .319.319h3.954a.32.32 0 0 0 .319-.319V6.978a.32.32 0 0 0-.319-.318H8.038Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M11.665 7.22H8.317c-.292 0-.232.238-.232.53 0 .293-.06.53.232.53h3.348c.293 0 .284-.237.284-.53 0-.292.01-.53-.284-.53Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M11.756 8.369H8.274a.28.28 0 0 1-.28-.28V7.41a.28.28 0 0 1 .28-.28h3.482a.28.28 0 0 1 .28.28v.677a.28.28 0 0 1-.28.28Zm-3.482-1.06a.102.102 0 0 0-.102.102v.677a.102.102 0 0 0 .102.102h3.482a.102.102 0 0 0 .101-.102v-.677a.102.102 0 0 0-.101-.102H8.274Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M8.821 9.089a.34.34 0 1 0-.68 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M8.704 9.518h-.445a.206.206 0 0 1-.207-.206v-.446a.206.206 0 0 1 .207-.206h.445a.206.206 0 0 1 .206.206v.446a.206.206 0 0 1-.206.206Zm-.445-.68a.027.027 0 0 0-.028.028v.446a.028.028 0 0 0 .028.027h.445a.027.027 0 0 0 .025-.017.027.027 0 0 0 .002-.01v-.446a.027.027 0 0 0-.027-.028h-.445Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M9.839 9.089a.34.34 0 1 0-.68 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M9.724 9.518h-.448a.206.206 0 0 1-.206-.206v-.446a.206.206 0 0 1 .206-.206h.446a.206.206 0 0 1 .206.206v.446a.206.206 0 0 1-.204.206Zm-.446-.68a.027.027 0 0 0-.027.028v.446a.028.028 0 0 0 .027.027h.446a.027.027 0 0 0 .025-.017.027.027 0 0 0 .002-.01v-.446a.027.027 0 0 0-.027-.028h-.446Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M10.86 9.089a.34.34 0 1 0-.68 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M10.743 9.518h-.445a.207.207 0 0 1-.206-.206v-.446a.207.207 0 0 1 .206-.206h.445a.206.206 0 0 1 .207.206v.446a.207.207 0 0 1-.207.206Zm-.445-.68a.028.028 0 0 0-.027.028v.446a.028.028 0 0 0 .027.027h.445a.028.028 0 0 0 .028-.027v-.446a.028.028 0 0 0-.017-.026.027.027 0 0 0-.01-.002h-.446Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M8.821 10.107a.34.34 0 1 0-.68 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M8.704 10.536h-.445a.206.206 0 0 1-.207-.207v-.445a.206.206 0 0 1 .207-.206h.445a.206.206 0 0 1 .206.206v.445a.206.206 0 0 1-.206.207Zm-.445-.68a.027.027 0 0 0-.028.028v.445a.028.028 0 0 0 .028.028h.445a.028.028 0 0 0 .027-.027v-.446a.027.027 0 0 0-.027-.028h-.445Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M9.839 10.107a.34.34 0 1 0-.68 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M9.724 10.536h-.448a.206.206 0 0 1-.206-.207v-.445a.206.206 0 0 1 .206-.206h.446a.206.206 0 0 1 .206.206v.445a.206.206 0 0 1-.204.207Zm-.446-.68a.027.027 0 0 0-.027.028v.445c0 .008.003.015.008.02a.028.028 0 0 0 .02.008h.445a.028.028 0 0 0 .027-.027v-.446a.027.027 0 0 0-.027-.028h-.446Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M10.86 10.107a.34.34 0 1 0-.679 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M10.743 10.536h-.445a.207.207 0 0 1-.206-.207v-.445a.206.206 0 0 1 .206-.206h.445a.206.206 0 0 1 .207.206v.445a.207.207 0 0 1-.207.207Zm-.445-.68a.028.028 0 0 0-.027.028v.445c0 .008.002.015.008.02a.028.028 0 0 0 .019.008h.445a.028.028 0 0 0 .028-.027v-.446a.027.027 0 0 0-.028-.028h-.445Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M8.821 11.124a.34.34 0 1 0-.68 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M8.704 11.552h-.445a.207.207 0 0 1-.207-.206v-.445a.206.206 0 0 1 .207-.207h.445a.207.207 0 0 1 .206.207v.445a.206.206 0 0 1-.206.206Zm-.445-.679c-.004 0-.008 0-.011.002a.027.027 0 0 0-.015.015.027.027 0 0 0-.002.01v.446c0 .008.003.015.008.02a.028.028 0 0 0 .02.008h.445a.027.027 0 0 0 .027-.028v-.445a.027.027 0 0 0-.027-.028h-.445Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M9.839 11.124a.34.34 0 1 0-.68 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M9.724 11.552h-.448a.207.207 0 0 1-.206-.206v-.445a.207.207 0 0 1 .206-.207h.446a.207.207 0 0 1 .206.207v.445a.206.206 0 0 1-.204.206Zm-.446-.679a.027.027 0 0 0-.027.028v.445a.028.028 0 0 0 .027.028h.446a.027.027 0 0 0 .027-.028v-.445a.027.027 0 0 0-.027-.028h-.446Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M10.86 11.124a.34.34 0 1 0-.679 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M10.743 11.552h-.445a.207.207 0 0 1-.206-.206v-.445a.207.207 0 0 1 .127-.19.207.207 0 0 1 .079-.017h.445a.206.206 0 0 1 .207.207v.445a.207.207 0 0 1-.207.206Zm-.445-.679a.027.027 0 0 0-.027.028v.445c0 .008.002.015.007.02a.028.028 0 0 0 .02.008h.445a.028.028 0 0 0 .028-.028v-.445a.027.027 0 0 0-.028-.028h-.445Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M8.821 12.142a.34.34 0 1 0-.68 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M8.704 12.57h-.445a.206.206 0 0 1-.207-.207v-.445a.206.206 0 0 1 .207-.206h.445a.206.206 0 0 1 .206.206v.445a.206.206 0 0 1-.206.206Zm-.445-.68a.028.028 0 0 0-.028.028v.446a.028.028 0 0 0 .028.027h.445a.028.028 0 0 0 .027-.027v-.446a.028.028 0 0 0-.027-.027h-.445Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M9.839 12.142a.34.34 0 1 0-.68 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M9.724 12.57h-.448a.206.206 0 0 1-.206-.207v-.445a.207.207 0 0 1 .206-.206h.446a.206.206 0 0 1 .206.206v.445a.206.206 0 0 1-.204.206Zm-.446-.68a.028.028 0 0 0-.027.028v.446a.028.028 0 0 0 .027.027h.446a.028.028 0 0 0 .027-.027v-.446a.028.028 0 0 0-.027-.027h-.446Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M10.86 12.142a.34.34 0 1 0-.679 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M10.743 12.57h-.445a.207.207 0 0 1-.206-.207v-.445a.206.206 0 0 1 .206-.206h.445a.206.206 0 0 1 .207.206v.445a.207.207 0 0 1-.207.206Zm-.445-.68a.028.028 0 0 0-.02.009.028.028 0 0 0-.008.019v.446a.028.028 0 0 0 .028.027h.445a.028.028 0 0 0 .028-.027v-.446a.028.028 0 0 0-.008-.02.027.027 0 0 0-.02-.007h-.445Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M11.909 9.089a.34.34 0 1 0-.68 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M11.791 9.518h-.445a.206.206 0 0 1-.206-.206v-.446a.207.207 0 0 1 .206-.206h.445a.206.206 0 0 1 .207.206v.446a.207.207 0 0 1-.207.206Zm-.445-.68a.027.027 0 0 0-.027.028v.446a.028.028 0 0 0 .027.028h.445a.028.028 0 0 0 .028-.028v-.446a.028.028 0 0 0-.028-.028h-.445Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M11.909 10.107a.34.34 0 1 0-.68 0 .34.34 0 0 0 .68 0Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M11.791 10.536h-.445a.206.206 0 0 1-.206-.207v-.445a.207.207 0 0 1 .206-.206h.445a.206.206 0 0 1 .207.206v.445a.207.207 0 0 1-.207.207Zm-.445-.68a.027.027 0 0 0-.027.028v.445a.028.028 0 0 0 .027.028h.445a.028.028 0 0 0 .02-.008.028.028 0 0 0 .008-.02v-.445a.028.028 0 0 0-.028-.028h-.445Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#fff"
                  d="M11.905 11.125a.34.34 0 1 0-.68 0v1.017a.34.34 0 0 0 .68 0v-1.017Z"
                ></path>
                <path
                  className="ic-a-duties_taxes,_svg__ic_a_duties_taxes,"
                  fill="#221F1F"
                  d="M11.768 12.573h-.405a.227.227 0 0 1-.226-.227v-1.422a.227.227 0 0 1 .226-.227h.405a.227.227 0 0 1 .227.227v1.422a.227.227 0 0 1-.227.227Zm-.405-1.697a.048.048 0 0 0-.048.048v1.422a.048.048 0 0 0 .048.048h.405a.048.048 0 0 0 .048-.048v-1.422a.048.048 0 0 0-.048-.048h-.405Z"
                ></path>
              </svg>
              <h4>
                Customs, CFS, & <br />
                Handling
              </h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
            <div className="square last-square" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="60"
                height="60"
                role="img"
              >
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#fff"
                  d="M6.997 12.001a4.461 4.461 0 1 0 0-8.922 4.461 4.461 0 0 0 0 8.922Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M6.997 12.121a4.582 4.582 0 1 1 0-9.164 4.582 4.582 0 0 1 0 9.165Zm0-8.921a4.34 4.34 0 1 0 0 8.68 4.34 4.34 0 0 0 0-8.68Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M6.997 12.121a.121.121 0 0 1-.12-.12V7.013a.12.12 0 1 1 .241 0v4.989a.12.12 0 0 1-.12.12Zm0-6.621a.121.121 0 0 1-.12-.12v-2.3a.121.121 0 1 1 .24 0v2.3a.121.121 0 0 1-.12.12Zm-1.619 6.326a.12.12 0 0 1-.097-.05c-.042-.056-1.034-1.4-1.034-4.239 0-2.838.992-4.183 1.034-4.238a.121.121 0 0 1 .193.146c-.01.013-.985 1.34-.985 4.092 0 2.753.975 4.08.985 4.093a.121.121 0 0 1-.096.193v.003Zm3.25 0a.12.12 0 0 1-.12-.131.121.121 0 0 1 .024-.062c.01-.013.985-1.34.985-4.092 0-2.762-.976-4.08-.986-4.093a.121.121 0 0 1 .193-.146c.042.056 1.034 1.398 1.034 4.239s-.992 4.183-1.034 4.239a.12.12 0 0 1-.096.046Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M11.464 7.655H2.542a.121.121 0 1 1 0-.242h8.922a.121.121 0 0 1 0 .242ZM2.837 6.036a.121.121 0 0 1-.073-.217c.056-.042 1.398-1.034 4.239-1.034 2.84 0 4.183.992 4.239 1.034a.12.12 0 0 1-.147.193c-.013-.01-1.34-.985-4.093-.985-2.76 0-4.08.975-4.093.985a.12.12 0 0 1-.072.024Zm4.166 4.259c-2.841 0-4.183-.992-4.24-1.034a.121.121 0 0 1 .147-.192c.013.01 1.34.984 4.093.984 2.752 0 4.08-.975 4.093-.984a.12.12 0 0 1 .146.192c-.056.043-1.398 1.034-4.239 1.034Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#fff"
                  d="M4.369 8.231a.585.585 0 1 0 0-1.169.585.585 0 0 0 0 1.169Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M4.368 8.351a.705.705 0 1 1 0-1.41.705.705 0 0 1 0 1.41Zm0-1.168a.463.463 0 1 0 0 .927.463.463 0 0 0 0-.927Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#fff"
                  d="M9.402 5.965a.585.585 0 1 0 0-1.169.585.585 0 0 0 0 1.169Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M9.402 6.086a.705.705 0 1 1 0-1.41.705.705 0 0 1 0 1.41Zm0-1.169a.464.464 0 1 0 0 .927.464.464 0 0 0 0-.927Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#fff"
                  d="M7.004 10.76a.585.585 0 1 0 0-1.17.585.585 0 0 0 0 1.17Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M7.003 10.88a.706.706 0 1 1 0-1.411.706.706 0 0 1 0 1.411Zm0-1.169a.463.463 0 1 0 0 .928.463.463 0 0 0 0-.928Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#FBDC00"
                  d="M10.539 3.293c-.038.763-1.136 2.22-1.136 2.22s-1.092-1.418-1.135-2.22A1.193 1.193 0 0 1 9.403 2a1.161 1.161 0 0 1 1.136 1.293Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M9.402 5.634a.12.12 0 0 1-.095-.047C9.261 5.528 8.191 4.13 8.147 3.3a1.372 1.372 0 0 1 .371-1.03 1.217 1.217 0 0 1 1.781-.009 1.383 1.383 0 0 1 .36 1.038c-.039.791-1.113 2.226-1.16 2.287a.121.121 0 0 1-.096.05v-.002Zm0-3.514a.988.988 0 0 0-.709.316 1.134 1.134 0 0 0-.305.85c.033.618.75 1.658 1.013 2.022.264-.37.987-1.432 1.017-2.021a1.144 1.144 0 0 0-.294-.86.987.987 0 0 0-.722-.307Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#fff"
                  d="M9.403 3.757a.602.602 0 1 0 0-1.204.602.602 0 0 0 0 1.204Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M9.402 3.877a.722.722 0 1 1 0-1.444.722.722 0 0 1 0 1.445Zm0-1.203a.48.48 0 1 0 0 .965.48.48 0 0 0 0-.967v.002Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#fff"
                  d="M9.402 5.514a8.09 8.09 0 0 0-4.45 1.753Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M4.952 7.388a.121.121 0 0 1-.072-.217l.132-.1a.121.121 0 0 1 .143.195l-.13.096a.121.121 0 0 1-.073.026Zm.615-.428a.121.121 0 0 1-.065-.223c.166-.106.337-.209.508-.304a.121.121 0 1 1 .118.211 9.078 9.078 0 0 0-.496.297.121.121 0 0 1-.065.02V6.96Zm1.023-.57a.121.121 0 0 1-.05-.23c.18-.085.362-.164.545-.236a.121.121 0 0 1 .088.225c-.177.07-.356.15-.53.23a.121.121 0 0 1-.053.01v.001Zm1.09-.43a.121.121 0 0 1-.037-.236c.19-.06.383-.114.573-.16a.121.121 0 1 1 .056.236 8.025 8.025 0 0 0-.556.154.118.118 0 0 1-.037.006Zm1.138-.27a.12.12 0 0 1-.017-.24c.198-.033.398-.053.6-.058a.121.121 0 1 1 0 .242c-.19.006-.379.024-.566.055l-.017.001Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#FBDC00"
                  d="M5.507 5.452c-.038.763-1.136 2.22-1.136 2.22s-1.092-1.418-1.135-2.22A1.194 1.194 0 0 1 4.37 4.158a1.161 1.161 0 0 1 1.136 1.294Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M4.368 7.793a.12.12 0 0 1-.095-.048c-.045-.059-1.116-1.457-1.16-2.287a1.371 1.371 0 0 1 .371-1.029 1.217 1.217 0 0 1 1.782-.009 1.383 1.383 0 0 1 .359 1.038c-.04.791-1.114 2.225-1.16 2.286a.12.12 0 0 1-.096.05v-.001Zm0-3.515a.988.988 0 0 0-.709.317 1.134 1.134 0 0 0-.306.85c.034.618.75 1.658 1.014 2.022.265-.37.987-1.433 1.016-2.021a1.145 1.145 0 0 0-.293-.859.986.986 0 0 0-.722-.308Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#fff"
                  d="M4.369 5.915a.602.602 0 1 0 0-1.204.602.602 0 0 0 0 1.204Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M4.369 6.036a.723.723 0 1 1 0-1.445.723.723 0 0 1 0 1.445Zm0-1.204a.48.48 0 1 0 0 .962.48.48 0 0 0 0-.962Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#fff"
                  d="M4.873 8.137A3.81 3.81 0 0 1 6.709 9.67L4.873 8.137Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M6.603 9.629a.12.12 0 0 1-.1-.05 3.671 3.671 0 0 0-.235-.3.121.121 0 0 1 .183-.158c.09.103.173.21.25.322a.12.12 0 0 1-.1.19l.002-.004Zm-.613-.686a.12.12 0 0 1-.08-.03 3.76 3.76 0 0 0-.3-.238.12.12 0 1 1 .141-.197c.11.079.217.165.319.254a.12.12 0 0 1-.08.211Zm-.757-.523a.12.12 0 0 1-.057-.014 2.601 2.601 0 0 0-.342-.154.121.121 0 0 1 .076-.23c.13.047.258.104.38.17a.121.121 0 0 1-.057.228Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#FBDC00"
                  d="M8.133 7.955c-.038.763-1.136 2.22-1.136 2.22s-1.093-1.418-1.136-2.22A1.194 1.194 0 0 1 6.997 6.66a1.161 1.161 0 0 1 1.136 1.295Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M6.997 10.296a.122.122 0 0 1-.096-.047c-.046-.06-1.116-1.458-1.16-2.288a1.373 1.373 0 0 1 .37-1.029 1.218 1.218 0 0 1 1.782-.009 1.384 1.384 0 0 1 .36 1.038c-.04.791-1.114 2.226-1.16 2.287a.122.122 0 0 1-.096.05v-.002Zm0-3.515a.99.99 0 0 0-.71.317 1.134 1.134 0 0 0-.305.85c.033.618.75 1.658 1.014 2.022.264-.37.986-1.433 1.016-2.022a1.145 1.145 0 0 0-.294-.859.987.987 0 0 0-.721-.308Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#fff"
                  d="M6.997 8.419a.602.602 0 1 0 0-1.205.602.602 0 0 0 0 1.205Z"
                ></path>
                <path
                  className="ic-a-our_network_svg__ic_a_our_network"
                  fill="#231F20"
                  d="M6.997 8.537a.722.722 0 1 1 0-1.445.722.722 0 0 1 0 1.445Zm0-1.203a.481.481 0 1 0 .481.48.482.482 0 0 0-.481-.477v-.003Z"
                ></path>
              </svg>
              <h4>
                Customs, CFS, & <br />
                Handling
              </h4>
              <strong>
                <span className="red-sizing">
                  Find Out More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="1em"
                    height="1em"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* section-4-end */}


      {/* section-5-start */}


      <div className="container-anime">
        <h3>Trusted By</h3>
        <div className="child_container-anime">
          <div className="animations">
            <div className="final_anima" >
              <img src={require("./images/utltratech_logo.webp")} alt="" height="73" width="146" />
            </div>
            <div className="final_anima" >
              <img src={require("./images/utltratech_logo.webp")} alt="" height="73" width="146" />
            </div>
            <div className="final_anima" >
              <img src={require("./images/utltratech_logo.webp")} alt="" height="73" width="146" />
            </div>
            <div className="final_anima" >
              <img src={require("./images/utltratech_logo.webp")} alt="" height="73" width="146" />
            </div>
            <div className="final_anima" >
              <img src={require("./images/utltratech_logo.webp")} alt="" height="73" width="146" />
            </div>
            <div className="final_anima" >
              <img src={require("./images/utltratech_logo.webp")} alt="" height="73" width="146" />
            </div>
            <div className="final_anima" >
              <img src={require("./images/utltratech_logo.webp")} alt="" height="73" width="146" />
            </div>
            <div className="final_anima" >
              <img src={require("./images/utltratech_logo.webp")} alt="" height="73" width="146" />
            </div>
          </div>
        </div>
      </div>

      {/* section-5-end */}



      {/* section-6-start */}


      <div className="container4">
        <div className="text4">
          <h3 >Ready to take your Supply Chain to the Next Level?</h3>
        </div>
        <button className="button4 bitbut" style={{ marginRight: "0px" }}>
          <strong >Get Started</strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 14 14"
            width="1em"
            height="1em"
            role="img"
            style={{ marginLeft: "5px", marginTop: "2px" }}
          >
            <path
              className="ic-m-arrow_rotate_right_svg__ic_m_arrow_rotate_right"
              d="M4.375 1.724a.64.64 0 0 0-.12.045.639.639 0 0 0-.239.319c-.019.073-.026 1.483-.026 4.918 0 4.214.004 4.83.035 4.933a.532.532 0 0 0 .476.358c.199 0 .109.084 2.716-2.518 1.492-1.488 2.489-2.501 2.519-2.557a.533.533 0 0 0 .008-.432c-.054-.106-4.9-4.96-5.008-5.016a.612.612 0 0 0-.361-.05"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      {/* <div className="container5">
        <h3
          className="heading"

        >
          How it Works
        </h3>
        <img
          src={require("./images/Screenshot (75).png")}
          style={{ height: "auto", width: "100%" }}
        />
      </div> */}

      {/* section-6-end */}


      {/* section-7-start */}


<div className="flex-container-a">
      <h3 style={{ fontSize: '28px', fontFamily: 'Ubuntu, sans-serif' }}>
        HOW IT WORKS
      </h3>

      <div className="but">
        <button className="but1">For cargo owners</button>
        <button className="but2">For logistics Partners</button>
      </div>

      <div className="flex-container-b">
        <div className="container-ee">
          <img style={{ width: '280px', height: 'auto' }} src={require("./images/homepagem1.webp")} alt="" />
        </div>
        <div style={{ flexBasis: '340px' }}>
          <div className="container-cc">
            <h4 className="headed">Stage 1:</h4>

            <span style={{ fontSize: '20px', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="40"
                height="40"
                role="img"
              >
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M12.613 7h-1.576"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  fill="#FBDC00"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M7 12.85a5.85 5.85 0 1 0 0-11.7 5.85 5.85 0 0 0 0 11.7Z"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  fill="#fff"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M9.383 4.371 5.72 5.652a.11.11 0 0 0-.068.068L4.37 9.383a.21.21 0 0 0 .246.246L8.28 8.348a.109.109 0 0 0 .068-.068l1.28-3.663a.21.21 0 0 0-.245-.246Z"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  fill="#221F1F"
                  d="M7 7.762a.762.762 0 1 0 0-1.524.762.762 0 0 0 0 1.524Z"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M7 1.387v1.576m0 9.65v-1.576M1.387 7h1.576"
                />
              </svg>
              Discover
            </span>

            <p>• Spot and Contract Rates for Logistics</p>

            <p>• Service details, Trade Compliance/ Regulatory Requirements</p>

            <p>• Knowledge and Insights on Trade, Logistics, Finance, Supply Chains</p>
          </div>

          <div className="container-cc">
            <h4 className="headed">Stage 1:</h4>

            <span style={{ fontSize: '20px', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="40"
                height="40"
                role="img"
              >
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M12.613 7h-1.576"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  fill="#FBDC00"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M7 12.85a5.85 5.85 0 1 0 0-11.7 5.85 5.85 0 0 0 0 11.7Z"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  fill="#fff"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M9.383 4.371 5.72 5.652a.11.11 0 0 0-.068.068L4.37 9.383a.21.21 0 0 0 .246.246L8.28 8.348a.109.109 0 0 0 .068-.068l1.28-3.663a.21.21 0 0 0-.245-.246Z"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  fill="#221F1F"
                  d="M7 7.762a.762.762 0 1 0 0-1.524.762.762 0 0 0 0 1.524Z"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M7 1.387v1.576m0 9.65v-1.576M1.387 7h1.576"
                />
              </svg>
              Discover
            </span>

            <p>• Spot and Contract Rates for Logistics</p>

            <p>• Service details, Trade Compliance/ Regulatory Requirements</p>

            <p>• Knowledge and Insights on Trade, Logistics, Finance, Supply Chains</p>
          </div>
        </div>

        <div className="container-dd">
          <img className="img1" style={{ height: '520px', marginBottom: '180px' }} src={require("./images/Screenshot (79).png")} alt="" />
        </div>

        <div style={{ flexBasis: '340px' }}>
          <div className="container-cc">
            <h4 className="headed">Stage 1:</h4>

            <span style={{ fontSize: '20px', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="40"
                height="40"
                role="img"
              >
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M12.613 7h-1.576"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  fill="#FBDC00"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M7 12.85a5.85 5.85 0 1 0 0-11.7 5.85 5.85 0 0 0 0 11.7Z"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  fill="#fff"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M9.383 4.371 5.72 5.652a.11.11 0 0 0-.068.068L4.37 9.383a.21.21 0 0 0 .246.246L8.28 8.348a.109.109 0 0 0 .068-.068l1.28-3.663a.21.21 0 0 0-.245-.246Z"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  fill="#221F1F"
                  d="M7 7.762a.762.762 0 1 0 0-1.524.762.762 0 0 0 0 1.524Z"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M7 1.387v1.576m0 9.65v-1.576M1.387 7h1.576"
                />
              </svg>
              Discover
            </span>

            <p>• Spot and Contract Rates for Logistics</p>

            <p>• Service details, Trade Compliance/ Regulatory Requirements</p>

            <p>• Knowledge and Insights on Trade, Logistics, Finance, Supply Chains</p>
          </div>

          <div className="container-cc">
            <h4 className="headed">Stage 1:</h4>

            <span style={{ fontSize: '20px', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                width="40"
                height="40"
                role="img"
              >
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M12.613 7h-1.576"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  fill="#FBDC00"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M7 12.85a5.85 5.85 0 1 0 0-11.7 5.85 5.85 0 0 0 0 11.7Z"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  fill="#fff"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M9.383 4.371 5.72 5.652a.11.11 0 0 0-.068.068L4.37 9.383a.21.21 0 0 0 .246.246L8.28 8.348a.109.109 0 0 0 .068-.068l1.28-3.663a.21.21 0 0 0-.245-.246Z"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  fill="#221F1F"
                  d="M7 7.762a.762.762 0 1 0 0-1.524.762.762 0 0 0 0 1.524Z"
                />
                <path
                  className="ic-a-discover_svg__ic_a_discover"
                  stroke="#221F1F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.264"
                  d="M7 1.387v1.576m0 9.65v-1.576M1.387 7h1.576"
                />
              </svg>
              Discover
            </span>

            <p>• Spot and Contract Rates for Logistics</p>

            <p>• Service details, Trade Compliance/ Regulatory Requirements</p>

            <p>• Knowledge and Insights on Trade, Logistics, Finance, Supply Chains</p>
          </div>
        </div>
      </div>
    </div>


    {/* section-7-end */}


    {/* section-8-start */}


      <div className="container6">
        <h2 className="heading" >Industries Served</h2>
        <div className="image-container">
          <div className="image-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
            >
              <path
                d="M41.8759 80.7863C41.3699 80.6151 40.8403 80.4925 40.3619 80.2649C38.1234 79.1988 36.9146 77.4207 36.8772 74.9636C36.8299 71.7615 36.8654 68.5573 36.8654 65.3532C36.8654 65.0906 36.8654 64.828 36.8654 64.4778C36.5267 64.4778 36.2413 64.4778 35.9558 64.4778C28.1201 64.4778 20.2864 64.4895 12.4507 64.472C8.82427 64.4642 6.06013 61.5966 6.22157 58.0501C6.27276 56.9373 6.6291 55.9121 7.2532 54.9822C9.43065 51.7256 11.6278 48.4825 13.7856 45.2123C17.4455 39.6659 21.0818 34.1059 24.7201 28.5459C24.8854 28.2929 25.0607 27.9817 25.0626 27.6977C25.0843 23.622 25.0784 19.5444 25.0784 15.4512C24.8146 15.3384 24.5665 15.2392 24.3243 15.1302C22.3398 14.2431 21.2098 12.1148 21.6252 10.0546C22.0681 7.84851 23.8814 6.2591 26.1061 6.23965C30.1342 6.20658 34.1622 6.20658 38.1903 6.23965C40.417 6.2591 42.2263 7.84657 42.6732 10.0507C43.0906 12.1109 41.9566 14.247 39.976 15.1263C39.7535 15.2256 39.5232 15.3092 39.2554 15.4181C39.2436 15.6244 39.2239 15.8345 39.2239 16.0446C39.222 19.8304 39.2121 23.6162 39.2377 27.4019C39.2397 27.7832 39.3775 28.2151 39.5862 28.5381C41.9448 32.1721 44.3368 35.7848 46.6934 39.4188C46.9789 39.8604 47.2722 40.0219 47.8038 40.0219C56.0313 40.0044 64.2607 40.0083 72.4881 40.0083C72.6594 40.0083 72.8327 40.0083 73.004 40.0083C74.4766 40.0161 74.9393 40.767 74.2758 42.0879C73.6989 43.2396 73.0906 44.3758 72.5413 45.5411C72.3621 45.9204 72.246 46.3659 72.246 46.7822C72.2302 55.9802 72.2342 65.1782 72.2342 74.3781C72.2342 77.8137 70.6985 79.7922 67.3398 80.6987C67.2965 80.7104 67.2631 80.7551 67.2237 80.7843H41.8759V80.7863ZM39.2239 47.0313C39.2239 47.327 39.2239 47.5662 39.2239 47.8036C39.2239 56.7292 39.2239 65.6567 39.2239 74.5823C39.2239 77.0472 40.6533 78.4537 43.1556 78.4537C50.7412 78.4537 58.3249 78.4537 65.9105 78.4537C68.464 78.4537 69.8736 77.0627 69.8756 74.5395C69.8756 65.6373 69.8756 56.735 69.8756 47.8328V47.0293H39.222L39.2239 47.0313ZM27.433 15.5796V16.4278C27.433 20.237 27.4507 24.048 27.4133 27.8572C27.4074 28.3785 27.2361 28.968 26.9507 29.4057C23.6786 34.4483 20.3829 39.4733 17.0694 44.4886C14.4687 48.4261 11.8168 52.3325 9.23378 56.2817C8.87743 56.8265 8.64118 57.5307 8.5959 58.1785C8.43643 60.4216 10.2024 62.1375 12.6004 62.1394C20.4833 62.1472 28.3662 62.1433 36.2491 62.1394C36.4381 62.1394 36.6252 62.1141 36.8083 62.1005V59.8127C36.4618 59.8127 36.1684 59.8127 35.877 59.8127C29.0494 59.8127 22.2237 59.8068 15.396 59.8185C14.1065 59.8205 13.0847 59.3711 12.4665 58.2349C11.8601 57.1202 12.0452 56.0483 12.7441 55.0133C17.2545 48.3386 21.761 41.6619 26.2557 34.9774C26.6337 34.4152 27.0964 34.1701 27.7835 34.174C30.6815 34.1973 33.5795 34.1973 36.4775 34.174C37.1941 34.1681 37.6765 34.4152 38.0624 35.0066C39.0586 36.5357 40.0902 38.0415 41.1218 39.5472C41.2478 39.7301 41.4565 39.9733 41.6396 39.9849C42.4783 40.0316 43.319 40.0063 44.262 40.0063C44.0257 39.6367 43.8741 39.3916 43.7166 39.1484C41.5707 35.8704 39.411 32.6021 37.2886 29.3085C37.0425 28.9252 36.885 28.4155 36.8811 27.9622C36.8496 24.1045 36.8634 20.2447 36.8634 16.387C36.8634 16.1282 36.8634 15.8675 36.8634 15.5757H27.431L27.433 15.5796ZM38.5861 40.0122C37.8517 38.9227 37.1863 37.9714 36.5681 36.9929C36.3279 36.6116 36.0483 36.5026 35.6113 36.5085C33.3275 36.5299 31.0418 36.5376 28.758 36.5046C28.2205 36.4968 27.9331 36.6894 27.6456 37.1154C24.285 42.1307 20.9026 47.1324 17.5262 52.138C16.5871 53.5309 15.648 54.9238 14.705 56.3129C14.4667 56.665 14.2974 57.0424 14.7266 57.3245C14.9452 57.4684 15.2818 57.4801 15.5653 57.4801C22.4186 57.4879 29.2699 57.486 36.1231 57.484C36.3574 57.484 36.5937 57.4626 36.8614 57.4509C36.8614 53.6943 36.8654 50.0077 36.8516 46.3212C36.8516 46.0955 36.7256 45.8582 36.6212 45.6461C35.9814 44.3641 35.314 43.0937 34.6899 41.8039C34.2272 40.8448 34.7509 40.0394 35.8318 40.0141C36.6901 39.9947 37.5505 40.0102 38.5861 40.0102V40.0122ZM37.6233 42.3797C37.9127 42.9595 38.2081 43.4614 38.4167 43.9964C38.6235 44.5275 38.9326 44.6909 39.5173 44.689C44.894 44.6617 50.2726 44.6734 55.6493 44.6734C60.3153 44.6734 64.9793 44.6753 69.6453 44.6676C69.8953 44.6676 70.2831 44.6501 70.3737 44.5022C70.7812 43.8369 71.1061 43.1229 71.4801 42.3817H37.6253L37.6233 42.3797ZM32.1482 13.2179C34.0146 13.2179 35.881 13.2198 37.7474 13.2179C39.3165 13.214 40.3875 12.2763 40.3973 10.9048C40.4072 9.52936 39.3322 8.56248 37.7789 8.56054C34.0225 8.55665 30.2661 8.55665 26.5077 8.56054C24.9524 8.56054 23.8853 9.52741 23.8971 10.9087C23.907 12.2549 24.9721 13.214 26.4762 13.2179C28.3662 13.2237 30.2582 13.2179 32.1482 13.2179Z"
                fill="black"
              />
              <path
                d="M49.778 23.718H47.4883V25.9766H45.1219V23.7141H42.8086V21.3757H45.0983V19.0918H47.4647V21.3543H49.776V23.718H49.778Z"
                fill="black"
              />
              <path
                d="M62.8359 29.5656V27.2272H65.1256V24.918H67.4921V27.1571H69.829V29.4955H67.5629V31.8048H65.1965V29.5656H62.8359Z"
                fill="black"
              />
              <path
                d="M47.4162 30.6805H45.1758V28.4141H47.4162V30.6805Z"
                fill="black"
              />
              <path
                d="M65.1895 36.458V34.2285H67.4831V36.458H65.1895Z"
                fill="black"
              />
              <path
                d="M38.5923 40.0156C37.5567 40.0156 36.6964 40.0001 35.838 40.0195C34.7571 40.0429 34.2334 40.8502 34.6961 41.8093C35.3202 43.0991 35.9876 44.3676 36.6274 45.6515C36.7338 45.8636 36.8578 46.1009 36.8578 46.3266C36.8716 50.0132 36.8676 53.6997 36.8676 57.4564C36.5999 57.468 36.3656 57.4894 36.1293 57.4894C29.2761 57.4894 22.4248 57.4933 15.5715 57.4855C15.288 57.4855 14.9514 57.4739 14.7328 57.3299C14.3036 57.0478 14.473 56.6685 14.7112 56.3183C15.6542 54.9292 16.5933 53.5363 17.5324 52.1434C20.9088 47.1378 24.2892 42.1362 27.6519 37.1209C27.9393 36.6929 28.2248 36.5022 28.7642 36.51C31.048 36.5431 33.3317 36.5353 35.6175 36.5139C36.0545 36.51 36.3341 36.617 36.5743 36.9983C37.1925 37.9788 37.8579 38.9282 38.5923 40.0176V40.0156Z"
                fill="#FEDE00"
              />
              <path
                d="M68.6644 56.3652V58.6083H60.5039V56.3652H68.6644Z"
                fill="black"
              />
              <path
                d="M60.4805 67.915V65.6758H68.641V67.915H60.4805Z"
                fill="black"
              />
              <path
                d="M61.6328 53.9404V51.7168H67.4564V53.9404H61.6328Z"
                fill="black"
              />
              <path
                d="M61.6816 61.0156H67.4816V63.2567H61.6816V61.0156Z"
                fill="black"
              />
              <path
                d="M61.6816 70.3242H67.4698V72.5906H61.6816V70.3242Z"
                fill="black"
              />
              <path
                d="M39.2285 47.0351V47.8075C39.2285 56.7331 39.2285 65.6606 39.2285 74.5862C39.2285 77.0511 40.6578 78.4576 43.1601 78.4576C50.7458 78.4576 58.3295 78.4576 65.9151 78.4576C68.4686 78.4576 69.8782 77.0666 69.8802 74.5434C69.8802 65.6412 69.8802 56.7389 69.8802 47.8367V47.0332H39.2285V47.0351ZM61.6448 51.7256H67.4685V53.9492H61.6448V51.7256ZM67.4763 72.5961H61.6882V70.3296H67.4763V72.5961ZM68.6418 67.9231H60.4813V65.684H68.6418V67.9231ZM61.6823 63.2561V61.015H67.4822V63.2561H61.6823ZM68.6674 58.6162H60.5069V56.3732H68.6674V58.6162Z"
                fill="#FEDE00"
              />
            </svg>
            <p>
              <strong>Chemicals</strong>
            </p>
          </div>
          <div className="image-item">
            <svg
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.5952 6.21484C54.387 6.64472 54.6607 7.30024 54.6353 8.19696C54.5844 10.0643 54.6235 11.9336 54.6177 13.801C54.6137 15.0478 54.0996 15.5535 52.8308 15.5594C51.2512 15.5652 49.6716 15.5594 48.047 15.5594V18.5899C49.7459 18.5899 51.4233 18.5705 53.0987 18.5938C55.6264 18.6288 57.6967 20.3211 58.205 22.7778C58.3164 23.3167 58.3086 23.8866 58.3086 24.4429C58.3145 37.1584 58.3125 49.8719 58.3125 62.5874V63.5814C58.5491 63.3655 58.6879 63.2527 58.8091 63.1243C61.5128 60.2377 64.8362 58.7632 68.8146 58.773C70.1811 58.7769 71.5456 58.7671 72.9121 58.7749C74.005 58.7807 74.5484 59.2962 74.5543 60.368C74.5641 62.9395 74.5973 65.5129 74.5387 68.0844C74.3842 74.9683 68.5545 80.7104 61.6008 80.7571C53.5268 80.8116 45.4528 80.7727 37.3788 80.7746C30.9646 80.7746 24.5485 80.7746 18.1343 80.7746C14.6016 80.7746 12.4336 78.6252 12.4336 75.1103C12.4297 58.1525 12.4297 41.1907 12.4297 24.2289C12.4297 20.751 14.5938 18.5958 18.0776 18.588C19.6063 18.5841 21.1371 18.588 22.6913 18.588V15.5613C21.139 15.5613 19.6337 15.5613 18.1264 15.5613C16.5527 15.5613 16.1187 15.1314 16.1167 13.585C16.1167 11.7897 16.1539 9.99234 16.1011 8.1989C16.0757 7.30219 16.3494 6.64861 17.1392 6.21484H53.5952ZM42.841 32.4297H15.4169V66.4563H39.1364C39.1364 66.1509 39.1364 65.8903 39.1364 65.6277C39.1364 63.9062 39.1246 62.1828 39.1403 60.4614C39.15 59.3059 39.6994 58.7846 40.8606 58.7768C41.5097 58.773 42.1587 58.7768 42.839 58.7768V32.4297H42.841ZM15.3739 29.4342H16.3924C25.5181 29.4342 34.6419 29.4342 43.7676 29.4342C45.3375 29.4342 45.8067 29.9068 45.8067 31.4824C45.8067 40.2687 45.8067 49.055 45.8067 57.8412V58.771C49.6736 59.0745 52.7878 60.6792 55.384 63.632C55.384 63.1924 55.384 62.955 55.384 62.7158C55.384 49.9011 55.384 37.0845 55.384 24.2698C55.384 22.3402 54.5277 21.5018 52.5591 21.5018C41.0913 21.5018 29.6255 21.5018 18.1577 21.5018C17.9388 21.5018 17.7178 21.494 17.4989 21.5116C16.3904 21.5991 15.4169 22.4841 15.3895 23.5676C15.3406 25.4797 15.3758 27.3956 15.3758 29.4342H15.3739ZM43.7579 77.8647C42.7804 76.575 41.6524 75.371 40.8704 73.9763C40.0884 72.5855 39.6525 71.0022 39.0425 69.4499H15.3582C15.3582 71.3445 15.3582 73.206 15.3582 75.0656C15.3582 77.0146 16.2086 77.8647 18.1479 77.8666C26.4858 77.8666 34.8257 77.8666 43.1636 77.8666C43.4021 77.8666 43.6425 77.8666 43.7559 77.8666L43.7579 77.8647ZM55.382 75.6705C55.382 74.2856 55.386 73.1282 55.382 71.9708C55.3547 65.83 50.2346 60.5353 42.1431 61.7918C42.1431 64.0677 41.9984 66.3532 42.1744 68.6135C42.5067 72.8948 45.5838 76.4136 49.7459 77.5145C50.9071 77.8219 52.0899 77.9639 53.5112 77.783C53.1573 77.4912 52.9364 77.3356 52.7468 77.1488C51.2434 75.6608 49.7439 74.1689 48.2504 72.6711C47.8066 72.2257 47.5329 71.6479 47.8887 71.0975C48.1487 70.6968 48.6394 70.2533 49.0695 70.2046C49.5113 70.1541 50.1056 70.4575 50.4556 70.7901C52.0762 72.3268 53.6363 73.9277 55.384 75.6725L55.382 75.6705ZM71.7822 61.6887C70.5486 61.6887 69.5535 61.6771 68.5604 61.6907C65.3171 61.7393 62.6838 63.0504 60.6076 65.511C58.1209 68.4579 58.1855 71.9631 58.3614 75.618C58.6038 75.3982 58.7798 75.2504 58.942 75.0889C60.4082 73.632 61.8784 72.179 63.3368 70.7143C63.8235 70.226 64.369 69.979 65.0473 70.2358C66.0991 70.6306 66.3063 71.8561 65.4442 72.7275C63.9232 74.2661 62.3788 75.7833 60.8461 77.3122C60.7015 77.4562 60.5744 77.6176 60.4102 77.8024C65.3171 78.3451 70.2671 74.9956 71.2426 70.1268C71.7822 67.427 71.6199 64.589 71.7802 61.6887H71.7822ZM51.6598 9.18315H19.1078V12.6047H51.6598V9.18315ZM45.0266 18.5491V15.6216H25.7253V18.5491H45.0266Z"
                fill="black"
              />
              <path
                d="M42.8402 32.4316V58.7768C42.1618 58.7768 41.5127 58.7729 40.8617 58.7768C39.7005 58.7846 39.1511 59.3059 39.1414 60.4613C39.1257 62.1828 39.1375 63.9062 39.1375 65.6277C39.1375 65.8903 39.1375 66.1509 39.1375 66.4563H15.416V32.4316H42.8402ZM33.646 53.9334C34.643 53.9334 35.5188 53.9509 36.3927 53.9295C37.4249 53.9042 37.9879 53.3751 38.0016 52.352C38.029 50.4127 38.029 48.4733 38.0016 46.534C37.9879 45.4564 37.4347 44.9507 36.3497 44.939C35.4778 44.9293 34.6078 44.939 33.644 44.939C33.644 43.9761 33.6636 43.0853 33.6382 42.1963C33.6088 41.1343 33.0478 40.5916 31.9882 40.5857C30.088 40.576 28.1858 40.578 26.2856 40.5857C25.1204 40.5896 24.6004 41.1129 24.5887 42.278C24.5809 43.1417 24.5887 44.0073 24.5887 44.939C23.6444 44.939 22.7979 44.9351 21.9495 44.939C20.7257 44.9468 20.2135 45.4486 20.2096 46.6605C20.2037 48.4305 20.2076 50.2006 20.2096 51.9707C20.2096 53.4724 20.667 53.9334 22.1626 53.9373C22.9543 53.9392 23.7461 53.9373 24.5887 53.9373C24.5887 54.8846 24.5848 55.7054 24.5887 56.5243C24.5965 57.7498 25.0911 58.2594 26.3071 58.2672C28.1584 58.2789 30.0117 58.2769 31.8631 58.2672C33.1162 58.2614 33.6284 57.742 33.6421 56.4893C33.6519 55.6704 33.6421 54.8515 33.6421 53.9334H33.646Z"
                fill="#FEDE00"
              />{" "}
              <path
                d="M55.3789 75.6762C53.6312 73.9313 52.0711 72.3305 50.4504 70.7938C50.1005 70.4612 49.5043 70.1597 49.0644 70.2083C48.6343 70.2569 48.1436 70.7004 47.8836 71.1011C47.5278 71.6516 47.8015 72.2293 48.2453 72.6748C49.7388 74.1725 51.2383 75.6645 52.7417 77.1525C52.9313 77.3393 53.1522 77.4949 53.506 77.7866C52.0848 77.9695 50.902 77.8255 49.7408 77.5182C45.5807 76.4173 42.5016 72.8985 42.1693 68.6172C41.9933 66.3569 42.138 64.0713 42.138 61.7955C50.2295 60.5389 55.3496 65.8337 55.3769 71.9745C55.3828 73.1319 55.3769 74.2873 55.3769 75.6742L55.3789 75.6762Z"
                fill="#FEDE00"
              />{" "}
              <path
                d="M71.778 61.6872C71.6177 64.5874 71.78 67.4254 71.2404 70.1252C70.2669 74.994 65.3149 78.3435 60.408 77.8008C60.5722 77.616 60.6993 77.4546 60.844 77.3106C62.3766 75.7818 63.9211 74.2665 65.442 72.7259C66.3022 71.8545 66.0969 70.631 65.0452 70.2342C64.3648 69.9794 63.8214 70.2244 63.3346 70.7127C61.8762 72.1774 60.406 73.6304 58.9398 75.0873C58.7776 75.2488 58.6016 75.3966 58.3592 75.6164C58.1833 71.9615 58.1187 68.4563 60.6055 65.5094C62.6816 63.0468 65.3149 61.7377 68.5582 61.6891C69.5513 61.6735 70.5464 61.6872 71.78 61.6872H71.778Z"
                fill="#FEDE00"
              />{" "}
              <path
                d="M33.6432 53.9297C33.6432 54.8478 33.6511 55.6667 33.6432 56.4856C33.6295 57.7402 33.1173 58.2576 31.8642 58.2635C30.0129 58.2732 28.1596 58.2751 26.3082 58.2635C25.0903 58.2557 24.5976 57.7441 24.5898 56.5206C24.584 55.6998 24.5898 54.8789 24.5898 53.9336C23.7472 53.9336 22.9555 53.9336 22.1637 53.9336C20.6682 53.9297 20.2107 53.4706 20.2107 51.967C20.2107 50.1969 20.2068 48.4268 20.2107 46.6567C20.2146 45.4449 20.7249 44.943 21.9506 44.9353C22.7991 44.9294 23.6456 44.9353 24.5898 44.9353C24.5898 44.0016 24.584 43.1379 24.5898 42.2743C24.6016 41.1072 25.1196 40.5859 26.2867 40.582C28.1869 40.5742 30.0891 40.5742 31.9893 40.582C33.0489 40.5878 33.61 41.1305 33.6393 42.1926C33.6647 43.0815 33.6452 43.9705 33.6452 44.9353C34.609 44.9353 35.4809 44.9275 36.3508 44.9353C37.4378 44.9469 37.9891 45.4527 38.0028 46.5303C38.0282 48.4696 38.0302 50.4089 38.0028 52.3483C37.9871 53.3714 37.4261 53.8985 36.3939 53.9258C35.52 53.9472 34.6442 53.9297 33.6471 53.9297H33.6432ZM30.7167 43.525H27.5144C27.5144 44.3517 27.5164 45.1453 27.5144 45.939C27.5086 47.3142 26.9905 47.8374 25.622 47.8452C24.8049 47.8491 23.9857 47.8452 23.1666 47.8452V51.0197C23.9936 51.0197 24.7912 51.0158 25.5908 51.0197C27.0433 51.0275 27.5125 51.4982 27.5164 52.9493C27.5184 53.739 27.5164 54.5268 27.5164 55.3127H30.7186C30.7186 54.4335 30.7128 53.5893 30.7186 52.747C30.7303 51.5274 31.223 51.0372 32.4585 51.0197C33.3031 51.008 34.1496 51.0178 35.0391 51.0178V47.8433C34.1691 47.8433 33.3422 47.8491 32.5172 47.8433C31.2445 47.8335 30.7303 47.3317 30.7186 46.0849C30.7108 45.2426 30.7186 44.4003 30.7186 43.525H30.7167Z"
                fill="black"
              />{" "}
            </svg>

            <p>
              <strong>Pharmaceuticals</strong>
            </p>
          </div>
          <div className="image-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
            >
              <path
                d="M69.5344 56.0606H62.6852C62.6852 57.6678 62.6852 59.2583 62.6852 60.8508C62.6852 62.4643 62.4541 62.6913 60.8132 62.6913C59.2459 62.6913 57.6786 62.6913 56.0588 62.6913V69.4921C56.3424 69.5089 56.6176 69.5404 56.8928 69.5425C58.8846 69.5467 60.8784 69.5404 62.8701 69.5467C64.0235 69.5509 64.3618 69.8976 64.3702 71.0573C64.3786 72.1582 64.3849 73.2591 64.366 74.3601C64.3576 74.7866 64.4626 75.0534 64.8639 75.3076C66.0321 76.0471 66.4964 77.3855 66.1203 78.6649C65.7631 79.8814 64.5803 80.768 63.2966 80.7827C61.9793 80.7974 60.7859 79.9213 60.3994 78.6586C60.0149 77.4023 60.4897 76.0618 61.6641 75.3034C62.0486 75.0555 62.1978 74.8055 62.181 74.3622C62.1495 73.5302 62.1726 72.6961 62.1726 71.7906C61.8133 71.7738 61.5339 71.7486 61.2566 71.7486C59.2648 71.7443 57.271 71.7549 55.2793 71.7422C54.1574 71.7359 53.817 71.3956 53.8107 70.2821C53.8002 68.0529 53.8065 65.8259 53.8065 63.5968C53.8065 63.3152 53.8065 63.0337 53.8065 62.7291H48.4259C48.4112 62.9938 48.3902 63.2207 48.3902 63.4497C48.3881 67.0676 48.3965 70.6855 48.3797 74.3033C48.3776 74.7676 48.4889 75.045 48.9091 75.3118C50.0773 76.0513 50.5416 77.4149 50.1445 78.6691C49.7453 79.9276 48.6171 80.7743 47.325 80.7827C46.0434 80.7932 44.848 79.9339 44.4551 78.7259C44.037 77.4317 44.5244 76.1102 45.6842 75.2761C45.9027 75.1185 46.1611 74.8244 46.1632 74.5933C46.1926 70.6623 46.1842 66.7335 46.1842 62.7459H40.8456C40.833 62.9833 40.8078 63.2354 40.8078 63.4854C40.8057 67.0781 40.812 70.6686 40.7973 74.2613C40.7973 74.7403 40.8855 75.0513 41.3414 75.337C42.497 76.0618 42.9424 77.4401 42.5369 78.7091C42.1566 79.9003 41.0074 80.7554 39.7573 80.7785C38.4337 80.8037 37.2614 79.9549 36.8517 78.6733C36.4588 77.4485 36.8916 76.0871 38.0156 75.3601C38.4799 75.0597 38.6186 74.7508 38.6165 74.2277C38.5955 70.6623 38.606 67.097 38.606 63.5295V62.7249H33.1876C33.1876 63.0463 33.1876 63.3552 33.1876 63.6619C33.1876 65.8637 33.1939 68.0676 33.1834 70.2695C33.1792 71.3851 32.8346 71.7296 31.7211 71.7359C29.7294 71.7485 27.7355 71.738 25.7438 71.7422C25.4644 71.7422 25.1829 71.7654 24.8236 71.7822C24.8236 72.7906 24.7858 73.7298 24.8509 74.6647C24.8656 74.8958 25.1766 75.1479 25.4056 75.316C26.5548 76.1522 27.017 77.5956 26.5107 78.8687C25.9959 80.1671 24.645 80.9613 23.3067 80.7533C21.9306 80.539 20.8906 79.4528 20.7729 78.0389C20.6763 76.8707 21.1322 75.9211 22.128 75.3034C22.5272 75.0555 22.6344 74.7866 22.626 74.3559C22.605 73.2297 22.6092 72.1015 22.6218 70.9733C22.6323 69.9102 22.9873 69.5467 24.0378 69.5404C26.0296 69.5299 28.0234 69.5362 30.0151 69.5362C30.2987 69.5362 30.5824 69.5362 30.9248 69.5362V62.6828H29.4836C28.3028 62.6828 27.1242 62.6828 25.9434 62.6828C24.5988 62.6828 24.3047 62.3782 24.3026 61.0042C24.3026 59.3822 24.3026 57.7603 24.3026 56.0732H17.4555C17.4555 57.1111 17.4555 58.1279 17.4555 59.1427C17.4555 60.376 17.4618 61.6072 17.4534 62.8404C17.445 64.0296 17.0983 64.3657 15.8861 64.3741C14.7852 64.3804 13.6821 64.3426 12.5833 64.3972C12.2871 64.4119 11.9068 64.6178 11.7303 64.8574C10.8984 66.0024 9.56634 66.5129 8.28054 66.1053C7.06828 65.7272 6.21109 64.538 6.21529 63.2501C6.21949 61.958 7.06828 60.8088 8.30996 60.4117C9.58525 60.0041 10.9173 60.5273 11.7471 61.6849C11.9215 61.9265 12.2976 62.1345 12.5959 62.1576C13.4489 62.2206 14.3103 62.1807 15.2537 62.1807C15.2537 61.166 15.2537 60.252 15.2537 59.3402C15.2537 58.0292 15.2495 56.7182 15.2537 55.4072C15.2579 54.1151 15.5499 53.8167 16.821 53.8146C18.9976 53.8104 21.1721 53.8146 23.3487 53.8146C23.6323 53.8146 23.9181 53.8146 24.2521 53.8146V48.4362C24.0483 48.4215 23.8235 48.392 23.6008 48.392C19.9577 48.3899 16.3126 48.3983 12.6695 48.3794C12.1947 48.3773 11.932 48.516 11.6736 48.9278C10.9446 50.0833 9.56214 50.5497 8.31206 50.1443C7.05358 49.7346 6.21949 48.6084 6.21529 47.3079C6.21109 45.9843 7.0998 44.7952 8.36248 44.4338C9.65878 44.064 10.9341 44.562 11.7282 45.6986C11.8795 45.915 12.182 46.1608 12.4153 46.1629C16.2958 46.1881 20.1741 46.1776 24.0546 46.1713C24.103 46.1713 24.1513 46.1461 24.2521 46.1167V40.8559C24.0483 40.8411 23.8466 40.8117 23.6471 40.8117C19.9767 40.8096 16.3063 40.8138 12.6359 40.8033C12.2178 40.8033 11.9425 40.8748 11.6904 41.2887C10.9677 42.4694 9.63567 42.9316 8.34567 42.5534C7.1145 42.1921 6.2363 41.0302 6.21529 39.7423C6.19638 38.4145 7.04727 37.2506 8.33307 36.8472C9.58945 36.4522 10.9005 36.9459 11.7114 38.0763C11.8711 38.299 12.1526 38.5847 12.3816 38.5868C16.3126 38.6183 20.2435 38.6099 24.2374 38.6099V33.1852C23.8824 33.1852 23.521 33.1852 23.1617 33.1852C21.0124 33.1852 18.8631 33.1915 16.7117 33.1831C15.5919 33.1789 15.26 32.8449 15.2537 31.7187C15.2432 29.727 15.2537 27.7332 15.2495 25.7415C15.2495 25.462 15.2264 25.1826 15.2095 24.8212C14.2032 24.8212 13.264 24.796 12.327 24.8401C12.1295 24.8486 11.89 25.0755 11.7598 25.2645C10.9299 26.4621 9.62096 26.9873 8.34988 26.5987C7.104 26.2163 6.2384 25.0776 6.21529 23.7897C6.19218 22.466 7.07248 21.2475 8.31626 20.8756C9.62096 20.4848 10.8879 20.987 11.7492 22.1635C11.9131 22.3883 12.2661 22.5816 12.5413 22.5942C13.5603 22.6446 14.5856 22.6131 15.6066 22.6152C17.1929 22.6152 17.4513 22.8694 17.4513 24.4221C17.4513 26.2835 17.4513 28.145 17.4513 30.0064C17.4513 30.2901 17.4513 30.5737 17.4513 30.9204H24.3005C24.3005 30.5611 24.3005 30.1808 24.3005 29.8026C24.3005 28.4664 24.2963 27.1281 24.3005 25.7919C24.3047 24.6595 24.6618 24.3107 25.8174 24.3086C27.2586 24.3044 28.702 24.3086 30.1433 24.3086C30.3975 24.3086 30.6517 24.3086 30.9353 24.3086V17.4531C30.6139 17.4531 30.3344 17.4531 30.055 17.4531C28.0633 17.4531 26.0695 17.4594 24.0778 17.451C22.9726 17.4447 22.626 17.0918 22.6155 15.9825C22.6071 14.8542 22.6449 13.726 22.5924 12.602C22.5777 12.3036 22.3802 11.9192 22.1407 11.7448C20.9809 10.8981 20.4725 9.5997 20.8717 8.3034C21.2498 7.08693 22.4411 6.21503 23.7269 6.21503C25.0526 6.21503 26.2291 7.09324 26.601 8.36643C26.9687 9.62701 26.4476 10.9275 25.3236 11.7385C25.0799 11.915 24.8656 12.2868 24.8446 12.5852C24.7816 13.4382 24.8215 14.3017 24.8215 15.2513C25.5673 15.2513 26.2165 15.2513 26.8657 15.2513C28.4121 15.2513 29.9584 15.2492 31.5068 15.2513C32.8976 15.2555 33.1834 15.5349 33.1855 16.8985C33.1897 19.0478 33.1855 21.1992 33.1855 23.3485C33.1855 23.6321 33.1855 23.9178 33.1855 24.254H38.6039C38.6039 24.0187 38.6039 23.7687 38.6039 23.5186C38.6039 19.926 38.5976 16.3354 38.6123 12.7428C38.6123 12.2637 38.524 11.9507 38.066 11.665C36.9042 10.9422 36.4462 9.55348 36.8538 8.3013C37.2593 7.05122 38.3938 6.21503 39.6922 6.21503C41.02 6.21503 42.1965 7.09954 42.56 8.37063C42.9277 9.66483 42.4276 10.9338 41.2868 11.7322C41.0704 11.8835 40.8288 12.1881 40.8267 12.4234C40.8015 16.3039 40.8141 20.1844 40.8183 24.0649C40.8183 24.1132 40.8477 24.1615 40.8771 24.2561H46.1401C46.1548 24.046 46.18 23.8464 46.1821 23.6447C46.1842 19.9743 46.1779 16.3039 46.1905 12.6335C46.1905 12.207 46.0938 11.9423 45.6968 11.6881C44.495 10.9254 44.0349 9.55558 44.4572 8.26348C44.8522 7.05332 46.0476 6.20032 47.3313 6.21503C48.6276 6.22974 49.7474 7.07433 50.1445 8.33911C50.5458 9.62071 50.0311 10.9296 48.844 11.7553C48.6423 11.8961 48.407 12.1734 48.407 12.3877C48.3797 16.3186 48.3881 20.2495 48.3881 24.2414H53.8044C53.8044 23.5859 53.8044 22.9367 53.8044 22.2854C53.8044 20.4764 53.8002 18.6675 53.8044 16.8586C53.8086 15.5391 54.1006 15.2534 55.4411 15.2492C57.4328 15.245 59.4266 15.2282 61.4183 15.2597C61.9961 15.2681 62.244 15.1105 62.1747 14.5097C62.1327 14.1483 62.1411 13.7743 62.1747 13.4109C62.2482 12.5684 62.0948 11.9591 61.2986 11.3771C59.9224 10.3729 59.9497 8.26558 61.1746 7.07013C62.431 5.84316 64.4668 5.95451 65.5656 7.31174C66.6476 8.64586 66.406 10.6523 64.9753 11.604C64.4878 11.9276 64.3387 12.2553 64.3597 12.8058C64.3996 13.9046 64.3849 15.0076 64.366 16.1085C64.3492 17.0623 63.9731 17.4405 63.0151 17.4489C60.996 17.4636 58.977 17.4531 56.9601 17.4552C56.6764 17.4552 56.3949 17.4552 56.0588 17.4552V24.3086C56.937 24.3086 57.8194 24.3086 58.7018 24.3086C59.5926 24.3086 60.4855 24.2981 61.3763 24.3107C62.2734 24.3233 62.6747 24.7162 62.6831 25.6091C62.6978 27.1029 62.6873 28.5988 62.6873 30.0926C62.6873 30.351 62.6873 30.6094 62.6873 30.9246H69.5365C69.5365 29.4749 69.5365 28.063 69.5365 26.6533C69.5365 25.7625 69.5239 24.8696 69.5407 23.9788C69.5596 23.0207 69.9294 22.6404 70.8811 22.6215C72.0345 22.6005 73.188 22.6047 74.3414 22.6215C74.7595 22.6278 75.0389 22.5501 75.2973 22.1425C76.0537 20.9449 77.4403 20.4764 78.7219 20.8882C79.93 21.279 80.7872 22.4745 80.7788 23.7602C80.7704 25.046 79.9027 26.2058 78.6694 26.5882C77.4151 26.9768 76.0558 26.5083 75.31 25.3444C75.0431 24.9284 74.7679 24.7897 74.2994 24.8086C73.4926 24.8422 72.6837 24.817 71.795 24.817C71.774 25.1574 71.7425 25.4347 71.7425 25.7099C71.7383 27.7017 71.7467 29.6955 71.7383 31.6872C71.7341 32.8617 71.4127 33.1768 70.2298 33.181C68.028 33.1873 65.8262 33.1831 63.6243 33.1831C63.3407 33.1831 63.0592 33.1831 62.7335 33.1831V38.5721C62.9899 38.5847 63.242 38.6078 63.4941 38.6078C67.0847 38.6099 70.6773 38.5994 74.2679 38.6204C74.7658 38.6225 75.0515 38.4881 75.3331 38.0511C76.0768 36.8955 77.4571 36.4459 78.7051 36.8598C79.9552 37.2737 80.7851 38.4145 80.7788 39.7108C80.7725 41.0008 79.909 42.169 78.682 42.5471C77.4067 42.94 76.1062 42.4526 75.2889 41.3433C75.1083 41.0975 74.7469 40.8369 74.4675 40.8327C70.692 40.7991 66.9166 40.8096 63.1432 40.8117C63.0172 40.8117 62.8932 40.8306 62.7314 40.8433V46.1818C62.9983 46.1818 63.2273 46.1818 63.4563 46.1818C67.0741 46.1818 70.692 46.1755 74.3099 46.1902C74.7679 46.1902 75.0515 46.0978 75.3205 45.6713C76.0579 44.5052 77.4025 44.0535 78.682 44.4443C79.9069 44.8204 80.7746 45.9948 80.7809 47.2806C80.7851 48.6063 79.9216 49.7598 78.6295 50.1527C77.4046 50.5266 76.0579 50.0686 75.3331 48.9362C75.0515 48.495 74.7574 48.3689 74.2637 48.3731C70.6731 48.392 67.0804 48.3836 63.4899 48.3836H62.744V53.7663C63.0004 53.7789 63.2756 53.8062 63.5508 53.8062C65.7799 53.8104 68.007 53.8041 70.2361 53.8104C71.4169 53.8146 71.7341 54.1298 71.7404 55.3084C71.7488 57.275 71.7425 59.2415 71.7425 61.208C71.7425 61.4916 71.7425 61.7752 71.7425 62.1681C72.8056 62.1681 73.7952 62.1996 74.7763 62.1408C74.9759 62.1282 75.1776 61.7878 75.3373 61.5693C76.0999 60.521 77.3815 60.0461 78.6001 60.3802C79.7955 60.7079 80.7074 61.8362 80.7788 63.0778C80.8523 64.3447 80.1233 65.5024 78.9341 66.0087C77.6651 66.5486 76.1629 66.1516 75.3877 64.9708C75.0641 64.4792 74.7217 64.3405 74.1775 64.3678C73.3413 64.4078 72.501 64.3783 71.6606 64.3783C69.673 64.3783 69.5386 64.2397 69.5386 62.2185C69.5386 60.4621 69.5386 58.7057 69.5386 56.9493C69.5386 56.6678 69.5386 56.3841 69.5386 56.0564L69.5344 56.0606ZM26.5611 26.544V60.4264H60.4435V26.544H26.5611ZM24.5988 9.3917C24.6051 9.27615 24.6114 9.15849 24.6177 9.04294C24.3173 8.83704 24.0084 8.45887 23.7206 8.47568C23.4538 8.49038 22.9726 8.9673 23.0084 9.16269C23.0651 9.46944 23.4433 9.86022 23.75 9.93165C23.979 9.98417 24.311 9.58919 24.5988 9.3938V9.3917ZM40.8204 9.13958C40.2657 8.80763 39.9338 8.45257 39.6313 8.47778C39.377 8.49879 39.0094 8.93579 38.961 9.23203C38.8812 9.71525 39.2867 10.0451 39.751 9.94846C40.0598 9.88543 40.312 9.53877 40.8204 9.13748V9.13958ZM47.1233 10.1018C47.2368 10.0997 47.3481 10.0955 47.4616 10.0934C47.6612 9.80769 47.9784 9.54087 48.033 9.22993C48.1171 8.7467 47.7536 8.37483 47.2893 8.46517C46.9952 8.5219 46.5771 8.91688 46.5624 9.1774C46.5455 9.47364 46.9195 9.79299 47.1212 10.1018H47.1233ZM63.0466 10.0934C63.1579 10.0934 63.2714 10.0934 63.3827 10.0955C63.5991 9.8182 64.0172 9.51146 63.9815 9.26984C63.9374 8.961 63.5277 8.70678 63.2756 8.42735C63.0172 8.66687 62.5739 8.88747 62.5465 9.14799C62.5171 9.44212 62.8617 9.77618 63.0445 10.0934H63.0466ZM9.40036 22.8421H9.06841C8.85411 23.1195 8.51795 23.3737 8.45703 23.6846C8.36668 24.1531 8.70074 24.5481 9.18396 24.4557C9.4802 24.401 9.9109 24.0334 9.92981 23.7813C9.95082 23.4829 9.59365 23.1573 9.40036 22.8421ZM78.6799 23.8758C78.6799 23.7623 78.6799 23.6468 78.6799 23.5333C78.3648 23.3422 78.0349 22.9808 77.7387 23.0081C77.4761 23.0312 77.0937 23.4577 77.0454 23.7497C76.9697 24.2183 77.3521 24.567 77.8332 24.4662C78.1442 24.401 78.4005 24.0817 78.6799 23.8758ZM9.0474 40.5995C9.15665 40.5953 9.2659 40.5911 9.37725 40.5869C9.57894 40.297 9.9046 40.026 9.95082 39.7129C10.0222 39.2381 9.66298 38.8599 9.19026 38.965C8.89823 39.0301 8.48434 39.423 8.47593 39.6814C8.46753 39.9818 8.8394 40.2928 9.0474 40.6016V40.5995ZM77.7345 40.8285C78.1274 40.3159 78.4698 40.0596 78.5307 39.7486C78.6211 39.2822 78.287 38.883 77.8038 38.9671C77.5076 39.0196 77.0748 39.3936 77.0559 39.6457C77.0349 39.9482 77.3941 40.276 77.7324 40.8264L77.7345 40.8285ZM9.01799 48.1903C9.13354 48.1882 9.24699 48.184 9.36254 48.1819C9.56844 47.8983 9.97603 47.5769 9.93191 47.3416C9.87308 47.0306 9.45919 46.789 9.19657 46.5159C8.94025 46.7659 8.49905 47.0012 8.47593 47.2701C8.45072 47.5601 8.82049 47.8815 9.01799 48.1903ZM77.9551 46.4003C77.8458 46.4024 77.7366 46.4045 77.6252 46.4066C77.4193 46.6924 77.0895 46.9592 77.0391 47.2701C76.9592 47.7428 77.3122 48.1273 77.787 48.0307C78.0811 47.9718 78.5013 47.5832 78.5139 47.3268C78.5286 47.0264 78.1589 46.7092 77.9572 46.3982L77.9551 46.4003ZM9.0474 64.1619C9.15875 64.1577 9.2701 64.1535 9.38145 64.1493C9.58105 63.8615 9.9046 63.5905 9.95082 63.2795C10.0222 62.8026 9.66298 62.4307 9.18816 62.54C8.89403 62.6072 8.48224 62.9959 8.47593 63.2522C8.46753 63.5506 8.8415 63.8594 9.0474 64.164V64.1619ZM76.8899 63.1241C76.8899 63.2396 76.8899 63.3531 76.892 63.4686C77.2092 63.6598 77.5412 64.017 77.8374 63.9897C78.1 63.9644 78.4824 63.5358 78.5265 63.2417C78.598 62.7753 78.2135 62.4286 77.7324 62.5337C77.4235 62.6009 77.1693 62.9203 76.8899 63.1241ZM23.5126 78.6818C23.6281 78.6839 23.7416 78.6881 23.8572 78.6902C24.0672 78.4149 24.3908 78.1628 24.4622 77.8561C24.5736 77.377 24.2332 76.9863 23.7647 77.0514C23.4706 77.0913 23.0378 77.4674 23.0084 77.7321C22.9747 78.0263 23.3277 78.3645 23.5147 78.6818H23.5126ZM39.8876 76.9001C39.7762 76.9001 39.6628 76.9001 39.5514 76.9001C39.3434 77.1817 39.0178 77.438 38.9547 77.7489C38.8581 78.23 39.2132 78.6103 39.6796 78.5326C39.9758 78.4843 40.4044 78.0998 40.4254 77.8372C40.4506 77.5409 40.0851 77.2132 39.8876 76.898V76.9001ZM47.075 78.6818C47.1863 78.686 47.2977 78.6902 47.409 78.6944C47.6255 78.4191 47.9595 78.1712 48.033 77.8624C48.1486 77.3812 47.7977 76.9947 47.3334 77.0535C47.0372 77.0913 46.596 77.4653 46.5645 77.7279C46.5308 78.022 46.8859 78.3624 47.0729 78.6818H47.075ZM64.1412 77.9737C64.1454 77.8624 64.1517 77.751 64.1559 77.6397C63.8513 77.4317 63.5403 77.0598 63.242 77.0682C62.9878 77.0745 62.5991 77.4884 62.5318 77.7825C62.4226 78.2574 62.7966 78.6145 63.2714 78.5452C63.5823 78.499 63.8512 78.1754 64.1412 77.9758V77.9737Z"
                fill="black"
              />
              <path
                d="M29.9689 43.4172C29.9689 39.4611 29.9689 35.5029 29.9689 31.5467C29.9689 30.2967 30.2966 29.9668 31.5467 29.9668C39.5115 29.9668 47.4763 29.9668 55.4432 29.9668C56.6933 29.9668 57.0231 30.2966 57.0231 31.5446C57.0231 39.5115 57.0231 47.4763 57.0231 55.4432C57.0231 56.6912 56.6912 57.0231 55.4432 57.0231C47.4784 57.0231 39.5136 57.0231 31.5467 57.0231C30.2987 57.0231 29.9689 56.6933 29.9668 55.4432C29.9668 51.4345 29.9668 47.4238 29.9668 43.4151L29.9689 43.4172ZM32.2064 54.7688H54.7604V32.2106H32.2064V54.7688Z"
                fill="black"
              />
              <path
                d="M32.2012 54.771V32.2129H54.7551V54.771H32.2012ZM53.2445 40.8878C53.2445 39.9214 53.255 38.9549 53.2403 37.9885C53.2298 37.1943 52.8201 36.7342 52.1562 36.7279C51.4902 36.7216 51.0532 37.1817 51.0469 37.9633C51.0343 39.9235 51.0343 41.8816 51.0469 43.8418C51.0511 44.6422 51.4587 45.0918 52.131 45.1003C52.8075 45.1087 53.2277 44.659 53.2403 43.867C53.2571 42.8753 53.2445 41.8816 53.2445 40.8878Z"
                fill="#FEDE00"
              />
              <path
                d="M53.2434 40.8885C53.2434 41.8823 53.256 42.8739 53.2392 43.8677C53.2266 44.6577 52.8043 45.1073 52.1299 45.101C51.4597 45.0926 51.0521 44.6429 51.0458 43.8425C51.0353 41.8823 51.0332 39.9242 51.0458 37.964C51.05 37.1824 51.487 36.7223 52.1551 36.7286C52.819 36.7349 53.2287 37.195 53.2392 37.9892C53.2539 38.9556 53.2434 39.9221 53.2434 40.8885Z"
                fill="black"
              />
            </svg>

            <p>
              <strong>Electronics</strong>
            </p>
          </div>
          <div className="image-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <path
                d="M38.1386 0H69.168C69.833 0.353189 70 0.915947 70 1.64577C69.9853 23.1112 69.9883 44.5766 69.9883 66.042C69.9883 66.1783 69.9927 66.316 69.9868 66.4523C69.9487 67.2247 69.5137 67.6585 68.733 67.6922C68.3976 67.7068 68.0622 67.6951 67.6521 67.6951V69.9769H65.313V67.7522H41.9629V69.9769H39.6531C39.6531 69.568 39.6531 69.206 39.6531 68.8455C39.6531 68.485 39.6531 68.0937 39.6531 67.6966C39.407 67.6966 39.2708 67.6966 39.1346 67.6966C37.5967 67.6834 37.3242 67.4035 37.3242 65.8441C37.3242 44.4476 37.3271 23.0496 37.3125 1.6531C37.3125 0.92474 37.4824 0.361982 38.1386 0.00146552V0ZM67.633 24.5591H39.7087V65.318H67.633V24.5591ZM67.6096 22.1454V2.3712H39.7014V22.1454H67.6096Z"
                fill="black"
              />
              <path
                d="M0 66.8891V25.3109C0.373496 24.6676 0.938866 24.4961 1.66242 24.4961C12.1877 24.5122 22.7115 24.5064 33.2367 24.5078C34.6795 24.5078 34.9929 24.8244 34.9929 26.2811C34.9929 39.5015 34.9929 52.7219 34.9929 65.9423C34.9929 66.1241 35.0002 66.3072 34.99 66.489C34.949 67.2232 34.5154 67.6628 33.7787 67.701C33.4242 67.72 33.0668 67.7039 32.6377 67.7039V70.0003H30.322V67.7464H4.6416V69.9798H2.30249V67.7185C1.41489 67.6922 0.481883 67.8739 0 66.8905V66.8891ZM32.6274 65.3503V36.251H2.37719V65.3503H32.6274ZM2.35815 33.7875H32.6289V26.8849H2.35815V33.7875Z"
                fill="black"
              />
              <path
                d="M34.1741 0C34.8025 0.34 35.0075 0.864654 35.0061 1.57689C34.987 7.91232 34.9958 14.2477 34.9944 20.5832C34.9944 21.8054 34.6326 22.1659 33.4066 22.1659C22.7935 22.1659 12.1804 22.1615 1.56575 22.1776C0.852449 22.1776 0.323696 21.9871 0 21.3364V0H34.1741ZM23.3061 2.38293H2.3684V19.7947H23.3061V2.38293ZM32.6128 19.8064V2.36388H25.7156V19.8064H32.6128Z"
                fill="black"
              />
              <path
                d="M67.6333 24.5625V65.3214H39.709V24.5625H67.6333ZM43.2125 26.8751V43.1438H45.4506V26.8751H43.2125Z"
                fill="#FEDE00"
              />
              <path
                d="M23.3069 2.38281V19.7946H2.36914V2.38281H23.3069ZM12.7802 17.5055C15.0563 17.5055 17.3339 17.5099 19.61 17.5025C20.5577 17.4996 20.9985 17.0805 21.0015 16.125C21.0146 12.7762 21.0132 9.42755 21.0015 6.08031C20.9985 5.08815 20.5621 4.66315 19.5763 4.66169C15.0914 4.65583 10.6066 4.65729 6.12168 4.66169C5.0876 4.66169 4.66284 5.08522 4.66138 6.11255C4.65552 9.41582 4.65699 12.7191 4.66138 16.0209C4.66138 17.0966 5.07442 17.5011 6.1539 17.504C8.36265 17.5069 10.5699 17.504 12.7787 17.504L12.7802 17.5055Z"
                fill="#FEDE00"
              />
              <path
                d="M43.2129 26.8711H45.4509V43.1398H43.2129V26.8711Z"
                fill="black"
              />
              <path
                d="M45.4529 19.7948H43.2031V8.23633H45.4529V19.7948Z"
                fill="black"
              />
              <path
                d="M17.5055 37.3457C24.5931 37.356 30.3626 43.1609 30.3333 50.2525C30.304 57.3075 24.5009 63.0655 17.4499 63.0347C10.3871 63.004 4.647 57.224 4.66018 50.1587C4.67483 43.0935 10.4457 37.3355 17.5055 37.3457ZM22.3668 56.7447C18.2217 59.6054 13.5728 58.307 11.1722 55.4331C8.60752 52.3629 8.62656 47.9223 11.2527 44.8257C13.5772 42.0837 18.1822 40.7003 22.235 43.5097C22.8033 42.966 23.3496 42.4413 23.893 41.9196C19.8973 38.6075 13.2506 38.8317 9.36916 43.5273C5.60344 48.0835 6.37533 54.8381 11.0638 58.4902C15.5604 61.9928 21.4851 60.8101 23.9311 58.3231C23.4199 57.8073 22.9088 57.2914 22.3668 56.7433V56.7447ZM20.678 45.3767C18.5249 43.7266 15.203 44.1076 13.2359 46.1798C11.1737 48.3517 11.1034 51.7327 13.0748 54.0145C14.9628 56.1996 18.3052 56.6612 20.6824 55.0066C19.6879 54.3853 19.8139 53.4034 19.8227 52.4464C19.8358 50.8768 19.8476 49.3058 19.8183 47.7362C19.8007 46.8261 19.7802 45.9439 20.6795 45.3782L20.678 45.3767ZM25.6301 43.6958C24.621 44.707 23.5928 45.6977 22.6187 46.7397C22.3727 47.0035 22.194 47.4285 22.1749 47.789C22.1178 48.8779 22.254 49.9843 22.131 51.0615C21.9552 52.6017 22.4122 53.761 23.6426 54.7106C24.3822 55.2822 24.9915 56.0252 25.6624 56.6964C28.9565 52.7468 28.5214 46.8774 25.6287 43.6943L25.6301 43.6958Z"
                fill="black"
              />
              <path
                d="M23.3789 29.1953H30.2805V31.4581H23.3789V29.1953Z"
                fill="black"
              />
              <path
                d="M6.9524 31.4688H4.70703V29.2207H6.9524V31.4688Z"
                fill="black"
              />
              <path
                d="M11.5989 31.4668H9.36523V29.2305H11.5989V31.4668Z"
                fill="black"
              />
              <path
                d="M14.0386 29.1709C14.7079 29.1709 15.3378 29.146 15.9632 29.1914C16.0935 29.2002 16.2971 29.4611 16.3074 29.6179C16.3484 30.2041 16.3235 30.7947 16.3235 31.4439H14.0371V29.1709H14.0386Z"
                fill="black"
              />
              <path
                d="M12.7808 17.5038C10.572 17.5038 8.36472 17.5067 6.15597 17.5038C5.07503 17.5023 4.66492 17.0964 4.66345 16.0207C4.65906 12.7174 4.65906 9.41417 4.66345 6.11236C4.66492 5.08357 5.08968 4.6615 6.12375 4.6615C10.6086 4.6571 15.0935 4.6571 19.5784 4.6615C20.5641 4.6615 21.0006 5.08797 21.0035 6.08012C21.0138 9.42882 21.0152 12.7775 21.0035 16.1248C21.0006 17.0788 20.5597 17.4994 19.6121 17.5023C17.3359 17.5097 15.0584 17.5053 12.7822 17.5053L12.7808 17.5038ZM7.0509 7.01658V15.1238H18.6205V7.01658H7.0509Z"
                fill="black"
              />
              <path
                d="M30.9012 16.3516C30.8924 17.3115 30.1264 18.0663 29.1626 18.0648C28.1681 18.0648 27.4079 17.2793 27.4343 16.2798C27.4606 15.3111 28.2237 14.5871 29.2007 14.6018C30.1615 14.6179 30.91 15.3873 30.9012 16.3516ZM29.1377 15.5295C28.8843 15.8973 28.5796 16.1552 28.6221 16.3252C28.6792 16.5538 29.0044 16.7165 29.2153 16.9085C29.3882 16.7048 29.6884 16.5055 29.6957 16.2945C29.7031 16.0922 29.4087 15.8782 29.1377 15.5295Z"
                fill="black"
              />
              <path
                d="M30.2986 9.37305V11.6109H28.0371V9.37305H30.2986Z"
                fill="black"
              />
              <path
                d="M22.3723 56.7405C22.9142 57.2886 23.4254 57.8045 23.9365 58.3203C21.4905 60.8073 15.5658 61.99 11.0692 58.4874C6.38077 54.8368 5.60888 48.0808 9.3746 43.5245C13.256 38.829 19.9028 38.6033 23.8985 41.9168C23.3551 42.4371 22.8087 42.9617 22.2404 43.5069C18.1876 40.6975 13.5827 42.0809 11.2582 44.8229C8.632 47.9196 8.61296 52.3601 11.1776 55.4303C13.5783 58.3042 18.2272 59.6027 22.3723 56.742V56.7405Z"
                fill="#FEDE00"
              />
              <path
                d="M25.6379 43.6953C28.5307 46.8769 28.9657 52.7463 25.6716 56.6974C24.9993 56.0276 24.3914 55.2831 23.6518 54.7116C22.4214 53.7605 21.963 52.6027 22.1402 51.0625C22.2632 49.9838 22.127 48.8788 22.1842 47.79C22.2032 47.4294 22.3819 47.0044 22.628 46.7407C23.6005 45.6987 24.6287 44.708 25.6394 43.6968L25.6379 43.6953Z"
                fill="#FEDE00"
              />
            </svg>

            <p>
              <strong>White Goods</strong>
            </p>
          </div>
          <div className="image-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
            >
              <path
                d="M40.5456 2C41.3482 2.47686 41.57 3.1951 41.5562 4.09977C41.517 6.71762 41.5562 9.33743 41.5327 11.9572C41.5288 12.4498 41.6504 12.648 42.1626 12.7971C44.5372 13.4899 46.0385 15.0716 46.4212 17.5246C47.11 21.9459 47.7066 26.3829 48.3424 30.812C48.3816 31.0926 48.4405 31.3693 48.4719 31.5558C49.5886 31.0495 50.664 30.5608 51.8238 30.0329C51.8238 27.9018 51.8238 25.6528 51.8238 23.402C51.8238 21.8203 52.2536 21.3885 53.8157 21.3866C56.4591 21.3866 59.1025 21.3846 61.746 21.3866C63.0333 21.3866 63.5671 21.9204 63.571 23.2234C63.5789 25.329 63.5848 27.4347 63.5632 29.5384C63.5573 30.0251 63.6574 30.2409 64.1951 30.3744C66.5383 30.9513 68.0788 32.4349 68.5949 34.7996C69.4663 38.7872 70.2473 42.7944 71.0539 46.7958C71.2423 47.7338 70.7242 48.5129 69.8548 48.6659C69.0561 48.8053 68.3516 48.2558 68.1593 47.3139C67.3723 43.4577 66.5932 39.5996 65.8122 35.7435C65.4727 34.0657 64.3737 33.1433 62.6801 33.1414C59.3518 33.1355 56.0215 33.1355 52.6932 33.1414C51.0231 33.1433 50.0105 34.046 49.5493 35.6591C49.096 37.2448 49.4845 38.7656 49.6985 40.3022C50.5992 46.7448 51.5314 53.1814 52.4518 59.622C52.9542 63.1328 53.433 66.6455 53.9648 70.1523C54.1807 71.577 53.9943 72.9154 53.3192 74.2733H54.1356C59.2752 74.2733 64.4169 74.2733 69.5565 74.2733C72.041 74.2733 73.3107 72.7427 72.824 70.3309C72.1803 67.1439 71.5327 63.959 70.8831 60.772C70.6653 59.7005 71.101 58.9058 72.0057 58.7331C72.8554 58.5702 73.5403 59.1334 73.7523 60.1931C74.4509 63.6685 75.2221 67.1302 75.8109 70.6233C76.3702 73.9358 73.7209 77.0286 70.3513 77.1993C70.1315 77.2111 69.9117 77.2111 69.69 77.2111C51.3312 77.2111 32.9705 77.2111 14.6117 77.2111C11.5856 77.2111 9.28759 75.4822 8.57522 72.7289C8.23767 71.4239 8.51438 70.1484 8.69493 68.8708C10.153 58.6055 11.6209 48.3402 13.0889 38.0768C14.0622 31.2751 15.014 24.4695 16.0227 17.6718C16.3897 15.1932 17.8537 13.5468 20.2577 12.8285C20.8582 12.65 20.9858 12.3948 20.9799 11.8258C20.9505 9.18239 20.9917 6.53904 20.9544 3.89568C20.9426 3.0126 21.2173 2.37874 22.0278 2.00392H40.5377L40.5456 2ZM14.5705 48.613C14.2997 50.5283 14.076 52.3239 13.7777 54.1057C13.6815 54.6748 13.8503 54.9123 14.3311 55.1693C20.6463 58.5466 26.9516 61.9455 33.259 65.3385C38.4457 68.131 43.6384 70.9157 48.8114 73.7317C49.3197 74.0084 49.6572 73.9456 50.0497 73.614C50.9564 72.8467 51.2468 71.8615 51.0898 70.7175C51.0074 70.1111 50.8779 69.5106 50.8347 68.9022C50.7915 68.3096 50.5482 67.9564 50.0066 67.6659C40.0118 62.3046 30.0288 56.9218 20.0418 51.5448C18.2599 50.5852 16.4741 49.6314 14.5705 48.611V48.613ZM50.1204 64.3789C50.0968 64.0198 50.0968 63.7784 50.0635 63.5429C49.7946 61.6806 49.4924 59.8222 49.2648 57.954C49.198 57.3967 48.9763 57.1043 48.4955 56.8472C38.2907 51.3682 28.0938 45.8734 17.893 40.3826C17.2532 40.0373 16.6075 39.7017 15.8952 39.3249C15.6244 41.25 15.3869 43.0868 15.0925 44.9178C15.016 45.3985 15.1612 45.5967 15.5635 45.8126C26.8005 51.8509 38.0277 57.903 49.2589 63.9511C49.5081 64.0865 49.7671 64.2062 50.1165 64.3789H50.1204ZM48.6368 53.5896C48.2953 51.2249 47.9872 48.974 47.6202 46.7349C47.577 46.4759 47.2454 46.1972 46.9785 46.054C37.3252 40.8418 27.664 35.6434 18.0028 30.445C17.7615 30.3155 17.5142 30.1958 17.2257 30.0486C16.9569 31.9266 16.743 33.6987 16.4329 35.455C16.3191 36.1007 16.5565 36.346 17.0668 36.6207C26.4512 41.6582 35.8278 46.7134 45.2064 51.7646C46.3171 52.3631 47.4318 52.9518 48.6348 53.5916L48.6368 53.5896ZM18.5621 20.737C18.2933 22.5974 18.0656 24.3616 17.7693 26.112C17.6614 26.7518 17.8596 27.0422 18.4209 27.3425C26.8692 31.8619 35.3019 36.4107 43.7385 40.9517C44.81 41.5287 45.8815 42.1017 47.0275 42.7179C47.0079 42.3902 47.0099 42.1724 46.9785 41.9585C46.7096 40.0942 46.3956 38.2377 46.1837 36.3676C46.1111 35.716 45.8363 35.3923 45.2927 35.1018C37.751 31.0612 30.2211 26.9991 22.6892 22.9447C21.339 22.2186 19.9869 21.4984 18.5621 20.7351V20.737ZM38.5811 4.99463H23.9609V12.5165H38.5811V4.99463ZM29.2242 66.5081C27.2696 65.4543 25.4602 64.4986 23.6724 63.5017C23.2132 63.2466 22.8658 63.2446 22.4007 63.4998C19.2941 65.1992 16.2013 66.9261 13.0359 68.5117C11.9114 69.0749 11.3384 69.7696 11.3737 70.9942C11.3756 71.0668 11.3521 71.1394 11.3521 71.212C11.3521 72.3208 11.7819 73.2254 12.7337 73.8043C13.6384 74.3558 14.5548 74.4539 15.5576 73.8828C17.5711 72.7329 19.6356 71.6712 21.6785 70.5723C24.1473 69.2437 26.6161 67.9132 29.2222 66.5081H29.2242ZM28.4019 22.6563C28.708 22.8329 28.9121 22.9585 29.1221 23.0703C30.7353 23.9397 32.3562 24.7894 33.9556 25.6842C34.3874 25.9256 34.7131 25.9492 35.1586 25.7019C37.4233 24.4479 39.7096 23.2352 41.986 22.0028C42.6277 21.6554 43.5363 21.4278 43.815 20.8842C44.0917 20.3445 43.7208 19.4772 43.6502 18.753C43.5697 17.9131 43.4009 17.1105 42.7985 16.4649C42.0292 15.6407 41.568 15.5602 40.5868 16.092C40.3729 16.2078 40.155 16.3197 39.9392 16.4354C36.1359 18.4861 32.3307 20.5388 28.4039 22.6563H28.4019ZM21.1035 74.2184H43.4461C43.2675 74.0948 43.1949 74.0339 43.1144 73.9888C39.6762 72.1324 36.2399 70.27 32.786 68.4411C32.5427 68.3116 32.1149 68.3214 31.8637 68.4489C30.5331 69.1181 29.232 69.8442 27.9191 70.5507C25.7074 71.7418 23.4958 72.9311 21.1016 74.2184H21.1035ZM19.0822 17.6659C21.0564 18.7295 22.9855 19.7872 24.9362 20.7979C25.1501 20.9097 25.5465 20.8293 25.7879 20.7037C27.6738 19.7205 29.5421 18.704 31.4143 17.6953C32.6683 17.0202 33.9203 16.3393 35.19 15.6505C35.1135 15.5661 35.0998 15.5367 35.0841 15.5367C30.6057 15.5308 26.1274 15.5072 21.6491 15.5386C20.4088 15.5484 19.4374 16.4158 19.0822 17.6659ZM54.8205 24.3478V30.1585H60.5803V24.3478H54.8205ZM37.6686 27.6741C40.3179 29.1008 42.8691 30.4745 45.538 31.9109C45.1475 29.2028 44.7805 26.6674 44.4037 24.0456C42.1077 25.2819 39.947 26.4457 37.6686 27.6722V27.6741ZM13.2459 57.903C12.871 60.5287 12.5139 63.0366 12.1351 65.7016C14.7903 64.271 17.3042 62.9169 19.93 61.5001C17.6378 60.2657 15.4929 59.1118 13.2459 57.903Z"
                fill="black"
              />
              <path
                d="M14.5726 48.6094C16.4762 49.6298 18.2621 50.5836 20.044 51.5432C30.0309 56.9202 40.0139 62.303 50.0087 67.6643C50.5503 67.9547 50.7937 68.308 50.8368 68.9006C50.88 69.509 51.0095 70.1095 51.0919 70.7158C51.2489 71.8619 50.9585 72.8451 50.0519 73.6124C49.6594 73.944 49.3218 74.0068 48.8135 73.7301C43.6405 70.9121 38.4479 68.1274 33.2611 65.3369C26.9538 61.9419 20.6504 58.5431 14.3332 55.1677C13.8524 54.9107 13.6836 54.6732 13.7798 54.1041C14.0801 52.3222 14.3038 50.5266 14.5726 48.6113V48.6094Z"
                fill="#FEDE00"
              />
              <path
                d="M50.1147 64.3763C49.7654 64.2016 49.5063 64.0819 49.2571 63.9485C38.026 57.9003 26.7988 51.8483 15.5618 45.81C15.1575 45.5921 15.0123 45.3959 15.0908 44.9151C15.3852 43.0862 15.6226 41.2474 15.8934 39.3223C16.6058 39.699 17.2495 40.0366 17.8912 40.38C28.0901 45.8708 38.287 51.3655 48.4937 56.8446C48.9726 57.1016 49.1943 57.394 49.263 57.9514C49.4906 59.8196 49.7929 61.678 50.0617 63.5403C50.0951 63.7758 50.0951 64.0152 50.1186 64.3763H50.1147Z"
                fill="#FEDE00"
              />
              <path
                d="M48.644 53.5918C47.441 52.9501 46.3244 52.3614 45.2156 51.7648C35.837 46.7155 26.4604 41.6604 17.0759 36.6209C16.5657 36.3481 16.3282 36.1009 16.4421 35.4552C16.7521 33.7009 16.966 31.9268 17.2349 30.0488C17.5234 30.196 17.7706 30.3138 18.012 30.4452C27.6732 35.6436 37.3344 40.842 46.9877 46.0542C47.2546 46.1974 47.5862 46.4781 47.6294 46.7351C47.9964 48.9762 48.3025 51.2251 48.6459 53.5898L48.644 53.5918Z"
                fill="#FEDE00"
              />
              <path
                d="M18.5593 20.7344C19.9861 21.4977 21.3382 22.218 22.6864 22.944C30.2203 26.9984 37.7502 31.0605 45.2899 35.1011C45.8335 35.3935 46.1083 35.7154 46.1809 36.3669C46.3909 38.237 46.7068 40.0954 46.9757 41.9578C47.0071 42.1717 47.0051 42.3915 47.0247 42.7172C45.8767 42.101 44.8052 41.528 43.7357 40.9511C35.2991 36.4101 26.8664 31.8612 18.4181 27.3418C17.8568 27.0415 17.6586 26.7511 17.7665 26.1114C18.0628 24.3589 18.2905 22.5967 18.5593 20.7363V20.7344Z"
                fill="#FEDE00"
              />
            </svg>

            <p>
              <strong>Textiles</strong>
            </p>
          </div>
          <div className="image-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
            >
              <path
                d="M37.0395 6.21786H49.9688C50.5804 6.64268 50.7671 7.22569 50.734 7.96084C50.6843 9.06057 50.7355 10.1648 50.7129 11.266C50.7039 11.6788 50.7988 11.8807 51.2522 11.9771C52.0566 12.1488 52.8685 12.3507 53.6263 12.6656C56.0666 13.6779 58.4828 14.746 61.0452 15.8517C61.8993 14.993 62.9191 13.9641 63.9434 12.9397C64.9015 11.9816 65.3986 11.9756 66.3356 12.9126C68.922 15.4962 71.5085 18.0828 74.0919 20.6694C75.0259 21.6049 75.0183 22.1081 74.0633 23.0632C73.039 24.0891 72.0116 25.1105 70.9647 26.156C72.8672 29.2126 74.2395 32.4425 75.0907 35.8938C75.1313 36.061 75.4627 36.2614 75.6631 36.2674C76.7883 36.3036 77.9181 36.3217 79.0434 36.2719C79.78 36.2388 80.3615 36.4256 80.7863 37.0372V49.9673C80.36 50.5744 79.7815 50.7747 79.0449 50.731C78.1471 50.6783 77.2448 50.719 76.344 50.719C75.175 50.719 75.178 50.719 74.8873 51.8232C74.7788 52.233 74.6628 52.6428 74.5227 53.0435C74.0738 54.33 73.6114 55.6105 73.1459 56.9211C73.3191 56.9693 73.4607 57.0085 73.6008 57.0492C76.713 57.938 78.8973 59.8798 80.1159 62.8732C80.4127 63.6023 80.5663 64.3902 80.7848 65.151V67.5568C80.7366 67.6939 80.6703 67.828 80.6432 67.9696C80.0135 71.2462 78.2134 73.6656 75.1886 75.047C73.9654 75.6059 72.5825 75.8183 71.162 76.2205C71.162 77.0913 71.165 78.1383 71.162 79.1853C71.159 80.3769 70.7658 80.7851 69.6059 80.7851C52.1982 80.7866 34.7905 80.7866 17.3828 80.7851C16.253 80.7851 15.8478 80.3754 15.8417 79.2455C15.8372 78.1744 15.8417 77.1048 15.8417 76.0473C10.4429 75.2624 7.18609 72.5327 6.38771 68.179C6.01111 66.1212 6.2431 64.1296 7.14994 62.248C8.52526 59.3917 10.8421 57.6653 13.7855 56.9317C13.1574 54.9537 12.5654 53.048 11.9282 51.1574C11.8634 50.9646 11.5305 50.7461 11.3166 50.7386C10.116 50.6979 8.9124 50.725 7.71031 50.7175C6.6694 50.7115 6.22653 50.2897 6.22502 49.2758C6.219 45.4177 6.21749 41.5612 6.22502 37.7031C6.22653 36.7269 6.67242 36.296 7.6606 36.2885C8.83708 36.2795 10.0151 36.2659 11.1916 36.296C11.6661 36.3081 11.8995 36.1981 12.0035 35.6844C12.1617 34.9026 12.362 34.1162 12.6678 33.381C13.6816 30.9421 14.7496 28.5242 15.8643 25.9421C14.9906 25.0804 13.9377 24.0484 12.8938 23.0075C12.0035 22.1187 11.9975 21.5929 12.8636 20.7252C15.4832 18.1009 18.1028 15.4796 20.7269 12.8599C21.5961 11.9922 22.1233 11.9997 23.0121 12.8855C24.056 13.9265 25.0954 14.972 26.1589 16.0385C29.2169 14.1389 32.4435 12.7605 35.8977 11.9138C36.0649 11.8731 36.2652 11.5402 36.2713 11.3384C36.3074 10.213 36.3255 9.08316 36.2758 7.95783C36.2426 7.22117 36.4279 6.63967 37.041 6.21484L37.0395 6.21786ZM61.5438 56.6681C62.2367 56.888 62.3663 56.3698 62.5817 56.0459C69.9931 44.8664 66.093 29.6224 54.2243 23.357C52.0024 22.1849 49.666 21.3654 47.1127 20.9858C47.1127 22.7981 47.1157 24.5501 47.1127 26.3006C47.1097 27.4681 46.709 27.8598 45.5219 27.8673C45.2598 27.8689 44.9977 27.8673 44.7492 27.8673V30.2988C45.888 30.0969 46.7783 30.4268 47.4817 31.3232C48.1084 32.1231 49.1222 32.7543 49.428 33.6447C50.148 35.7326 48.9911 37.9441 46.724 39.4521C46.1908 38.9309 45.656 38.4081 44.9796 37.7453C45.6153 37.1668 46.236 36.626 46.828 36.0565C47.2031 35.695 47.2498 34.5742 46.9214 34.193C46.0944 33.2334 45.2372 32.3265 43.7745 32.6745C43.6555 32.7031 43.5215 32.6986 43.401 32.6745C42.0497 32.4199 41.063 32.9622 40.2451 34.0137C39.7781 34.6133 39.7194 35.6181 40.2767 36.1559C40.8326 36.6923 41.4186 37.1969 41.9593 37.6865C41.3071 38.3705 40.7799 38.9218 40.2104 39.5169C39.391 38.6898 38.5835 37.9065 37.8213 37.0809C37.636 36.8806 37.5291 36.5491 37.505 36.2674C37.3564 34.4737 37.9243 32.9391 39.2087 31.6637C39.2449 31.629 39.284 31.5959 39.3141 31.5567C40.0357 30.6393 40.9034 30.0442 42.1446 30.2491C42.1778 30.2551 42.2215 30.1964 42.2395 30.1828V27.8658C41.8539 27.8658 41.5285 27.8764 41.2031 27.8643C40.3641 27.8312 39.9287 27.3883 39.8971 26.5432C39.8866 26.2675 39.8941 25.9918 39.8941 25.7161C39.8941 24.1479 39.8941 22.5796 39.8941 21.0009C37.0305 21.3805 33.7646 22.5555 31.249 24.2639C23.4459 29.5621 19.9346 36.9378 20.8384 46.3291C21.1864 49.9507 22.5271 53.2649 24.5878 56.2703C24.749 56.5053 25.0593 56.6394 25.4615 56.9422C25.4615 56.4029 25.4615 56.1302 25.4615 55.8561C25.4615 52.6488 25.4585 49.443 25.4615 46.2357C25.4615 45.1104 25.8742 44.7037 27.007 44.7022C31.5909 44.6991 36.1748 44.6991 40.7588 44.7022C41.8855 44.7022 42.2938 45.1134 42.2953 46.2448C42.2998 49.4506 42.2953 52.6578 42.2953 55.8651C42.2953 56.1317 42.2953 56.3999 42.2953 56.6771H44.701C44.701 56.3532 44.701 56.082 44.701 55.8094C44.701 52.6021 44.6979 49.3963 44.7025 46.189C44.704 45.1782 45.1258 44.7067 46.0672 44.7052C50.7762 44.6961 55.4851 44.6961 60.1956 44.7052C61.0768 44.7067 61.5257 45.1707 61.5332 46.0655C61.5468 47.6443 61.5378 49.2216 61.5378 50.8003C61.5378 52.7527 61.5378 54.7036 61.5378 56.6635L61.5438 56.6681ZM21.9275 56.7328C14.9379 44.9944 18.7054 31.8053 26.5325 24.8032C34.8447 17.3657 46.718 16.0867 56.3121 21.7601C62.3482 25.3304 66.2844 30.588 67.9926 37.4003C69.6948 44.19 68.6147 50.6286 65.0491 56.7343C66.8176 56.7343 68.4445 56.7524 70.0714 56.7132C70.2898 56.7087 70.6197 56.4632 70.695 56.2553C71.4286 54.2381 72.1999 52.2285 72.7949 50.1691C73.3071 48.4005 73.2845 48.3147 75.1645 48.3147H78.3384V38.6928C77.0489 38.6928 75.8017 38.6959 74.5544 38.6928C73.4999 38.6898 73.1715 38.4383 72.9516 37.4108C72.1622 33.726 70.7779 30.2913 68.7172 27.1307C67.9881 26.0114 68.0318 25.6905 68.9898 24.7339C69.9403 23.7848 70.8939 22.8403 71.7329 22.0057C69.4493 19.7219 67.2454 17.5149 65.0024 15.2717C64.0489 16.2314 63.023 17.2588 62.0047 18.2907C61.4745 18.827 60.8855 18.949 60.2483 18.5242C56.9147 16.3067 53.2933 14.7957 49.3647 14.0138C48.6597 13.8737 48.3072 13.4007 48.3133 12.6656C48.3208 11.5884 48.3148 10.5113 48.3148 9.43417C48.3148 9.17205 48.3148 8.90992 48.3148 8.67039H38.6935C38.6935 9.96144 38.6965 11.2088 38.6935 12.4577C38.6905 13.5092 38.4359 13.8361 37.4056 14.0575C33.7737 14.8394 30.3798 16.1922 27.2556 18.2154C25.9736 19.0455 25.7221 19.0078 24.6239 17.9066C23.7111 16.9906 22.8027 16.0732 22.0179 15.2838C19.7267 17.5721 17.5214 19.7761 15.2814 22.0132C16.2033 22.9291 17.2005 23.9144 18.1887 24.9071C18.9238 25.6453 18.9765 26.0777 18.3981 26.9574C16.2831 30.1738 14.849 33.6688 14.0522 37.4319C13.8428 38.4172 13.4963 38.6913 12.5081 38.6959C11.2383 38.7019 9.96687 38.6959 8.67439 38.6959V48.3177C9.96988 48.3177 11.2187 48.3147 12.4659 48.3177C13.5129 48.3207 13.7599 48.6054 14.0733 49.6087C14.7647 51.8232 15.5254 54.0182 16.2922 56.2086C16.369 56.427 16.6778 56.7072 16.8857 56.7132C18.5367 56.7539 20.1892 56.7358 21.929 56.7358L21.9275 56.7328ZM10.4926 71.1663C12.1602 72.8973 14.0326 73.5782 16.2183 73.5782C34.4094 73.5676 52.5989 73.5722 70.7899 73.5722C71.0159 73.5722 71.2403 73.5722 71.4663 73.5631C75.99 73.3929 79.2693 69.0211 78.1667 64.6328C77.3261 61.2884 74.4715 59.1417 70.8381 59.1417C52.623 59.1387 34.4064 59.1417 16.1912 59.1417C15.9412 59.1417 15.6896 59.1387 15.4395 59.1552C13.7313 59.2742 12.2355 59.8979 10.9731 61.0609C10.8451 61.1784 10.7532 61.3351 10.586 61.546C14.7677 61.546 18.8259 61.5385 22.8841 61.549C25.7221 61.555 27.8702 63.6445 27.8657 66.3697C27.8596 69.0904 25.71 71.1543 22.8585 71.1678C21.4801 71.1739 20.1018 71.1678 18.725 71.1678C16.0481 71.1678 13.3728 71.1678 10.4926 71.1678V71.1663ZM68.7232 76.0277H18.3077V78.3477H68.7232V76.0277ZM39.8384 56.7012V47.1517H37.4899C37.4899 48.2363 37.4929 49.2818 37.4899 50.3273C37.4854 51.5144 37.0922 51.9181 35.9278 51.9212C34.6504 51.9257 33.373 51.9212 32.0956 51.9212C30.5997 51.9212 30.2759 51.6033 30.2759 50.133C30.2759 49.1402 30.2759 48.149 30.2759 47.1682H27.9109V56.6982H39.8414L39.8384 56.7012ZM59.0839 56.6982V47.1487H56.7324C56.7324 48.2544 56.7369 49.3255 56.7324 50.3951C56.7264 51.5114 56.3121 51.9181 55.1778 51.9212C53.801 51.9257 52.4227 51.9272 51.0458 51.9212C49.9296 51.9166 49.5244 51.5024 49.5199 50.3665C49.5153 49.2984 49.5199 48.2303 49.5199 47.1667H47.1518V56.6967H59.0869L59.0839 56.6982ZM18.8952 63.9518C15.6504 63.9518 12.5081 63.9458 9.36733 63.9714C9.21217 63.9714 8.97868 64.2396 8.91843 64.4279C8.53581 65.624 8.5584 66.8337 8.82654 68.057C8.93952 68.5752 9.14438 68.7846 9.72434 68.7786C12.5503 68.7424 15.3778 68.7635 18.2037 68.7605C18.4071 68.7605 18.612 68.7289 18.8861 68.7048C18.02 67.1004 18.0757 65.5638 18.8967 63.9533L18.8952 63.9518ZM25.46 66.3773C25.472 65.0726 24.401 63.9729 23.098 63.9518C21.7904 63.9307 20.6848 64.9913 20.6546 66.2944C20.6245 67.6306 21.7196 68.756 23.0528 68.7575C24.3573 68.759 25.4479 67.6803 25.4585 66.3757L25.46 66.3773ZM44.707 20.7312H42.3495V25.4088H44.707V20.7312ZM35.027 49.4897V47.1502H32.7237V49.4897H35.027ZM51.9557 49.4777H54.2815V47.1652H51.9557V49.4777Z"
                fill="black"
              />
              <path
                d="M21.9206 56.7315C20.1808 56.7315 18.5283 56.7495 16.8773 56.7089C16.6694 56.7043 16.3606 56.4226 16.2838 56.2042C15.517 54.0138 14.7578 51.8204 14.0649 49.6044C13.7516 48.601 13.5045 48.3163 12.4576 48.3133C11.2088 48.3088 9.9615 48.3133 8.66602 48.3133V38.6915C9.95849 38.6915 11.2299 38.696 12.4998 38.6915C13.4894 38.687 13.8359 38.4128 14.0438 37.4276C14.8407 33.6644 16.2747 30.1694 18.3897 26.9531C18.9681 26.0733 18.9139 25.6409 18.1803 24.9028C17.1921 23.91 16.1934 22.9248 15.273 22.0088C17.5115 19.7717 19.7183 17.5678 22.0095 15.2794C22.7943 16.0688 23.7027 16.9878 24.6156 17.9022C25.7137 19.0049 25.9653 19.0426 27.2472 18.211C30.3714 16.1878 33.7653 14.835 37.3972 14.0532C38.4275 13.8317 38.6821 13.5033 38.6851 12.4533C38.6897 11.2059 38.6851 9.95706 38.6851 8.66602H48.3064C48.3064 8.90554 48.3064 9.16767 48.3064 9.4298C48.3064 10.5069 48.3124 11.584 48.3049 12.6612C48.2989 13.3963 48.6529 13.8679 49.3563 14.0095C53.285 14.7913 56.9063 16.3023 60.2399 18.5198C60.8786 18.9447 61.4676 18.8241 61.9964 18.2863C63.0147 17.2529 64.0405 16.227 64.9941 15.2674C67.2371 17.5105 69.4409 19.7175 71.7246 22.0013C70.8855 22.8359 69.932 23.7819 68.9814 24.7295C68.0219 25.6861 67.9797 26.007 68.7088 27.1263C70.7695 30.2869 72.1539 33.7231 72.9432 37.4065C73.1632 38.4339 73.4915 38.6855 74.546 38.6885C75.7933 38.6915 77.0406 38.6885 78.33 38.6885V48.3103H75.1561C73.2761 48.3103 73.2972 48.3947 72.7866 50.1648C72.19 52.2241 71.4188 54.2337 70.6867 56.2509C70.6113 56.4588 70.2799 56.7043 70.063 56.7089C68.4361 56.748 66.8092 56.73 65.0408 56.73C68.6063 50.6257 69.6864 44.1856 67.9842 37.3959C66.276 30.5837 62.3398 25.3276 56.3038 21.7557C46.7111 16.0809 34.8378 17.3614 26.5241 24.7988C18.697 31.8009 14.931 44.99 21.9191 56.7285L21.9206 56.7315Z"
                fill="#FEDE00"
              />
              <path
                d="M39.8348 56.7008H27.9043V47.1709H30.2693C30.2693 48.1516 30.2693 49.1428 30.2693 50.1356C30.2693 51.6044 30.5932 51.9238 32.089 51.9238C33.3664 51.9238 34.6438 51.9268 35.9212 51.9238C37.0857 51.9193 37.4804 51.517 37.4834 50.3299C37.4864 49.2844 37.4834 48.2374 37.4834 47.1543H39.8318V56.7038L39.8348 56.7008Z"
                fill="#FEDE00"
              />
              <path
                d="M59.0893 56.7023H47.1543V47.1724H49.5223C49.5223 48.2359 49.5193 49.304 49.5223 50.3721C49.5268 51.5065 49.9321 51.9208 51.0483 51.9268C52.4251 51.9328 53.8035 51.9313 55.1803 51.9268C56.3146 51.9238 56.7288 51.517 56.7349 50.4007C56.7409 49.3296 56.7349 48.26 56.7349 47.1543H59.0863V56.7038L59.0893 56.7023Z"
                fill="#FEDE00"
              />
              <path
                d="M18.8993 63.9536C18.0783 65.5641 18.0225 67.1007 18.8887 68.705C18.6146 68.7276 18.4112 68.7608 18.2063 68.7608C15.3804 68.7638 12.5529 68.7442 9.72691 68.7789C9.14846 68.7864 8.9436 68.5755 8.82911 68.0573C8.56097 66.8355 8.53989 65.6243 8.921 64.4282C8.98125 64.2414 9.21474 63.9732 9.3699 63.9717C12.5107 63.9446 15.653 63.9521 18.8977 63.9521L18.8993 63.9536Z"
                fill="#FEDE00"
              />
              <path
                d="M25.4627 66.3754C25.4507 67.6785 24.36 68.7586 23.057 68.7571C21.7224 68.7556 20.6272 67.6303 20.6589 66.294C20.689 64.9909 21.7947 63.9304 23.1022 63.9515C24.4052 63.9726 25.4763 65.0708 25.4642 66.3769L25.4627 66.3754Z"
                fill="#FEDE00"
              />
              <path
                d="M44.7051 20.7305V25.4081H42.3477V20.7305H44.7051Z"
                fill="#FEDE00"
              />
              <path
                d="M35.0259 49.4938H32.7227V47.1543H35.0259V49.4938Z"
                fill="#FEDE00"
              />
              <path
                d="M51.9609 49.4784V47.166H54.2868V49.4784H51.9609Z"
                fill="#FEDE00"
              />
              <path
                d="M39.8883 66.3605C39.8883 69.0119 37.7116 71.1767 35.0573 71.1661C32.4091 71.1556 30.255 68.9712 30.2716 66.3153C30.2897 63.6971 32.4438 61.5549 35.0649 61.5488C37.7221 61.5428 39.8898 63.7046 39.8883 66.3605ZM35.0724 63.9547C33.7664 63.9577 32.6833 65.0393 32.6773 66.3454C32.6712 67.6516 33.7438 68.7453 35.0483 68.7603C36.3815 68.7769 37.4962 67.6651 37.4811 66.3304C37.4676 65.0258 36.3769 63.9502 35.0709 63.9532L35.0724 63.9547Z"
                fill="black"
              />
              <path
                d="M51.9141 66.3305C51.9261 68.9864 49.7629 71.1633 47.1132 71.1663C44.462 71.1693 42.2928 68.997 42.2988 66.3456C42.3034 63.7228 44.4439 61.567 47.062 61.549C49.7208 61.5294 51.9035 63.6806 51.9156 66.332L51.9141 66.3305ZM49.5084 66.3802C49.5204 65.0741 48.4524 63.9759 47.1479 63.9533C45.8403 63.9307 44.7347 64.9912 44.703 66.2943C44.6714 67.6306 45.765 68.7574 47.0997 68.7604C48.4027 68.7634 49.4963 67.6848 49.5084 66.3817V66.3802Z"
                fill="black"
              />
              <path
                d="M59.1031 61.5489C61.7618 61.5353 63.937 63.6911 63.9431 66.344C63.9491 68.9984 61.7814 71.1692 59.1287 71.1677C56.5091 71.1647 54.3474 69.024 54.3263 66.4088C54.3052 63.7483 56.4533 61.564 59.1016 61.5489H59.1031ZM59.1392 63.9547C57.8317 63.9532 56.7456 65.0273 56.7335 66.335C56.7215 67.6411 57.791 68.7393 59.094 68.7604C60.4272 68.783 61.5464 67.6757 61.5389 66.341C61.5313 65.0364 60.4452 63.9562 59.1392 63.9532V63.9547Z"
                fill="black"
              />
              <path
                d="M75.9708 66.3605C75.9693 69.0119 73.7941 71.1767 71.1398 71.1661C68.4916 71.1556 66.3375 68.9712 66.3556 66.3153C66.3737 63.6971 68.5278 61.5549 71.1489 61.5488C73.8061 61.5428 75.9738 63.7061 75.9723 66.362L75.9708 66.3605ZM71.188 63.9532C69.8775 63.9396 68.7824 65.0032 68.7598 66.3108C68.7372 67.6169 69.7962 68.7257 71.0977 68.7588C72.4308 68.7935 73.5606 67.6967 73.5651 66.3635C73.5696 65.0589 72.4926 63.9667 71.188 63.9532Z"
                fill="black"
              />
              <path
                d="M35.0792 63.9512C36.3852 63.9482 37.4759 65.0238 37.4894 66.3284C37.503 67.6616 36.3898 68.7749 35.0566 68.7583C33.7521 68.7418 32.6795 67.6496 32.6856 66.3435C32.6916 65.0373 33.7747 63.9557 35.0807 63.9527L35.0792 63.9512Z"
                fill="#FEDE00"
              />
              <path
                d="M49.5209 66.38C49.5088 67.6831 48.4167 68.7617 47.1122 68.7587C45.7775 68.7557 44.6839 67.6288 44.7155 66.2926C44.7471 64.9895 45.8543 63.9289 47.1604 63.9515C48.4634 63.9741 49.5329 65.0723 49.5209 66.3784V66.38Z"
                fill="#FEDE00"
              />
              <path
                d="M59.1363 63.9512C60.4408 63.9527 61.5284 65.0343 61.5359 66.3389C61.5435 67.6722 60.4257 68.7794 59.0911 68.7583C57.788 68.7372 56.7185 67.639 56.7306 66.3329C56.7426 65.0253 57.8287 63.9512 59.1363 63.9527V63.9512Z"
                fill="#FEDE00"
              />
              <path
                d="M71.1865 63.9513C72.491 63.9649 73.5665 65.057 73.5635 66.3617C73.559 67.6949 72.4307 68.7916 71.0961 68.7569C69.7931 68.7238 68.7356 67.615 68.7582 66.3089C68.7808 65.0013 69.8759 63.9377 71.1865 63.9513Z"
                fill="#FEDE00"
              />
            </svg>

            <p>
              <strong>Manufacturing</strong>
            </p>
          </div>
          <div className="image-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
            >
              <path
                d="M6.21484 43.5038C6.21055 22.9244 22.9413 6.19983 43.5166 6.21485C64.1113 6.22988 80.8099 22.9501 80.7862 43.5317C80.7626 64.0832 64.0791 80.7626 43.5252 80.7862C22.9606 80.8099 6.21914 64.081 6.21484 43.5038ZM42.175 38.5886C41.194 38.4512 40.2388 38.3611 39.3007 38.1786C35.3616 37.4124 31.9936 35.7446 29.9607 32.07C28.3894 29.2325 27.8163 26.1568 27.8978 22.9437C27.9193 22.1323 28.3959 21.6644 29.2373 21.6623C30.1711 21.6623 31.1156 21.6902 32.0408 21.8125C36.2246 22.362 39.9146 23.8258 42.3489 27.5391C42.3875 27.597 42.4584 27.6314 42.5743 27.7279C42.6322 27.5069 42.6773 27.3352 42.7202 27.1634C43.3621 24.5792 44.3538 22.1645 46.3609 20.3208C49.6195 17.3288 53.6208 16.4981 57.8818 16.5239C58.6374 16.5282 59.1204 17.0648 59.0861 17.8503C59.026 19.2369 58.9916 20.6406 58.7426 22.0014C57.8968 26.6247 55.6687 30.3014 51.0878 32.0293C49.1107 32.7741 46.9813 33.111 44.8561 33.6498V47.584C49.8878 44.3988 55.2801 42.5336 61.0889 41.924C66.9298 41.3102 72.6141 42.0786 78.2747 44.1734C78.0171 31.5614 73.0906 21.4262 62.5786 14.6115C50.4846 6.77076 37.7766 6.5411 25.4378 13.974C14.2797 20.6964 9.02477 31.0784 8.7178 44.1412C20.477 40.0138 31.5686 41.1857 42.175 47.5497V38.5864V38.5886ZM51.0234 77.3671C51.3303 77.3048 51.5944 77.2726 51.8434 77.1975C53.0712 76.8283 54.3055 76.4742 55.5184 76.0621C56.6411 75.6822 56.6539 75.65 56.4865 74.4952C55.1363 65.1735 50.8473 57.496 43.4351 51.6707C35.967 45.8025 27.432 43.4845 18.0019 44.4975C15.0911 44.8109 12.2683 45.5428 9.5464 46.6224C9.31242 46.7147 8.99901 47.0303 9.0076 47.2299C9.0355 47.9382 9.18577 48.6422 9.29095 49.3655C18.8327 48.1249 27.6059 50.0008 35.5398 55.3195C43.4973 60.6533 48.5698 68.084 51.0234 77.3628V77.3671ZM48.4539 78.0088C43.8987 59.2946 25.5237 49.3312 9.78896 52.0292C10.2183 53.332 10.6541 54.6134 11.0598 55.9034C11.2014 56.352 11.4547 56.4979 11.9227 56.5537C17.1755 57.174 22.0912 58.8181 26.627 61.5483C33.0626 65.4225 37.9161 70.7498 41.2047 77.5087C41.3486 77.8028 41.7521 78.1655 42.0333 78.1634C44.1413 78.1612 46.2493 78.0754 48.4539 78.011V78.0088ZM78.015 46.9208C73.741 44.9375 66.4447 43.5145 59.1462 44.7873C54.3055 45.6308 49.832 47.3715 45.9702 49.9536C47.7884 51.7587 49.5658 53.5252 51.3926 55.3389C59.2127 50.1382 68.0761 48.112 77.7166 49.372C77.8239 48.6293 77.9227 47.9704 78.0128 47.3093C78.03 47.1805 78.015 47.0453 78.015 46.9208ZM12.601 59.3054C15.6385 65.1285 19.9081 69.7367 25.47 73.1409C29.4262 75.562 33.6916 77.131 38.3648 77.8049C35.162 69.2152 21.2648 59.2538 12.601 59.3054ZM56.42 64.1926C56.4608 64.1733 56.538 64.154 56.596 64.1089C62.1278 59.8484 68.3509 57.2942 75.293 56.5022C75.4605 56.4829 75.7138 56.3906 75.7567 56.2704C76.2633 54.8516 76.7377 53.4222 77.2529 51.9004C68.2113 50.7843 60.0907 52.658 52.7192 57.5282C53.9857 59.8098 55.1964 61.9948 56.4178 64.1948L56.42 64.1926ZM59.1311 74.4931C65.835 70.9988 70.8946 65.9806 74.4172 59.271C74.1832 59.271 74.0759 59.256 73.9729 59.271C67.9623 60.2519 62.5636 62.6194 57.8002 66.4249C57.4418 66.7125 57.3194 66.9507 57.4783 67.4251C57.8281 68.4618 58.1265 69.5199 58.3712 70.5867C58.661 71.8531 58.8714 73.1387 59.1311 74.4909V74.4931ZM56.4286 19.0759C53.1271 19.4043 49.9608 20.0632 47.6381 22.7033C45.6225 24.9935 45.0214 27.8052 44.8132 30.7608C51.5643 30.9561 57.1756 25.3025 56.4286 19.0759ZM30.4502 24.2615C30.7679 27.6464 31.4333 30.8166 34.0758 33.1346C36.3663 35.1437 39.1805 35.7489 42.1514 35.9485C41.6856 28.4878 38.0728 24.6865 30.4502 24.2615Z"
                fill="black"
              />
              <path
                d="M51.0218 77.362C48.5682 68.0832 43.4958 60.6525 35.5382 55.3188C27.6043 50.0001 18.8311 48.1241 9.28939 49.3647C9.18205 48.6414 9.03179 47.9374 9.00603 47.2291C8.99745 47.0273 9.31085 46.714 9.54483 46.6217C12.2689 45.5421 15.0895 44.808 18.0004 44.4968C27.4305 43.4815 35.9654 45.7996 43.4335 51.6699C50.8458 57.4952 55.1326 65.1728 56.485 74.4945C56.6524 75.6492 56.6417 75.6814 55.5168 76.0613C54.304 76.4734 53.0697 76.8276 51.8418 77.1967C51.5907 77.2719 51.3288 77.3041 51.0218 77.3663V77.362Z"
                fill="#FEDE00"
              />
              <path
                d="M78.0213 46.918C78.0213 47.0424 78.0363 47.1777 78.0191 47.3065C77.929 47.9675 77.8302 48.6265 77.7229 49.3691C68.0803 48.1092 59.2169 50.1332 51.3989 55.336C49.5722 53.5223 47.7947 51.7559 45.9766 49.9508C49.8383 47.3687 54.3119 45.6301 59.1525 44.7845C66.451 43.5117 73.7495 44.9347 78.0213 46.918Z"
                fill="#FEDE00"
              />
              <path
                d="M12.5996 59.3029C21.2634 59.2514 35.1606 69.2127 38.3633 77.8025C33.6901 77.1285 29.4248 75.5595 25.4686 73.1384C19.9067 69.7343 15.6371 65.126 12.5996 59.3029Z"
                fill="#FEDE00"
              />
              <path
                d="M59.1318 74.4951C58.872 73.1429 58.6617 71.8572 58.3719 70.5909C58.1272 69.5241 57.8288 68.466 57.4789 67.4293C57.32 66.9549 57.4403 66.7167 57.8009 66.4291C62.5664 62.6236 67.963 60.2561 73.9735 59.2752C74.0765 59.258 74.1817 59.2752 74.4179 59.2752C70.8931 65.9848 65.8357 71.003 59.1318 74.4973V74.4951Z"
                fill="#FEDE00"
              />
              <path
                d="M56.4259 19.0801C57.1729 25.3067 51.5617 30.9602 44.8105 30.7649C45.0188 27.8094 45.6198 24.9976 47.6355 22.7074C49.9581 20.0674 53.1244 19.4085 56.4259 19.0801Z"
                fill="#FEDE00"
              />
              <path
                d="M30.4531 24.2637C38.0779 24.6887 41.6885 28.4899 42.1543 35.9507C39.1834 35.7511 36.3692 35.1458 34.0788 33.1368C31.4363 30.8187 30.7708 27.6485 30.4531 24.2637Z"
                fill="#FEDE00"
              />
            </svg>

            <p>
              <strong>Agricultre</strong>
            </p>
          </div>
        </div>
      </div>

      {/* section-8-end */}



      {/* section-9-start */}


      <div className="flex-container container-j" style={{ background: "#fffef2" }}>
        <div className="left-item">
          <p >
            <h1 >Get Started Today</h1>
            Plan, Book and Finance your shipment in one place.
            <br />
            Experience how Cogoport’s Global Trade Platform can Turbocharge your
            Business.
          </p>
          <button
            className="button4 buttonx"
            style={{ height: "50px", alignItems: "center" }}
          >
            <strong>Get Started</strong>
          </button>
        </div>
        <div className="right-item">
          <img
          className="mov-img"
            src={require("./images/trade-tech-home-1.webp")}
            height="400"
            width="380"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      {/* section-9end */}



      {/* section-10-start */}


      <div className="container7">
        <img
          src={require("./images/Screenshot (78).png")}
          style={{ height: "auto", width: "100%", cursor: "pointer" }}
        />
      </div>

      {/* section-10-end */}


      {/* section-11-start */}
      <div
        className="flex-container container-cont"
        style={{ background: "#ee3425", justifyContent: "space-evenly" }}
      >
        <div className="left-item container-k">
          <p
            style={{
              color: "white",
              fontSize: "16px",
              fontFamily: "'PT Sans', sans-serif",

            }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "28px",
                fontFamily: "'Ubuntu', sans-serif",
              }}
            >
              Grow Faster with Cogoport
            </h1>
            Know more about Cogoport’s Global Trade Platform<sup>TM</sup>
          </p>
        </div>
        <div className="right-item container-l" >
          <button
            className="button4"
            style={{ background: "#fbdc00", color: "black", marginRight: "0px" }}
          >
            <strong>Know More</strong>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 14 14"
              width="1em"
              height="1em"
              role="img"
              style={{ marginLeft: "5px", marginTop: "2px" }}
            >
              <path
                className="ic-m-arrow_rotate_right_svg__ic_m_arrow_rotate_right"
                d="M4.375 1.724a.64.64 0 0 0-.12.045.639.639 0 0 0-.239.319c-.019.073-.026 1.483-.026 4.918 0 4.214.004 4.83.035 4.933a.532.532 0 0 0 .476.358c.199 0 .109.084 2.716-2.518 1.492-1.488 2.489-2.501 2.519-2.557a.533.533 0 0 0 .008-.432c-.054-.106-4.9-4.96-5.008-5.016a.612.612 0 0 0-.361-.05"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
          {/* <img alt="productCheck" loading="lazy" width="280" height="360" decoding="async" data-nimg="1" className="styles_about_image__p8EBE" srcset="/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&amp;w=384&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&amp;w=640&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&amp;w=640&amp;q=75" /> */}
        </div>
      </div>

      {/* section-11-end */}


      {/* section-12-start */}


      <div className="container5" >
        <h2
          className="heading"
        >
          Blogs
        </h2>
        <div className="vertical-boxes">
          <div className="vertical-box">
            <img
              src={require("./images/Envirotainer_Banner.webp")}
              style={{ width: "100%", height: "200px" }}
            />
            <div
              style={{
                disply: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "10px",
                fontFamily: "'Ubuntu',sans-serif",
              }}
            >
              <h4 style={{ color: "#ee3425", fontSize: "16px", fontFamily: "'Ubuntu', sans-serif" }}>Trade News</h4>
              <h4 className="sizing">
                Cogoport Enables Movement of 11 Envirotainer Containers from
                India to Italy
              </h4>
              <p >
                Cogoport’s collective logistics and technical expertise came in
                handy as our operations and technical teams went the extra mile
                and designed bespoke solutions on the go.
              </p>
              <div>
                <span style={{ color: "#ee3425" }}>
                  <strong className="read-more-style">Read More</strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="20"
                    height="20"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h4>05 July 2023</h4>
              </div>
            </div>
          </div>
          <div className="vertical-box">
            <img
              src={require("./images/Cogoport_Positioning_Banner.webp")}
              style={{ width: "100%", height: "200px" }}
            />
            <div
              style={{
                disply: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <h4 style={{ color: "#ee3425", fontSize: "16px", fontFamily: "'Ubuntu', sans-serif" }}>Trade News</h4>
              <h4 className="sizing">
                Cogoport Enables Movement of 11 Envirotainer Containers from
                India to Italy
              </h4>
              <p style={{ fontSize: "16px", fontFamily: "'PT Sans', sans-serif" }}>
                Cogoport’s collective logistics and technical expertise came in
                handy as our operations and technical teams went the extra mile
                and designed bespoke solutions on the go.
              </p>
              <div>
                <span style={{ color: "#ee3425" }}>
                  <strong className="read-more-style">Read More</strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="20"
                    height="20"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h4>05 July 2023</h4>
              </div>
            </div>
          </div>
          <div className="vertical-box">
            <img
              src={require("./images/Eng_2405_Banner.webp")}
              style={{ width: "100%", height: "200px" }}
            />
            <div
              style={{
                disply: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              {/* <h4 style={{ color: "#ee3425" }}>Trade News</h4> */}
              <h4 style={{ color: "#ee3425", fontSize: "16px", fontFamily: "'Ubuntu', sans-serif" }}>Trade News</h4>
              <h4 style={{ fontSize: "16px", fontFamily: "'Ubuntu', sans-serif" }}>
                Cogoport Enables Movement of 11 Envirotainer Containers from
                India to Italy
              </h4>
              <p style={{ fontSize: "16px", fontFamily: "'PT Sans', sans-serif" }}>
                Cogoport’s collective logistics and technical expertise came in
                handy as our operations and technical teams went the extra mile
                and designed bespoke solutions on the go.
              </p>
              <div>
                <span style={{ color: "#ee3425" }}>
                  <strong className="read-more-style">Read More</strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    width="20"
                    height="20"
                    role="img"
                    className="svg-margin"
                  >
                    <path
                      className="ic-m-arrow_next_svg__ic_m_arrow_next"
                      d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h4>05 July 2023</h4>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <button
            className="button4"
            style={{ height: "50px", alignItems: "center", marginRight: "0px" }}
          >
            <strong className="read-more-style" >View All</strong>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" style={{marginLeft: "5px", marginTop: "2px"}}><path className="ic-m-arrow_rotate_right_svg__ic_m_arrow_rotate_right" d="M4.375 1.724a.64.64 0 0 0-.12.045.639.639 0 0 0-.239.319c-.019.073-.026 1.483-.026 4.918 0 4.214.004 4.83.035 4.933a.532.532 0 0 0 .476.358c.199 0 .109.084 2.716-2.518 1.492-1.488 2.489-2.501 2.519-2.557a.533.533 0 0 0 .008-.432c-.054-.106-4.9-4.96-5.008-5.016a.612.612 0 0 0-.361-.05" fill-rule="evenodd"></path></svg> */}
          </button>
        </div>
      </div>
      <div style={{ background: "#fbdc00"}}>
        <div style={{background:"white",    borderBottomRightRadius: "100%", borderBottomLeftRadius: "100%",height:"100px"}}>

        </div>

        {/* section-12-end */}


        {/* section-13-start */}


      <div className="flex-container" style={{ background: "#fbdc00", justifyContent: "center" }}>
        <div className="left-item container-l">
          {/* <img src={require("./images/trade-tech-home-1.webp")}  style={{height:"400px", width:"380px"}}/> */}
          <img
            src={require("./images/cogoport-subscribe.webp")}
            style={{ height: "170px", width: "206px", cursor: "pointer" }}
          />
        </div>
        <div className="right-item container-l" style={{alignItems: "start",
  textAlign: "start"}} >
          {/* <img alt="productCheck" loading="lazy" width="280" height="360" decoding="async" data-nimg="1" className="styles_about_image__p8EBE" srcset="/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&amp;w=384&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&amp;w=640&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&amp;w=640&amp;q=75" /> */}
          <p
          >
            <h1 style={{ fontFamily: "'ubuntu',sans-serif", fontSize: "28px" }}>Subscribe to our newsletter now!</h1>
            Don’t miss out on the latest happenings at Cogoport.
          </p>
          <div className="subscribe-container">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-field"
            />
            <button className="subscribe-button">
              <strong>Subscribe</strong>{" "}
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* section-13-end */}


      {/* section-14-start */}


      <div className="container-xx">
        <div className="xx-child">
          <a  className="xx-a">
            Products
          </a>
          <svg className="transition" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" ><path className="ic-m-arrow_rotate_up_svg__ic_m_arrow_rotate_up" d="M6.907 4.223a.595.595 0 0 0-.152.053c-.038.021-1.179 1.149-2.534 2.507-2.604 2.61-2.518 2.516-2.518 2.718 0 .203.182.432.384.483.151.038 9.679.037 9.83-.001a.546.546 0 0 0 .38-.484c0-.199.084-.109-2.518-2.716-1.355-1.358-2.501-2.488-2.546-2.511a.52.52 0 0 0-.326-.049" fill-rule="evenodd"></path></svg>
        </div>
        
        <div className="xx-child">
          <a className="xx-a">
            Products
          </a>
          <svg className="transition" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" ><path className="ic-m-arrow_rotate_up_svg__ic_m_arrow_rotate_up" d="M6.907 4.223a.595.595 0 0 0-.152.053c-.038.021-1.179 1.149-2.534 2.507-2.604 2.61-2.518 2.516-2.518 2.718 0 .203.182.432.384.483.151.038 9.679.037 9.83-.001a.546.546 0 0 0 .38-.484c0-.199.084-.109-2.518-2.716-1.355-1.358-2.501-2.488-2.546-2.511a.52.52 0 0 0-.326-.049" fill-rule="evenodd"></path></svg>
        </div>
        <div className="xx-child">
          <a className="xx-a">
            Products
          </a>
          <svg className="transition" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" ><path className="ic-m-arrow_rotate_up_svg__ic_m_arrow_rotate_up" d="M6.907 4.223a.595.595 0 0 0-.152.053c-.038.021-1.179 1.149-2.534 2.507-2.604 2.61-2.518 2.516-2.518 2.718 0 .203.182.432.384.483.151.038 9.679.037 9.83-.001a.546.546 0 0 0 .38-.484c0-.199.084-.109-2.518-2.716-1.355-1.358-2.501-2.488-2.546-2.511a.52.52 0 0 0-.326-.049" fill-rule="evenodd"></path></svg>
        </div>
        <div className="xx-child">
          <a className="xx-a">
            Products
          </a>
          <svg className="transition" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" ><path className="ic-m-arrow_rotate_up_svg__ic_m_arrow_rotate_up" d="M6.907 4.223a.595.595 0 0 0-.152.053c-.038.021-1.179 1.149-2.534 2.507-2.604 2.61-2.518 2.516-2.518 2.718 0 .203.182.432.384.483.151.038 9.679.037 9.83-.001a.546.546 0 0 0 .38-.484c0-.199.084-.109-2.518-2.716-1.355-1.358-2.501-2.488-2.546-2.511a.52.52 0 0 0-.326-.049" fill-rule="evenodd"></path></svg>
        </div>
        <div className="xx-child">
          <a className="xx-a">
            Products
          </a>
          <svg className="transition" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img"><path className="ic-m-arrow_rotate_up_svg__ic_m_arrow_rotate_up" d="M6.907 4.223a.595.595 0 0 0-.152.053c-.038.021-1.179 1.149-2.534 2.507-2.604 2.61-2.518 2.516-2.518 2.718 0 .203.182.432.384.483.151.038 9.679.037 9.83-.001a.546.546 0 0 0 .38-.484c0-.199.084-.109-2.518-2.716-1.355-1.358-2.501-2.488-2.546-2.511a.52.52 0 0 0-.326-.049" fill-rule="evenodd"></path></svg>
        </div>
        <div className="xx-child">
          <a style={{fontFamily:"'Ubuntu',san-serif", fontSize:"20px"}}>
            Contact Us
          </a>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" className="styles_arrow_icon__CKe8N "><path className="ic-m-arrow_rotate_up_svg__ic_m_arrow_rotate_up" d="M6.907 4.223a.595.595 0 0 0-.152.053c-.038.021-1.179 1.149-2.534 2.507-2.604 2.61-2.518 2.516-2.518 2.718 0 .203.182.432.384.483.151.038 9.679.037 9.83-.001a.546.546 0 0 0 .38-.484c0-.199.084-.109-2.518-2.716-1.355-1.358-2.501-2.488-2.546-2.511a.52.52 0 0 0-.326-.049" fill-rule="evenodd"></path></svg> */}
        </div>
      </div>


      <div className="flex-container8">

        <div className="lists-container">
          <div className="list">
            <h3 className="list-title">Products</h3>
            <ul className="list-items">
              <li className="list-item">
                <a href="#" className="link">
                  Global Trade Platform
                </a>
              </li>
              <li>
                <h4 className="list-item">Cross border Logistics </h4>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Ocean: FCL
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Ocean: LCL
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  International Air
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Customs, CFS, and Handling
                </a>
              </li>
              <li className="list-item">
                <h4>Domestic Logistics </h4>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Surface: FTL, PTL, Rail
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Trailer & Rail Container Haulage
                </a>
              </li>
              <li className="list-item">
                <h4>Trade Management Solutions</h4>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Freight Rates & Schedules
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Quick Premium Quotations
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Duties & Taxes Calculator
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Tracking & Visibility
                </a>
              </li>
              <li className="list-item">
                <h4>CogoMaps</h4>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Shipment Planner
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Trade Info
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Global Routes
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Live Congestion
                </a>
              </li>
            </ul>
          </div>
          <div className="list">
            {/* <h3 className="list-title">List 2</h3> */}
            <h3 className="list-title" style={{ color: "#fbdc00" }}>
              a
            </h3>
            <ul className="list-items">
              <li className="list-item">
                <h4>Supply Chain Solutions</h4>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  CogoAssured
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Fulfilment Logistics
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Door to Door Shipments
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Cargo Insurance
                </a>
              </li>
              <li className="list-item">
                <h4>Financial Services</h4>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Pay Later
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Export Factoring
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  CogoFx
                </a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h3 className="list-title">Partners</h3>
            <ul className="list-items">
              <li className="list-item">
                <a href="#" className="link">
                  Global Partner Network
                </a>
              </li>
              <li className="list-item">
                <h4>Our Logistics Providers</h4>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Freight Forwarders
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Transporters
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Custom Agents
                </a>
              </li>
              <li className="list-item">
                <h4>Partnership Program</h4>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Channel Partners
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Overseas Agents
                </a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h3 className="list-title">Tools</h3>
            <ul className="list-items">
              <li className="list-item">
                <a href="#" className="link">
                  Rate Discovery
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Freight Rate Trends
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Tracking
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  HS Code Finder
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Personal Trade Assistant
                </a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h3 className="list-title">Company</h3>
            <ul className="list-items">
              <li className="list-item">
                <a href="#" className="link">
                  About Us
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Careers
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Newsroom
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Leadership
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Login
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h3 className="list-title">Knowledge Center</h3>
            <ul className="list-items">
              <li className="list-item">
                <a href="#" className="link">
                  Blogs
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  News & Updates
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Events
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Reports
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Notifications
                </a>
              </li>
              <li className="list-item">
                <h4>Resources</h4>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Port Info
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Shipping Terms
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Help Center
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Incoterms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* section-14-end */}


      {/* section-15-start */}


      <div className="flex-container8 footer" style={{ background: "#ebbe00" }}>
        <div className="lists-container">
          <div className="list">
            {/* <h3 className="list-title">List 1</h3> */}
            <ul className="list-items">
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Rotterdam
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Port Said East
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Zanzibar
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Antwerp
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Halifax
                </a>
              </li>
            </ul>
          </div>
          <div className="list">
            {/* <h3 className="list-title">List 2</h3> */}
            <ul className="list-items">
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Tincan (Lagos)
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Monrovia
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Gothenburg
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Coega
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Aden
                </a>
              </li>
            </ul>
          </div>
          <div className="list">
            {/* <h3 className="list-title">List 3</h3> */}
            <ul className="list-items">
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to King Abdullah Port
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Maputo
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Ambarli
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Cape Town
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="link">
                  Mandideep (IN) to Callao
                </a>
              </li>
            </ul>
          </div>
          {/* Add more lists here */}
        </div>
      </div>

      {/* section-15-end */}


      {/* section-16-start */}


      <div className="container9">
        <div className="xyz xyz1" style={{ fontFamily: "'Ubuntu'", fontSize: "12px", display: "flex", alignItems: "center", marginBottom: "5px" }}>
          <span style={{ marginRight: "30px", margin: "20px" }}>
            <strong>© 2023 Cogo Universe PTE. All rights reserved.</strong>
          </span>
          <strong><a className="terms" href="#" style={{ textDecoration: "none" }}>Terms and Conditions | Cookie policy | Privacy and Data Protection Policy</a></strong>
        </div>
        <div className="xyz xyz2" style={{ display: "flex", alignItems: "center" }}>
          <img src={require("./images/globe.webp")}
            style={{ height: "20px", width: "20px", cursor: "pointer", marginBottom: "5px" }} />
          <span style={{ marginLeft: "10px", marginRight: "20px", fontFamily: "'PT Sans'", fontSize: "15px", marginBottom: "5px" }}> English (IN)  </span>
          <span style={{ cursor: "pointer" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="16" height="16" role="img"><path className="ic-m-linkedin_logo_svg__ic_m_linkedin_logo" d="M2.158 1.038c-.506.112-.92.494-1.089 1.004a1.672 1.672 0 0 0-.002.863c.147.466.501.818.986.983.098.033.198.043.42.043.353.001.544-.052.802-.221a1.45 1.45 0 0 0 .668-1.23c0-.262-.032-.401-.155-.657a1.467 1.467 0 0 0-1.63-.785m7.455 3.755c-.75.134-1.418.542-1.818 1.113l-.118.168V4.993l-1.184.006-1.185.006-.006 3.996-.005 3.996h2.38v-2.234c0-2.379.003-2.467.114-2.789.164-.475.491-.796.937-.917.07-.019.232-.041.36-.048.711-.041 1.167.306 1.369 1.041l.054.198.007 2.375.007 2.374h2.472l-.001-2.608c0-1.617-.009-2.713-.024-2.885-.13-1.476-.878-2.402-2.163-2.675-.294-.062-.94-.082-1.196-.036M1.237 8.995v4.002H3.71V4.993H1.237v4.002" fill-rule="evenodd"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="16" height="16" role="img"><path className="ic-m-facebook_logo_svg__ic_m_facebook_logo" d="M7.303 1.03c-.914.095-1.571.513-1.851 1.177-.166.396-.202.72-.202 1.84v.876H3.99v2.054h1.26v6.02h2.427V6.953h1.678l.012-.075c.007-.042.044-.454.083-.916.039-.462.078-.885.085-.94l.014-.099H7.674l.007-.74c.007-.724.009-.744.062-.853a.337.337 0 0 1 .152-.163c.093-.05.123-.052.873-.06l.775-.007V1.003l-1.02.003c-.562.002-1.111.013-1.22.024" fill-rule="evenodd"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="16" height="16" role="img"><path className="ic-m-instagram_logo_svg__ic_m_instagram_logo" d="M4.62 1.019c-.701.029-1.393.178-1.82.392-1.061.531-1.653 1.504-1.774 2.917-.018.208-.023 1.107-.017 2.859.01 2.757.004 2.626.137 3.236.098.452.241.787.495 1.159.46.672 1.164 1.109 2.09 1.297.508.103.551.105 3.234.105 2.744.001 2.716.002 3.371-.118 1.471-.269 2.483-1.459 2.615-3.078.012-.141.028-1.291.037-2.555.016-2.417.009-2.688-.086-3.336-.059-.402-.099-.563-.212-.855-.369-.955-1.2-1.647-2.272-1.894-.575-.133-.498-.13-3.161-.133-1.354-.002-2.541 0-2.637.004M9.17 2.1c1.069.057 1.516.187 1.966.568.27.23.547.668.635 1.007.046.175.097.611.128 1.096.03.453.03 2.896.001 4.084-.025 1.039-.067 1.339-.248 1.769a2.029 2.029 0 0 1-1.385 1.156c-.483.117-.615.126-1.949.136-1.703.013-4.024-.026-4.258-.071-.671-.13-1.011-.297-1.359-.665-.367-.389-.528-.845-.6-1.695-.032-.376-.032-4.626 0-4.982.031-.343.104-.759.165-.942a2.13 2.13 0 0 1 .645-.938c.178-.147.552-.339.771-.394.178-.045.684-.1 1.171-.126.507-.027 3.823-.03 4.317-.003m.79 1.014a.737.737 0 0 0-.443.457.949.949 0 0 0 .048.54.776.776 0 0 0 .328.326c.088.045.141.055.315.055.19 0 .223-.007.335-.07a.721.721 0 0 0-.083-1.305.975.975 0 0 0-.5-.003m-3.494.844c-.243.04-.619.164-.846.279-.742.374-1.284 1-1.549 1.791a2.805 2.805 0 0 0-.151.958c0 .686.188 1.276.578 1.817a3.083 3.083 0 0 0 3.377 1.148 3.155 3.155 0 0 0 1.589-1.106c.184-.245.408-.688.488-.97a3.087 3.087 0 0 0-2.448-3.919 4.053 4.053 0 0 0-1.038.002m.888 1.069a2.005 2.005 0 0 1 1.597 1.546c.059.255.053.657-.013.905a1.997 1.997 0 0 1-.595.987c-.162.153-.25.215-.44.308-.346.171-.543.218-.915.217a1.727 1.727 0 0 1-.886-.205c-.4-.2-.705-.508-.9-.91a1.678 1.678 0 0 1-.201-.782 1.856 1.856 0 0 1 .135-.839 2.04 2.04 0 0 1 1.533-1.237c.181-.03.503-.026.685.01" fill-rule="evenodd"></path></svg>
          </span>
        </div>
      </div>

      {/* section-16-end */}
    </div>
  );
};

export default Inner;
