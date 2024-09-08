import style from './style.module.css';

interface IProps {
  status: null | boolean | '+';
  id: string;
  handleClick: (id: string) => void
}

const Squer: React.FC<IProps> = ({status, id, handleClick}) => {

  let classes = `${style.squer}`

  if(status === false) {
    classes = `${style.squer} ${style.ship}`
  }

  return (
    <div onClick={() => handleClick(id)} className={classes}>
      <span className={style.text}>{status}</span>
    </div>
  )
}

export default Squer;