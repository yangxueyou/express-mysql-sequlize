import { useState, useEffect } from 'react';
import styles from './index.less';
import { Table, message, Space } from 'antd';
import request from 'umi-request';
import { getList } from '@/request/api';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface Res<T = any> {
  data: T;
  success: boolean;
  message: string;
}

export default function IndexPage() {
  const [datasource, setDatasource] = useState([]);
  // const { data, error, loading } = useRequest(() => {
  //   return services.getUserList('list/2/1');
  // });

  useEffect(() => {
    getList()
      .then((res: Res) => {
        if (res.success) {
          setDatasource(res.data);
        }
      })
      .catch((error) => {
        message.error(error.data);
      });
  }, []);

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '截止日期',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    },
  ];

  return (
    <div>
      <h1 className={styles.title}>首页</h1>
      <Table columns={columns} dataSource={datasource} rowKey="id" />
    </div>
  );
}
