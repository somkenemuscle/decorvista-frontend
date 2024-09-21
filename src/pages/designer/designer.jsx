import { useState, useEffect } from 'react';
import axios from 'axios';


const DesignerPage = () => {
  const [designers, setDesigners] = useState([]);


  // Fetch designer data from API
  useEffect(() => {
    const fetchDesignerData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/auth/designers'); // Replace with your API URL
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
    <>
      {designers && designers.length > 0 ?
        (
          designers.map((designer, index) => (
            <div className="container my-5">
              < div className="card shadow-lg" >
               {/* Card for Designer Information */}
                < div key={index} className="card-body">
                  {/* Full Name  */}
                  <h1 className="card-title text-center display-4">{designer.fullname}</h1>

                  {/* Divider  */}
                  <hr />

                  {/* Designer Details */}
                  <div className="row my-4">
                    {/* Email */}
                    <div className="col-md-6">
                      <h5>Email</h5>
                      <p>
                        <a href={`mailto:${designer.email}`} className="text-decoration-none text-primary">
                          {designer.email}
                        </a>
                      </p>
                    </div>

                    {/* Specialization */}
                    <div className="col-md-6">
                      <h5>Specialization</h5>
                      <p>{designer.specialization}</p>
                    </div>
                  </div>

                  {/* About Section */}
                  <div className="my-4">
                    <h5>About</h5>
                    <p className="lead">{designer.about}</p>
                  </div>

                   {/* Portfolio Link  */}
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
                </div>
              </div>
            </div >

          )))
        :
        (
          <div className="container my-5 d-flex justify-content-center align-items-center ">
          <div className="text-center">No designer available</div>
        </div>
        )
      }


    </>
  );
};

export default DesignerPage;
