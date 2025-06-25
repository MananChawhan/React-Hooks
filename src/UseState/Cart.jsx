import React from "react";
import Navbar from './NavbarForUseState';
import Card from "./Card";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5fce8] px-6 py-10 text-[#2d3a1f]">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          🛒 Hostel Cart Summary
        </h1>

        <div className="flex flex-wrap justify-center items-start gap-6">
          <Card
            imageurl="https://avatars.githubusercontent.com/u/121217947?v=4"
            StudentName="Manan Chawhan"
            StudentAge="21"
            hostelName="Stanza Living"
            spendings="60000"
          />
          <Card
            imageurl="https://avatars.githubusercontent.com/u/213727177?v=4"
            StudentName="Nakshatra Bapat"
            StudentAge="22"
            hostelName="Stanza Living"
            spendings="10000"
          />
          <Card
            imageurl="https://avatars.githubusercontent.com/u/103848489?v=4"
            StudentName="Amit Yadav"
            StudentAge="24"
            hostelName="Azad Bhavan"
            spendings="40000"
          />
          <Card
            imageurl="https://avatars.githubusercontent.com/u/111278270?v=4"
            StudentName="Harsh Singh"
            StudentAge="21"
            hostelName="Taigore Bhavan"
            spendings="50000"
          />
          <Card
            imageurl="https://avatars.githubusercontent.com/u/119554829?v=4"
            StudentName="Adesh Pandey"
            StudentAge="22"
            hostelName="Azad Bhavan"
            spendings="2000"
          />
          <Card
            imageurl="https://avatars.githubusercontent.com/u/185872032?v=4"
            StudentName="Ankita Dhakad"
            StudentAge="21"
            hostelName="Taigore C"
            spendings="25000"
          />
          <Card
            imageurl="https://avatars.githubusercontent.com/u/214207346?v=4"
            StudentName="Nikesh Raj"
            StudentAge="22"
            hostelName="Milkha Bhavan"
            spendings="40000"
          />
          <Card
            imageurl="https://cdn.pixabay.com/photo/2024/04/26/09/11/picture-8721442_1280.jpg"
            StudentName="Ajay Jayaswal"
            StudentAge="22"
            hostelName="Kalam Bhavan"
            spendings="10000"
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
