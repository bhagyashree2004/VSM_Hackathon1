import React from 'react'
import Searchbar from './Searchbar'
import Card from './Card';
import { useState } from 'react';

const Home = () => {
  
  const [realPrice, setrealPrice] = useState("Not Available")
  // maybe we have to pass price using api as it may change
  

  const handleSearch = (term) => {
    console.log('Searching for:', term);
    // API call to get prices from different e-commerce platforms)
  };

  return (
    <div className='overflow-x-hidden'>
      <div className="searchbar pt-5 w-{40%} m-auto flex flex-col items-center min-w-{20px}">
        <Searchbar onSearch={handleSearch}/> 
      </div>
      <div className="cardContainer flex flex-wrap max-w-full m-20 gap-10">
      <Card
      phoneName="Samsung Galaxy S24 Ultra 5G AI Smartphone" 
      phoneDeatails='Titanium Gray, 12GB, 256GB Storage)' photoURL='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSDOGlVLMz2vfMqKtb4Nhnt6l6VfRX5z5chvk0E1EEOoYSoM5WGC9oyKE5JIKgVAO2Ecfd3TAfRAFrjPeW5z_zGQ_g4CCfsIY8B_yykHwlqJ53Rd_Gr9McsjeBpgdGCRraA-QKDi7o5ybQ&usqp=CAc' 
      price="1,29,999" />

      <Card 
      phoneName="realme NARZO 70 5G" 
      phoneDeatails='Forest Green,6GB RAM, 128GB Storage | Dimensity 7050 5G Chipset | 120Hz AMOLED Display | 50MP Primary Camera | 45W Charger in The Box' 
      photoURL='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTswp3I7Wr1qL-ZAk3Ij0R6yr1hlOUoUVoa3VdTeVksmGmszLe4xqDesW3fmMcXIq7tm11KYA__tBF-p6xcfxIagIEcqd6_2RATOFrYWq-I2WRJUahy8J3dv0k4q_wUZAck1pgGXxvj9Q&usqp=CAc'
      price='15,999'/>

      <Card
      phoneName='OnePlus 12R'
      phoneDeatails='Iron Gray, 16GB RAM, 256GB Storage'
      photoURL='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTfbyiaZXA6fMyd3z60yI-HyTuegQGNg1dqt8X5J4Z01o8dN_fucGXT3oY05BfSB4WrUeiI10xO97JXlh6y6sxS_TLdSWmWEz0EEcMpA1JmpfO0iiMpKV3J7xD6iQfo6qVi_09kk7XYhA&usqp=CAc'
      price='45,999'
      />

      <Card
      phoneName='Motorola Edge 50 Pro 5G'
      phoneDeatails='125W Charger (Luxe Lavender, 256 GB) (12 GB RAM)'
      photoURL='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxNBCxNShVzp9xUeoy9WQdQFBPIbZYed9QfYhnJX2JHPbebnDfMVw5GhzWCAaY7oxk25V6zQ_mAYmnEIs9WbUUh1Y_K47-Wh1WT5ZZn4FZkyyZ_Awj7vXpxnYIfxsSBk2g3u7mVMoTbA&usqp=CAc'
      price='35,398'
      />

      <Card
      phoneName='V29 12GB+256GB Majestic Red'
      phoneDeatails='Ultra Slim 3D Curved Display | Night Portrait with Smart Aura Light | 50MP Eye AF Group Selfie Camera| Wedding Style Portrait'
      photoURL='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXc_Nrea2-omeQBjaI7VDZUV3J9rJjYs01L7pKZrHJLovhkQAEWIenEVhogGPlaGZWLbSwI30wlDeZnm-zHCSsPIPXk-QGw0me0FZ6myelBSQ4HY0chDLg9zJahE7GQJTDKERv6dPbXg&usqp=CAc'
      price='36,999.00'
      />
      <Card
      phoneName='Redmi Note 13 5G'
      phoneDeatails='12 GB + 256 GB, Arctic White'
      photoURL='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMSyrRp7uoeVWxOcqbc2F1oz1RTEen0wafv2r-NDJnkSaeAdMri5FfVQscv9eOvOfgIOZMMYIcyM3_HTGsn4gvGGfuzlRjeiSsbOEC1WjJeu5rVf9w33nEUJtS0zDTHv2ddNUgWg&usqp=CAc'
      price='20,999'
      />
      <Card
      phoneName='Samsung Galaxy M34 5G '
      phoneDeatails='(Waterfall Blue,6GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|12GB RAM with RAM+|Android 13|Without Charger'
      photoURL='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTynEcVhLWsuk8JTswYWFReqAgZwcRQf1hSzK8rocq6wPdszNQMFkQ7_lw_zlvqOR_mqHehKoj9d3ZUkLeS80iQIqgd4OOQpXQg7ORDohfsgA8ZGzbe-Krangf5oHmETkOohA-HK0e1u28&usqp=CAc'
      price='12,999'
      />
      <Card
      phoneName='Galaxy F55 5G (8GB Memory)'
      phoneDeatails='No Cost EMI starts from ₹ 3096.70/ month.
         Classy Vegan Leather Design
         Snapdragon 7 Gen 1
         120Hz sAMOLED+ Display
         4 gen of Android Updates | 5 years of Security Upgrades'
      photoURL='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-FczHEgwQszhPs4nuDxUH2lfMb5qGE0DlrtG6yKYXV17bJABuqWSpmcS4hF273CVl6SVv4YFTfcKGaf0tRukp0ZPxAdiPDMCgEyJASUD4z-RKMa6cOZRY12iK24umYaQ_rDm3rqH9sMY&usqp=CAc'
      price='26999.00'
      />
 
      </div>
        
    </div>
  )
}

export default Home