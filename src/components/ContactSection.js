import React from 'react'

const ContactSection = ({title,icon, content}) => {
  return (
    <div className="contact-section">
        <div className="contact-title">
            {/* icon above */}
            {icon}
            <span className='ml-10'>{title}</span>
        </div>
        <div className="contact-content">
            {content}
        </div>
    </div>
  )
}

export default ContactSection