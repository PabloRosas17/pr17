export const handleResumeClick = () => {
  const resumeUrl =
    'https://www.dropbox.com/scl/fi/evtynz1mn105sxd8yfo39/pablorosas_rs_fw.pdf?rlkey=o4ygcfgvn5dtm7pl6awnsv06c&st=76islsw0&dl=0';
  window.open(resumeUrl, '_blank');
};

export const handleEmailClick = () => {
  const email = 'pablo.rosas.0170@gmail.com';
  const subject = 'Subject Text';
  const body = 'Body Text';
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
};

export const handleGitHubClick = () => {
  const githubUrl = 'https://github.com/PabloRosas17';
  window.open(githubUrl, '_blank');
};

export const handleLinkedInClick = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/PabloRosas17';
  window.open(linkedinUrl, '_blank');
};
