"use client";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-12">
      <div>
        <h1>SF.</h1>
      </div>
      <div className="flex justify-around gap-6">
        <div className="flex justify-around gap-6">
          <h3>Pools</h3>
          <h3>Activity</h3>
        </div>
        <div>
          <w3m-button />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
