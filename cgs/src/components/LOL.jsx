import React, { useEffect, useState } from 'react';
import { app } from '../configs/firebase'
import { dragonsURL } from '../configs/dragons'
import { getDatabase, ref, onValue } from "firebase/database";

function LOL() {
   const [red, setRed] = useState({ name: "", score: 0 });
   const [blue, setBlue] = useState({ name: "", score: 0 });
   const [redDragons, setRedDragons] = useState(["없음","없음","없음","없음"]);
   const [blueDragons, setBlueDragons] = useState(["없음","없음","없음","없음"]);
   const db = getDatabase(app);
   const teamRefs = ref(db, 'lol/scoreBoard');
   const dragonsRef = ref(db, 'lol/dragons');
   const callAPI = async () => {
      onValue(teamRefs, (snapshot) => {
         const data = snapshot.val();
         setBlue(data.blueTeam)
         setRed(data.redTeam)
      });
      onValue(dragonsRef,(snapshot)=>{
         const dDatas = snapshot.val();
         setBlueDragons(dDatas.blue);
         setRedDragons(dDatas.red);
      })
   }

   useEffect(() => {
      callAPI()
   }, [])

   return (
      <div className='lol_uis'>
         <div className="top">
            <div className="team blue">
               <span className="scores">{blue.score}</span>
               <span className="teamName">{blue.name}</span>
            </div>
            <div className="team red">
               <span className="teamName">{red.name}</span>
               <span className="scores">{red.score}</span>
            </div>
         </div>
         <div className="dragons">
            <div className={`dragon blueD`}>
               <div><span style={{ backgroundImage: `url(${dragonsURL[blueDragons[0]]})` }}></span></div>
               <div><span style={{ backgroundImage: `url(${dragonsURL[blueDragons[1]]})` }}></span></div>
               <div><span style={{ backgroundImage: `url(${dragonsURL[blueDragons[2]]})` }}></span></div>
               <div><span style={{ backgroundImage: `url(${dragonsURL[blueDragons[3]]})` }}></span></div>
            </div>
            <div className={`dragon redD`}>
               <div><span style={{ backgroundImage: `url(${dragonsURL[redDragons[0]]})` }}></span></div>
               <div><span style={{ backgroundImage: `url(${dragonsURL[redDragons[1]]})` }}></span></div>
               <div><span style={{ backgroundImage: `url(${dragonsURL[redDragons[2]]})` }}></span></div>
               <div><span style={{ backgroundImage: `url(${dragonsURL[redDragons[3]]})` }}></span></div>
            </div>
         </div>
         <div className="bottom">
            <div className="bannners"></div>
         </div>
      </div>
   )
}

export default LOL