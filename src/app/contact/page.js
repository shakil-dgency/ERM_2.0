import ContactUs from '@/components/pages/contact/ContactUs'
import React from 'react'
import qs from "qs";
import { getData } from '@/services/helper';
import { notFound } from 'next/navigation';

export const revalidate = 60;

async function page() {

    const query = qs.stringify(
      {
        populate: {
          
          lists : true,
        },
      },
      { encodeValuesOnly: true }
    );
  
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/contact?${query}`;
  
    const { data } = await getData(url, "contact page");
  
    if (!data) {
      return notFound();
    }
    

  return (
    <div>
        <ContactUs data={data} />
    </div>
  )
}

export default page