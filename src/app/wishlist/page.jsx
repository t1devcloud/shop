import Placecs from "@/components/explore/Placecs";
import Footer from "@/components/shared/Footer";

export default function index() {
  return (
    <main className="explore wishlist">
      {/* page-title */}
      <div className="page-title">
        <h3 className="main-title">My Wishlist</h3>
      </div>
      <Placecs/>
      <Footer/>
    </main>
  )
}
