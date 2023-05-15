import React, { Component } from 'react'
import icon7 from './assets/icon7.svg'

export default class Header extends Component {
    render() {
        return (
            <div className='row justify-content-center'>

                <div className='col-11'>
                    <div className='row'>
                        <div className='col-6'>
                            <span className='edyoda'>EDYODA</span>

                            <select style={{fontSize:"16px"}}>
                                <option>
                                    Courses
                                </option>
                            </select>
                            <select className='ms-4' style={{fontSize:"16px"}}>
                                <option>
                                    Programs
                                </option>
                            </select>

                        </div>
                        <div className=' col-6 p-2 text-end'>
                            <img className='me-5' src={icon7} />
                            <a style={{textDecoration:"none"}} className='me-5' href=''>Log in</a>
                            <button className='btn'>Join Now</button>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
