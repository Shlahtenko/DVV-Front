import styles from './text.module.scss';

const Text = ({ bpref, text }) => {
  return (
    <p className={styles.text}>
      <span>{bpref} </span>
      {text}
    </p>
  );
};

export default Text;
