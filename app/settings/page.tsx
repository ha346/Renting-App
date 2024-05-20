"use client";

import Confetti from "react-confetti";
import Image from "next/image";
import Button from "../components/Button";
import { useMediaQuery } from "react-responsive";

const PaymentSuccessModal = () => {
  const isMobile = useMediaQuery({ maxWidth: 750 });

  const submitHandler = () => {
    window.location.href = "https://property-booking.vercel.app";
  };

  return (
    <>
      <Confetti
        width={isMobile ? 375 : 1500}
        height={isMobile ? 280 : 660}
        recycle={false}
        numberOfPieces={500}
        tweenDuration={10000}
      />
      <div className="flex flex-col gap-y-4 lg:gap-y-8 max-w-lg mx-auto text-center items-center justify-center h-full">
        <Image
          src="/finish.svg"
          alt="Finish"
          className="hidden lg:block"
          height={100}
          width={100}
        />
        <Image
          src="/finish.svg"
          alt="Finish"
          className="block lg:hidden"
          height={50}
          width={50}
        />

        <div className="sm:flex sm:items-start mt-5">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg
              className="h-6 w-6 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <div className=" mt-16 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h1 className="text-xl leading-6 font-medium text-gray-900">
              Payment Successful!
            </h1>
            <div className="mt-2">
              <p className="text-base text-gray-500">
                Your payment has been successfully processed. Thank you for your
                booking!
              </p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <Button label="Return to Home Page" onClick={submitHandler} />
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessModal;

{
  /* <div className="sm:flex sm:items-start">
<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
  <svg
    className="h-6 w-6 text-green-600"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
</div>
<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
  <h3 className="text-lg leading-6 font-medium text-gray-900">
    Payment Successful!
  </h3>
  <div className="mt-2">
    <p className="text-sm text-gray-500">
      Your payment has been successfully processed. Thank you
      for your purchase!
    </p>
  </div>
</div>
</div> */
}
