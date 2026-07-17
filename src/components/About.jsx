import React from 'react'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/assets/img/my-profile-img.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 content">
              <h2>Web Developer.</h2>
              <p className="fst-italic py-3"></p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Birthday:</strong> <span>20 Nov 2005</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Phone:</strong> <span>+885 373 038</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>City:</strong>{' '}
                      <span>Phnom Penh, Cambodia</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Age:</strong>{' '}
                      <span>21</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Degree:</strong> <span></span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Email:</strong> <span>Hengsivcheng7@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Freelance:</strong> <span>Unavailable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
