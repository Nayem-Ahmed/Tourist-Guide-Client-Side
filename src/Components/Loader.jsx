import { BeatLoader} from 'react-spinners'

const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <BeatLoader size={60} color='#fbff12' />
    </div>
  )
}

export default Loader;
