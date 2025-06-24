import React from "react";
import { useUser } from "@clerk/clerk-react";

const AboutMe = () => {
  const { user } = useUser();

  if (!user) return null;

  const fullName = user.fullName || "User";
  const email = user.primaryEmailAddress?.emailAddress || "No email";
  const imageUrl = user.imageUrl || "https://placehold.co/200x200";

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] mt-20 px-4">
      <div className="w-80 h-96 rounded-xl bg-zinc-900 text-white shadow-lg overflow-hidden backdrop-blur-md p-6 flex flex-col items-center justify-center text-center">
        <img
          src={imageUrl}
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full shadow-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-1">{fullName}</h2>
        <p className="text-sm text-pink-400 font-medium mb-2">{email}</p>
        <p className="text-sm text-gray-400 px-4">
          Welcome to your profile! This section can be personalized.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
