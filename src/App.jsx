import './App.css'
import Images from './assets/5ab2dc82d7a5d7b15dd62d0404fba9895fe732eb (2).png';
import Image2 from './assets/c7a9c17ff5f13ed06e92ea76689db678efc1e866 (1).png';
import Image3 from './assets/cbc885145cd1828e8af60fde1083a57ec8b2f032.png';
import Image4 from './assets/5ab2dc82d7a5d7b15dd62d0404fba9895fe732eb (3).png'
function App() {


  return (
    <div>
      <header>
        <nav className='flex justify-between'>
          <div>
            <a className="font-Montserrat font-bold text-[54px] text-[#FB5014]" href="">
              jump<span className="text-[#17B4CC]">.</span>
            </a>
          </div>
          <div className='flex items-center gap-12 text-[24px]'>
            <a  className=' font-normal ' href="#home">Home</a>
            <a className=' font-normal ' href="#home">Man</a>
            <a className=' font-normal ' href="#home">Woman</a>
            <a className=' font-normal ' href="#home">Kids</a>
            <a  className=' font-normal ' href="#home">Sales</a>

          </div>


          <div className='flex items-center '>
            <div id='searchbar' className='w-[414px]  rounded-[2vw] h-[52px] ml-[187px] flex justify-between' >
              <input id='searchme' type="text" placeholder='Search here...' />
              <button id='btn'><img className='w-[30px] h-[30px]' src="https://www.pngfind.com/pngs/m/54-544757_icons-logos-emojis-search-icon-png-grey-transparent.png" alt="" /></button>
            </div>
          </div>


        </nav>

      </header>

      <div className='flex'>
        <div id='div1' className=''>
          <p className='text-[123px] font-bold'>Nike <span className="text-[#17B4CC]">Air</span> Max</p>
          <p className='text-[20px] font-normal '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          <br />
          <button id='button' className='bg-[#FB5014] w-[324px] h-[71px text-[32px] rounded-[30px]'>Shop now</button>

        </div>

        <div id='mainimg'>

          <img className='w-[775px] h-[583px]' src={Images} alt="Shpeimage" />
        </div>

        {/* images */}

        <div>

          {/* img2 */}
          <div id='img2'>
            <div>
              <img className='w-[108px] h-[108px]' src={Image2} alt={Image2} />

            </div>



          </div>
          {/* img2 */}

          {/* img3 */}

          <div id='img3'>
            <div>
              <img src={Image3} alt={Image2} />

            </div>



          </div>
          {/* img3 */}

          {/* img4 */}


          <div id='img4'>
            <div>
              <img className='w-[108px] h-[108px]' src={Image4} alt={Image2} />

            </div>



          </div>
          {/* img4 */}


        </div>
        {/* images */}



      </div>

    </div>

  )
}

export default App
