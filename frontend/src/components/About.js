function About() {
  {
   return (
     <div className="about-container">
     
       
       <div className="description">
          <p > I am a junior Software Developer with a strong interest in programming. Currently, I am in my second year of pursuing a Computing Studies and Information Systems 
            Diploma at Douglas College. I am truly passionate about acquiring new knowledge and skills, and I find  joy in exploring innovative approaches to solving complex problems. 
            This journey in the realm of technology fuels my curiosity and drives me to continuously enhance my expertise in the field. <br></br>
             
          </p>
          <h3>Experience</h3>
          <p>My experience in IT includes working as a Data Developer , where I have had the valuable opportunity to work with data and craft solutions 
            that contribute to informed decision-making. Additionally, I have gained practical expertise by embarking on personal projects that align with the technologies I have been learning. 
            These projects have granted me hands-on experience and a deeper understanding of software development.
          </p>
      </div>
      <h2> Some Technologies  I have worked with</h2>

      <div className="container-technologies">
          <div className="container-soft-tech">
            
              <img src="/images/html-css.jpg" width={60} height={60} className="img-tech" alt="java-logo"/>
              <img src="/images/JavaScript_logo.png" width={60} height={50} className="img-tech" alt="java-logo"/>  
              <img src="/images/nodejs-1-logo.png" width={60} height={60} className="img-tech" alt="java-logo"/>
              <img src="/images/logo192.png" width={80} height={80} className="img-react" alt="java-logo"/> 
              <img src="/images/resApi.png" width={100} height={80} className="img-api" alt="java-logo"/>
              <img src="/images/java-Logo.png" width={20} height={200} className="img-tech" alt="java-logo"/>
              
              
              
          </div>

          <div className="container-data-tech">
           
              <img src="/images/python.png" width={120} height={130} className="img-python" alt="python"/>
              <img src="/images/bigquery_logo.png" width={120} height={90} className="img-bq" alt="java-logo"/>
              <img src="/images/looker.png" width={130} height={130} className="img-looker" alt="java-logo"/>
              <img src="/images/MongoDB-Logo.jpg" width={120} height={120} className="img-mongo" alt="java-logo"/>
              <img src="/images/mysql-logo.png" width={100} height={80} className="img-mysql" alt="java-logo"/>
              
          </div>



      </div>
     </div>
   );
 }
}

export default About;