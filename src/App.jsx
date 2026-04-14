import React, { useEffect } from 'react';
import './App.css';

function App() {
  
  useEffect(() => {
    console.log(
      "%c>> ILLUMINE 2026 IS COMING <<",
      "color: #D902EE; font-weight: bold; font-size: 14px;"
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-focus');
          } else {
            entry.target.classList.remove('in-focus');
          }
        });
      },
      { 
        threshold: 0, 
        rootMargin: "-10% 0px -10% 0px"
      } 
    );

    const cards = document.querySelectorAll('.neon-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  // Easter Egg 2: The Broken Button
  const handleBrokenButton = () => {
    alert("EASTER EGG UNLOCKED: You found the broken button! But don't worry, it doesn't actually do anything... yet...");
  };

  // Goodwill Messages Data
  const goodwillMessagesList = [
    { name: "VC", desc: "It is with profound pleasure that I learn of Illumine 2026, the biennial reunion of the Department of Information Technology at Jadavpur University, an occasion that assumes even greater significance as it commemorates the 25th Anniversary (Silver Jubilee) of the department. Over the past quarter century, the Department of Information Technology has distinguished itself as a bastion of academic excellence, pioneering innovation, and meaningful research. Its illustrious alumni, dispersed across the globe, continue to uphold and enhance the University's legacy through their exemplary accomplishments and invaluable contributions to society. Reunions such as Illumine serve as an enduring conduit between legacy and progress --- revitalizing cherished associations, rekindling shared memories, and reinforcing a collective sense of identity among alumni, students, and faculty alike. This Silver Jubilee is not merely a celebration of a distinguished past, but also a moment to envision a future defined by renewed purpose, ambition, and excellence. I extend my sincere appreciation to the Organizing Committee for their vision, dedication, and meticulous efforts in curating this landmark event. I am confident that Illumine 2026 will inspire widespread participation from alumni across the world and stand as a truly memorable and resounding success. I convey my warmest felicitations and best wishes to the Department of Information Technology and the Organizing Committee for an enriching and inspiring celebration.", img: "/faculty-vc.png" },
    { name: "Pro VC", desc: "", img: "/faculty-provc.png" },
   // { name: "Dean of FET", desc: "", img: "/faculty-dean.jpg" },
    { name: "HoD (Dr. Bhaskar Sardar)", desc: "", img: "/faculty-hod.jpg" },
    { name: "Dr. Bibhas Chandra Dhara", desc: "", img: "/faculty-dhara.jpeg" },
    { name: "Dr. Parama Bhaumik", desc: " A Silver Legacy: 25 Years of Impact and Inspiration - It gives me immense pleasure to pen these few lines for the Illumine 2026 Newsletter. This year, we are honoured to celebrate a proud silver legacy marking 25 years of the Department of Information Technology. This milestone reflects our collective journey of dedication, growth, and aspiration. I extend my sincere appreciation to all students and contributors who made this publication possible. Our legacy is not merely confined to classrooms and laboratories or the processes of teaching and learning; it lives on in the memories, contributions and achievements of our past and present students, faculty members, and staff. Over the past two decades, the ecosystem of Information Technology has undergone profound transformation. Having had the privilege of observing these changes over 23 years of teaching, I have witnessed shifts not only in curriculum, pedagogy, career aspirations, and skill sets, but also in values and behavioural patterns. Amid these changes, the growing “zapping culture” of constant distraction is a matter of concern, where attention constantly shifts from one context to another, weakening memory, reducing depth of understanding, and increasing anxiety and distraction. It is important for us to pause, reflect, and consciously reclaim our focus. And now we have firmly entered the age of Artificial Intelligence which offers immense opportunities and automations, while also presenting challenges and uncertainties, particularly in professional domains. I encourage all of you to embrace these changes with a positive mindset. Compete not just through technical skills, but with strong human understanding, creativity, and the ability to think deeply. Learning should go beyond mechanical upskilling  towards true comprehension and innovation. I believe the future is full of possibilities waiting to be explored. Let us make this journey more humane, more connected, and more purposeful and fulfilling. Best wishes - Dr. Parama Bhaumik" 
    , img: "/faculty-bhaumik.png"},
    ];

  // Recent Activities Data
  const recentActivitiesList = [
    {
      title: "Completion of Construction work of lift in SMCC",
      desc: "A major infrastructural development took place in the SMCC in November 2025, where the construction work of a lift was finally completed. A new, modern and safe lift now makes it easier for both the students and faculty members to reach the classrooms and laboratories located on the top floors of SMCC.",
      img: "/activity-lift.jpeg"
    },
    {
      title: "Tragedies",
      desc: "In a tragic incident which unfolded on 11th September, 2025, a third year student of the English department was found in a pond on Jadavpur campus and was taken to a nearby medical college where doctors declared her dead. It is suspected that she died of drowning. As responsible stakeholders of the university, we shall try to ensure that negligence like these do not lead to any such grave tragedies in the future.",
      img: "/activity-tragedy.png"
    },
    {
      title: "Movements",
      desc: "16 POINTERS MOVE - Years of state negligence, no union elections, fund crunch, and crumbling infrastructure have swelled into a mammoth crisis for students. Heeding F.E.T.S.U.s' 16 point charter of demands, students had taken a stand, forcing the authorities to meet and discuss on January 31st, 2025. The conversation continued until 9 PM.",
      img: "/activity-movements.png"
    }
  ];

  // Events Data
  const eventsList = [
    { 
      name: "F.E.T.S.U. PRESENTS U-TURN 2024", 
      desc: "The Union Freshers of FET - F.E.T.S.U. Presents U-TURN 2024 was held from the first week of Jan to 8th Feb 2025 (Final Night). Freshers from all 16 engineering departments actively participated in all the events and realized that a U-Turn from two/three years of rigorous preparation was much needed. Information Technology reached the Football semi-finals where we unfortunately lost the game, but the team showed great fighting spirit.", 
      img: "/event-uturn24.jpeg" 
    },
    { 
      name: "F.E.T.S.U. PRESENTS CIIPPUS 2024", 
      desc: "F.E.T.S.U. Presents CIIPPUS 2024 was held from the last week of Jan to 22nd Feb. Freshers participated actively in various events, developed a strong bond of connection between their seniors, batchmates and developed their interests alongside academic progress. Information Technology were declared as the winners in On Day Performance, Basketball, Tug of War, Keura, Antakshari and were runners up in Football, Cards, Quiz. Anuska Garai was declared as Ms. CIIPPUS and Binit Oraon was the highest goal scorer in football. Information Technology won a total of 10 trophies.", 
      img: "/event-ciippus24.jpeg" 
    },
    { 
      name: "F.E.T.S.U. PRESENTS SRIJAN 2025", 
      desc: "The Annual Techno-Management fest of Jadavpur University F.E.T.S.U. Presents SRIJAN 2025 took place between 17th – 20th April 2025. Srijan 2025 saw 48 different events acting as a trailblazing display of groundbreaking ideas, frontier level problem solving and passionate minds competing to redefine possibilities Students from the IT department actively participated in various events and bagged top positions in many of them. Clubs founded by the IT department – CCJUSL, ACM JU and JUGS organised a plethora of amazing events which drew attention. The department of IT provided its state-of-the-art infrastructure – labs, air-conditioned classrooms for the smooth conduct of the event.  More than just a fest, SRIJAN 2025 became a confluence of ideas, passion, and progress. Carrying its spirit ahead, it echoes the message—Dream, See and Innovate.", 
      img: "/event-srijan25.png" 
    },
    { 
      name: "F.E.T.S.U. PRESENTS SANSKRITI 2025", 
      desc: "Asia’s longest running cultural fest F.E.T.S.U. Presents SANSKRITI 2025 was organised between 5th-13th April 2025 across both the Jadavpur and the Salt Lake campus. Continuing over 45 years of its legacy Sanskriti 2025 saw the finest talents across the city and beyond. With on-stage events including Raag n Josh, Jam it , Tarana and off stage events like Think Twice , Shoot At Sight , Rangoli. Sanskriti witnessed raw creativity at its peak . Students from our department got the exposure of performing live in front of a huge audience at the OAT which boosted their confidence by manifolds. As one of South Asia’s most iconic college fests, SANSKRITI continues to set new benchmarks in cultural excellence. Staying true to its spirit of “Redefining Culture,” it remains a celebration of artistic expression in its purest form.", 
      img: "/event-sanskriti25.png" 
    },
    { 
      name: "F.E.T.S.U. PRESENTS ROMANTHAN 2025", 
      desc: "F.E.T.S.U. Presents Romanthan was held on 25th May, 2025. It was a farewell arranged for the 2025 Batch passouts of the five engineering departments in  Jadavpur University Salt Lake Campus. The event strengthened the bond between the final years and the juniors who organised the entire event with great enthusiasm, warmth and love.", 
      img: "/event-romanthan25.jpeg" 
    },
    { 
      name: "CICBA 2025", 
      desc: "Seventh International Conference on Computational Intelligence in Communications and Business Analytics (CICBA) was held in our Department of Information Technology, Jadavpur University from July 4-6, 2025. Several distinguished keynote speakers like Prof. Dilip Kumar Pratihar (IIT-KGP), Prof. Narayan C. Debnath (Eastern International University, Vietnam), Prof. Deepankar Choudhury (IIT-B) marked their presence. Researchers and students from all over India submitted their research papers in the conference. The UG and PG students of our department were actively involved in the smooth conduct of the event and organised a cultural programme for the distinguished guests.", 
      img: "/event-cicba25.jpeg" 
    },
    { 
      name: "TEACHERS DAY 2025", 
      desc: "For the 2nd time in our department, the students proudly set up the Teachers’ Day celebration with great enthusiasm and respect. The event was a medium for students to extend their heartfelt tribute to the professors who’ve guided generations. The event took place on 5th September 2025 in the SMCC Building 3rd Floor. The program included events like music performance & recitation by students, cake cutting ceremony, followed by memento distribution to the professors. It was truly a memorable occasion which helped to strengthen the bond between the students and the professors.", 
      img: "/event-teachers25.jpeg" 
    },
    { 
      name: "BANI BANDANA 2026", 
      desc: "In January 2026, IT 2029 batch took the initiative for organising Saraswati Puja in the department for the 1st time. The Puja and Bhog distribution were carried out successfully with the valuable support and guidance from their senior batches. The professors of our department contributed towards the event generously and marked their presence on the day of puja. The event brought together students across different departments which created a vibrant and devotional atmosphere. This remarkable effort of the juniors marked the beginning of a new and meaningful tradition in the department.", 
      img: "/event-bani26.JPG" 
    },
    { 
      name: "F.E.T.S.U. PRESENTS U-TURN 2025", 
      desc: "The Union Freshers of FET – F.E.T.S.U. Presents U-TURN 2025 was held from the first week of January to mid-February. Freshers from all 16 departments of engineering participated in various events, embracing the spirit of enthusiasm and a refreshing break from their rigorous academic routines. The Information Technology department delivered a remarkable performance, emerging as the winners of the Cricket tournament, showcasing exceptional teamwork, determination, and sportsmanship throughout the competition.", 
      img: "/event-uturn25.jpg" 
    },
    { 
      name: "F.E.T.S.U. PRESENTS CIIPPUS 2025", 
      desc: "F.E.T.S.U. Presents CIIPPUS 2025 was held from mid-January till the 31st of the month. It brought together freshers in a vibrant celebration of talent and teamwork, while fostering strong bonds with their seniors and batchmates. The Information Technology department delivered an outstanding performance, emerging as winners in Basketball, Quiz, Table Tennis, and Keuda. The students of the department also secured runner-up positions in Chess, Antakshari, and Scavengers. Srijita Murmu was crowned Ms. CIIPPUS, and Debjit Mudi earned the title of Best Defender in the football tournament. The department also won the On Day Performance, showcasing its overall excellence and team spirit.", 
      img: "/event-ciippus25.jpg" 
    },
    { 
      name: "F.E.T.S.U. PRESENTS SANSKRITI 2026", 
      desc: "F.E.T.S.U. presents SANSKRITI’26, a celebration carrying forward 47 years of legacy, redefining culture with every passing year. Held from 28th March to 5th April 2026, the fest brought together a vibrant mix of music, dance, debates, and art, offering a grand platform for students to showcase their talents. The fest featured a wide range of events including Raag N’ Josh (Eastern Band), Jam It (Western Band), Tarana (Eastern Vocals), Rendition (Western Vocals), Natyalaya (Drama), Inquizitive (Quiz), Dance Bout, Beatbox, Rap Battle, Guitar Wars, Instrumental performances, Eastern and Western Choreography, Debate, Creative Writing, Graffiti Wars, Photography (Shoot at Sight), Poster/T-shirt/Face Painting, Rangoli and sketching. Students from our department performed live in front of a large audience at the OAT, which boosted their confidence manifold. As one of South Asia’s most iconic college fests, SANSKRITI continues to set new benchmarks in cultural excellence.", 
      img: "/event-sanskriti26.jpg" 
    },
    { 
      name: "F.E.T.S.U. PRESENTS SRIJAN 2026", 
      desc: "F.E.T.S.U. presents SRIJAN 2026, the latest edition of Kolkata’s largest Techno-Management Fest, once again celebrating innovation, creativity, and technical excellence. This year’s fest featured 49 events spread across diverse categories including Coding, Circuits and Robotics, Business, Brainstorming, Gaming, Esports, Special Attractions, and Miscellaneous. The fest witnessed enthusiastic participation from students, with the Information Technology department making a strong mark through commendable performances across multiple events. Key student-led clubs such as CCJUSL, ACM JU, and JUGS have played a vital role in organizing engaging and competitive events. The department also supported the fest by providing its advanced infrastructure, ensuring seamless execution throughout. SRIJAN 2026 continues to stand as a dynamic platform for ideas and innovation, bringing together talent, competition, and creativity under one roof.", 
      img: "/event-srijan26.jpeg" 
    }
  ];

  return (
    <div className="app-container">
      {/* CRT Scanline Overlay (Covers the whole screen) */}
      <div className="scanlines"></div>

      {/* Sticky Neon Navigation */}
      <nav className="neon-nav">
        <ul>
          <li><a href="#hero">[ HOME ]</a></li>
          <li><a href="#about">[ ABOUT ]</a></li>
          <li><a href="#messages">[ GOODWILL MESSAGE ]</a></li>
          <li><a href="#activities">[ RECENT ACTIVITIES ]</a></li>
          <li><a href="#events">[ EVENTS ]</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="hero-section">
        {/* Ambient Floating Glows */}
        <div className="ambient-glow cyan-glow"></div>
        <div className="ambient-glow purple-glow"></div>
        
        <div className="cyber-grid"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1 className="neon-title">illumine ' 26</h1>
          <h2 className="neon-subtitle">Dept of Information Technology</h2>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="content-section row-reverse">
        <div className="text-box neon-card">
          <h3 className="section-heading">About our Department :</h3>
          <p className="main-text">The Department of Information Technology at Jadavpur University, established in 2001, offers a Bachelor of Engineering with an intake of 86 students and postgraduate degrees in Software Engineering. The department emphasizes advanced curriculum, innovation, and real-world problem-solving. Over the years, it has seen high success rates in internships, job placements (81% on average), and competitive exams like GATE (80%). The “Code Club JUSL,” founded in 2018, promotes student-led innovation. The undergraduate program is NBA accredited until June 2026. This year marks the completion of 25 years of our beloved department.</p>
          <br/>
          <h3 className="section-heading">About Illumine :</h3>
          <p className="main-text">Illumine is a biennial reunion event organized by the Department of Information Technology at Jadavpur University. Held every two years, this gathering brings together alumni, current students, and faculty members to celebrate the department's achievements and foster connections within the IT community. Illumine provides a unique platform for former students to reconnect with old friends and mentors, share their career experiences, and contribute to the ongoing development of the department. It also offers current students’ valuable opportunities to gain insights from alumni, explore potential career paths, and engage with the broader IT professional community. With its focus on celebrating the department's legacy and future, Illumine is a significant and anticipated occasion for all involved. This time we intend to make the reunion even more special and grand since this year marks the Silver Jubilee of our department.</p>
        </div>
        <div className="image-box">
          <img src="/dept-building.jpeg" alt="SMCC Building" className="neon-img" />
        </div>
      </section>

      {/* Goodwill Messages Section */}
      <section id="messages" className="content-section column-layout">
        <div className="text-box w-100 text-center mb-40">
           <h3 className="section-heading" style={{fontSize: '2.5rem'}}>Goodwill Messages from Faculty :</h3>
        </div>
        
        <div className="events-list">
          {goodwillMessagesList.map((msg, index) => (
            <div key={index} className="event-row neon-card">
              <div className="event-img-container">
                 <img src={msg.img} alt={msg.name} className="event-img" />
              </div>
              <div className="event-info">
                 <h4 className="message-title">USER: {msg.name}</h4>
                 <p className="event-desc">{msg.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activities Section */}
      <section id="activities" className="content-section column-layout">
        <div className="text-box w-100 text-center mb-40">
           <h3 className="section-heading" style={{fontSize: '2.5rem'}}>Recent Activities :</h3>
        </div>
        
        <div className="events-list">
          {recentActivitiesList.map((activity, index) => (
            <div key={index} className="event-row neon-card">
              <div className="event-img-container">
                 <img src={activity.img} alt={activity.title} className="event-img" />
              </div>
              <div className="event-info">
                 <h4 className="activity-title">{activity.title}</h4>
                 <p className="event-desc">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Timeline Section */}
      <section id="events" className="content-section column-layout">
        <div className="text-box w-100 text-center mb-40">
           <h3 className="section-heading" style={{fontSize: '2.5rem'}}>Events and Achievements :</h3>
        </div>
        
        <div className="events-list">
          {eventsList.map((event, index) => (
            <div key={index} className="event-row neon-card">
              <div className="event-img-container">
                 <img src={event.img} alt={event.name} className="event-img" />
              </div>
              <div className="event-info">
                 <h4 className="event-title">{event.name}</h4>
                 <p className="event-desc">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Powers and Positions Section / Footer */}
      <footer className="neon-footer">
        <div className="text-box w-100 text-center mb-40">
           <h3 className="section-heading">Powers and Positions :</h3>
        </div>
        <button className="broken-btn" onClick={handleBrokenButton}>[ DO NOT CLICK ]</button>
      </footer>
    </div>
  );
}

export default App;