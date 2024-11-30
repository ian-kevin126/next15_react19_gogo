import Link from "next/link";
import Image from "next/image";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/26459103/pexels-photo-26459103.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/26459103/pexels-photo-26459103.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/26459103/pexels-photo-26459103.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
