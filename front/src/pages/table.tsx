import { useState, useEffect } from 'react';
import { Table, message } from 'antd';
import { getList } from '@/request/api';

interface Res<T = any> {
  data: T;
  success: boolean;
  message: string;
}

export default function TablePage() {
  const [datasource, setDatasource] = useState([]);

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

  return <Table columns={columns} dataSource={datasource} rowKey="id" />;
}
