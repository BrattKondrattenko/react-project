import { useState, useEffect } from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";

const LIMIT_LIST = 6;

const getRateColor = (rate: number) => {
    switch (parseInt(rate.toString())) {
        case 4:
            return "green";
        case 3:
            return "gold";
        case 2:
            return "volcano";
        case 1:
            return "red";
        case 0:
            return "#151719";
        default:
            throw new Error("unexpected rate");
    }
};

interface DataType {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    brand: string;
    category: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Name",
        dataIndex: "title",
        key: "title",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: (text) => <p>{text}$</p>,
    },
    {
        title: "Rating",
        dataIndex: "rating",
        key: "rating",
        render: (text) => <Tag color={getRateColor(text)}>{text}</Tag>,
    },
    {
        title: "Brand",
        dataIndex: "brand",
        key: "brand",
    },
    {
        title: "Category",
        key: "category",
        dataIndex: "category",
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <a>Buy {record.title}</a>
            </Space>
        ),
    },
];

const App = () => {
    const [page, setPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [dataSource, setDataSource] = useState<DataType[]>([]);

    const getData = async (page: number, limit: number) => {
        try {
            const response = await axios.get(
                `https://dummyjson.com/products?limit=${limit}&skip=${
                    (page - 1) * limit
                }&select=title,description,price,rating,brand,category`
            );
            setDataSource(response.data.products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const setTotalCount = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                setTotalItems(response.data.total);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        setTotalCount();
    }, []);

    useEffect(() => {
        getData(page, LIMIT_LIST);
    }, [page]);

    return (
        <>
            <Table columns={columns} dataSource={dataSource} pagination={false} />
            <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Назад
            </Button>
            <Button
                onClick={() => setPage(page + 1)}
                disabled={page * LIMIT_LIST >= totalItems}
            >
                Вперед
            </Button>
            <p>Текущая страница: {page}</p>
        </>
    );
};

export default App;
