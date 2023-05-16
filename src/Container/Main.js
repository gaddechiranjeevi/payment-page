import { useState } from "react"

const Edyoda = () => {
    let[amount, updateamount]=useState("179");

    const handleOptionChange = (event) => {
        updateamount(event.target.value);
      };
    return (
        <>
            <div className="navbar">
                <div className="navcontainer d-flex flex-row">
                    <div className="d-flex flex-row justify-content-start">
                        <p className="logo">EDYODA</p>
                        <select className="courses">
                            <option className="courses">Courses</option></select>
                        <select className="program">
                            <option className="program">Programs</option></select>
                    </div>
                    <div className="rightcontent text-end">
                        <p className="searchicon"><i class="fa fa-search"/></p>
                        <p className="login" >Log in</p>
                        <p className="button buttontext">JOIN NOW</p>
                    </div>
                </div>
            </div>
            <div className="contentcontainer order1">
                <div className="mainlockup">
                    <p className="header">Access curated courses worth
                        <p className="amount">₹  <span className="s"><span className="a">18,500</span></span>
                            <span className="atjust"> at just</span>
                            <span className="r99"> ₹ 99</span>
                            <span className="peryear"> per year!</span></p>
                    </p>
                </div>
                <div className="pointer">
                    <p><img className="iconimg" src="Vector.png" alt="vector"/></p>
                    <p className="icontext"><span className="icontext1">100+</span> <span className="icontext11">Job relevant courses</span></p>
                    <p><img className="clock1" src="clock.png" alt="clock"/></p>
                    <p className="clockicontext"><span className="clockicontext1">20,000+</span> <span className="clockicontext2">Hours of content</span></p>
                    <p><img className="tv1" src="live.png" alt="live"/></p>
                    <p className="tvicontext"><span className="tvicontext1">Exclusive</span> <span className="tvicontext2">webinar access</span></p>
                    <p><img className="s1" src="scholar.png" alt="scholar"/></p>
                    <p className="sicontext"><span className="sicontext1">Scholarship worth</span> <span className="sicontext2">₹94,500</span></p>
                    <p><img className="ads1" src="ads.png" alt="ads"/>
                        
                       </p>
                    <p className="adsicontext"><span className="adsicontext1">Ad Free</span> <span className="adsicontext2">learning experience</span></p>

                </div>
            </div>
            <div className="form">

                <div className="progressBar">
                    <div className="stage1">
                        <div className="icon1">
                            <div className="_1">1</div>
                        </div>
                        <div className="text1">Sign Up</div>
                    </div>
                    <div className="stage2">
                        <div className="icon12">
                            <div className="_2">2</div>
                        </div>
                        <div className="text12">Subscribe</div>
                    </div>
                </div>

                <div className="formHeader">
                    <div className="text">Select your subcription plan</div>
                </div>

                <div className="inputContainer">
                    <div className="textField1">
                        <div className="radioButton">
                            <input type="radio" className="icon" disabled checked="checked" />
                        </div>
                        <div className="textContainer">
                            <div className="text2">12 Months Subscription </div>
                            <div className="rightTextContainer">
                                <div className="topText">
                                    <div className="text3">Total</div>
                                    <div className="text4">₹99</div>
                                </div>
                                <div className="bottomText">
                                    <div className="text5">₹8</div>
                                    <div className="text6">/mo</div>
                                </div>
                            </div>
                        </div>
                        <div className="tag">
                            <div className="offerExpired">Offer expired</div>
                        </div>
                    </div>
                    <div className="textField2">
                        <div className="radioButton2">
                            <input type="radio"  className="icon2" value="179" defaultChecked checked={amount === '179'} onChange={handleOptionChange}/>
                        </div>
                        <div className="textContainer2">
                            <div className="text7">12 Months Subscription </div>
                            <div className="rightTextContainer2">
                                <div className="topText2">
                                    <div className="text8">Total</div>
                                    <div className="text9">₹179</div>
                                </div>
                                <div className="bottomText2">
                                    <div className="text10">₹15</div>
                                    <div className="text11">/mo</div>
                                </div>
                            </div>
                        </div>
                        <div className="tag2">
                            <div className="recommended">Recommended</div>
                        </div>
                    </div>
                    <div className="textField3">
                        <div className="radioButton3">
                            <input type="radio" className="icon3" value="149" checked={amount === '149'} onChange={handleOptionChange}/>
                        </div>
                        <div className="textContainer3">
                            <div className="text13">6 Months Subscription </div>
                            <div className="leftTextContainer">
                                <div className="topText3">
                                    <div className="text14">Total</div>
                                    <div className="text15">₹149</div>
                                </div>
                                <div className="bottomText3">
                                    <div className="text16">₹25</div>
                                    <div className="text17">/mo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="textField4">
                        <div className="radioButton4">
                            <input type="radio" className="icon4" value="99" checked={amount === '99'} onChange={handleOptionChange}/>
                        </div>
                        <div className="textContainer4">
                            <div className="text18">3 Months Subscription </div>
                            <div className="leftTextContainer2">
                                <div className="topText4">
                                    <div className="text19">Total</div>
                                    <div className="text20">₹99</div>
                                </div>
                                <div className="bottomText4">
                                    <div className="text21">₹33</div>
                                    <div className="text22">/mo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="summaryContainer">
                    <div className="textContainer5">
                        <div className="text23">Subscription Fee</div>
                        <div className="text24">₹18,500</div>
                    </div>
                    <div className="alert">
                        <div className="alertHeader">
                            <div className="text25">Limited time offer</div>
                            <div className="text26">- ₹18,401</div>
                        </div>
                        <div className="alertBody">
                            <div className="iconClock">
                            <img className="icon5" src="clockdelay.png" alt="icon"/>      
                            </div>
                            <div className="text27">
                                Offer valid till 25th March 2023{' '}
                            </div>
                        </div>
                    </div>
                    <div className="textContainer6">
                        <div className="leftText">
                            <p className="labelWrapper">
                                <span className="label">Total </span>
                                <span className="label2">(Incl. of 18% GST)</span>
                            </p>
                        </div>
                        <div className="rightText">₹{amount}</div>
                    </div>
                </div>
                <div className="buttonContainer">
                    <button className="secondaryButton">
                        <div className="text28">CANCEL</div>
                    </button>
                    <button className="primaryButton">
                        <div className="text29">PROCEED TO PAY</div>
                    </button>
                </div>
                <div className="iconContainer">
                    <div className="razorpayIcon">
                        <div className="frame12537">
                            <img src="Razor.png" alt="razor"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Edyoda

