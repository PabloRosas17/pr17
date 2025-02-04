import ContactBoxPosition from './ContactBoxPosition';
import ContactTabs from './ContactTabs';
import { handleEmailClick, handleGitHubClick, handleLinkedInClick } from '../../../utils/contactHandlers';

const ContactSection = ({ value, handleChange }) => (
  <ContactBoxPosition>
    <ContactTabs
      value={value}
      handleChange={handleChange}
      handleEmailClick={handleEmailClick}
      handleGitHubClick={handleGitHubClick}
      handleLinkedInClick={handleLinkedInClick}
    />
  </ContactBoxPosition>
);

export default ContactSection;
