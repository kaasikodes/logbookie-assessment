import ContactSection from "../components/ContactSection"
import "../styles/contact.css"

const Contact = () => {
  return (
    <div className="contact-container">
        <h4 className="text-center">Contact</h4>
        <div className="contact-sections">
            <ContactSection content={<p>
                DHO s.r.o <br/>
                Borivojova 878/35 <br/>
                130 00 Praha 3
            </p>} title = "Headquaters"/>
            <ContactSection content = "info@expanzo.com" title={"Email"}/>
        </div>
    </div>
  )
}

export default Contact