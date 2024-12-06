import Link from 'next/link';
import Image from 'next/image';

export default function Navbar(){
    return (
        <>
            {/* Container */}
            <div className="w-[1440px] h-[5902px] bg-[#FFFFFF]">

                {/* Top-Header */}
                <header className="w-[1440px] h-[48px] bg-[#000000] flex justify-center ">
                    <div className="w-[859px] h-[48px] flex  justify-center items-center ml-20 ">

                    <p className="w-[650px] h-[24px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  <span>ShopNow</span></p>
                     
                        </div>                      
                        
                        <div className="w-[78px] h-[24px] ml-44 mt-3 ">
                        <p className="">English</p>
                        </div>
                    
                </header>
                

                {/* Header */}

                <header className="w-[1170px] h-[38px] flex mx-36 my-10">
                    <div className="w-[675px] h-[24px] flex gap-[190px]">
                        <h1 className="w-[118px] h-[24px] text-black">Exclisive</h1>
                    
                        <div className="w-[375px] h-[24px] ">
                         <ul className='flex gap-12 text-black'>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/contact'}>Contact</Link></li>
                            <li><Link href={'/about'}>About</Link></li>
                            <li><Link href={'/sign up'}>Sign Up</Link></li>
                         </ul>

                        </div>
                        

                  </div>
                  
                    <div className='w-[347px] h-[38px] ml-20 flex text-[Secondary] bg-[#F5F5F5] rounded-md'>

                        <div className='w-[243px] h-[38px] flex gap-10 ml-8 '>
                            <input type="text" placeholder='What are you looking for?' className='w-[211px] h-[24px]  text-[Secondary] flex gap-7 bg-[#F5F5F5] mt-2 ml-2' />
                            <Image
                                src={'/Vector/Search.png'}
                                alt='Search Icon'
                                width={15}
                                height={16}
                            
                            
                            />                         
                        </div>

                        <div className='flex w-[80px] h-[32px] ml-28 gap-7'>

                          <Image
                                src={'/Vector/Wishlist.png'}
                                alt='Search Icon'
                                width={28}
                                height={16}
                        
                            
                        />            
                          <Image
                                src={'/Vector/Cart1.png'}
                                alt='Search Icon'
                                width={28}
                                height={16}
                                
                                
                                />            
                        </div>
                        
                  </div>
                 
                </header>
                

                
                {/* Horizontal Line  */}
                <div className='w-[1440px] h-[2px] bg-[#000000]'>    
                </div>
                
            

                <div className='w-[1440px] h-[270px]  flex mt-10'>
                {/* Womens Fashion */}
                <div className='w-[217px] h-[344px] text-black ml-24 '>
                    <div className='w-[217px] h-[24px] '>
                        <p className='w-[142px] h-[24px] '>Woman’s Fashion</p>
                    </div>

                    <div className='w-[24px] h-[24px] '>
                        {/* Vector */}

                    </div>
                    
                    {/* Mens Fashion */}
                    <div className='w-[217px] h-[24px] '>
                        <p className='w-[112px] h-[24px]'>Men’s Fashion</p>
                        
                    </div>

                    <div className='w-[24px] h-[24px]'>
                        {/* Vector */}

                    </div>

                    <div>
                        <p className='w-[87px] h-[24px]'>Electronics</p>
                        <p className='w-[132px] h-[24px]'>Home & Lifestyle</p>
                        <p className='w-[73px] h-[24px]'>Medicine</p>
                        <p className='w-[137px] h-[24px]'>Sports & Outdoor</p>
                        <p className='w-[109px] h-[24px]'>Bayb's & Toys</p>
                        <p className='w-[131px] h-[24px]'>Groceries & pets</p>
                        <p className='w-[128px] h-[24px]'>Health & Beauty</p>
                        
                    </div>

                </div>


                {/* Vertical Line */}
                {/* <div className='w-[384px] h-1 bg-gre flex columns-1'>

                </div> */}

                    {/* iPhone Image */}
                    

                    <div className='w-[892px] h-[344px] bg-[#000000] '>
                        <div className='w-[190px] h-[49px]  flex mt-16 ml-14'>
                            <Image  

                                src={'/Vector/iphone.png'}
                                alt='iphone icon'
                                width={40}
                                height={49}
            
                            />

                            <p className='w-[126px] h-[20px] mt-4 ml-6 text-[16px] font-medium'>iPhone 14 Series</p>

                        </div>

                        
                        <p className='w-[294px] h-[120px] text-5xl ml-16 mt-5 '>Up To 10% off Voucher</p>
                        
                        <div className='w-[113px] h-[28px] ml-[70px] flex'>
                            <div className='w-[81px] h-[28px] '>
                              <p className='w-[81px] h-[24px] font-medium text-base'>Shop Now</p>  

                            </div>

                            <div className='w-6 h-6 mt-1'>
                                <Image
                                
                                    src={'/vector/icons arrow-right.png' }
                                    alt='arrow-right'
                                    width={16.5}
                                    height={14}
                                
                                
                                
                                />
                            </div>

                        
                        </div>


                        {/* iPhone Image */}
                        

                  
                
                    </div>
                    <div className='w-[600px] h-[370px] '>
                            <Image
                                
                                src={'/vector/hero_endframe__cvklg0xk3w6e_large 2.png' }
                                alt='arrow-right'
                                width={496}
                                height={352}
                                
                                
                                
                                
                                />


                    
                    </div>
                    

                </div>
               


        </div>
        
        
        
        </>
    )

    
    
}