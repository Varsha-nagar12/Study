// import { useRef } from "react"
// import toast from "react-hot-toast"
// import { useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { setData } from "./reduxConfig/userSlice"
export default function Login()

{
//     const navigate = useNavigate()
//    const dispatch = useDispatch()
//     const mailRef= useRef()
//     const passRef = useRef()

//    const login = (event)=>
//    {
//     event.preventDefault();
//     const data = {
//         email : mailRef.current.value ,
//         password : passRef.current.value

//     }

 
//     fetch("http://82.112.231.166:7979/store/login",{
//         method : 'POST',
//         headers : {
//          'Content-Type' : 'application/json'
//         },
//         body : JSON.stringify(data)
//     }).then(res=>res.json()).then(result=>
//     {
//         console.log(result)
//         if(result.status)
//         {
//         event.target.reset()
//          toast.success(result.msg)
//          dispatch(setData(result.data));
//          navigate(`/$(result.data.role)/home`)
//         }else{
//          toast.error(result.msg)
//         }
//        })
//    }

   return <>
   
   <section className="contact_section  long_section" style={{ background: "linear-gradient(135deg, #f3e7e9, #e3eeff)" }} >
   <div className="container">
     <div className="row">
       <div className="col-md-6 col-lg-6">
         <div className="form_container">
           <div className="heading_container">
             <h2> Login Now </h2>
           </div>
           <form >
            
               <input type="email" placeholder="Email" />
             
               <input type="password"  placeholder="Password"/>
             
             <div className="btn_box">
               <button> Login </button>
             </div>
           </form>
         </div>
       </div>
       <div className="col-md-6">
         <img src="../images/l1.png" style={{height:"50%",paddingLeft:"200px"}} />
       </div>
     </div>
   </div>
 </section>
 
   </>
}