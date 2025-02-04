import ContactBoxPosition from './ContactBoxPosition';
import ContactTabs from './ContactTabs';
import {
  handleResumeClick,
  handleEmailClick,
  handleGitHubClick,
  handleLinkedInClick,
} from '../../../hooks/useContactHandlers';

const ContactSection = ({ value, handleChange }) => (
  <ContactBoxPosition>
    <ContactTabs
      value={value}
      handleChange={handleChange}
      handleResumeClick={handleResumeClick}
      handleEmailClick={handleEmailClick}
      handleGitHubClick={handleGitHubClick}
      handleLinkedInClick={handleLinkedInClick}
    />
  </ContactBoxPosition>
);

export default ContactSection;
