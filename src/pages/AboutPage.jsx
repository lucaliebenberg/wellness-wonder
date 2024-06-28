import React from 'react'
import {Navbar} from "../components";

const AboutPage = () => {
  return (
    <div style={{overflowY: 'none'}}>
      <Navbar/>
      <div className="container mx-8 my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr/>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: "column",
          margin: "0 auto",
          gap: "32px",
          paddingTop: "25px"
        }}>
          <h3 style={{textAlign: 'center'}}>Welcome to Wellness Wonder</h3>
          <p className="" style={{textAlign: 'center', maxWidth: '48rem', fontSize: '1.1rem', margin: "0 auto"}}>
            At WELLNESS WONDERS, we believe in the power of holistic health and the importance of nurturing the mind,
            body, and spirit. Founded in 2024, we have dedicated ourselves to providing the highest quality wellness
            products that support a balanced and healthy lifestyle. Our carefully curated selection includes everything
            from organic supplements and natural skincare to eco-friendly home goods and fitness equipment. Each product
            is chosen with your well-being in mind, ensuring you receive only the best nature has to offer.
          </p>

          <h3 style={{textAlign: 'center'}}>Our Mission</h3>
          <p className="" style={{textAlign: 'center', maxWidth: '48rem', fontSize: '1.1rem', margin: "0 auto"}}>
            Our mission is to empower individuals to achieve optimal health and wellness through natural, sustainable,
            and innovative products. We are committed to inspiring positive lifestyle changes and supporting our
            customers on their journey to a healthier, happier life. At WELLNESS WONDERS, your well-being is our
            priority, and we strive to be your trusted partner in achieving a balanced and vibrant life.
          </p>

          <h3 style={{textAlign: 'center'}}>Our Values</h3>
          <p className="" style={{textAlign: 'center', maxWidth: '48rem', fontSize: '1.1rem', margin: "0 auto"}}>
            <ul style={{textAlign: 'left'}}>
              <li><strong>Quality</strong>
                : We believe that wellness starts with quality. That’s why we meticulously select products that meet the
                highest standards of purity, potency, and sustainability. We work with trusted suppliers who share our
                commitment to excellence and transparency.
              </li>
              <li><strong>Integrity</strong>
                : Trust is at the heart of our business. We are dedicated to providing honest information and authentic
                products. Our transparent sourcing and production practices ensure you know exactly what you're getting,
                every time.
              </li>
              <li><strong>Sustainability</strong>
                : We are passionate about protecting our planet. Our products are sourced responsibly, and we prioritize
                eco-friendly packaging and sustainable business practices. We strive to minimize our environmental
                footprint while maximizing positive impact.
              </li>
              <li><strong>Community</strong>
                : We believe in the power of community and connection. Our goal is to foster a supportive environment
                where individuals can share their wellness journeys, find inspiration, and grow together. We are
                committed to giving back to our community through various health and wellness initiatives.
              </li>
              <li><strong>Innovation</strong>
                : The world of wellness is ever-evolving, and so are we. We stay at the forefront of industry trends and
                scientific advancements to bring you innovative products that enhance your well-being. Our commitment to
                continuous improvement drives us to explore new frontiers in holistic health.
              </li>
            </ul>
          </p>

          <p style={{
            textAlign: 'center',
            fontWeight: 'bold',
            maxWidth: '48rem',
            fontSize: '1rem',
            margin: "0 auto",
            paddingTop: "18px"
          }}>
            Join us at WELLNESS WONDERS and embark on a journey towards a healthier, more balanced life. Discover our
            range of premium wellness products and experience the difference of a holistic approach to health.
          </p>


          {/* <div style={{ width: "auto", height: "auto", margin: "0 auto" }}>
            <img src={"/images/about-1.jpg"} alt="Africa wallpaper" width={"500"} style={{ borderRadius: "8px"}} />
          </div> */}

        </div>

        {/* ---- products start ---- */}
        {/* <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div> */}
        {/* ---- products end ---- */}

      </div>
    </div>
  )
}

export default AboutPage