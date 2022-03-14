import React, { useState } from 'react';
import { Modal, Drawer } from 'antd';

const AddModal = (props: any) => {
  const { isModalVisible, handleChange,onClick } = props;
  console.log('----------0000');
  
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={handleChange}
      visible={isModalVisible}
    >
      <p onClick={() => onClick()}>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default AddModal;
