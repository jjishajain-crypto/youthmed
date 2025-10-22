export default function Projects() {
  return (
    <section id="whatwedo" style={{textAlign:'center', padding:'5rem 1rem', backgroundColor:'#ffe6f0'}}>
      <h3 style={{fontSize:'2rem', color:'#ff69b4', marginBottom:'2rem'}}>What We Do</h3>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'1rem'}}>
        <div style={{backgroundColor:'#fff', padding:'1rem', borderRadius:'15px', width:'250px', boxShadow:'0 2px 5px rgba(0,0,0,0.1)'}}>
          <h4>🎨 Health x Creativity</h4>
          <p>We’re redefining what healthcare means for our generation through art, design, and storytelling.</p>
        </div>
        <div style={{backgroundColor:'#fff', padding:'1rem', borderRadius:'15px', width:'250px', boxShadow:'0 2px 5px rgba(0,0,0,0.1)'}}>
          <h4>🏥 Community Wellness</h4>
          <p>We bring students and professionals together to create hands-on health experiences that make an impact.</p>
        </div>
        <div style={{backgroundColor:'#fff', padding:'1rem', borderRadius:'15px', width:'250px', boxShadow:'0 2px 5px rgba(0,0,0,0.1)'}}>
          <h4>🤝 Connection & Growth</h4>
          <p>We empower youth to take leadership in health through mentorship, creative advocacy, and innovation.</p>
        </div>
      </div>
    </section>
  );
}
