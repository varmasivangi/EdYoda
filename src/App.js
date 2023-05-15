import Header from './Header';
import './App.css';
import background from './assets/background.svg'
import icon1 from './assets/icon1.svg'
import icon3 from './assets/icon3.svg'
import icon4 from './assets/icon4.svg'
import icon5 from './assets/icon5.svg'
import icon6 from './assets/icon6.svg'
import stage1 from './assets/stage1.svg'
import stage2 from './assets/stage2.svg'
import alert from './assets/alert.svg'
import rozorpay from './assets/rozorpay.svg'
import expaired from './assets/expaired.svg'
import recommended from './assets/recommended.svg'


import { useState, useEffect, useRef } from "react";



function App() {

  const [plan, setplan] = useState()
  const [image, setimage] = useState("https://e7.pngegg.com/pngimages/930/741/png-clipart-round-green-check-mark-illustration-check-mark-bottle-material-green-tick-miscellaneous-angle.png")

  let litag1 = useRef()
  let litag2 = useRef()
  let litag3 = useRef()
  let litag4 = useRef()

  function getstatus() {

    if (plan == "₹179") {
      // litag1.current.classList.add("inactive")
      litag2.current.classList.add("active")
      litag3.current.classList.remove("active")
      litag4.current.classList.remove("active")

    }
    else if (plan == "₹149") {
      litag2.current.classList.remove("active")
      litag3.current.classList.add("active")
      litag4.current.classList.remove("active")
    }
    else if (plan == "₹99") {
      litag2.current.classList.remove("active")
      litag3.current.classList.remove("active")
      litag4.current.classList.add("active")
    }
  }
  return (

    <div className="App">
      <div className='row nav'>
        <Header />
      </div>

      {/* payment page */}
      <div className='row justify-content-center  display' style={{ height: "100vh", backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
        <div className='col-7  mt-5 ps-5'>
          <div className=''>
            <p className='Access'>
              Accesss curated courses worth
            </p>
            <p className='Access'>
              ₹ <span className='strikeoff me-3'> 18,500</span>at  just<span className='ninenine ms-3'> ₹99</span>per year!
            </p>
            <div className='details'>

              <div className='row'>
                <div className='col-1'>
                  <img src={icon4} />
                </div>
                <div className='col-9'><p><span>100+</span> Job relevant courses </p></div>
              </div>
              <div className='row'>
                <div className='col-1'><img src={icon5} /></div>
                <div className='col-9'> <p><span>20,000+</span> Hours of content</p></div>
              </div>
              <div className='row'>
                <div className='col-1'><img src={icon1} /></div>
                <div className='col-9'> <p><span>Exclusive</span> webinar access</p></div>
              </div>
              <div className='row'>
                <div className='col-1'><img src={icon3} /></div>
                <div className='col-9'> <p>Scholarship worth <span>₹94,500</span></p></div>
              </div>
              <div className='row'>
                <div className='col-1'><img src={icon6} /></div>
                <div className='col-9'><p><span>Ad Free</span> learning experience</p></div>
              </div>

            </div>
          </div>
        </div>

        {/* subscription pricing */}
        <div className='col-4'>
          <form>
            <div className='row w-100 justify-content-center'>
              <div className='col-6 text-center'>  <img src={stage1} /></div>
              <div className='col-6 text-center'>
                <img src={stage2} />
              </div>
            </div>
            <div className='row justify-content-center' style={{ fontWeight: "bolder", fontSize: "19px", color: "#3C4852" }}>
              Select your subcription plan
            </div>
            <ul>
              <li ref={litag1} style={{ backgroundColor: "#E7E7E7", color: "#BEBEBE" }}>
                {/* <img style={{borderRadius:"50%",width:"5%"}} src={image}/> */}
                <div className='row' aria-disabled>
                  <img className='expairedoff' src={expaired} />
                  <div className='col-8'>
                    <input onClick={getstatus()} disabled name='plan' type='radio' value="RS.199" onChange={e => setplan(e.target.value)} /><label>12 Months Subscription </label>
                  </div>
                  <div className='col-4 text-end'>
                    <p>Total<span className='fs-6 fw-bold'>₹179</span>
                      <br />
                      25<span style={{ color: "#BEBEBE" }}>/mo</span></p>
                  </div>
                </div>
              </li>
              <li ref={litag2}>
                <div className='row'>
                  <img className='recommended' src={recommended} />
                  <div className='col-8'>
                    <input onClick={getstatus()} name='plan' type='radio' value="₹179" onChange={e => setplan(e.target.value)} /><label>12 Months Subscription </label>
                  </div>
                  <div className='col-4 text-end'>
                    <p>Total<span className='fs-6 fw-bold' >₹179</span>
                      <br />
                      25<span style={{ color: "#BEBEBE" }}>/mo</span></p>
                  </div>
                </div>
              </li>
              <li ref={litag3}>
                <div className='row pt-3'>
                  <div className='col-8'>
                    <input onClick={getstatus()} name='plan' type='radio' value="₹149" onChange={e => setplan(e.target.value)} /><label>6 Months Subscription </label>
                  </div>
                  <div className='col-4 text-end'>
                    <p>Total<span className='fs-6 fw-bold'>₹149</span>
                      <br />
                      25<span style={{ color: "#BEBEBE" }}>/mo</span></p>
                  </div>
                </div>
              </li>
              <li ref={litag4}>
                <div className='row pt-3'>
                  <div className='col-8'>
                    <input onClick={getstatus()} name='plan' type='radio' value="₹99" onChange={e => setplan(e.target.value)} /><label>3 Months Subscription </label>
                  </div>
                  <div className='col-4 text-end'>
                    <p>Total<span className='fs-6 fw-bold'>₹99</span>
                      <br />
                      25<span style={{ color: "#BEBEBE" }}>/mo</span></p>
                  </div>
                </div>
              </li>
              <p className='mt-3 ms-4'>Subscription Fee <span className='me-4' style={{ float: "right" }}>₹18,500</span></p>
              <li style={{ backgroundColor: "#ee843c33", border: "1px solid red", color: "red" }}>
                <p><span className='m-2' style={{ fontSize: "16px", fontWeight: "600" }}>Limited time offer</span><span style={{ float: "right", fontSize: "16px", fontWeight: "600" }}>- ₹18,401</span><br />
                  <img className='m-2' width="3%" style={{ Color: "red" }} src={alert} />Offer valid till 25th March 2023 </p>
              </li>
              <p>Total (Incl. of 18% GST)<span style={{ float: "right", fontSize: "24px", fontWeight: "700" }}>{plan}</span></p>
              <div className='row'>
                <div className='col-6'>
                  <button className='btn3'>Cancel</button>
                </div>
                <div className='col-6'><button className='btn2'>PROCEED TO PAY</button></div>
              </div>
              <img className=' rzpay' src={rozorpay} />
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
