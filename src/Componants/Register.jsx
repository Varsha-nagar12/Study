export default function Register()
{
    return <>
    
    <section className="contact_section  long_section" style={{ background: "linear-gradient(135deg, #f3e7e9, #e3eeff)" }} >
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-12">
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