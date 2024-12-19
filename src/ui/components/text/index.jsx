import styles from './text.module.scss';

const Text = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};

export default Text;
