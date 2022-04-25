import React from 'react'

const ContactSection = ({title,icon, content}) => {
  return (
    <div className="contact-section">
        <div className="contact-title">
            {/* icon above */}
            <span>{title}</span>
        </div>
        <div className="contact-content">
            {content}
        </div>
    </div>
  )
}

export default ContactSection