import React,{useState} from 'react';

import Carousel from 'react-bootstrap/Carousel';
import us from "C:/My-React-Project/Real-Time-Website/web/src/Images/us.jpg"
import us1 from "C:/My-React-Project/Real-Time-Website/web/src/Images/us1.jpg"
import us2 from "C:/My-React-Project/Real-Time-Website/web/src/Images/us2.jpg"
import us3 from "C:/My-React-Project/Real-Time-Website/web/src/Images/us3.jpg"
import us4 from "C:/My-React-Project/Real-Time-Website/web/src/Images/us4.jpg"
import "C:/My-React-Project/Real-Time-Website/web/src/contact.css"
// import Spinner from 'react-bootstrap/Spinner';
import Wobble from 'react-reveal/Wobble';
import {send} from "emailjs-com"

function Contact() {
const [message,setmessage]=useState("")
const [name, setname] = useState("")
const [email, setemail] = useState("")
  
  
const sendmail = (e) => {
    e.preventDefault();
    send(
        'service_vbw1cti',
        'template_juv3j5h',
        {name,email,message},
        "ZciiIsvYwwu-dGNf1"
    )
    .then((res) => {
    console.log("massage send successfully",res.status,res.text)
    }).catch((err) => {
    console.log('failed to send',err)
    }
    )
    
    }
  return (
  <><div >
    <Wobble>
          <Carousel>
              <Carousel.Item interval={5000}>
                  <img
                      className="d-block w-100 "
                      src={us}
                     
                      alt="First slide" />
                  <Carousel.Caption>
                      <h3>"Strive not to be a success, but rather to be of value."</h3>
                      <p>– Albert Einstein.</p>
                  </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item interval={5000}>
                  <img
                      className="d-block w-100"
                      src={us1}
                      height="600px"
                     
                      alt="Second slide" />
                  <Carousel.Caption>
                      <h3>"To keep a customer demands as much skill as to win one."</h3>
                      <p>– American Proverb</p>
                  </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item interval={5000}>
                  <img
                      className="d-block w-100"
                      src={us2}
                      height="600px"
                      alt="Third slide" />
                  <Carousel.Caption>
                      <h3> "Men are rich only as they give. He who gives great service gets great rewards."</h3>
                      <p>
                     - Elbert Hubbard,
                      </p>
                  </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item interval={5000}>
                  <img
                      className="d-block w-100"
                      src={us3}
                      height="600px"
                      alt="First slide" />
                  <Carousel.Caption>
                      <h3>"We see our customers as invited guests to a party, and we are the hosts. It's our job to make the customer experience a little bit better."</h3>
                      <p> – Jeff Bezos, Founder Amazon</p>
                  </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item interval={5000}>
                  <img
                      className="d-block w-100"
                      src={us4}
                      height="600px"
                      alt="First slide" />
                  <Carousel.Caption>
                      <h3> "If you just communicate, you can get by. But if you communicate skillfully, you can work miracles." </h3>
                      <p>– Jim Rohn,Motivational Speaker</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
          </Wobble>
      </div><div>
    
              <h1 class="text-center">Contact Us</h1>

              <br></br>
              
              <form onSubmit={sendmail}>
              <div class="row">
                  <div class="col md-6">
                      <label class="form-label">Name</label>
                      <input type="text" class="form-control" value={name} onChange={(e)=> 
                    setname(e.target.value)}></input>
                  </div>
                  <div class="col md-6">
                      <label class="form-label">PhoneNumber</label>
                      <input type="number" class="form-control"></input>
                  </div>

              </div>
              <div class="row">
                  <div class="col md-6">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" value={email} onChange={(e)=>setemail(e.target.value)}></input>
                  </div>
                  <div class="col md-6">
                      <label class="form-label">AltNumber</label>
                      <input type="number" class="form-control"></input>
                  </div>
              </div>
              <div class="row">

                  <div class="col md-12">
                      <label class="form-label" >Message </label>
                      


    {/* <Spinner animation="border" role="status" intervel={1000}>
      <span className="visually-hidden"></span>
    </Spinner> */}



                      <input type="textarea" class="form-control" value={message} onChange={(e) => setmessage(e.target.value)}></input>
                  </div>

              </div>
               <br></br>
               <br></br>
            
               <div class="container">
  
  
  <button type="submit" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Send Email</button>


  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
     
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" name="Click Here"></button>
          <h4 class="modal-title">Hii {name}</h4>
        </div>
        <div class="modal-body">
            <p>{message}</p>
            <hr></hr>
          <h1>We Recivied Your Message</h1>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      

    
    </div>      

          </div>



 
  </div>
        

</form>      
          </div>
<br></br>
<br></br>




          
          
          </>
  );
}

export default Contact;