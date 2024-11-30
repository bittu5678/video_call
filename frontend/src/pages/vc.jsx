import React from 'react';

const Vc = () => {
  return (
    <>
      <div style={{
        background: `
          linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
          ),
          url(https://i.ytimg.com/vi/VH1C7xACJt4/maxresdefault.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px'
      }}>
        <h1 style={{ marginBottom: '20px', color: '#fff', fontSize: '3em' }}>Video Call</h1>
        <h3 style={{ marginBottom: '50px', color: '#fff', fontSize: '1.5em' }}>We Provide the Best Services for Video Chatting</h3>
        <p style={{ color: '#fff', fontSize: '1.2em', lineHeight: '1.5' }}>
          Our Video Chatting Service is the best in the world. We provide the best quality video chatting service.
          Our service is very fast and secure.
          We provide the best quality video chatting service. Our service is very fast and secure.
          We provide the best quality video chatting service. Our service is very fast and secure.
        </p>
        <a href="http://localhost:3001" style={{ color: '#fff', fontSize: '1.2em', marginTop: '30px', textDecoration: 'none', border: '2px solid #fff', padding: '10px 20px', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s' }}>Try Now</a>
      </div>
    </>
  );
}

export default Vc;
