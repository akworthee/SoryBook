import React, { Component } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie} from 'recharts';
import mydata from "../../Seeder/kanbanBoard.json"

export default class Graph extends Component{
  

  render(){
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius,percent,index})=>{
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return(
        <text x={x} y={y} fill="white" textAnchor={x>cx?'start':'end'} dominantBaseLine="central">
        {res1[index].category}
        </text>
      );
    };
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const arr = mydata.list;
    const res1 = arr.reduce((res,i)=>{
      let obj={}
      let index = res.findIndex((t)=>t.category === i.category)
      if(res&& index>=0){
        res[index].value++;
      }
      else{
        obj["category"] = i.category;
        obj["value"] = 1;
      }

      Object.keys(obj).length!=0&&res.push(obj);
      return res;
    },[])

    return(
      <>
     
        <PieChart width={600} height={400} margin={{top: 5, right: 5, bottom:5, left:5}}>
        <Pie activeIndex={100} data={res1} dataKey="value" cx="50%" cy="50%" innerRadius={10} outerRadius={150} labelLine={false} label={renderCustomizedLabel} >
        {res1.map((entry,index)=>(
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        </Pie>
        </PieChart>
      </>
    )
  }
}

