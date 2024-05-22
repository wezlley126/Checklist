import styles from "./Home.module.css";
import AddTask from "./addTask";
import ReadTasks from "./readTasks";
import { useState } from "react";

export const Home = () => {
  const [reload, setReload] = useState(0);

  const loading = () => {
    setReload(reload + 1);
  };

  return (
    <>
      <div className={styles.divPai}>
        <AddTask loading={loading} />
        <div className={styles.listContainer}>
          <ReadTasks reload={reload} loading={loading} />
        </div>
      </div>
    </>
  );
};
