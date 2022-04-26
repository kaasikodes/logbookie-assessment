import ContactSection from "../components/ContactSection"
import "../styles/contact.css"
import {GoLocation} from "react-icons/go"
import {GrMail} from "react-icons/gr"

const Contact = () => {
  return (
    <div className="contact-container">
        <h4 className="text-center">Contact</h4>
        <div className="contact-sections">
            <ContactSection content={<p>
                DHO s.r.o <br/>
                Borivojova 878/35 <br/>
                130 00 Praha 3
            </p>} title = "Headquaters" icon = {<GoLocation/>}/>
            <ContactSection content = "info@expanzo.com" title={"Email"} icon = {<GrMail/>}/>
        </div>
    </div>
  )
}

export default Contact