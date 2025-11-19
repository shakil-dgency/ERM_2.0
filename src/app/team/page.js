import Hero from '@/components/pages/about/Hero'
import TeamBody from '@/components/pages/team/TeamBody'
import React from 'react'
import qs from "qs";
import { getData } from '@/services/helper';

export const revalidate = 60;

async function page() {
        const query = qs.stringify(
            {
                populate: {
                    hero: { populate: ["background_image", "hero_text"] },
                    cards: {
                        populate: ["strengths","weaknesses","profile_image","experience"],
                    },
                },
            },
            { encodeValuesOnly: true }
        );
    
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/team?${query}`;
    
        const { data } = await getData(url, "team page");
        console.log(data);
  return (
    <div>
        <Hero data={data?.hero} />
        <TeamBody data={data?.cards} />
    </div>
  )
}

export default page