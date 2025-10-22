export default function Navbar() {
  return (
    <nav style={{padding:'1rem', backgroundColor:'#fff', display:'flex', justifyContent:'space-between', alignItems:'center', boxShadow:'0 2px 5px rgba(0,0,0,0.1)'}}>
      <h1 style={{color:'#ff69b4'}}>YouthMed</h1>
      <div style={{display:'flex', gap:'1rem'}}>
        <a href="#about">About</a>
        <a href="#whatwedo">What We Do</a>
        <a href="#join">Join Us</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
