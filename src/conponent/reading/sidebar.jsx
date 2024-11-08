import styles from "./sidebar.module.css";
import { IoHome } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";
import { IoMdStopwatch } from "react-icons/io";
import { FaCalendarPlus } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaCalendarXmark } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { SiProtoncalendar } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className={`${styles.sidebarContainer} shadow`}>
      <ul className={styles.sideBarList}>
        <li>
          <a href="#">
            <IoHome className={styles.icon} />
            Home
          </a>
        </li>
        <li>
          <a href="#">
            <CgSandClock className={styles.icon} />
            Timer
          </a>
        </li>
        <li>
          <a href="#">
            <IoMdStopwatch className={styles.icon} />
            Stopwatch
          </a>
        </li>
        <li>
          <a href="#">
            <FaCalendarPlus className={styles.icon} />
            Add Todo
          </a>
        </li>
        <li>
          <a href="#">
            <FaCalendarCheck className={styles.icon} />
            Completed
          </a>
        </li>
        <li>
          <a href="#">
            <FaCalendarXmark className={styles.icon} />
            Incompleted
          </a>
        </li>
        <li>
          <a href="#">
            <BiSolidReport className={styles.icon} />
            Daily Report
          </a>
        </li>
        <li>
          <a href="#">
            <FaCalendarAlt className={styles.icon} />
            Weakly Report
          </a>
        </li>
        <li>
          <a href="#">
            <SiProtoncalendar className={styles.icon} />
            Monthly Report
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
