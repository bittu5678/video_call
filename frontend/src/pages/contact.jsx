import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor: 'black', padding: '30px 0' }}>
      <h1 style={{ marginBottom: '40px', color: 'white' }}>Contact Us</h1>
      {/* <p style={{ marginBottom: '30px', color: '#666' }}>Please fill out the form below to get in touch with us.</p> */}
      <form style={{ maxWidth: '400px', margin: '0 auto', padding: '30px', backgroundColor: 'b;ack', borderRadius: '8px', boxShadow: '0 0 20px 8px rgba(0, 128, 128, 0.3), 0 0 20px 8px rgba(0, 128, 128, 0.3), 0 0 20px 8px rgba(0, 128, 128, 0.3), 0 0 20px 8px rgba(0, 128, 128, 0.3)' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Message:</label>
          <textarea id="message" name="message" placeholder="Your message" rows="4" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box', resize: 'vertical' }}></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 20px', fontSize: '1em', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;

