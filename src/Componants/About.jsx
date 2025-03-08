export default function About()
{
    return <>
   <section className="about_section layout_padding long_section" style={{ background: "linear-gradient(135deg, #f3e7e9, #e3eeff)" }} >
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="img-box">
            <img src="images/book6.jpg" alt=""/>
          </div>
        </div>
        <div className="col-md-7">
          <div className="detail-box">
            <div className="heading_container">
              <h2>About Us</h2>
            </div>
            <p>
            Welcome to<span> <b> Shivay Book Store - </b></span> 
            your ultimate destination for literature lovers. 
            Whether you're a passionate reader , an aspiring writer , or just exploring , 
            our carefully curated collection has something for everyone . Dive into a universe of imagination ,
            knowledge , and endless possibilities.
            </p>
            <hr/>

          <p><span> <b> Shivay Book Store.com </b></span> is India's leading online platform which works towards making education available to all, 
              across the geographical and social boundaries.
              We make this possible by providing books to those who have the desire to read & learn.
              With the help of our team of highly energetic logistic partners, 
              today Shivay books has its reach in multiple Pincode across the country.
              We reach out for books from B3books Store and also for delivering them at reader's doorstep.
            </p>
            <br/><br/>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
}














// export default function About() {
//   return (
//     <>
//       <section className="about_section layout_padding long_section" style={{ background: "linear-gradient(135deg, #f3e7e9, #e3eeff)" }}>
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-5">
//               <div className="img-box shadow-lg rounded overflow-hidden">
//                 <img src="images/book6.jpg" alt="Book Collection" className="img-fluid rounded" style={{ transition: "transform 0.3s ease-in-out" }} 
//                 onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//                 onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")} />
//               </div>
//             </div>
//             <div className="col-md-7">
//               <div className="detail-box">
//                 <div className="heading_container">
//                   <h2 className="text-dark fw-bold" style={{ fontSize: "2.5rem", textTransform: "uppercase", letterSpacing: "1px" }}>
//                     Welcome to iBook Store
//                   </h2>
//                 </div>
//                 <p className="lead text-muted" style={{ fontStyle: "italic", color: "#555" }}>
//                   "A book is a dream that you hold in your hands." – Neil Gaiman
//                 </p>
//                 <p className="text-dark" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
//                   At <strong>iBook Store</strong>, we bring stories to life. Whether you're searching for knowledge, adventure, or inspiration, our carefully curated collection has something for every reader. Explore the magic of books and embark on a literary journey like never before.
//                 </p>
//                 <a href="#" className="btn btn-dark mt-3 shadow" style={{ padding: "10px 25px", fontSize: "1.1rem", borderRadius: "30px", transition: "0.3s ease-in-out" }} 
//                 onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#333")}
//                 onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#000")}>
//                   Discover More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
