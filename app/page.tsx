'use client'

import Link from 'next/link'
import PostLink from '@/app/blog/PostList'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import photos from "@/app/photos"

export default function Home() {

  const postData=[
    {id:1,slug:"json",title:"nextjs"},
    {id:1,slug:"jack",title:"react"},
    {id:1,slug:"jon",title:"nodejs"},
  ]

  const router = useRouter()

  return (
    <>
    {/* <h1 className={'text-3xl text-red-300'}>Hello, Home Page</h1><br /><br /> */}
    {/* <Link href={"/dashboard/settings"}>Dashboard</Link><br /> */}
      {/* <PostLink posts={postData}/> */}
    <br />
    <button className={'text-2xl'} type={"button"} onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
      <br />
      {/* <h1 className={'text-3xl text-red-400'}>MarketingOption:</h1>
      <button className={'text-2xl'} type={"button"} onClick={() => router.push('/about')}>
      Marketing@142
    </button><br />
    <button className={'text-2xl'} type={"button"} onClick={() => router.push('/blog')}>
      Marketing@blog
    </button><br /><br />
    <h1 className={'text-3xl text-red-400'}>ShopOption:</h1>
    <button className={'text-2xl'} type={"button"} onClick={() => router.push('/account')}>
      Shopaccount
    </button> */}
    <main className='container mx-auto'>
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 auto-rows-max gap-6 m-10">
            {photos.map(({id, imageSrc}) => (
                <Link key={id} href={`/photos/${id}`}>
                    <Image 
                        alt=""
                        src={imageSrc}
                        height={150}
                        width={150}
                        className='odject-cover aspect-spuare rounded-full'
                    />
                </Link>
            ))}
        </div>
    </main>
    </>
  )
}
