import React from 'react'



const About = () => {
  return (
  <div style={{position:'relative', height: 'calc(100dvh - 90px)', width:'100%', textAlign:'center'}}>
    <div>
      <h1>About BiteQuest</h1>
    </div>
    <div style={{marginLeft:'150px', marginRight:'150px'}}> 
      <p style={{fontSize:'25px', fontFamily:'Times New Roman, Times, Serif', fontWeight:'normal'}}>
        We at BiteQuest are missoned with helping the community, on and off campus, find good and affordable options to eat in the area. 
        Food is the one thing that you can spend a lot of time figuring out what to eat. From figuring out what you are in the mood for, to
        figuring out whats in the area, to pricing of these food spots. You often spend more time looking then eating. 
      </p>
      <p style={{fontSize:'25px', fontFamily:'Times New Roman, Times, Serif', fontWeight:'normal', marginTop:'50px'}}>
        At BiteQuest we want to make that process as efficeint as possible. We are a team of Comp Sci students who understand the plight of finding 
        something to eat. You are sometimes so busy that looking for food is the last thing you want to spend your time on. With recommendations 
        and a search bar on the home page to the random food generator and food roulette, we created a space not just for students but
        also for faculty, staff, and even the community around Brooklyn College to make finding what to eat simple and fun.
      </p>
    </div>
    <div>
    </div>
    <div style={{position:'absolute', bottom:0}}> 
     <p>Copyright &#169; 2024 BiteQuest. All Rights Reserved.</p>
    </div>
 </div>  
 )
}

export default About