
import mediterranean from '../assets/img/mediterranean.jpg'
import katagonicdiet from '../assets/img/katagonicdiet.jpg'
import plantbaseddiet  from '../assets/img/plantbaseddiet.jpg'
import paleodiet  from '../assets/img/paleodiet .jpg'
import intermmitentfasting  from '../assets/img/intermmitentfasting.jpg'
import Dashdiet  from '../assets/img/Dashdiet.jpg'
import protien from '../assets/icons/protien.png'
import fats from '../assets/icons/fats.png'
import React from 'react'

const Nutrition = () => {
  return (
  <>
   <div className='bg-[#44B75E] text-white text-center py-15'>
   <h2 className='text-4xl font-[Roboto] font-bold'>Nutrition & Diet Guide</h2>
   <p className='font-[Roboto]'>Discover the Science of nutrition, explore different diet types. and learn how to create<br/> blanced meal plans for optical health</p>
   <button className='bg-white rounded-full text-[#44B75E] px-4 py-2 mt-4 font-[Roboto] cursor-pointer'>Explore Diet</button>
   </div>

   <Popular/>
   <Understand/>
  </>
  )
}

// popular section
const Popular=() =>{
  return(
    <>
   <div className='text-center mt-10'>
   <h3 className=' text-2xl font-[Roboto]  font-bold'>Popular Diet Types</h3>
   <p className=''>Explore different dietary approaches and find what works best for your body lifesyle</p>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-3 my-15 ">
    {/* img 1 */}
<div className="img1">
<img className='w-full rounded-lg' src={mediterranean} alt="" />
   <h3 className='text-xl font-bold my-4'>Mediterranean Diet</h3>
   <p>Emphasizes plant foods, olive oil, fish and <br/> moderate wine consuption.Associated with <br/>heart health and longevity</p>
  
    <div className='flex gap-3 font-normal my-6'>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Heart-Health</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Anti-inflammontor</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Sustainable</a>
  </div>
</div>
{/* img 2 */}
<div className="img2">
<img className='w-full rounded-lg' src={katagonicdiet} alt="" />
   <h3 className='text-xl font-bold my-4'>Ketogenic Diet</h3>
   <p>Very low-carb, hight-fat diet that shifts the <br/> body  into ketosis. popular for weigh  loss and <br/> metabolic health</p>
   <div className='flex gap-3 font-semi-bold my-6'>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Weigh lose</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Blood suger control</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>High Fat</a>
  </div>
</div>
{/* img 3 */}

<div className="img3">
<img className='w-full rounded-lg' src={plantbaseddiet} alt="" />
   <h3 className='text-xl font-bold my-4'>Plant-Based Diet</h3>
   <p>Focuses on foods derived from p;amts with <br/> limited or no animal products. supports<br/> environmental sustainability</p>
   <div className='flex gap-4 font-semi-bold my-6'>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Eco-Friendly</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>High Fiber</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Netrien-Rich</a>
  </div>
</div>

{/* img4 */}

<div className="img4">
<img className='w-full rounded-lg mt-20' src={paleodiet} alt="" />
   <h3 className='text-xl font-bold my-4'>Paleo Diet</h3>
   <p>Based on foods presumed  to available  to <br/> paleolithic human. Excludes  grains, dairy <br/> and   processed foods</p>
   <div className='flex gap-4 font-semi-bold my-6'>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Whole foods</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Grain-free</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Low suger</a>
  </div>
</div>

{/* img5 */}
<div className="img5">
<img className='w-full rounded-lg mt-20' src={intermmitentfasting} alt="" />
   <h3 className='text-xl font-bold my-4'>Intermmitent Fasting</h3>
   <p>Cycling between pariods of eating and fasting <br/> Various methods  include  16/8,5:2 and <br/> alternate -day fasting.</p>
   <div className='flex gap-4 font-semi-bold my-6'>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Whole foods</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Grain-free</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Low suger</a>
  </div>
</div>

{/* img6 */}

<div className="img6">
<img className='w-full rounded-lg mt-20' src={Dashdiet} alt="" />
   <h3 className='text-xl font-bold my-4'>DASH Diet</h3>
   <p>Design to prevent and lower high  blood <br/> pressute.Emphasizes fruits,  vegetables, whole <br/> grains, and low-fat dairy.</p>
   <div className='flex gap-4 font-semi-bold my-6'>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Whole foods</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Grain-free</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Low suger</a>
  </div>
</div>

   </div>

</>
  )
};

//End popular section


const Understand=()=>{
  return(
    <>
   <div className='text-center'>
   <h2 className='text-2xl font-[Roboto]  font-bold' >Understanding Mocronutrients</h2>
   <p>The tree mocronutrients-protein, corbohydrates, and fats each-play vitel roles in your Health</p>
   </div>

   {/* cards */}
 <div className="grid grid-cols1 md:grid-cols-3 gap-7 my-14 mx-6">
  {/* car1 */}
 <div className="car1 shadow-lg bg-gray-100 pl-10 my-6 py-4  w-full">
  <img className='w-10' src={protien} alt="" />
 <h4 className='font-bold my-2'>proteins</h4>
  <p>Essential for building and reparing tissues, immune<br/> function ,enzyme production. </p>
  <h4 className='my-5 text-xl text-[#44B75E]'>Good Sources</h4>
 

  <p><span className='text-[#44B75E] pr-2'>•</span>Lean meats and poultry</p>
  <p><span className='text-[#44B75E] pr-2'>•</span>Fish and seafood</p>
  <p><span className='text-[#44B75E] pr-2'>•</span>Eggs and dairy</p>
  <p><span className='text-[#44B75E] pr-2'>•</span>Legumes and tofu</p>
  <p><span className='text-[#44B75E] pr-2'>•</span>Nuts and seeds</p>
 </div>
 {/* car2 */}

 <div className="car1 shadow-lg bg-gray-100 pl-10 my-6 py-4  w-full">
  <img className='w-12' src={fats} alt="" />
 <h4 className='font-bold my-2'>Carbohydrates</h4>
  <p>Primary enargy source for the body , especially the brain <br/> and during high-intensity exercise </p>
  <h4 className='my-5 text-xl text-[#44B75E]'>Good Sources</h4>
 

  <p><span className='text-[#44B75E] pr-2'>•</span>Whole grains </p>
  <p><span className='text-[#44B75E] pr-2'>•</span>Fruits and vegetables</p>
  <p><span className='text-[#44B75E] pr-2'>•</span>Legumes and beans</p>
  <p><span className='text-[#44B75E] pr-2'>•</span>Sweet Potatoes</p>
  <p><span className='text-[#44B75E] pr-2'>•</span>Quinoa and oats</p>
 </div>

 {/* card3 */}

 <div className="car1 shadow-lg bg-gray-100 pl-10 my-6 py-4  w-full">
  <img className='w-12' src={fats} alt="" />
 <h4 className='font-bold my-2'>Fats</h4>
  <p>Essential for building and reparing tissues, immune<br/> function ,enzyme production. </p>
  <h4 className='my-5 text-xl text-[#44B75E]'>Good Sources</h4>
 

  <p><span className='text-[#44B75E] pr-2'>•</span>Avacados</p>
  <p><span className='text-[#44B75E] pr-2'>•</span>olive oil and olives</p>
  <p><span className='text-[#44B75E] pr-2'>•</span>Nuts and seeds</p>
  <p><span className='text-[#44B75E] pr-2'>•</span>fatty fish (salmon)</p>
  <p><span className='text-[#44B75E] pr-2'>•</span>Eggs and full-fat yogurt</p>
 </div>

 </div>
    </>
  )
}

// End cards

export default Nutrition;