import "../Projects.css";

function App() {

  return (
    <>
      <h2 className="text-2xl ml-6 my-3">Form Validation</h2>
      <form className="w-[80%] lg:w-[60%] border mx-auto p-5 flex flex-col gap-2 rounded-md">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name here"
            pattern="^[A-Za-z\s\-]+$"
            className="border p-1 rounded-md"
            required
          />
          <p>Name must only contain alphabets</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            className="border p-1 rounded-md"
            required
          />
          <p>Email must be according to given format</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Phone No</label>
          <input
            type="tel"
            name="phone"
            pattern="^\+?\d{10,15}$"
            className="border p-1 rounded-md"
            placeholder="+92XXXXXXXXXX"
            required
          />
          <p>Number must be according to given format</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border p-1 rounded-md"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            required
          />
          <p>Password must be 8 character long</p>
        </div>
        <input
          type="submit"
          value="Submit"
          className="w-[100%] bg-sky-500 py-1 font-bold text-white rounded-md mt-2 cursor-pointer"
        />
      </form>
    </>
  );
}

export default App;
