import react,{useState} from 'react'


const App = (props) =>{
  
  return(
      <>
        <div className="cards">
     <div className="card">
       <img src={props.imgsrc} alt="mypic" className="card_img"/>
       <div className="cards_info">
         <span className="cards_category"> {props.title}</span>
         <h3 className="cards_title">{props.sname}</h3>
         <a href={props.links} target="_blank">
           <button className="btn">Watch Now</button>
         </a>

       </div>
     </div>
   </div>
      
    
  



      </>
  )
}
export default App