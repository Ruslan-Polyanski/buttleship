import { useState } from "react";
import Squer from "../squer/Squer"
import style from './style.module.css'
import { getStartArea } from '../../utils/getStartArea'
import { martAroundShip } from '../../utils/markAroundShip'

const Area: React.FC<any> = () => {
  const [squares, setSquares] = useState<(boolean | null | '+')[][]>(getStartArea())

  const handleClick = (id: string) => {
    const [i, j] = id.split('').map(item => +item)

    if(squares[i][j] === true) {
      setSquares(squares => {
        martAroundShip(squares, i, j)
        return [...squares];
      })

      return;
    }

    if(squares[i][j] === null) {
      setSquares(squares => {
        squares[i][j] = '+';
        return [...squares];
      })

      return;
    }

  }

  return (
    <div className={style.area}>
      {squares.map((items, indexItems)=> <div key={indexItems} className={style.squers}>{
          items.map((item, indexItem)=> <Squer key={'' + indexItems + indexItem} id={'' + indexItems + indexItem} status={item} handleClick={handleClick} />)
        }</div>)}
    </div>
  )
}

export default Area;

