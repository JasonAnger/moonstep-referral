import Image from "next/image";

export default function LeaderboardCard({
  name,
  rank,
  address,
  joinDate,
  avatar,
  total,
}) {
  const avatarSize = 60
  let rankComponent = <>{rank}</>
  switch(rank) {
    case 1: {
      break;
    }
    case 2: {
      break;
    }
    case 3: {
      break;
    }
    default: break;
  }
  return <div className={rank<=3?`leaderboard-card top-${rank}`:"leaderboard-card"}>
    <div className="w-9 flex justify-center items-center font-bold text-3xl">
        {rankComponent}
    </div>
    <div className="avatar flex mx-3 min-w-fit w-20">
      <Image className="rounded-full" src={avatar} alt={address+" avatar"} height={avatarSize} width={avatarSize}/>
    </div>
    <div className="w-full">
        <div className="name font-bold text-xl">{name}</div>
        <div className="address font-normal text-md text-gray-500 hover:text-gray-600 cursor-pointer opacity-80">
          <span className="hidden lg:inline">{address.slice(0,20)+"..."+address.slice(-20)}</span>
          <span className="hidden sm:inline lg:hidden text-sm sm:text-normal">{address.slice(0,15)+"..."+address.slice(-15)}</span>
          <span className="inline sm:hidden lg:hidden text-sm sm:text-normal">{address.slice(0,8)+"..."+address.slice(-8)}</span>
        </div>
    </div>
    <div className="flex flex-col justify-center items-center">
        <div className="referral font-normal text-sm opacity-80">Referral</div>
        <div className="font-bold text-2xl">{total}</div>
    </div>
  </div>
}
