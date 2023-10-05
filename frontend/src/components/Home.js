
import Nav from "./Nav";
import Projects from "./Projects";
function Home() {
    return (
      <div className="main-content-home">
        <div className="card-presentation">
            <div className="card-description">
                <img src="/images/profile.jpg" width={200} height={200} className="img-profile" alt="profile" />
              <div>
                  <p>Erika Leguizamon</p>
                  <p>Data Developer | Software developer</p>
                  <img src="/images/location.png" width={32} height={30} className="img-location" alt="location-logo" />Vancouver, BC.
                  
                  <div className="list-languages">
                  <h4 className="subtitle-lang"> Programming Languages</h4>
                  <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                  </ul>
                  </div>
                  
              </div>
            </div>
          
          <div className="card-contact">
            <h4 className="subtitle-contact" >Contact Info</h4>
            <a href="https://www.linkedin.com/in/erika-leguizamón/" target="_blank">
                <img src="/images/linkedin.png" width={32} height={30} className="img-contact" alt="linkedin-logo" />/in/erika-leguizamón
            </a>
            <br></br>

            <a href="https://github.com/erikalls18" target="_blank">
                <img src="/images/git-logo.png" width={30} height={30} className="img-contact" alt="github-logo"/>github.com/erikalls18
            </a>
            <br></br>
            
            <a href="mailto:erikalls18@hotmail.com" >
                <img src="/images/mail.png" width={30} height={30} className="img-contact2" alt="mail-logo"/>erikalls18@hotmail.com
            </a>
            <br></br>
                
                
              
                
          </div>
        

        </div>

      
        <Nav /> {/* Nav dentro del main-content-home */}
      </div>
    );
  }
  
  export default Home;
  