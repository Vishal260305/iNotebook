import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';

const About = () => {
  // You can useContext to access global state or context APIs if needed
  
  return (
    <div className="container mt-4">
      <h1>About Our Notebook Application</h1>
      <p>
        Our notebook application is designed to securely store your notes on the cloud, providing you with access to your
        important information from anywhere, anytime. Here's what you need to know:
      </p>
      <h2>Security Measures</h2>
      <p>
        We take the security of your data seriously. Here are some of the measures we've implemented to ensure your notes
        are protected:
      </p>
      <ul>
        <li>
          <strong>End-to-End Encryption:</strong> Your notes are encrypted on your device before being sent to our servers.
          This means that only you can decrypt and access your notes.
        </li>
        <li>
          <strong>HTTPS Encryption:</strong> All communication between your device and our servers is encrypted using HTTPS,
          preventing unauthorized access to your data during transmission.
        </li>
        <li>
          <strong>Access Control:</strong> You have full control over who can access your notes. We use industry-standard
          authentication and authorization mechanisms to ensure that only authorized users can view and modify your data.
        </li>
        <li>
          <strong>Regular Security Audits:</strong> We conduct regular security audits and penetration tests to identify and
          address any potential vulnerabilities in our system.
        </li>
      </ul>
      <h2>Features</h2>
      <p>
        In addition to robust security measures, our notebook application offers a range of features to enhance your
        note-taking experience:
      </p>
      <ul>
        <li><strong>Cloud Sync:</strong> Your notes are automatically synced across all your devices, ensuring you always have
          the latest version of your notes available.</li>
        <li><strong>Tagging and Organization:</strong> Organize your notes with tags and categories for easy retrieval.</li>
        <li><strong>Search Functionality:</strong> Quickly find the note you're looking for with powerful search functionality.</li>
        <li><strong>Text Formatting:</strong> Format your notes with text formatting options such as bold, italics, and bullet points.</li>
      </ul>
      <h2>Get Started</h2>
      <p>
        Ready to get started? Sign up for an account today and start taking your notes to the next level with our secure
        and feature-rich notebook application.
      </p>
    </div>
  );
};

export default About;
