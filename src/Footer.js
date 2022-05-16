import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

export default function App() {
  return (
    <MDBFooter bgColor='#f5f6fa' className='text-center text-lg-start text-muted'style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/ayush.srivastav.7792/' target="_blank" className='me-4 text-reset'>
            <i className='fab fa-facebook'></i>
          </a>
         
          <a href='https://www.instagram.com/_ayush.srivastav_/?hl=en' target="_blank" className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='https://www.linkedin.com/in/ayushsrivastav0811/' target="_blank" className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='https://github.com/ayushsrivastav0811' target="_blank" className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

     

      
    </MDBFooter>
  );
}