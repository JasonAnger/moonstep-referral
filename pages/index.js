import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import LeaderboardCard from './components/leaderboardCard'
import Top3Leaders from './components/top3Leaders'
import Week from './components/week'
import ReactPaginate from 'react-paginate'

export async function getStaticProps(context) {
  let result = await fetch('https://api-dev.moonstep.app/api/v1/referrals/report?week=1&page=0&size=500')
  //https://api-dev.moonstep.app/api/v1/referrals/report?week=1&page=0&size=500&user=Moonstep
  const {referrals} = await result.json()
  console.log(referrals)
  return {
    props: {
      total: referrals.totalPages,
      content: referrals.content.concat(referrals.content)
    }, // will be passed to the page component as props
  }
}

export default function Home({total, content =  [
  {
    name: 'Mario',
    avatar:
      'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg',
    walletAddress:
      'd7ef0a04f3c8055644677299a9414a75adcb15916eb48417416c9317ace2ff4f',
    joinedDate: '2022-06-11T12:44:31.871Z',
    totalAcceptedReferrals: 1000,
  },
  {
    name: 'Mario',
    avatar:
      'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg',
    walletAddress:
      'd7ef0a04f3c8055644677299a9414a75adcb15916eb48417416c9317ace2ff4f',
    joinedDate: '2022-06-11T12:44:31.871Z',
    totalAcceptedReferrals: 1000,
  },
  {
    name: 'Mario',
    avatar:
      'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg',
    walletAddress:
      'd7ef0a04f3c8055644677299a9414a75adcb15916eb48417416c9317ace2ff4f',
    joinedDate: '2022-06-11T12:44:31.871Z',
    totalAcceptedReferrals: 1000,
  },
  {
    name: 'Mario',
    avatar:
      'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg',
    walletAddress:
      'd7ef0a04f3c8055644677299a9414a75adcb15916eb48417416c9317ace2ff4f',
    joinedDate: '2022-06-11T12:44:31.871Z',
    totalAcceptedReferrals: 1000,
  },
  {
    name: 'Mario',
    avatar:
      'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg',
    walletAddress:
      'd7ef0a04f3c8055644677299a9414a75adcb15916eb48417416c9317ace2ff4f',
    joinedDate: '2022-06-11T12:44:31.871Z',
    totalAcceptedReferrals: 1000,
  },
  {
    name: 'Mario',
    avatar:
      'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg',
    walletAddress:
      'd7ef0a04f3c8055644677299a9414a75adcb15916eb48417416c9317ace2ff4f',
    joinedDate: '2022-06-11T12:44:31.871Z',
    totalAcceptedReferrals: 1000,
  },
  {
    name: 'Mario',
    avatar:
      'https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg',
    walletAddress:
      'd7ef0a04f3c8055644677299a9414a75adcb15916eb48417416c9317ace2ff4f',
    joinedDate: '2022-06-11T12:44:31.871Z',
    totalAcceptedReferrals: 1000,
  },
]}) {
  const [usedList, setUsedList] = useState(content)
  function getWeekOfYear() {
    const now = new Date()
    const start = new Date(now.getFullYear(), 0, 0)
    const diff = now - start
    const oneDay = 1000 * 60 * 60 * 24
    const day = Math.floor(diff / oneDay)
    return Math.floor(day / 7)
  }
  let handlePageClick = () => {

  }
  const [activeWeek, setActiveWeek] = useState(0)
  const weekNow = getWeekOfYear()
  const yearNow = new Date().getFullYear()
  return (
    <>
      <Header />
      <div>
        <Head>
          <title>Moon Step - From Health to Wealth!</title>
          <meta
            name="description"
            content="Moon Step is a move to earn application built on BNB Chain, a combination of GameFi and SocialFi elements to promote fitness activities..."
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://moonstep.app/"></link>
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Moon Step - From Health to Wealth!"
          />
          <meta
            property="og:description"
            content="Moon Step is a move to earn application built on BNB Chain, a combination of GameFi and SocialFi elements to promote fitness activities..."
          />
          <meta property="og:url" content="https://moonstep.app/" />
          <meta property="og:site_name" content="Moon Step" />
          <meta
            property="article:modified_time"
            content="2022-06-06T04:32:17+00:00"
          />
          <meta
            property="og:image"
            content="https://moonstep.app/ajuroalu/2021/10/SMT-Banner.jpg"
          />
          <meta property="og:image:width" content="1600" />
          <meta property="og:image:height" content="700" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:label1" content="Est. reading time" />
          <meta name="twitter:data1" content="15 minutes" />
        </Head>
        <main className="container mx-auto max-w-5xl">
          <h1 className="text-center font-bold text-3xl sm:text-5xl mx-auto my-5">
            Leaderboard
          </h1>
          <Top3Leaders list={usedList.slice(0, 3)} />
          <div className="week-container">
            {[0, 1, 2, 3].map((item) => (
              <Week
                onClickFunction={setActiveWeek}
                key={weekNow - item}
                page={item}
                week={
                  weekNow - item < 1 ? 52 + (weekNow - item) : weekNow - item
                }
                isActive={item === activeWeek}
                year={weekNow - item < 1 ? yearNow : yearNow - 1}
              />
            ))}
          </div>
          <div className="leaderboard-list flex justify-center items-center flex-col pb-5">
            {usedList.map((item, index) => (
              <LeaderboardCard
                key={item.walletAddress}
                name={item.name}
                rank={index + 1}
                avatar={item.avatar}
                address={item.walletAddress}
                joinDate={item.joinedDate}
                total={item.totalAcceptedReferrals}
              />
            ))}
          </div>
          <ReactPaginate
            className='pagination flex items-center pb-8 font-bold'
            breakLabel="..."
            previousClassName='mt-0 ml-0 mb-0 mr-auto'
            nextClassName='mt-0 ml-auto mb-0 mr-0'
            pageClassName='mx-3'
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={20}
            initialPage={1}
            previousLabel="< Previous"
            renderOnZeroPageCount={null}
          />
        </main>
      </div>
      <Footer />
    </>
  )
}
