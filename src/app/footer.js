import { SiGmail } from "react-icons/si";
import { MdMessage } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";


export default function Footer() {
    
    return (
        <div className="container-fluid w-100 bg-dark">
      <footer className="bg-dark text-center text-white">
       
        <div className="container p-4">
          <section className="mb-4">
            <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><SiGmail/></Link>
      
            <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><MdMessage/></Link>
      
           
            <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FaLinkedin/></Link>
      
           
            <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FaInstagramSquare/></Link>
      
          </section>
          
          <section className="">
            <form action="">
             
              <div className="row d-flex justify-content-center">  
              </div>
             
            </form>
          </section>
          
          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
              repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
              eum harum corrupti dicta, aliquam sequi voluptate quas.
            </p>
          </section>
          
          <section className="">
            
            <div className="row">
             
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
      
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="#!" className="text-white">Link 1</Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">Link 2</Link>
                  </li>
                  
                </ul>
              </div>
             
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
      
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="#!" className="text-white">Link 1</Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">Link 2</Link>
                  </li>
                  
                </ul>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
      
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="#!" className="text-white">Link 1</Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">Link 2</Link>
                  </li>
                  
                </ul>
              </div>
             
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
      
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="#!" className="text-white">Link 1</Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white">Link 2</Link>
                  </li>
                  
                </ul>
              </div>
              
            </div>
           
          </section>
          
        </div>
        
      
        
        {/* <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2020 Copyright:
         <Link className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</Link> 
        </div> */}
        
      </footer>
        
      </div>
    );
  }