function Work() {
    return (
      <div className="work-container">
        
        <div className="work-place">

            <img src="/images/zelkhara.png" width={250} height={150} className="img-zelkhara" alt="zelkhara"/>
            <div className="desc-role">
           
                <p className="role"><strong>Zelkhara LLC,  </strong> Software Developer, June 2023 </p>
                <p > In my role as a Software Developer , I focused on the management and transformation of data to ensure 
                    its accessibility and utility. My work involved creating data pipelines, cleaning, organizing, and 
                    transforming data into formats that met the specific needs of the clients. Additionally, I conducted
                     a thorough data validation to identify and correct errors, inconsistencies, and inaccuracies.
                    As a Data Engineer, my goal was to ensure that the data was reliable, 
                    actionable, and available to support strategic decision-making within the organization. 
                </p>
                <p><strong>Tecnologies used:</strong> Python, AWS</p>
            </div> 
          </div>  
        <div className="work-place1"> 
              <img src="/images/Minsait-.jpg" width={250} height={150} className="img-minsait" alt="python"/>
              <div className="desc-role">
                <p className="role"><strong>Indra Company, </strong> Data Engineer <span>Sep 2021 - Sep 2022</span></p>
                <p > In my role as a Data Engineer, I focused on the management and transformation of data to ensure 
                    its accessibility and utility. My work involved creating data pipelines, cleaning, organizing, and 
                    transforming data into formats that met the specific needs of the clients. Additionally, I conducted
                     a thorough data validation to identify and correct errors, inconsistencies, and inaccuracies.
                    As a Data Engineer, my goal was to ensure that the data was reliable, 
                    actionable, and available to support strategic decision-making within the organization. 
                </p>
                <p><strong>Tecnologies used:</strong> SQL, BigQuery, Looker, Airflow, Microstrategy, Hue</p>
            </div>
            

          </div>

        
      </div>
    );
  }
  
  export default Work;