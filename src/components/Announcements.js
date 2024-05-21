import React from 'react'
import '../css/Dashboard.css'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import videoTemple from '../Img/templeVideo.mp4'

import Calendar from 'react-calendar';
import Slidebar from './Slideshow/Slidebar';
import Footer from './Footer/Footer';

function Announcements() {
    const img1 = require("../Img/Announcements.jpg");
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedMonth(date.getMonth());
        setShowCalendar(false);
    };

    // Format the date as "Month Year"
    const formattedDate = selectedDate.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });
    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    //Fatch data 
    const [Eventsdata, setDataEvents] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/getevents');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setDataEvents(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    console.log("Events data", Eventsdata);

    return (
        <>
            <div className='container-fluid bg' style={{ color: 'white' }}>
                <div className='container'>
                    <div className='d-flex justify-content-center align-item-center mt-5'>
                        <div className='py-5 pb-5 text-center mt-5'>
                            <div className='mt-5'>
                                <h3 className='h styleHeading'>Announcements</h3>
                            </div>
                            <div className='mt-3'>
                                <p className='paraContent'>"Immerse yourself in the serenity of our announcements."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid px-0'>
                <Slidebar img1={img1}/>
            </div>
            <div className='container-fluid px-0 ' style={{ color: 'black' }}>
                <div className='container'>
                    <div className='justify-content-center align-item-center'>
                        <div className='row mx-0'>
                            <div className='col-lg-12'>
                                <div className='text-center'>
                                    <div className='justify-content-center align-item-center'>
                                        <div className='mt-5'>
                                            <div>
                                                <h2 className='styleHeadingForm' style={{ margin: '0' }}>Spiritual Welcome of Guruji</h2><hr class="separator separator--line" style={{ margin: '0' }} />
                                            </div>
                                            <div className="mx-auto" style={{ paddingTop: 40 }}>
                                                <div className=''>
                                                    <p className='priPass'>Mark your calendars for a momentous occasion as we extend a warm spiritual welcome to Guruji on June 6th, 11am EST at the JSS Spiritual Mission. Join us in honouring this auspicious event and bask in the wisdom and guidance of our revered Guruji.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid px-0' style={{ color: 'black' }}>
                <div className='container'>
                    <div className='justify-content-center align-item-center'>
                        <div className='row mx-0'>
                            <div className='col-lg-12'>
                                <div className=''>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className='justify-content-center align-item-center'>
                                                <div>
                                                    <div className='mt-5'>
                                                        <h2 className='Announce-Text' style={{ margin: '0' }}>Shivaratri</h2>
                                                    </div>
                                                    <div className="mx-auto" style={{ paddingTop: 40 }}>
                                                        <div>
                                                            <p className='priPass'>Embark on a profound spiritual journey as you delve into the sacred celebrations of Maha Shivaratri through our featured video. Experience the essence of devotion and tradition as you witness the divine festivities unfold.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='justify-content-center align-item-center'>
                                                <div className=''>
                                                    <div className="mx-auto" style={{ paddingTop: 40 }}>
                                                        <div className="video-container">
                                                            <video controls className='videoStyle'>
                                                                <source src={videoTemple} type="video/mp4" />
                                                            </video>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid px-0' style={{ color: 'black' }}>
                <div className='container'>
                    <div className='justify-content-center align-item-center'>
                        <div className='row mx-0'>
                            <div className='col-lg-12'>
                                <div className='text-center'>
                                    <div className='mt-5'>
                                        <div>
                                            <h2 className='styleHeadingForm' style={{ margin: '0' }}>Upcoming Events</h2><hr class="separator separator--line" style={{ margin: '0' }} />
                                        </div>
                                        <div className="mx-auto" style={{ paddingTop: 40 }}>
                                            <div className=''>
                                                <p className='priPass'>Stay connected with our community through exciting upcoming events.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6 mt-5'>
                                            <div className="text-left">
                                                <span className='date-Text'>{monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}</span>
                                                <button onClick={toggleCalendar} className='ml-2 fs-5'><FontAwesomeIcon icon={faAngleDown} /></button>
                                                {showCalendar && (
                                                    <div className="selected-date">
                                                        <Calendar
                                                            onChange={handleDateChange}
                                                            value={selectedDate}
                                                            className="custom-calendar"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            {Eventsdata.filter(event => new Date(event.dateOfEvent).getMonth() === selectedMonth).length === 0 ? (
                                                <div className='p-4 priPass'>No events available for this month</div>
                                            ) : (
                                                Eventsdata.filter(event => new Date(event.dateOfEvent).getMonth() === selectedMonth).map((event, index) => (
                                                    <div className='justify-content-center align-item-center d-flex pb-4 pt-4 mt-2' key={index}>
                                                        <div>
                                                            <time>
                                                                <span className="">{monthNames[new Date(event.dateOfEvent).getMonth()]}</span><br />
                                                                <span className="Date-Text">{new Date(event.dateOfEvent).getDate()}</span><br />
                                                                <span className="">{new Date(event.dateOfEvent).getFullYear()}</span>
                                                            </time>
                                                        </div>
                                                        <div className='LineDiv'></div>
                                                        <div className=''>
                                                            <div className='d-flex'>
                                                                <svg className="h-3 w-3 ml-5 mt-2" fill='gray' viewBox="0 0 8 10" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0h8v10L4.049 7.439 0 10V0z"></path>
                                                                </svg>
                                                                <span className='ml-2 text-feature'> Featured</span>
                                                                <span className='ml-2'>{new Date(event.dateOfEvent).toISOString().split('T')[0]}@{event.startTime}-{event.endTime}</span>
                                                            </div>
                                                            <div className='d-flex'>
                                                                <div className='LineDiv2'></div>
                                                                <div>
                                                                    <h3 className=" Announce-Text">
                                                                        <a href={event.link} title={event.eventName} rel="bookmark" className="eventname">
                                                                            {event.eventName}
                                                                        </a>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                        <div className='col-lg-6'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Announcements 