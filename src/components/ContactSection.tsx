import React from "react";

interface IProps {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

const ContactSection = ({ title, icon, content }: IProps) => {
  return (
    <div className="contact-section">
      <div className="contact-title">
        {/* icon above */}
        {icon}
        <span className="ml-10">{title}</span>
      </div>
      <div className="contact-content">{content}</div>
    </div>
  );
};

export default ContactSection;
