import "./App.css";
import "./index.css";
import { MdOutlineExpandMore } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const images = import.meta.glob("./assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});
function App() {
  return (
    <>
      {/* SIGN UP AND LOGIN PAGE */}
      <div className=" bg-black flex justify-center items-center p-2 text-xs gap-1 text-gray-400">
        <p>Sign up and get 20% off to your first order.</p>
        <a href="#" className="underline underline-offset-2">
          Sign Up Now
        </a>
      </div>

      <nav className="flex items-center shadow shadow-gray-400 h-17 justify-around">
        <div className="text-xl font-black">SHOP.CO</div>
        <ul className="flex justify-center items-center gap-7">
          <li>
            <a href="" className="flex justify-center items-center">
              Shop <MdOutlineExpandMore />
            </a>
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Bands</li>
        </ul>
        <div className="flex justify-center items-center border border-gray-700 rounded-full  w-150 p-2 bg-[#F0F0F0]">
          <IoIosSearch />
          <input
            className="outline-none flex-1 bg-transparent"
            type="text"
            placeholder=" Search for Products..."
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href="#">
            <FaShoppingCart />
          </a>

          <a href="#">
            <CgProfile />
          </a>
        </div>
      </nav>
      {/* HERO SECTION */}
      <section
        className="flex justify-center items-start flex-col bg-mauve-100 gap-7 pl-15 bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${images["./assets/Rectangle 2.png"]})`,
        }}
      >
        <div className="font-black leading-7 text-[40px]">
          <h1>FIND CLOTHES</h1>
          <br />
          <h1>THAT MATCHES</h1>
          <br />
          <h1>YOUR STYLE</h1>
        </div>
        <div className="text-[15px] font-[50] text-gray-600">
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed <br />
            to bring out your individually and cater sense of style.
          </p>
        </div>
        <a href="">
          <button className="py-2 px-7 bg-black text-gray-200 rounded-full">
            Shop Now
          </button>
        </a>

        <div>
          <img src={images["./assets/Frame 57.png"]} alt="" />
        </div>
      </section>
      <div>
        <ul className="flex justify-around bg-black text-gray-100 py-7 [&_a]:font-black [&_a]:text-xl">
          <li>
            <a href="">
              {" "}
              <img src={images["./assets/Group.png"]} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <img src={images["./assets/zara-logo-1 1.png"]} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <img src={images["./assets/gucci-logo-1 1.png"]} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <img src={images["./assets/prada-logo-1 1.png"]} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <img src={images["./assets/Group (1).png"]} alt="" />
            </a>
          </li>
        </ul>
      </div>
      {/* PRODUCT-LIST PAGE */}

      <section className="flex flex-col items-center h-auto">
        <div className="text-2xl font-black mt-7">
          <h1>NEW ARRIVALS</h1>
        </div>

        <div className="flex gap-5 [&_h1]:font-bold mt-7 leading-7">
          <div>
            <a href="">
              <img src={images["./assets/Frame 32.png"]} alt="" />
            </a>
            <h1 className="mt-4">Tshirt with Tape Deatils</h1>
            <img src={images["./assets/Frame 35.png"]} alt="" />
            <h1>$120</h1>
          </div>
          <div>
            <a href="">
              <img src={images["./assets/Frame 33.png"]} alt="" />
            </a>
            <h1 className="mt-4">Skinny Fit Jeans</h1>
            <img src={images["./assets/Frame 39.png"]} alt="" />
            <img src={images["./assets/Frame 59.png"]} alt="" />
          </div>
          <div>
            <a href="">
              <img src={images["./assets/Frame 34.png"]} alt="" />
            </a>
            <h1 className="mt-4">Checkered Shirt</h1>
            <img src={images["./assets/Frame 40.png"]} alt="" />
            <h1>$180</h1>
          </div>
          <div>
            <a href="">
              <img src={images["./assets/Frame 38.png"]} alt="" />
            </a>
            <h1 className="mt-4">Sleeve Striped T-Shirt</h1>
            <img src={images["./assets/Frame 41.png"]} alt="" />
            <img src={images["./assets/Frame 44.png"]} alt="" />
          </div>
        </div>
        <a
          href=""
          className="px-7 py-1 rounded-full bg-white-500 border border-gray-400 mt-7"
        >
          <button>View All</button>
        </a>
        <hr className="w-full h-[1px] border-0 bg-black mt-15" />
      </section>

      {/* ADD TO CART */}
      
      <section className="h-190">
        <div className="flex justify-start px-14 py-5">
          <a href="">
            <img src={images["./assets/Frame 9.png"]} alt="" />
          </a>
        </div >
        <div className="flex gap-5 justify-start px-14">
          <div className="flex flex-col gap-4">
            <a href="">
              <img src={images["./assets/image 2.png"]} alt="" />
            </a>
            <a href="">
              <img src={images["./assets/image 5.png"]} alt="" />
            </a>
            <a href="">
              <img src={images["./assets/image 6.png"]} alt="" />
            </a>
          </div>
          <div>
            <img src={images["./assets/image 1.png"]} alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="uppercase font-black text-4xl">One Life Graphic T-shirt</h1>
            
            <a href=""><img src={images["./assets/Frame 35.png"]} alt="" /></a>
            <h1 className="flex items-center gap-4">$260 <span className="line-through">$300</span> <span className="text-red-700 rounded-full bg-red-100 py-1 px-1.5">-40%</span></h1>

            <p>
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and <br /> breathable fabric, it offers superior
              comfort and style.
            </p>
            <hr className="bg-[#000000]" />
            <h1>Select Colors</h1>
             <a href=""><img src={images["./assets/Frame 77.png"]} alt="" /></a>
            <hr className="bg-[#000000]" />
            <h1>Choose Size</h1>
            <div className="flex gap-4 [&_a]:px-5 [&_a]:py-1.5 [&_a]:rounded-full [&_a]:bg-[#F0EEED]">
              <a href="">
                <button>Small</button>
              </a>
              <a href="">
                <button>Medium</button>
              </a>
              <a href="" className="!bg-[#000000] text-white" >
                <button>Large</button>
              </a>
              <a href="">
                <button>X-Large</button>
              </a>
            </div>

            <hr className="bg-[#000000]" />
          <div className="flex gap-5">

            <span className="bg-[#F0EEED] rounded-full py-1 px-14 flex justify-center items-center">
              - 1 +
            </span>
              <a href="" className="bg-[#000000] rounded-full py-1.5 px-29 text-[#FFFFFF]" >
                <button>Add to Cart</button>
              </a>
          </div>
          </div>

        </div>
      </section>
    </>
  );
}


export default App;
