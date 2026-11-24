import "./App.css";
import "./index.css";
import { MdOutlineExpandMore } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";

const images = import.meta.glob("./assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});

function App() {
  return (
    <>
      {/* SIGN UP AND LOGIN PAGE */}
      <div className="bg-black flex flex-wrap justify-center items-center p-2 text-xs sm:text-sm gap-1 text-gray-400 text-center">
        <p>Sign up and get 20% off to your first order.</p>
        <a href="#" className="underline underline-offset-2">
          Sign Up Now
        </a>
      </div>

      {/* NAVBAR */}
      <nav className="flex flex-col lg:flex-row items-center justify-between gap-4 px-4 md:px-8 py-4 shadow shadow-gray-400">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <div className="text-2xl font-black">SHOP.CO</div>

          <div className="flex lg:hidden items-center gap-4">
            <a href="#">
              <FaShoppingCart size={20} />
            </a>
            <a href="#">
              <CgProfile size={22} />
            </a>
          </div>
        </div>

        <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-7 text-sm md:text-base">
          <li>
            <a href="" className="flex justify-center items-center">
              Shop <MdOutlineExpandMore />
            </a>
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>

        <div className="flex justify-center items-center border border-gray-700 rounded-full w-full lg:max-w-md xl:max-w-xl p-2 bg-[#F0F0F0]">
          <IoIosSearch />
          <input
            className="outline-none flex-1 min-w-0 bg-transparent"
            type="text"
            placeholder="Search for Products..."
          />
        </div>

        <div className="hidden lg:flex justify-center items-center gap-4">
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
        className="flex justify-center items-start flex-col
        gap-5 sm:gap-7
        px-5 sm:px-8 md:px-12 lg:px-15
        py-12 md:py-16
        min-h-[500px] md:min-h-[600px]
        bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: `url(${images["./assets/Rectangle 2.png"]})`,
        }}
      >
        <div className="font-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-5xl">
          <h1>FIND CLOTHES</h1>
          <h1>THAT MATCHES</h1>
          <h1>YOUR STYLE</h1>
        </div>

        <div className="text-sm sm:text-base text-gray-600 max-w-xl">
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
        </div>

        <a href="">
          <button className="py-2 px-7 bg-black text-gray-200 rounded-full">
            Shop Now
          </button>
        </a>

        <div className="w-full max-w-[400px]">
          <img
            src={images["./assets/Frame 57.png"]}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* BRAND SECTION */}
      <div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center items-center gap-6 sm:gap-8 bg-black text-gray-100 px-4 py-7">
          <li>
            <a href="">
              <img
                src={images["./assets/Group.png"]}
                alt=""
                className="max-w-[110px] sm:max-w-[130px] max-h-10 object-contain"
              />
            </a>
          </li>

          <li>
            <a href="">
              <img
                src={images["./assets/zara-logo-1 1.png"]}
                alt=""
                className="max-w-[110px] sm:max-w-[130px] max-h-10 object-contain"
              />
            </a>
          </li>

          <li>
            <a href="">
              <img
                src={images["./assets/gucci-logo-1 1.png"]}
                alt=""
                className="max-w-[110px] sm:max-w-[130px] max-h-10 object-contain"
              />
            </a>
          </li>

          <li>
            <a href="">
              <img
                src={images["./assets/prada-logo-1 1.png"]}
                alt=""
                className="max-w-[110px] sm:max-w-[130px] max-h-10 object-contain"
              />
            </a>
          </li>

          <li>
            <a href="">
              <img
                src={images["./assets/Group (1).png"]}
                alt=""
                className="max-w-[110px] sm:max-w-[130px] max-h-10 object-contain"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* PRODUCT-LIST PAGE */}
      <section className="flex flex-col items-center h-auto px-4 sm:px-6 md:px-10 py-8">
        <div className="text-2xl sm:text-3xl font-black mt-2">
          <h1>NEW ARRIVALS</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mt-7 leading-7 w-full max-w-7xl [&_h1]:font-bold">
          <div className="min-w-0">
            <a href="">
              <img
                src={images["./assets/Frame 32.png"]}
                alt=""
                className="w-full aspect-square object-cover rounded-xl"
              />
            </a>
            <h1 className="mt-4 text-sm sm:text-base">
              Tshirt with Tape Details
            </h1>
            <img
              src={images["./assets/Frame 35.png"]}
              alt=""
              className="max-w-full"
            />
            <h1>$120</h1>
          </div>

          <div className="min-w-0">
            <a href="">
              <img
                src={images["./assets/Frame 33.png"]}
                alt=""
                className="w-full aspect-square object-cover rounded-xl"
              />
            </a>
            <h1 className="mt-4 text-sm sm:text-base">Skinny Fit Jeans</h1>
            <img
              src={images["./assets/Frame 39.png"]}
              alt=""
              className="max-w-full"
            />
            <img
              src={images["./assets/Frame 59.png"]}
              alt=""
              className="max-w-full"
            />
          </div>

          <div className="min-w-0">
            <a href="">
              <img
                src={images["./assets/Frame 34.png"]}
                alt=""
                className="w-full aspect-square object-cover rounded-xl"
              />
            </a>
            <h1 className="mt-4 text-sm sm:text-base">Checkered Shirt</h1>
            <img
              src={images["./assets/Frame 40.png"]}
              alt=""
              className="max-w-full"
            />
            <h1>$180</h1>
          </div>

          <div className="min-w-0">
            <a href="">
              <img
                src={images["./assets/Frame 38.png"]}
                alt=""
                className="w-full aspect-square object-cover rounded-xl"
              />
            </a>
            <h1 className="mt-4 text-sm sm:text-base">
              Sleeve Striped T-Shirt
            </h1>
            <img
              src={images["./assets/Frame 41.png"]}
              alt=""
              className="max-w-full"
            />
            <img
              src={images["./assets/Frame 44.png"]}
              alt=""
              className="max-w-full"
            />
          </div>
        </div>

        <a
          href=""
          className="px-7 py-2 rounded-full border border-gray-400 mt-7"
        >
          <button>View All</button>
        </a>

        <hr className="w-full h-[1px] border-0 bg-black mt-12" />
      </section>

      {/* ADD TO CART / PRODUCT DETAILS */}
      <section className="h-auto max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8">
        <nav className="w-full">
          <ul className="flex flex-wrap items-center gap-2 text-sm sm:text-base whitespace-nowrap pb-5">
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>

            <li>
              <IoIosArrowForward />
            </li>

            <li>
              <a href="/shop" className="hover:text-blue-500">
                Shop
              </a>
            </li>

            <li>
              <IoIosArrowForward />
            </li>

            <li>
              <a href="/men" className="hover:text-blue-500">
                Men
              </a>
            </li>

            <li>
              <IoIosArrowForward />
            </li>

            <li>
              <a href="/men/tshirts" className="hover:text-blue-500">
                Tshirts
              </a>
            </li>
            <li>
              {" "}
              <IoIosArrowForward />
            </li>
          </ul>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* PRODUCT IMAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-4">
            <div className="flex flex-row sm:flex-col justify-center gap-3 order-2 sm:order-1">
              <a href="" className="w-20 sm:w-full">
                <img
                  src={images["./assets/image 2.png"]}
                  alt=""
                  className="w-full aspect-square object-cover rounded-xl"
                />
              </a>

              <a href="" className="w-20 sm:w-full">
                <img
                  src={images["./assets/image 5.png"]}
                  alt=""
                  className="w-full aspect-square object-cover rounded-xl"
                />
              </a>

              <a href="" className="w-20 sm:w-full">
                <img
                  src={images["./assets/image 6.png"]}
                  alt=""
                  className="w-full aspect-square object-cover rounded-xl"
                />
              </a>
            </div>

            <div className="order-1 sm:order-2 min-w-0">
              <img
                src={images["./assets/image 1.png"]}
                alt=""
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

          {/* PRODUCT INFORMATION */}
          <div className="flex flex-col gap-5 min-w-0">
            <h1 className="uppercase font-black text-2xl sm:text-3xl md:text-4xl">
              One Life Graphic T-shirt
            </h1>

            <a href="">
              <img
                src={images["./assets/Frame 35.png"]}
                alt=""
                className="max-w-full"
              />
            </a>

            <h1 className="flex flex-wrap items-center gap-3 text-xl sm:text-2xl font-bold">
              $260
              <span className="line-through text-gray-400">$300</span>
              <span className="text-red-700 rounded-full bg-red-100 py-1 px-2 text-sm">
                -40%
              </span>
            </h1>

            <p className="text-sm sm:text-base leading-7 text-gray-600">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>

            <hr className="bg-[#000000]" />

            <h1>Select Colors</h1>

            <a href="">
              <img
                src={images["./assets/Frame 77.png"]}
                alt=""
                className="max-w-full"
              />
            </a>

            <hr className="bg-[#000000]" />

            <h1>Choose Size</h1>

            <div className="flex flex-wrap gap-2 sm:gap-4 [&_a]:px-4 sm:[&_a]:px-5 [&_a]:py-2 [&_a]:rounded-full [&_a]:bg-[#F0EEED] [&_a]:text-sm sm:[&_a]:text-base">
              <a href="">
                <button>Small</button>
              </a>

              <a href="">
                <button>Medium</button>
              </a>

              <a href="" className="!bg-[#000000] text-white">
                <button>Large</button>
              </a>

              <a href="">
                <button>X-Large</button>
              </a>
            </div>

            <hr className="bg-[#000000]" />

            {/* ADD TO CART */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-5">
              <span className="bg-[#F0EEED] rounded-full py-2 px-6 sm:px-10 flex justify-center items-center gap-4">
                - 1 +
              </span>

              <a
                href=""
                className="bg-[#000000] rounded-full py-2 px-5 sm:px-8 text-[#FFFFFF] flex-1 text-center"
              >
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
