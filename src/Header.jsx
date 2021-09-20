import React from "react"


function SmallHeader(){
    const t = 'T1'
var d = new Date();
const month = d.getMonth() + 1;

const style = {
  color:'',
  fontSize: '20px'
}

if (month === 9 || month === 10 | month === 11)
{
  style.color = 'pink'
}
if (month === 12 || month === 1 | month === 2)
{
  style.color = 'green'
}
if (month === 3 || month === 14 | month === 5)
{
  style.color = 'orange'
}
if (month === 6 || month === 7 | month === 8)
{
  style.color = 'blue'
}
    return (<div>
        <h1 className='header'>SIT313</h1>
        <h3 style={style}>{t} {d.getFullYear() + 1}</h3>
    </div>
    
    )
  }

export default SmallHeader