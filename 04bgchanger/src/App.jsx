
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap 
        justify-center bottom-12 insert-x-0 px-2">
        <div className="fixed flex flex-wrap 
        justify-center shadow-lg bh-white py-2 px-3 rounded-xl" 
        >
          <button onclick={()=>setColor("red")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>red</button>
           <button onclick={()=>setColor("red")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
            <button onclick={()=>setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
