import Image from 'next/image'

export default function Top3Leaders({ list = [{},{},{}] }) {
  const avatarSize = 90
  return (
    <div className="top-3-leaders flex mx-auto justify-center">
      <div className="flex flex-col justify-end items-center">
        <div>
          <Image
            className="rounded-full"
            src={'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg'}
            alt={list[1].address + ' avatar'}
            height={avatarSize}
            width={avatarSize}
          />
        </div>
        <div className="name font-bold text-xl mx-auto">{list[1].name}</div>
        <div className="w-20 sm:w-32 overflow-hidden">
          <div
            className="gradient-box w-20 sm:w-32 h-8"
            style={{
              transform:
                'perspective(6px) rotateX(10deg) rotateY(0deg) scaleX(0.68)',
            }}
          ></div>
        </div>
        <div className="gradient-box w-20 sm:w-32 h-16">2</div>
      </div>
      <div className="flex flex-col justify-end items-center">
        <div>
          <Image
            className="rounded-full"
            src={'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg'}
            alt={list[0].address + ' avatar'}
            height={avatarSize}
            width={avatarSize}
          />
        </div>
        <div className="name font-bold text-xl mx-auto">{list[0].name}</div>
        <div className="w-20 sm:w-32 overflow-hidden">
          <div
            className="gradient-box top-1 w-20 sm:w-32 h-8"
            style={{
              transform:
                'perspective(6px) rotateX(10deg) rotateY(0deg) scaleX(0.68)',
            }}
          ></div>
        </div>
        <div className="gradient-box top-1 w-20 sm:w-32 h-24">1</div>
      </div>
      <div className="flex flex-col justify-end items-center">
        <div>
          <Image
            className="rounded-full"
            src={'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg'}
            alt={list[2].address + ' avatar'}
            height={avatarSize}
            width={avatarSize}
          />
        </div>
        <div className="name font-bold text-xl mx-auto">{list[2].name}</div>
        <div className="w-20 sm:w-32 overflow-hidden">
          <div
            className="gradient-box top-3 w-20 sm:w-32 h-8"
            style={{
              transform:
                'perspective(6px) rotateX(10deg) rotateY(0deg) scaleX(0.68)',
            }}
          ></div>
        </div>
        <div className="gradient-box top-3 w-20 sm:w-32 h-12">3</div>
      </div>
    </div>
  )
}
