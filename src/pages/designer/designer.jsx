import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/design.css'


const DesignerPage = () => {
  const [designers, setDesigners] = useState([]);


  // Fetch designer data from API
  useEffect(() => {
    const fetchDesignerData = async () => {
      try {
        const response = await axios.get('https://decorvista-backend.vercel.app/api/auth/designers'); // Replace with your API URL
        const { AllDesigners } = response.data
        console.log(AllDesigners)
        setDesigners(AllDesigners);

      } catch (error) {
        console.error('Error fetching designer data:', error);
      }
    };

    fetchDesignerData();
  }, []);

  return (
    <div className="container my-5">
    <div className="row">
      {designers.map((designer, index) => (
        <div key={index} className="col-md-6 col-12 mb-4">
          <div className="card shadow-lg card-custom">
            <div className="row">
              <div className="col-12">
                {/* Full Name */}
                <div className="mb-3">
                  <h6 className="font-weight-bold">Full Name</h6>
                  <span className="font-weight-bold">{designer.fullname}</span>
                </div>
  
                {/* Email */}
                <div className="mb-3">
                  <h6 className="font-weight-bold">Email</h6>
                  <p className="mb-0">
                    <a
                      href={`mailto:${designer.email}`}
                      className="text-decoration-none text-primary"
                    >
                      {designer.email}
                    </a>
                  </p>
                </div>
  
                {/* Specialization */}
                <h6 className="font-weight-bold">Specialization</h6>
                <span className="mb-3">{designer.specialization}</span>
  
                {/* About Section */}
                <div className="my-4">
                  <h6 className="font-weight-bold">About</h6>
                  <span className="lead mb-3">{designer.about}</span>
                </div>
              </div>
            </div>
  
            {/* Portfolio Link centered below all content */}
            {designer.portfolio && (
              <div className="text-center my-4">
                <a
                  href={designer.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark btn-lg"
                >
                  View Portfolio
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default DesignerPage;
