'use client'

import { useRouter } from 'next/navigation'

export default function Page() {

    const router = useRouter()
    return (
    <>
    <br />
     <button type={"button"} onClick={() => router.push('/dashboard/settings')}>
      Dashboardsettings
    </button><br />
    <h1 className={"text-4xl text-orange-400"}>Hello, dashboard Page</h1>
    </>
    )
}