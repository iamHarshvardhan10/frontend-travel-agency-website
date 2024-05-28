import partner1 from '../assets/asset 2.png'
import partner2 from '../assets/asset 3.png'
import partner3 from '../assets/asset 4.png'
import partner4 from '../assets/asset 5.png'
import partner5 from '../assets/asset 6.png'

const Partners = () => {
  return (
    <div className="mx-[171px] my-[80px]">
        <h1 className="text-center text-[32px] font-handwriting">our travelling</h1>
        <h1 className="text-center text-[75px] ">Partners</h1>
        <div className='flex items-center justify-between mt-[40px] '>
        <img src={partner1} alt="" className='px-[60px] py-[28px]'/>
        <img src={partner2} alt="" className='px-[60px] py-[28px]'/>
        <img src={partner3} alt="" className='px-[60px] py-[28px]'/>
        <img src={partner4} alt="" className='px-[60px] py-[28px]'/>
        <img src={partner5} alt="" className='px-[60px] py-[28px]'/>
        </div>
    </div>
  )
}

export default Partners