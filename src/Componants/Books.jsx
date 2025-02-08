export default function Books()
{
    return <>
       <section className="furniture_section layout_padding" style={{ background: "linear-gradient(135deg, #f3e7e9, #e3eeff)" }}>
    <div className="container">
      <div className="heading_container">
        <h2> Our Books feature's </h2>
        <p>
        📚 "Every book is a new adventure—start yours today!"

        </p>
      </div>
      {/* <h3>Spiritual & Mindfulness Books</h3> */}
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="images/gita.jpg" alt=""/>
            </div>
            <div className="detail-box">
              <h5> The Bhagavad Gita - (Hindu Philosophy) </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>Rs.</span> 250.00
                </h6>
                <a href="">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="images/power.jpeg" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
              The Power of Now - Eckhart Tolle
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>Rs.</span> 300.00
                </h6>
                <a href="">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="images/mindfilnes.jpeg" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
              Mindfulness Book
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>Rs.</span> 250.00
                </h6>
                <a href="">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <h3> Self-Improvement & Motivation </h3> */}

        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="images/7habitats.webp" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
              The 7 Habits of Highly Effective People - Stephen R. Covey 
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>Rs</span> 299.00
                </h6>
                <a href="">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="images/Think.webp" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
              Think and Grow Rich – Napoleon Hill
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>Rs.</span> 249.00
                </h6>
                <a href="">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="images/mindset.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
              Mindset: The New Psychology of Success - Carol S. Dweck
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>Rs.</span> 149.00
                </h6>
                <a href="">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <h3> Financial Literacy & Wealth Creation </h3> */}

        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="images/dad.jpeg" alt=""/>
            </div>
            <div className="detail-box">
              <h5> Rich Dad Poor Dad - Robert Kiyosaki </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>Rs.</span> 349.00
                </h6>
                <a href="">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="images/money.jpeg" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
              The Psychology of Money - Morgan Housel
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>Rs.</span> 179.00
                </h6>
                <a href="">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
       <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="images/Intelligent.jpeg" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
              The Intelligent Investor - Benjamin Graham
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>Rs.</span> 309.00
                </h6>
                <a href="">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
}


// // chatgpt 
// export default function Books() {
//   const categories = [
//     {
//       title: "📖 Spiritual & Mindfulness",
//       color: "#008080", // Teal
//       books: [
//         { img: "images/gita.jpg", name: "The Bhagavad Gita", price: 250 },
//         { img: "images/power.jpeg", name: "The Power of Now", price: 300 },
//         { img: "images/mindfilnes.jpeg", name: "Mindfulness Book", price: 250 }
//       ]
//     },
//     {
//       title: "🚀 Self-Improvement & Motivation",
//       color: "#FF5733", // Vibrant Orange
//       books: [
//         { img: "images/7habitats.webp", name: "7 Habits of Highly Effective People", price: 299 },
//         { img: "images/Think.webp", name: "Think and Grow Rich", price: 249 },
//         { img: "images/mindset.png", name: "Mindset: The New Psychology of Success", price: 149 }
//       ]
//     },
//     {
//       title: "💰 Financial Literacy & Wealth",
//       color: "#2E86C1", // Deep Blue
//       books: [
//         { img: "images/dad.jpeg", name: "Rich Dad Poor Dad", price: 349 },
//         { img: "images/money.jpeg", name: "The Psychology of Money", price: 179 },
//         { img: "images/Intelligent.jpeg", name: "The Intelligent Investor", price: 309 }
//       ]
//     }
//   ];

//   return (
//     <section className="books_section py-5" style={{ background: "#f9f9f9" }}>
//       <div className="container">
//         <div className="text-center mb-5">
//           <h2 className="fw-bold text-uppercase" style={{ fontSize: "2.5rem", color: "#333" }}>
//             📚 Explore Our Collection
//           </h2>
//           <p className="text-muted lead">Handpicked books to inspire, educate, and transform your life.</p>
//         </div>

//         {categories.map((category, index) => (
//           <div key={index} className="mb-5">
//             <h3 className="fw-bold text-center mb-4" style={{ color: category.color }}>
//               {category.title}
//             </h3>
//             <div className="row g-4">
//               {category.books.map((book, idx) => (
//                 <div key={idx} className="col-md-6 col-lg-4">
//                   <div className="card border-0 shadow-sm p-3 bg-white rounded text-center">
//                     <div className="position-relative overflow-hidden rounded" style={{ height: "300px" }}>
//                       <img
//                         src={book.img}
//                         alt={book.name}
//                         className="img-fluid w-100 h-100"
//                         style={{ objectFit: "cover", transition: "transform 0.3s ease-in-out" }}
//                         onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
//                         onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//                       />
//                     </div>
//                     <div className="card-body">
//                       <h5 className="fw-bold text-dark">{book.name}</h5>
//                       <p className="text-danger fw-semibold">Rs. {book.price}.00</p>
//                       <a href="#" className="btn btn-dark rounded-pill px-4 py-2 fw-semibold">
//                         Buy Now
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
