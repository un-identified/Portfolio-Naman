import './App.css';

function App() {
  function redirectToProject(id) {
    let url = '';
    switch(id) {
        case 'vitalized-button':
            url = 'https://github.com/un-identified/vitalized-vit';
            break;
        case 'asl-button':
            url = 'https://github.com/un-identified/Sign-Language-Translator';
            break;
        case 'medhub-button':
            url = 'https://github.com/un-identified/Healthcare';
            break;
        case 'okra-button':
            url = 'https://github.com/un-identified/Okra-Maturity-Analysis';
            break;
        default:
            break;
    }
    if (url) {
        window.location.href = url;
    }
  }

  function travel(e) {
    switch(e.target.id) {
      case 'p':
        window.scrollTo(0, 0);
        break;
      case 's':
        window.scrollTo(0, 1000);
        break;
      case 'e':
        window.scrollTo(0, 2000);
        break;
      case 'ed':
        window.scrollTo(0, 3000);
        break;
      case 'c':
        window.scrollTo(0, 4000);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div className="navbar">
        <div className="section">
          <button id="p" onMouseDown={travel}>Project</button>
          <button id="s" onMouseDown={travel}>Skills</button>
          <button id="e" onMouseDown={travel}>Experience</button>
          <button id="ed" onMouseDown={travel}>Education</button>
          <button id="c" onMouseDown={travel}>Contact</button>
        </div>
      </div>

      <div className="container">
        <div className="intro">
          <h1>I am Naman</h1>
          <h1>I am a Software Developer</h1>
          <p><h3>I am more passionate about developing new websites and applications</h3></p>
        </div>
        <div className="dp">
          <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" alt="Profile" />
        </div>
      </div>

      <br /><br /><br /><br /><br /><br />

      <center><h1>Project</h1></center>

      <div className="project">
        <div>
          <div className="vitalized" style={{ marginRight: '130px', marginLeft: '130px' }}>
            <h1>Vitalized</h1>
            <p>This app was made for the college vit during hackathon</p>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width="600px" height="250px" alt="Vitalized" />
            <button id="vitalized-button" onClick={() => redirectToProject('vitalized-button')}>View project</button>
          </div>
          <div className="asl">
            <h1>ASL/ISL Translator</h1>
            <p>This app was made for the college vit during hackathon</p>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width="600px" height="250px" alt="ASL/ISL Translator" />
            <button id="asl-button" onClick={() => redirectToProject('asl-button')}>View project</button>
          </div>
        </div>

        <div>
          <div className="medhub">
            <h1>Medhub360</h1>
            <p>This app was made for the college vit during hackathon</p>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width="600px" height="250px" alt="Medhub360" />
            <button id="medhub-button" onClick={() => redirectToProject('medhub-button')}>View project</button>
          </div>
          <div className="okra">
            <h1>Okra</h1>
            <p>This app was made for the college vit during hackathon</p>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width="600px" height="250px" alt="Okra" />
            <button id="okra-button" onClick={() => redirectToProject('okra-button')}>View project</button>
          </div>
        </div>
      </div>

      <br />

      <center><h1>Skills</h1></center>

      <div className="Skills" style={{ border: "5px solid black", marginRight: "270px", marginLeft: "270px" }}>
        <div className="p1" style={{ marginRight: "70px" }}>
          <h3>Html</h3>
        </div>
        <div className="p2" style={{ marginRight: "70px" }}>
          <h3>Css</h3>
        </div>
        <div className="p3" style={{ marginRight: "70px" }}>
          <h3>Js</h3>
        </div>
        <div className="p4" style={{ marginRight: "70px" }}>
          <h3>React</h3>
        </div>
      </div>

      <br />

      <div className="Skills" style={{ border: "5px solid black", marginRight: "270px", marginLeft: "270px" }}>
        <div className="p1" style={{ marginRight: "70px" }}>
          <h3>Html</h3>
        </div>
        <div className="p2" style={{ marginRight: "70px" }}>
          <h3>Css</h3>
        </div>
        <div className="p3" style={{ marginRight: "70px" }}>
          <h3>Js</h3>
        </div>
        <div className="p4" style={{ marginRight: "70px" }}>
          <h3>React</h3>
        </div>
      </div>

      <br />

      <div className="Skills" style={{ border: "5px solid black", marginRight: "270px", marginLeft: "270px" }}>
        <div className="p1" style={{ marginRight: "70px" }}>
          <h3>Html</h3>
        </div>
        <div className="p2" style={{ marginRight: "70px" }}>
          <h3>Css</h3>
        </div>
        <div className="p3" style={{ marginRight: "70px" }}>
          <h3>Js</h3>
        </div>
        <div className="p4" style={{ marginRight: "70px" }}>
          <h3>React</h3>
        </div>
      </div>

      <br />

      <div className="exed">
        <center><h1>Experience</h1></center>
        <div className="exp" style={{ border: "5px solid black", marginRight:"270px",marginLeft:"270px"}}>
          <h3>Software Developer</h3>
          <h3>Software Developer</h3>
          <h3>Software Developer</h3>
        </div>
        <h1>Education</h1>
        <br />
        <div className="edu" style={{ border: "5px solid black",marginRight:"270px",marginLeft:"270px" }}>
          <h3>College VIT</h3>
          <h3>High School</h3>
        </div>
      </div>

      <center><h1>Achievement</h1></center>
      <div className="ach" style={{ border: "5px solid black", marginLeft: "270px", marginRight: "270px" }}>
        <h3>Devhouse 4th place</h3>
        <h3>Solveathon 6th place</h3>
      </div>

      <center><h1>Contact</h1></center>
      <div className="contact" style={{ border: "5px solid black", marginLeft: "270px", marginRight: "270px" }}>
        <h3>Naman</h3>
        <h3>Email id</h3>
        <h3>Phone number</h3>
      </div>
    </div>
  );
}

export default App;
