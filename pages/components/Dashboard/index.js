import Card from "../CardShops" 
import classes from "./index.module.css";

import { useState, useEffect } from "react"

const index = () => {
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/restroData')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
      }, [data])

    
    if(data){
        return <div className={classes.gridContainer}>
            {data.map((item, index) => {
                return  <div className={classes.gridItem} key={index}>
                    <Card className="col" name={item.name} location={item.location} />
                </div>
            })}
      </div>
    }else{
        return <h1>Couldn't fetch data</h1>
    }
}

export default index;