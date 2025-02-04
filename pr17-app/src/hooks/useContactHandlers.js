const useContactHandlers = () => {
    const handleEmailClick = () => {
      window.location.href = 'mailto:pablo.rosas.0170@gmail.com';
    };
  
    const handleGitHubClick = () => {
      window.open('https://github.com/PabloRosas17', '_blank');
    };
  
    const handleLinkedInClick = () => {
      window.open('https://www.linkedin.com/in/PabloRosas17', '_blank');
    };
  
    return { handleEmailClick, handleGitHubClick, handleLinkedInClick };
  };
  
  export default useContactHandlers;
  