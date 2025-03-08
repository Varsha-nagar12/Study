

export default function Books() {
  return (
    <section className="furniture_section layout_padding" style={{ background: "linear-gradient(135deg, #f3e7e9, #e3eeff)" }}>
      <div className="container">
        <div className="heading_container text-center">
          <h2>Our Books Feature</h2>
          <p>"Every book is a new adventure—start yours today!"</p>
        </div>
        <div className="row">
          {booksData.map((book, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="box text-center shadow p-3 mb-5 bg-white rounded">
                <div className="img-box">
                  <img src={book.img} alt={book.name} className="img-fluid rounded" style={{ height: "250px", objectFit: "cover" }} />
                </div>
                <div className="detail-box mt-3">
                  <h5>{book.name}</h5>
                  <div className="price_box d-flex justify-content-between align-items-center">
                    <h6 className="price_heading text-danger fw-bold">
                      <span>Rs.</span> {book.price}.00
                    </h6>
                    <button className="btn btn-dark rounded-pill px-3">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const booksData = [
  { img: "images/gita.jpg", name: "The Gita - (Hindu Philosophy)", price: 250 },
  { img: "images/power.jpeg", name: "The Power of Now - Eckhart Tolle", price: 300 },
  { img: "images/mindfilnes.jpeg", name: "Mindfulness Book", price: 250 },
  { img: "images/7habitats.webp", name: "The 7 Habits of Highly Effective People - Stephen R. Covey", price: 299 },
  { img: "images/Think.webp", name: "Think and Grow Rich – Napoleon Hill", price: 249 },
  { img: "images/mindset.png", name: "Mindset: The New Psychology of Success - Carol S. Dweck", price: 149 },
  { img: "images/dad.jpeg", name: "Rich Dad Poor Dad - Robert Kiyosaki", price: 349 },
  { img: "images/money.jpeg", name: "The Psychology of Money - Morgan Housel", price: 179 },
  { img: "images/Intelligent.jpeg", name: "The Intelligent Investor - Benjamin Graham", price: 309 }
];














































