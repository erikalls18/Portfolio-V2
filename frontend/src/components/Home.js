import About from "./About";
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
                <p>loremipsum</p>
            </div>
            </div>
          
          <div className="card-contact">
            <p>Contact me!</p>
            <a href="https://www.linkedin.com/in/erika-leguizamón/">
                    <img src="/images/linkedin.png" width={30} height={30} className="img-contact" alt="java-logo"/>
                </a>

                <a href="https://github.com/erikalls18">
                    <img src="/images/git-logo.png" width={30} height={30} className="img-contact" alt="java-logo"/>
                </a>
                
                <a href="mailto:erikalls18@hotmail.com">
                    <img src="/images/mail.png"width={30} height={30} className="img-contact" alt="java-logo"/>
                </a>
        
        </div>
        </div>

      
        <Nav /> {/* Nav dentro del main-content-home */}
      
        <Projects/>
      </div>
    );
  }
  
  export default Home;
  