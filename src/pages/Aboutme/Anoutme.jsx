import styles from './styles.module.css';
const { container, header, content, contactSection, contactBox, title, description, buttonGroup, emailBtn } = styles;

const Anoutme = () => {
    const handleEmailClick = () => {
        const email = "mahmedkamel388@gmail.com";
        const subject = encodeURIComponent("Let's Connect");
        const body = encodeURIComponent("Hi! I would like to reach out to you.");

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    };
    
    return (
        <div className={container} >
          <div className={header}>
            <h1 className={title}>عني</h1>
            <p className={description}>يمكن التواصل مع من خلال البريد الالكتروني</p>
          </div>
          
          <div className={content}>
            <div className={contactSection}>
              <div className={contactBox}>
                <h2>تواصل معي</h2>
                <p>لك كل الحرية للتواصل معي من هنا</p>
                
                <div className={buttonGroup}>
                  <button className={emailBtn} onClick={handleEmailClick}>
                    <span>📧</span> ارسل من هنا
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Anoutme