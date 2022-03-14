import React, { useState, useEffect } from 'react';
import styles from './index.less';
import TablePage from './table';
import { Button } from 'antd';
import AddModal from './addmodal';

export default function IndexPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [num, setNum] = useState(1);

  useEffect(() => {
    // 每次 render 完一定执行
    console.log('re-rendered');
  }, [num]);

  return (
    <>
      <div>
        <h1 className={styles.title}>首页</h1>
        <Button
          className={styles.IndexPageButton}
          type="primary"
          onClick={() => {
            setIsModalVisible(true);
            setNum(num);
          }}
        >
          新增
        </Button>
        <TablePage />
      </div>
      <AddModal
        isModalVisible={isModalVisible}
        handleChange={() => {
          setIsModalVisible(!isModalVisible);
        }}
        onClick={() => {setNum(num);}}
      />
    </>
  );
}
