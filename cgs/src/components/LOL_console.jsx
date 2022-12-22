import React, { useEffect, useState } from 'react';
import { app } from '../configs/firebase'
import { getDatabase, ref, onValue, set } from "firebase/database";

function LOL_console() {
  const [red, setRed] = useState({ name: "", score: "" });
  const [blue, setBlue] = useState({ name: "", score: "" });
  const db = getDatabase(app);
  const teamRefs = ref(db, 'lol/scoreBoard');
  const [clearArr] = useState(["없음","없음","없음","없음"]);

  const callAPI = async () => {
    onValue(teamRefs, (snapshot) => {
      const data = snapshot.val();
      setBlue(data.blueTeam)
      setRed(data.redTeam)
    });
  }
  const updateAPI = (select, datas) => {
    set(ref(db, `/lol/scoreBoard/${select}`), datas).then(() => { console.log("ok") });
  }
  const dragonsUpdata = (select,index,value)=>{
    set(ref(db,`/lol/dragons/${select}/${index}`),value).then(()=>{console.log("ok")})
  }
  const resetAllDragons = ()=>{
    set(ref(db,"/lol/dragons"),{red:clearArr,blue:clearArr})
  }
  useEffect(() => {
    callAPI()
  }, [])

  return (
    <div className='consoles'>
      <div className="blueConsole">
        <div className="nameScore">
          <div><input type="text" defaultValue={blue.name} onChange={(e) => { setBlue({ ...blue, name: e.target.value }) }} /></div>
          <div><input type="text" defaultValue={blue.score} onChange={(e) => { setBlue({ ...blue, score: e.target.value }) }} /></div>
          <div><button onClick={() => { updateAPI("blueTeam", blue) }}>저장</button></div>
        </div>
        <div className="dragonsPannels">
          <div className='B_D'>
            <h3>블루 1번 드래곤</h3>
            <div>
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",0,e.target.value)}} defaultValue={"화염"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",0,e.target.value)}} defaultValue={"대지"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",0,e.target.value)}} defaultValue={"바람"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",0,e.target.value)}} defaultValue={"바다"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",0,e.target.value)}} defaultValue={"마공"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",0,e.target.value)}} defaultValue={"화공"} />
            </div>
          </div>
          <div className='B_D'>
            <h3>블루 2번 드래곤</h3>
            <div>
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",1,e.target.value)}} defaultValue={"화염"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",1,e.target.value)}} defaultValue={"대지"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",1,e.target.value)}} defaultValue={"바람"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",1,e.target.value)}} defaultValue={"바다"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",1,e.target.value)}} defaultValue={"마공"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",1,e.target.value)}} defaultValue={"화공"} />
            </div>
          </div>
          <div className='B_D'>
            <h3>블루 3번 드래곤</h3>
            <div>
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",2,e.target.value)}} defaultValue={"화염"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",2,e.target.value)}} defaultValue={"대지"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",2,e.target.value)}} defaultValue={"바람"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",2,e.target.value)}} defaultValue={"바다"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",2,e.target.value)}} defaultValue={"마공"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",2,e.target.value)}} defaultValue={"화공"} />
            </div>
          </div>
          <div className='B_D'>
            <h3>블루 4번 드래곤</h3>
            <div>
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",3,e.target.value)}} defaultValue={"화염"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",3,e.target.value)}} defaultValue={"대지"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",3,e.target.value)}} defaultValue={"바람"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",3,e.target.value)}} defaultValue={"바다"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",3,e.target.value)}} defaultValue={"마공"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("blue",3,e.target.value)}} defaultValue={"화공"} />
            </div>
          </div>
        </div>
        <div style={{width:"100%"}}>
          <button style={{width:"100%",height:"50px"}} onClick={resetAllDragons}>드래곤 리셋</button>
        </div>
      </div>
      <div className="redConsole">
        <div className="nameScore">
          <div><input type="text" defaultValue={red.name} onChange={(e) => { setRed({ ...red, name: e.target.value }) }} /></div>
          <div><input type="text" defaultValue={red.score} onChange={(e) => { setRed({ ...red, score: e.target.value }) }} /></div>
          <div><button onClick={() => { updateAPI("redTeam", red) }}>저장</button></div>
        </div>
        <div className="dragonsPannels">
          <div className='R_D'>
            <h3>레드 1번 드래곤</h3>
            <div>
              <input type="button" onClick={(e)=>{dragonsUpdata("red",0,e.target.value)}} defaultValue={"화염"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",0,e.target.value)}} defaultValue={"대지"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",0,e.target.value)}} defaultValue={"바람"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",0,e.target.value)}} defaultValue={"바다"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",0,e.target.value)}} defaultValue={"마공"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",0,e.target.value)}} defaultValue={"화공"} />
            </div>
          </div>
          <div className='R_D'>
            <h3>레드 2번 드래곤</h3>
            <div>
              <input type="button" onClick={(e)=>{dragonsUpdata("red",1,e.target.value)}} defaultValue={"화염"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",1,e.target.value)}} defaultValue={"대지"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",1,e.target.value)}} defaultValue={"바람"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",1,e.target.value)}} defaultValue={"바다"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",1,e.target.value)}} defaultValue={"마공"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",1,e.target.value)}} defaultValue={"화공"} />
            </div>
          </div>
          <div className='R_D'>
            <h3>레드 3번 드래곤</h3>
            <div>
              <input type="button" onClick={(e)=>{dragonsUpdata("red",2,e.target.value)}} defaultValue={"화염"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",2,e.target.value)}} defaultValue={"대지"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",2,e.target.value)}} defaultValue={"바람"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",2,e.target.value)}} defaultValue={"바다"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",2,e.target.value)}} defaultValue={"마공"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",2,e.target.value)}} defaultValue={"화공"} />
            </div>
          </div>
          <div className='R_D'>
            <h3>레드 4번 드래곤</h3>
            <div>
              <input type="button" onClick={(e)=>{dragonsUpdata("red",3,e.target.value)}} defaultValue={"화염"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",3,e.target.value)}} defaultValue={"대지"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",3,e.target.value)}} defaultValue={"바람"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",3,e.target.value)}} defaultValue={"바다"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",3,e.target.value)}} defaultValue={"마공"} />
              <input type="button" onClick={(e)=>{dragonsUpdata("red",3,e.target.value)}} defaultValue={"화공"} />
            </div>
          </div>
        </div>
        <div style={{width:"100%"}}>
          <button style={{width:"100%",height:"50px"}} onClick={resetAllDragons}>드래곤 리셋</button>
        </div>
      </div>
    </div>
  )
}

export default LOL_console