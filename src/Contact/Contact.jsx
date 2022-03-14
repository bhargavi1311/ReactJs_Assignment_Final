import React from 'react';
import Arrival from '../Common/Arrival';
import Footer1 from '../Footer1';

export const Contact = () => {
  return (
    <>
      <div className="list">
        <h1>Contact us</h1>
      </div>

      <div class="container my-5">
        <form className=' form-control-lg ' >
          <div class="form-group my-3 mb-5">
            <input type="text" class="form-control" placeholder="Enter Your Full Name" name="Name" />
          </div>
          <div class="form-group my-3 mb-5">
            <input type="email" class="form-control" placeholder="Enter Your Email Address" name="email" />
          </div>
          <div class="form-group my-3 mb-5">
            <input type="text" class="form-control" placeholder="Enter Your Subject" name="subject" />
          </div>
          <div class="form-group my-3 mb-4">
            <textarea name="w3review" rows="6" cols="135">
              Enter Your Message
            </textarea>
          </div>
          <div className='col-md-10 text-center'>
            <button type="button" class="btn btn-dark" style={{ fontSize: "20px", padding: "10px 50px" }}>Submit</button>
          </div>

        </form>
      </div>
      <Arrival />
      <Footer1 />
    </>
  );
};

export default Contact;
