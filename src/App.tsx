import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    gender: string;
    email: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        gender: 'male',
        email: 'john@gmail.com',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        gender: 'male',
        email: 'Green@gmail.com',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Anna Perry',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        gender: 'female',
        email: 'Anna@gmail.com',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'New Human Being Alex',
        age: 32,
        address: 'Moscow city',
        gender: 'male',
        email: 'moscow@hmail.com',
        tags: ['cool', 'business'],
    },
    {
        key: '5',
        name: 'New Human Being Danilo',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        gender: 'female',
        email: 'Anna@gmail.com',
        tags: ['man', 'footbal'],
    },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;