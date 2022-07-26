AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Site Reliability Engineer",
    cardImage: "assets/images/experience-page/forcepoint.png",
    place: "Forcepoint",
    time: "(June, 2021 - present)",
    desp: "<li>Responsible for uptime of Forcepoint products.</li> <li>Monitoring & Managing the product servers",
  },
  {
    title: "Site Reliability Engineer",
    cardImage: "assets/images/experience-page/qualys.png",
    place: "Qualys",
    time: "(July 2016 - July 2021)",
    desp: "<li>Responsible for deployments of the code.<li>Responsible for Monitoring and Managing the product servers</li>",
  },
  {
    title: "Senior Technial Support Engineer",
    cardImage: "assets/images/experience-page/aress.png",
    place: "Aress Software",
    time: "(Nov 2011 - July 2016)",
    desp: "<li>System administration of Linux based web servers.</li><li> Securing server, by installing firewall, configuring firewall and checking security aspects</li>",
  },
 {
    title: "System Admin",
    cardImage: "assets/images/experience-page/geeks.png",
    place: "Geeks Solutions",
    time: "(April 2008 - Nov 2011)",
    desp: "<li>Trouble shooting problems related to FTP, DNS, Mail servers, </li><li> Investigation on various and spamming attack.</li>",
  },

];


const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
