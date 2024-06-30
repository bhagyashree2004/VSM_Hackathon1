function Card({phoneName = "Phone", phoneDeatails="6GB" , btnTxt="View Details",photoURL ="Not Available", price="Not Available"}){
    console.log(phoneName);
     return(
    <>
      
         {/* <div className="relative h-[400px] w-[300px] rounded-md mb-7 mt-7 ">
          <div className="image h-{70%}">
            <img
            src={photoURL} alt="Image"
            className="z-0 h-full w-full rounded-md object-fit p-1 pb-10"
            />
          </div>
       
       <div className="absolute inset-0 bg-gradient-to-t  bg-transparent"></div>
       <div className="absolute bottom-4 left-4 text-left bg-transparent h-{30%}">
         <h1 className="text-lg font-bold text-black">{phoneName}</h1>
         <p className="mt-2 text-sm text-gray-900">
           {phoneDeatails }
         </p>
         <h2 className="text-lg font-semibold text-black">₹ {price}</h2>
         <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
           {btnTxt} &rarr;
         </button>
       </div>
       </div> */}

       <div className="main h-[550px] w-[300px] rounded-md mb-7 mt-7 border-y-slate-400 border-x-slate-400 ">
       <div className="image h-[400px] w-[280px]">
            <img
            src={photoURL} alt="Image"
            className="z-0 h-full w-full rounded-md object-fit p-1 pb-10"
            />
          </div>
          <div className="textBox h-[150px] bg-white">
          <h1 className="text-lg font-bold text-black">{phoneName}</h1>
         <p className="mt-2 text-sm text-gray-900">
           {phoneDeatails }
         </p>
         <h2 className="text-lg font-semibold text-black">₹ {price}</h2>
         <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
           {btnTxt} &rarr;
         </button>
          </div>
       </div>
     
    </>
     )
 }
 
 export default Card