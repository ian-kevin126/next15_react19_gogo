import Image from "next/image";
import Link from "next/link";

const UserMediaCard = async ({ userId }: { userId: any }) => {
  // const postsWithMedia = await prisma.post.findMany({
  //   where: {
  //     userId: user.id,
  //     img: {
  //       not: null

  //     }
  //   },
  //   take: 8,
  //   orderBy: {
  //     createdAt: 'desc'
  //   }
  // })

  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Mídias Pessoais</span>
        <Link href="/" className="text-blue-500 text-xs">
          Ver mais
        </Link>
      </div>
      <div className="flex gap-4 justify-between flex-wrap">
        {/* {postsWithMedia.length ? (
          postsWithMedia.map((post) => (
            <div className="relative w-1/5 h-24" key={post.id}>
              <Image
                src={post.img!}
                alt=""
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))
        ) : (
          <span className="text-gray-500">Sem midias</span>
        )} */}
      </div>
    </div>
  );
};

export default UserMediaCard;
