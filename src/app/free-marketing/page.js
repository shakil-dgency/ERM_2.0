import FreeMarketing from '@/components/pages/freeMarketing/FreeMarketing'
import React from 'react'

const cardData = {
    card_view_first:{
        service1: "Google Ads",
        service2: "Microsoft Ads",
        service3: "Facebook & Instagram Ads",
        service4: "Search Engine Optimization",
        service5: "LinkedIn Ads",
        service6: "Website Design & Development",
        service7: "Email Marketing",
        service8: "Creative Assets",
        service9: "Content Marketing",
    },
    card_view_second:{
        goal_1:"Get more bookings",
        goal_2:"Get more team-building events",
        goal_3:"Increase group size",
        goal_4:"Get more birthday parties",
        goal_5:"Lower cost per conversion",
        goal_6:"All of the above",
        goal_7:"Other",
    }
}

function page() {
  return (
    <div>
        <FreeMarketing cardData={cardData} />
    </div>
  )
}

export default page