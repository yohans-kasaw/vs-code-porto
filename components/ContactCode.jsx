import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'yohanskasaw.in',
    href: 'https://yohanskasaw.in',
  },
  {
    social: 'email',
    link: 'yohanshailukasaw@gmail.com',
    href: 'mailto:yohanshailukasaw@gmail.com',
  },
  {
    social: 'github',
    link: 'YohansHailu',
    href: 'https://github.com/YohansHailu',
  },
  {
    social: 'linkedin',
    link: 'yohans-hailu',
    href: 'https://www.linkedin.com/in/yohans-hailu/',
  },
  {
    social: 'upwork',
    link: 'Yohans Hailu Kasaw',
    href: 'https://www.upwork.com/freelancers/~0119af423ae93e06ec?mp_source=share',
  },
  {
    social: 'telegram',
    link: 'yohans_kasaw',
    href: 'https://t.me/yohans_kasaw',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
