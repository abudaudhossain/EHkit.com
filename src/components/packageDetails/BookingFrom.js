import React from 'react'

const BookingFrom = () => {
    return (
        <form className="row g-3 form-bg">
            <div className="col-md-12">
                <label for="inputEmail4" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="" />
            </div>
            <div className="col-md-12">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="" />
            </div>
            <div className="col-md-12">
                <label for="inputEmail4" className="form-label">Phone</label>
                <input type="text" className="form-control" id="" />
            </div>
            <div className="col-md-12">
                <label for="inputEmail4" className="form-label">Travel Date</label>
                <input type="date" className="form-control" id="" />
            </div>
            <div className="col-md-12">
                <label for="inputEmail4" className="form-label">Number of Popple</label>
                <input type="text" className="form-control" id="" />
            </div>
            <div className="col-md-12">
                <label for="inputEmail4" className="form-label">Package Name</label>
                <input type="text" className="form-control" id="" />
            </div>
            <div className="col-md-12">
                <label for="inputEmail4" className="form-label">Messages</label>
                <textarea rows={6} type="text" className="form-control" id="" />
            </div>

            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <div className="col-12">

                <a href="#" className="gs-btn gs-btn-primary">Booking Now</a>
            </div>
        </form>
    )
}

export default BookingFrom