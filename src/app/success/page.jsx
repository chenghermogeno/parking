export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-8 rounded-lg text-center">
        <div className="mb-4 text-green-500">
          <svg
            className="mx-auto h-12 w-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-8">
          Please check your email for reservation receipt
        </p>
        <a
          href="/bookings"
          className="inline-block text-blue-600 font-normal hover:underline"
        >
          View Parking Ticket
        </a>
      </div>
    </div>
  );
}
