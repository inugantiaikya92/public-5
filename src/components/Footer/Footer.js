import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <>
            <div className='container-fluid bgFooter' style={{ color: 'white' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='pb-5 text-center imgbox'>
                            <div className='row my-4'>
                                <div className='col-lg-9 text-center'>
                                    <div className='mt-5'>
                                        <h2 className='styleHeadingfooter text-left'>BROWSE</h2>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                        <div className='col-lg-3'>
                                            <div className='text-left'>
                                                <div><h6>Home</h6></div><br />
                                                <div><h6>Services</h6></div>
                                                <div><p>Spiritual</p></div>
                                                <div><h6>Pooja Service at Temple Pooja Service at Your Place</h6></div>
                                                <div><p>Community</p></div>
                                                <div><h6>Food Donation Drive Prasada Services Cleanliness Drive Spring/Fall Gardening Organic Farming</h6></div>
                                                <div><p>Cultural</p></div>
                                                <div><h6>Sunday School Bharatanatyam for Children Classical and Folk Dances Indian Languages Sanskrit & Bhajan Recitals Art Classes Weekend Yoga</h6></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='text-left'>
                                                <div><h6>Temple</h6></div>
                                                <div><h6>Deities</h6></div>
                                                <div><h6>Priests</h6></div>
                                                <div><h6>New Temple</h6></div><br />
                                                <div><h6>Events</h6></div>
                                                <div><h6>Events Calender</h6></div><br />
                                                <div><h6>About</h6></div>
                                                <div><h6>About JSS</h6></div>
                                                <div><h6>HH Sawamji</h6></div>
                                                <div><h6>Sri Suttur Math</h6></div>
                                                <div><h6>JSS Group of Instiutions</h6></div>
                                                <div><h6>JSS Spiritual Mission</h6></div>
                                                <div><h6>JSS Medical Service Trust</h6></div>
                                                <div><h6>Advisory Board</h6></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='text-left'>
                                                <div><h6>Temple</h6></div>
                                                <div><h6>Deities</h6></div>
                                                <div><h6>Priests</h6></div>
                                                <div><h6>New Temple</h6></div><br />
                                                <div><h6>Events</h6></div>
                                                <div><h6>Events Calender</h6></div><br />
                                                <div><h6>About</h6></div>
                                                <div><h6>About JSS</h6></div>
                                                <div><h6>HH Sawamji</h6></div>
                                                <div><h6>Sri Suttur Math</h6></div>
                                                <div><h6>JSS Group of Instiutions</h6></div>
                                                <div><h6>JSS Spiritual Mission</h6></div>
                                                <div><h6>JSS Medical Service Trust</h6></div>
                                                <div><h6>Advisory Board</h6></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className='mt-5'>
                                        <h2 className='styleHeadingfooter text-left'>STAY CONNECTED</h2>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className='text-left'>
                                            <div><h5>Connect On</h5></div>
                                        </div>
                                        <div className='text-left'>
                                            <div className='p-2'>
                                                <FontAwesomeIcon icon={faFacebookSquare} className="mr-2" style={{ fontSize: '24px' }} />
                                                <FontAwesomeIcon icon={faYoutube} className="ml-4" style={{ fontSize: '24px' }} />
                                            </div>
                                        </div>
                                        <div className='text-left'>
                                            <div><h6>Subscribe to our Newsletter</h6></div><br />
                                        </div>
                                        <div className='text-left'>
                                            <label>First Name</label>
                                            <input type="text" className="form-control mb-3" />
                                        </div>
                                        <div className='text-left'>
                                            <label>Last Name</label>
                                            <input type="text" className="form-control mb-3" />
                                        </div>
                                        <div className='text-left'>
                                            <label>Cell Phone</label>
                                            <input type="text" className="form-control mb-3" />
                                        </div>
                                        <div className='text-left'>
                                            <label>Email Address</label>
                                            <input type="email" className="form-control mb-3" />
                                        </div>
                                        <div className='text-left'>
                                            <button type="button" className="btn border text-white">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer