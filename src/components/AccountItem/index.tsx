import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import imgTest from '../../assets/imgs/ny-img6.jpg';

const AccountItem = () => {
  return (
    <div className={styles.wrapper}>
      <img src={imgTest} alt="hoa" className={styles.avatar} />
      <div className={styles.infor}>
        <h4 className={styles.name}>
          XuanHoa
          <FontAwesomeIcon
            icon={faCheckCircle as IconProp}
            className={styles.check}
          />
        </h4>
        <p className={styles.username}>nguyenxuanhoa</p>
      </div>
    </div>
  );
};

export default AccountItem;
