import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { getAllDatas } from '../api/request';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Brith year',
    dataIndex: 'birthYear',
  
  },
  {
    title: 'Eye color',
    dataIndex: 'eyeColor',
  },
  {
    title: 'skin color',
    dataIndex: 'skinColor',
  },
  {
    title: 'hair color',
    dataIndex: 'hairColor',
  },
  {
    title: 'gender',
    dataIndex: 'gender',
  },
];




const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const Tablee = () => {
    const [data,setData]=useState([])
   useEffect(()=>{
      getAllDatas().then(res=>{
        console.log(res.results)
        setData(res.results)
      })
   },[])
    return(
        <Table columns={columns} dataSource={data} onChange={onChange} />
    )
};
export default Tablee;